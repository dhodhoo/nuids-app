// WHO Growth Standards Data untuk Anak (0-18 tahun)
const growthStandards = {
  male: [
    {
      age: "0-1 bulan",
      weight: "3.3 - 4.5",
      height: "49 - 54",
      bmi: "13.0 - 15.5",
    },
    {
      age: "2-3 bulan",
      weight: "4.5 - 6.0",
      height: "54 - 60",
      bmi: "14.0 - 16.5",
    },
    {
      age: "4-6 bulan",
      weight: "6.0 - 8.0",
      height: "60 - 67",
      bmi: "15.0 - 17.5",
    },
    {
      age: "7-9 bulan",
      weight: "7.5 - 9.5",
      height: "67 - 72",
      bmi: "15.5 - 18.0",
    },
    {
      age: "10-12 bulan",
      weight: "8.5 - 10.5",
      height: "72 - 77",
      bmi: "16.0 - 18.5",
    },
    {
      age: "1 tahun",
      weight: "9.0 - 11.0",
      height: "75 - 80",
      bmi: "16.0 - 18.0",
    },
    {
      age: "2 tahun",
      weight: "11.0 - 14.0",
      height: "85 - 90",
      bmi: "15.5 - 17.5",
    },
    {
      age: "3 tahun",
      weight: "12.5 - 16.0",
      height: "92 - 99",
      bmi: "15.0 - 17.0",
    },
    {
      age: "4 tahun",
      weight: "14.0 - 18.5",
      height: "99 - 106",
      bmi: "14.5 - 17.0",
    },
    {
      age: "5 tahun",
      weight: "15.5 - 21.0",
      height: "106 - 113",
      bmi: "14.0 - 17.5",
    },
    {
      age: "6 tahun",
      weight: "17.0 - 24.0",
      height: "112 - 120",
      bmi: "14.0 - 17.5",
    },
    {
      age: "7 tahun",
      weight: "19.0 - 27.0",
      height: "118 - 127",
      bmi: "14.0 - 18.0",
    },
    {
      age: "8 tahun",
      weight: "21.0 - 31.0",
      height: "124 - 133",
      bmi: "14.0 - 18.5",
    },
    {
      age: "9 tahun",
      weight: "24.0 - 35.0",
      height: "130 - 139",
      bmi: "14.0 - 19.0",
    },
    {
      age: "10 tahun",
      weight: "27.0 - 40.0",
      height: "135 - 145",
      bmi: "14.5 - 19.5",
    },
    {
      age: "11 tahun",
      weight: "30.0 - 45.0",
      height: "140 - 151",
      bmi: "15.0 - 20.0",
    },
    {
      age: "12 tahun",
      weight: "34.0 - 50.0",
      height: "145 - 157",
      bmi: "15.5 - 20.5",
    },
    {
      age: "13 tahun",
      weight: "38.0 - 56.0",
      height: "151 - 164",
      bmi: "16.0 - 21.0",
    },
    {
      age: "14 tahun",
      weight: "43.0 - 62.0",
      height: "157 - 170",
      bmi: "16.5 - 21.5",
    },
    {
      age: "15 tahun",
      weight: "47.0 - 66.0",
      height: "163 - 175",
      bmi: "17.0 - 22.0",
    },
    {
      age: "16 tahun",
      weight: "51.0 - 70.0",
      height: "166 - 178",
      bmi: "17.5 - 22.5",
    },
    {
      age: "17 tahun",
      weight: "54.0 - 73.0",
      height: "168 - 180",
      bmi: "18.0 - 23.0",
    },
    {
      age: "18 tahun",
      weight: "56.0 - 75.0",
      height: "169 - 181",
      bmi: "18.5 - 23.5",
    },
  ],
  female: [
    {
      age: "0-1 bulan",
      weight: "3.2 - 4.2",
      height: "48 - 53",
      bmi: "13.0 - 15.5",
    },
    {
      age: "2-3 bulan",
      weight: "4.2 - 5.5",
      height: "53 - 59",
      bmi: "14.0 - 16.5",
    },
    {
      age: "4-6 bulan",
      weight: "5.5 - 7.5",
      height: "59 - 66",
      bmi: "15.0 - 17.5",
    },
    {
      age: "7-9 bulan",
      weight: "7.0 - 9.0",
      height: "66 - 71",
      bmi: "15.5 - 18.0",
    },
    {
      age: "10-12 bulan",
      weight: "8.0 - 10.0",
      height: "71 - 76",
      bmi: "16.0 - 18.5",
    },
    {
      age: "1 tahun",
      weight: "8.5 - 10.5",
      height: "74 - 79",
      bmi: "16.0 - 18.0",
    },
    {
      age: "2 tahun",
      weight: "10.5 - 13.5",
      height: "84 - 89",
      bmi: "15.5 - 17.5",
    },
    {
      age: "3 tahun",
      weight: "12.0 - 15.5",
      height: "91 - 98",
      bmi: "15.0 - 17.0",
    },
    {
      age: "4 tahun",
      weight: "13.5 - 18.0",
      height: "98 - 105",
      bmi: "14.5 - 17.0",
    },
    {
      age: "5 tahun",
      weight: "15.0 - 20.5",
      height: "105 - 112",
      bmi: "14.0 - 17.5",
    },
    {
      age: "6 tahun",
      weight: "16.5 - 23.5",
      height: "111 - 119",
      bmi: "14.0 - 17.5",
    },
    {
      age: "7 tahun",
      weight: "18.5 - 27.0",
      height: "117 - 126",
      bmi: "14.0 - 18.0",
    },
    {
      age: "8 tahun",
      weight: "20.5 - 31.0",
      height: "123 - 132",
      bmi: "14.0 - 18.5",
    },
    {
      age: "9 tahun",
      weight: "23.0 - 35.5",
      height: "128 - 138",
      bmi: "14.0 - 19.0",
    },
    {
      age: "10 tahun",
      weight: "26.0 - 40.5",
      height: "133 - 144",
      bmi: "14.5 - 19.5",
    },
    {
      age: "11 tahun",
      weight: "29.5 - 46.0",
      height: "139 - 150",
      bmi: "15.0 - 20.0",
    },
    {
      age: "12 tahun",
      weight: "33.0 - 51.0",
      height: "145 - 156",
      bmi: "15.5 - 20.5",
    },
    {
      age: "13 tahun",
      weight: "37.0 - 55.0",
      height: "150 - 161",
      bmi: "16.0 - 21.0",
    },
    {
      age: "14 tahun",
      weight: "40.0 - 58.0",
      height: "154 - 164",
      bmi: "16.5 - 21.5",
    },
    {
      age: "15 tahun",
      weight: "43.0 - 60.0",
      height: "156 - 166",
      bmi: "17.0 - 22.0",
    },
    {
      age: "16 tahun",
      weight: "45.0 - 62.0",
      height: "157 - 167",
      bmi: "17.5 - 22.5",
    },
    {
      age: "17 tahun",
      weight: "46.0 - 63.0",
      height: "158 - 168",
      bmi: "18.0 - 23.0",
    },
    {
      age: "18 tahun",
      weight: "47.0 - 64.0",
      height: "158 - 168",
      bmi: "18.5 - 23.5",
    },
  ],
};

// BMI Calculator Logic
const BMICalculator = {
  calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(1);
  },

  getBMICategory(bmi, age) {
    // BMI categories for children (simplified WHO standards)
    if (age < 2) {
      if (bmi < 14) return { status: "underweight", label: "Kurus" };
      if (bmi < 17) return { status: "normal", label: "Normal" };
      if (bmi < 18.5) return { status: "overweight", label: "Gemuk" };
      return { status: "obese", label: "Obesitas" };
    } else if (age < 5) {
      if (bmi < 14) return { status: "underweight", label: "Kurus" };
      if (bmi < 17) return { status: "normal", label: "Normal" };
      if (bmi < 18) return { status: "overweight", label: "Gemuk" };
      return { status: "obese", label: "Obesitas" };
    } else if (age < 18) {
      if (bmi < 14.5) return { status: "underweight", label: "Kurus" };
      if (bmi < 22) return { status: "normal", label: "Normal" };
      if (bmi < 27) return { status: "overweight", label: "Gemuk" };
      return { status: "obese", label: "Obesitas" };
    } else {
      if (bmi < 18.5) return { status: "underweight", label: "Kurus" };
      if (bmi < 25) return { status: "normal", label: "Normal" };
      if (bmi < 30) return { status: "overweight", label: "Gemuk" };
      return { status: "obese", label: "Obesitas" };
    }
  },

  getDescription(status) {
    const descriptions = {
      underweight:
        "Berat badan anak Anda berada di bawah normal untuk usianya. Hal ini bisa mengindikasikan kurangnya asupan nutrisi atau masalah kesehatan lain.",
      normal:
        "Selamat! Berat badan anak Anda berada dalam kisaran normal dan sehat untuk usianya. Pertahankan pola makan seimbang dan aktivitas fisik yang cukup.",
      overweight:
        "Berat badan anak Anda berada sedikit di atas normal. Perhatikan pola makan dan tingkatkan aktivitas fisik untuk mencegah obesitas.",
      obese:
        "Berat badan anak Anda berada jauh di atas normal. Konsultasikan dengan dokter anak untuk program penurunan berat badan yang sehat dan aman.",
    };
    return descriptions[status];
  },

  getRecommendations(status) {
    const recommendations = {
      underweight: [
        "Tingkatkan asupan kalori dengan makanan bergizi tinggi",
        "Berikan makanan dengan protein tinggi seperti telur, ikan, dan daging",
        "Tambahkan cemilan sehat di antara waktu makan utama",
        "Konsultasikan dengan ahli gizi untuk menu makanan yang tepat",
        "Periksa ke dokter untuk memastikan tidak ada masalah kesehatan",
      ],
      normal: [
        "Pertahankan pola makan seimbang dengan 4 sehat 5 sempurna",
        "Pastikan anak mendapat cukup protein, karbohidrat, dan lemak sehat",
        "Ajak anak untuk tetap aktif bergerak minimal 1 jam per hari",
        "Batasi konsumsi makanan cepat saji dan minuman manis",
        "Rutin kontrol tumbuh kembang anak setiap bulan",
      ],
      overweight: [
        "Kurangi porsi makan secara bertahap, jangan drastis",
        "Perbanyak konsumsi sayur dan buah-buahan",
        "Batasi makanan tinggi gula dan lemak jenuh",
        "Tingkatkan aktivitas fisik anak, ajak bermain aktif",
        "Konsultasikan dengan dokter atau ahli gizi anak",
      ],
      obese: [
        "Segera konsultasikan dengan dokter anak dan ahli gizi",
        "Buat program penurunan berat badan yang sehat dan terukur",
        "Kurangi makanan tinggi kalori, gula, dan lemak",
        "Tingkatkan aktivitas fisik secara bertahap dan konsisten",
        "Libatkan seluruh keluarga untuk mendukung perubahan gaya hidup",
      ],
    };
    return recommendations[status];
  },
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bmiForm");
  const resultSection = document.getElementById("resultSection");

  // Load tables
  loadGrowthTables();

  // Table gender toggle
  setupTableToggle();

  // Form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    calculateAndDisplayBMI();
  });
});

// Calculate and display BMI
function calculateAndDisplayBMI() {
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const age = parseFloat(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  // Validate
  if (!age || !weight || !height) {
    alert("⚠️ Mohon lengkapi semua data");
    return;
  }

  if (age < 0 || age > 18) {
    alert("⚠️ Usia harus antara 0-18 tahun");
    return;
  }

  // Calculate BMI
  const bmi = BMICalculator.calculateBMI(weight, height);
  const category = BMICalculator.getBMICategory(parseFloat(bmi), age);
  const description = BMICalculator.getDescription(category.status);
  const recommendations = BMICalculator.getRecommendations(category.status);

  // Display results
  document.getElementById("bmiValue").textContent = bmi;
  document.getElementById("statusText").textContent = category.label;

  const statusBadge = document.getElementById("statusBadge");
  statusBadge.className = `status-badge ${category.status}`;

  document.getElementById("statusDescription").querySelector("p").textContent =
    description;

  // Display recommendations
  const recList = document.getElementById("recommendationList");
  recList.innerHTML = "";
  recommendations.forEach((rec) => {
    const li = document.createElement("li");
    li.textContent = rec;
    recList.appendChild(li);
  });

  // Show result section
  resultSection.style.display = "block";

  // Scroll to result
  resultSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Load growth tables
function loadGrowthTables() {
  const maleBody = document.getElementById("tableMaleBody");
  const femaleBody = document.getElementById("tableFemaleBody");

  growthStandards.male.forEach((data) => {
    const row = createTableRow(data);
    maleBody.appendChild(row);
  });

  growthStandards.female.forEach((data) => {
    const row = createTableRow(data);
    femaleBody.appendChild(row);
  });
}

function createTableRow(data) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><strong>${data.age}</strong></td>
    <td>${data.weight} kg</td>
    <td>${data.height} cm</td>
    <td>${data.bmi}</td>
  `;
  return row;
}

// Setup table toggle
function setupTableToggle() {
  const toggleBtns = document.querySelectorAll(".toggle-btn");
  const tableMale = document.getElementById("tableMale");
  const tableFemale = document.getElementById("tableFemale");

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const gender = btn.dataset.gender;

      // Update active state
      toggleBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Show/hide tables
      if (gender === "male") {
        tableMale.style.display = "block";
        tableFemale.style.display = "none";
      } else {
        tableMale.style.display = "none";
        tableFemale.style.display = "block";
      }
    });
  });
}
