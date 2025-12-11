let selectedFoods = [];
let nutritionScore = 0;
let debrisCleaned = 0;
let totalDebris = 0;
const gameContainer = document.getElementById("gameContainer");
const gameTitle = document.querySelector(".game-title");
const scoreDisplay = document.getElementById("scoreDisplay");
const feedButton = document.getElementById("feedButton");
const childCharacter = document.getElementById("childCharacter");
const childFace = document.getElementById("childFace");
const childMouth = document.getElementById("childMouth");
const interactiveMouth = document.getElementById("interactiveMouth");
const feedingPhase = document.getElementById("feedingPhase");
const brushingInfo = document.getElementById("brushingInfo");
const completePhase = document.getElementById("completePhase");
const foodSelectionContainer = document.getElementById("foodSelection");
const cleanCountDisplay = document.getElementById("cleanCount");
const totalDebrisDisplay = document.getElementById("totalDebrisCount");
const toothbrush = document.getElementById("toothbrushLarge");
const customAlertOverlay = document.getElementById("customAlertOverlay");
const runnerPhase = document.getElementById("runnerPhase");
const runnerGameArea = document.getElementById("runnerGameArea");
const playerRunner = document.getElementById("player-runner");
const runnerScoreDisplay = document.getElementById("runnerScore");
const exerciseTransitionPhase = document.getElementById(
  "exerciseTransitionPhase"
); // Elemen baru
let runnerScore = 0;
let gameLoopInterval = null;
let obstacleInterval = null;

function showCustomAlert(title, message, type) {
  document.getElementById("customAlertTitle").textContent = title;
  document.getElementById("customAlertMessage").textContent = message;
  document.getElementById("customAlertTitle").style.color =
    type === "warning" ? "var(--primary-red)" : "var(--primary-green)";
  customAlertOverlay.classList.add("visible");
}
function closeCustomAlert() {
  customAlertOverlay.classList.remove("visible");
}
const allFoods = [
  { emoji: "🍎", name: "Apel", type: "healthy", nutrition: 5 },
  { emoji: "🥕", name: "Wortel", type: "healthy", nutrition: 4 },
  { emoji: "🥦", name: "Brokoli", type: "healthy", nutrition: 5 },
  { emoji: "🐟", name: "Ikan", type: "healthy", nutrition: 6 },
  { emoji: "🥛", name: "Susu", type: "healthy", nutrition: 4 },
  { emoji: "🍌", name: "Pisang", type: "healthy", nutrition: 4 },
  { emoji: "🥬", name: "Bayam", type: "healthy", nutrition: 5 },
  { emoji: "🍊", name: "Jeruk", type: "healthy", nutrition: 4 },
  { emoji: "🥚", name: "Telur", type: "healthy", nutrition: 5 },
  { emoji: "🍇", name: "Anggur", type: "healthy", nutrition: 3 },
  { emoji: "🍭", name: "Permen", type: "unhealthy", nutrition: -3 },
  {
    emoji: "🍟",
    name: "Kentang Goreng",
    type: "unhealthy",
    nutrition: -2,
  },
  { emoji: "🥤", name: "Soda", type: "unhealthy", nutrition: -4 },
  { emoji: "🍩", name: "Donat", type: "unhealthy", nutrition: -3 },
  { emoji: "🍪", name: "Kue", type: "unhealthy", nutrition: -2 },
  { emoji: "🍫", name: "Coklat", type: "unhealthy", nutrition: -2 },
];
const nutritionMessages = {
  Permen: "Permen punya banyak gula yang bisa merusak gigi.",
  Keripik: "Keripik terlalu asin dan berminyak.",
  Soda: "Soda sangat manis dan bisa merusak gigi dengan cepat!",
  Donat: "Donat mengandung banyak gula dan lemak.",
  Apel: "Apel kaya serat dan vitamin C, bagus untuk pencernaan.",
  Wortel: "Wortel mengandung Vitamin A yang membuat mata sehat.",
  Brokoli: "Brokoli itu sayuran super! Penuh vitamin untuk tulang kuat.",
  Ikan: "Ikan mengandung Omega-3 yang penting untuk otak.",
  Susu: "Susu kaya kalsium untuk membuat tulang dan gigi kuat.",
};

function selectFood(element) {
  const foodName = element.dataset.food;
  if (element.classList.toggle("selected")) {
    selectedFoods.push(foodName);
    const type = element.classList.contains("healthy") ? "healthy" : "warning";
    const title = type === "healthy" ? `✅ Pilihan Sehat!` : `⚠️ Hati-hati!`;
    const baseMessage =
      nutritionMessages[element.dataset.realName] ||
      (type === "healthy"
        ? "Makanan ini bergizi!"
        : "Makanan ini kurang sehat.");

    showCustomAlert(title, baseMessage, type);
  } else {
    selectedFoods = selectedFoods.filter((f) => f !== foodName);
  }
  feedButton.disabled = selectedFoods.length === 0;
}
function feedChild() {
  if (selectedFoods.length === 0) return;
  let totalNutrition = 0;
  document.querySelectorAll(".food-item.selected").forEach((item) => {
    totalNutrition += parseInt(item.dataset.nutrition);
  });
  nutritionScore += totalNutrition;
  updateScore();
  childMouth.classList.add("eating");
  childCharacter.classList.add("bounce");
  setTimeout(() => {
    childMouth.classList.remove("eating");
    childMouth.classList.add("happy");
    childCharacter.classList.remove("bounce");
  }, 1000);
  const msgType = totalNutrition > 0 ? "success" : "warning";
  const msgText =
    totalNutrition > 0
      ? `Yum! Anak mendapat +${totalNutrition} poin nutrisi! 😊`
      : `Oh tidak! Makanan tidak sehat mengurangi ${Math.abs(
          totalNutrition
        )} poin nutrisi. 😟`;
  showMessage("feedingMessage", msgText, msgType);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  setTimeout(startBrushingPhase, 2500);
}
function startBrushingPhase() {
  feedingPhase.classList.add("fade-out");
  scoreDisplay.classList.add("fade-out");
  gameTitle.classList.add("fade-out");
  document.body.classList.add("zooming");
  document.body.style.overflowY = "hidden";
  const scaleFactor = Math.min(
    (window.innerWidth * 0.9) / childFace.offsetWidth,
    (window.innerHeight * 0.7) / childFace.offsetHeight
  );
  childFace.style.setProperty("--scale-factor", scaleFactor);
  childFace.classList.add("fixed-center");
  setTimeout(() => {
    childMouth.classList.add("hidden");
    interactiveMouth.classList.remove("hidden");
    brushingInfo.classList.remove("hidden");
    brushingInfo.classList.add("visible");
    toothbrush.style.display = "block";
    setupBrushing();
  }, 800);
}
function setupBrushing() {
  debrisCleaned = 0;
  totalDebris = 0;
  const teeth = interactiveMouth.querySelectorAll(".tooth-large");
  teeth.forEach((tooth) => {
    tooth.innerHTML = "";
    tooth.className = "tooth-large dirty-state";
    const debrisCount = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < debrisCount; i++) {
      const debris = document.createElement("div");
      debris.className = "food-debris";
      debris.style.top = `${15 + Math.random() * 50}%`;
      debris.style.left = `${15 + Math.random() * 50}%`;
      tooth.appendChild(debris);
      totalDebris++;
    }
  });
  totalDebrisDisplay.textContent = totalDebris;
  updateCleanCount();
}
function updateCleanCount() {
  cleanCountDisplay.textContent = debrisCleaned;
}

// --- PERUBAHAN ALUR GAME ---
function completeBrushingPhase() {
  brushingInfo.classList.remove("visible");
  toothbrush.style.display = "none";
  childFace.classList.remove("fixed-center");
  document.body.classList.remove("zooming");
  setTimeout(() => {
    interactiveMouth.classList.add("hidden");
    childMouth.classList.remove("hidden");

    // Sembunyikan karakter utama dan tampilkan panel transisi
    childCharacter.classList.add("hidden");
    exerciseTransitionPhase.classList.remove("hidden");
  }, 800);
}

function restartGame() {
  selectedFoods = [];
  nutritionScore = 0;
  updateScore();
  generateRandomFoods();
  childMouth.className = "mouth";
  childFace.classList.remove("fixed-center");
  document.body.classList.remove("zooming");
  document.body.style.overflowY = "scroll";
  childCharacter.classList.remove("hidden"); // Tampilkan lagi karakter
  scoreDisplay.classList.remove("fade-out");
  gameTitle.classList.remove("fade-out");
  feedingPhase.classList.remove("fade-out");
  completePhase.classList.add("hidden");
  runnerPhase.classList.add("hidden");
  exerciseTransitionPhase.classList.add("hidden"); // Sembunyikan panel transisi
  brushingInfo.classList.remove("visible");
  brushingInfo.classList.add("hidden");
  document.getElementById("feedingMessage").innerHTML = "";
  feedButton.disabled = true;
}

function updateScore() {
  scoreDisplay.textContent = `Skor Nutrisi: ${nutritionScore}`;
}
function showMessage(elementId, message, type) {
  document.getElementById(
    elementId
  ).innerHTML = `<div class="message ${type}" style="position: fixed; width: 700px; top: 50%; left:50%; transform: translate(-50%, 50%); background-color: white; z-index:999;">${message}</div>`;
}
function generateRandomFoods() {
  foodSelectionContainer.innerHTML = "";
  const healthy = allFoods
    .filter((f) => f.type === "healthy")
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
  const unhealthy = allFoods
    .filter((f) => f.type === "unhealthy")
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  [...healthy, ...unhealthy]
    .sort(() => 0.5 - Math.random())
    .forEach((food) => {
      const item = document.createElement("div");
      item.className = `food-item ${food.type}`;
      item.dataset.food = food.name.toLowerCase();
      item.dataset.realName = food.name;
      item.dataset.nutrition = food.nutrition;
      item.innerHTML = `${food.emoji}<br><small>${food.name}</small>`;
      item.addEventListener("click", () => selectFood(item));
      foodSelectionContainer.appendChild(item);
    });
}
function handleBrushMove(e) {
  e.preventDefault();
  const clientX = e.touches?.[0]?.clientX ?? e.clientX;
  const clientY = e.touches?.[0]?.clientY ?? e.clientY;
  toothbrush.style.left = `${clientX}px`;
  toothbrush.style.top = `${clientY}px`;
  const brushHead = toothbrush.querySelector(".brush-head");
  if (!brushHead) return;
  const brushRect = brushHead.getBoundingClientRect();
  interactiveMouth.querySelectorAll(".food-debris").forEach((debris) => {
    const debrisRect = debris.getBoundingClientRect();
    if (
      brushRect.left < debrisRect.right &&
      brushRect.right > debrisRect.left &&
      brushRect.top < debrisRect.bottom &&
      brushRect.bottom > debrisRect.top
    ) {
      cleanDebris(debris);
    }
  });
}
function cleanDebris(debris) {
  if (debris.classList.contains("cleaned")) return;
  debris.classList.add("cleaned");
  debris.style.transform = "scale(0)";
  debris.style.opacity = "0";
  debrisCleaned++;
  updateCleanCount();
  nutritionScore++;
  updateScore();
  const parentTooth = debris.parentElement;
  if (
    parentTooth &&
    parentTooth.querySelectorAll(".food-debris:not(.cleaned)").length === 0
  ) {
    parentTooth.classList.remove("dirty-state");
    parentTooth.classList.add("clean-state");
  }
  if (debrisCleaned >= totalDebris && totalDebris > 0) {
    setTimeout(completeBrushingPhase, 1000);
  }
}

function jump() {
  if (!playerRunner.classList.contains("jump")) {
    playerRunner.classList.add("jump");
    playerRunner.addEventListener(
      "animationend",
      () => {
        playerRunner.classList.remove("jump");
      },
      { once: true }
    );
  }
}

function startRunnerPhase() {
  const gamePhase = document.querySelector(".game-phase");
  runnerPhase.classList.remove("hidden");
  runnerPhase.style.position = "fixed";
  runnerPhase.style.top = "50%";
  runnerPhase.style.left = "50%";
  runnerPhase.style.transform = "translate(-50%, -50%)";
  runnerPhase.style.width = "70%";
  runnerScore = 0;
  runnerScoreDisplay.textContent = 0;
  runnerGameArea.querySelectorAll(".obstacle").forEach((obs) => obs.remove());

  document.addEventListener("keydown", handleJumpKey);
  runnerGameArea.addEventListener("click", jump);

  gameLoopInterval = setInterval(() => {
    runnerScore++;
    runnerScoreDisplay.textContent = runnerScore;
    const playerRect = playerRunner.getBoundingClientRect();
    runnerGameArea.querySelectorAll(".obstacle").forEach((obstacle) => {
      const obstacleRect = obstacle.getBoundingClientRect();
      if (
        playerRect.right > obstacleRect.left &&
        playerRect.left < obstacleRect.right &&
        playerRect.bottom > obstacleRect.top
      ) {
        gameOverRunner();
      }
    });
  }, 50);

  function generateObstacle() {
    if (gameLoopInterval) {
      const obstacle = document.createElement("div");
      obstacle.classList.add("obstacle");
      runnerGameArea.appendChild(obstacle);
      obstacle.addEventListener(
        "animationend",
        () => {
          obstacle.remove();
        },
        { once: true }
      );
      const randomDelay = Math.random() * 1500 + 1000;
      obstacleInterval = setTimeout(generateObstacle, randomDelay);
    }
  }
  generateObstacle();
}

function handleJumpKey(e) {
  if (e.code === "Space") jump();
}

function gameOverRunner() {
  clearInterval(gameLoopInterval);
  clearTimeout(obstacleInterval);
  gameLoopInterval = null;
  document.removeEventListener("keydown", handleJumpKey);
  runnerGameArea.removeEventListener("click", jump);

  nutritionScore += Math.floor(runnerScore / 10);
  showFinalResults();
}

function showFinalResults() {
  runnerPhase.classList.add("hidden");
  completePhase.classList.remove("hidden");
  gameTitle.classList.remove("fade-out");

  let finalMessageText = "";
  if (nutritionScore >= 60)
    finalMessageText = `SEMPURNA! Skor: ${nutritionScore}. Gaya hidup sehatmu luar biasa! 🌟`;
  else if (nutritionScore >= 40)
    finalMessageText = `Hebat! Skor: ${nutritionScore}. Kamu sudah sehat dan aktif! 👍`;
  else
    finalMessageText = `Bagus! Skor: ${nutritionScore}. Terus jaga kesehatan dan berolahraga ya! 💪`;
  showMessage("finalMessage", finalMessageText, "success");
  const success = document.querySelector("div.message.success");
  success.style.top = "20%";
}

// --- EVENT LISTENER UNTUK TOMBOL BARU ---
document.getElementById("startRunnerButton").addEventListener("click", () => {
  exerciseTransitionPhase.classList.add("hidden");
  startRunnerPhase();
});

document.addEventListener("DOMContentLoaded", () => {
  generateRandomFoods();
  feedButton.disabled = true;
});
document.addEventListener("mousemove", handleBrushMove);
document.addEventListener("touchmove", handleBrushMove, {
  passive: false,
});
