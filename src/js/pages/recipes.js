// Edamam API Configuration
const EDAMAM_APP_ID = "4aec0d91";
const EDAMAM_APP_KEY = "123d3b431551cc9cd65dcb76242b50d7";
const EDAMAM_BASE_URL = "https://api.edamam.com/api/recipes/v2";

function getUserId() {
  let userId = localStorage.getItem("edamam_user_id");
  if (!userId) {
    userId =
      "user_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("edamam_user_id", userId);
  }
  return userId;
}

function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const RecipeManager = {
  async searchRecipes(query, diet = "", ageGroup = "") {
    const params = new URLSearchParams({
      type: "public",
      q: query,
      app_id: EDAMAM_APP_ID,
      app_key: EDAMAM_APP_KEY,
      from: 0,
      to: 20,
    });

    if (diet) params.append("health", diet);
    if (ageGroup === "baby") params.append("mealType", "breakfast");
    if (ageGroup === "toddler") params.append("mealType", "lunch");

    try {
      const response = await fetch(`${EDAMAM_BASE_URL}?${params}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Edamam-Account-User": getUserId(),
        },
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      return data.hits.map((hit) => hit.recipe);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      throw error;
    }
  },

  displayRecipes(recipes) {
    const grid = document.getElementById("recipesGrid");
    const emptyState = document.getElementById("emptyState");

    grid.innerHTML = "";

    if (!recipes || recipes.length === 0) {
      grid.style.display = "none";
      emptyState.style.display = "block";
      return;
    }

    grid.style.display = "grid";
    emptyState.style.display = "none";

    recipes.forEach((recipe, index) => {
      const card = this.createRecipeCard(recipe, index);
      grid.appendChild(card);
    });
  },

  createRecipeCard(recipe, index) {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.style.animationDelay = `${index * 0.1}s`;

    const calories = Math.round((recipe.calories || 0) / (recipe.yield || 1));
    const protein = Math.round(
      (recipe.totalNutrients?.PROCNT?.quantity || 0) / (recipe.yield || 1)
    );
    const time = recipe.totalTime || 0;

    const healthLabels = (recipe.healthLabels || [])
      .slice(0, 2)
      .map((label) => this.translateHealthLabel(label));

    card.innerHTML = `
      <div class="recipe-image">
        <img src="${recipe.image}" alt="${recipe.label}" loading="lazy"
             onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
        <div class="recipe-badges">
          ${healthLabels
            .map((label) => `<span class="badge green">${label}</span>`)
            .join("")}
        </div>
      </div>
      <div class="recipe-content">
        <h3>${recipe.label}</h3>
        <p class="recipe-source">
          <i class="fas fa-utensils"></i> ${recipe.source}
        </p>
        <div class="recipe-meta">
          <span>
            <i class="fas fa-fire"></i>
            <strong>${calories}</strong>
            kal
          </span>
          <span>
            <i class="fas fa-drumstick-bite"></i>
            <strong>${protein}g</strong>
            protein
          </span>
          <span>
            <i class="fas fa-users"></i>
            <strong>${recipe.yield}</strong>
            porsi
          </span>
        </div>
        <button class="btn-view">
          <i class="fas fa-eye"></i>
          Lihat Detail
        </button>
      </div>
    `;

    const btnView = card.querySelector(".btn-view");
    btnView.addEventListener("click", () => {
      this.openRecipeModal(recipe);
    });

    return card;
  },

  openRecipeModal(recipe) {
    const modal = document.getElementById("recipeModal");
    const detailDiv = document.getElementById("recipeDetail");

    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    const servings = recipe.yield || 1;
    const calories = Math.round((recipe.calories || 0) / servings);
    const protein = Math.round(
      (recipe.totalNutrients?.PROCNT?.quantity || 0) / servings
    );
    const carbs = Math.round(
      (recipe.totalNutrients?.CHOCDF?.quantity || 0) / servings
    );
    const fat = Math.round(
      (recipe.totalNutrients?.FAT?.quantity || 0) / servings
    );
    const fiber = Math.round(
      (recipe.totalNutrients?.FIBTG?.quantity || 0) / servings
    );

    detailDiv.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.label}">
      
      <h2>${recipe.label}</h2>
      
      <div class="recipe-info-grid">
        <div class="info-card">
          <i class="fas fa-utensils"></i>
          <strong>${recipe.source}</strong>
          <small>Sumber</small>
        </div>
        <div class="info-card">
          <i class="fas fa-users"></i>
          <strong>${servings}</strong>
          <small>Porsi</small>
        </div>
        ${
          recipe.totalTime > 0
            ? `
        <div class="info-card">
          <i class="fas fa-clock"></i>
          <strong>${recipe.totalTime}</strong>
          <small>Menit</small>
        </div>
        `
            : ""
        }
        <div class="info-card">
          <i class="fas fa-heart"></i>
          <strong>${recipe.healthScore || "N/A"}</strong>
          <small>Health Score</small>
        </div>
      </div>

      <div class="nutrition-summary">
        <div class="nutri-item">
          <strong>${calories}</strong>
          <small>Kalori</small>
        </div>
        <div class="nutri-item">
          <strong>${protein}g</strong>
          <small>Protein</small>
        </div>
        <div class="nutri-item">
          <strong>${carbs}g</strong>
          <small>Karbohidrat</small>
        </div>
        <div class="nutri-item">
          <strong>${fat}g</strong>
          <small>Lemak</small>
        </div>
        ${
          fiber > 0
            ? `
        <div class="nutri-item">
          <strong>${fiber}g</strong>
          <small>Serat</small>
        </div>
        `
            : ""
        }
      </div>

      <h3>🥘 Bahan-bahan</h3>
      <ul>
        ${recipe.ingredientLines.map((ing) => `<li>${ing}</li>`).join("")}
      </ul>

      ${
        recipe.healthLabels && recipe.healthLabels.length > 0
          ? `
      <h3>🏷️ Label Kesehatan</h3>
      <div class="health-labels">
        ${recipe.healthLabels
          .map(
            (label) => `
          <span class="health-label">
            ${this.translateHealthLabel(label)}
          </span>
        `
          )
          .join("")}
      </div>
      `
          : ""
      }

      <a href="${
        recipe.url
      }" target="_blank" rel="noopener noreferrer" class="btn-view-full">
        <i class="fas fa-external-link-alt"></i>
        Lihat Resep Lengkap
      </a>
    `;
  },

  translateHealthLabel(label) {
    const translations = {
      Vegan: "🌱 Vegan",
      Vegetarian: "🥗 Vegetarian",
      "Dairy-Free": "🥛 Bebas Susu",
      "Gluten-Free": "🌾 Bebas Gluten",
      "Egg-Free": "🥚 Bebas Telur",
      "Peanut-Free": "🥜 Bebas Kacang",
      "Tree-Nut-Free": "Bebas Kacang Pohon",
      "Sugar-Conscious": "🍬 Rendah Gula",
      "Low-Sugar": "Gula Rendah",
      "Alcohol-Free": "Bebas Alkohol",
    };
    return translations[label] || label;
  },
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  const dietFilter = document.getElementById("dietFilter");
  const ageFilter = document.getElementById("ageFilter");
  const loading = document.getElementById("loading");
  const modal = document.getElementById("recipeModal");
  const closeModal = document.getElementById("closeModal");

  // ============ AUTO SEARCH FROM URL PARAMETER ============
  const urlQuery = getURLParameter("q");
  if (urlQuery) {
    searchInput.value = decodeURIComponent(urlQuery);
    performSearch();
  }

  async function performSearch() {
    const query = searchInput.value.trim();
    if (!query) {
      alert("⚠️ Masukkan kata kunci pencarian");
      searchInput.focus();
      return;
    }

    loading.style.display = "block";
    document.getElementById("recipesGrid").style.display = "none";
    document.getElementById("emptyState").style.display = "none";

    try {
      const recipes = await RecipeManager.searchRecipes(
        query,
        dietFilter.value,
        ageFilter.value
      );
      RecipeManager.displayRecipes(recipes);
    } catch (error) {
      alert("❌ Gagal mencari resep. Silakan coba lagi.");
      console.error(error);
    } finally {
      loading.style.display = "none";
    }
  }

  // Search events
  searchBtn.addEventListener("click", performSearch);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
  });

  // Suggestion chips
  document.querySelectorAll(".suggestion-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      searchInput.value = chip.dataset.query;
      performSearch();
    });
  });

  // Modal close
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  document.querySelector(".modal-backdrop")?.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // ESC key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
