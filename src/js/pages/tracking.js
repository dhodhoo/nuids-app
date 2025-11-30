const dropArea = document.getElementById("drop-area");
const foodPict = document.getElementById("food-picture");
const imgView = document.getElementById("img-view");

foodPict.addEventListener("change", outputImage);

function outputImage() {
  let output = URL.createObjectURL(foodPict.files[0]);
  imgView.style.background = `url(${output})`;
  imgView.textContent = "";
  imgView.style.border = "none";
  imgView.style.backgroundPosition = "center";
  imgView.style.backgroundSize = "cover";
  imgView.style.width = "100%";
}

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  foodPict.files = e.dataTransfer.files;
  outputImage();
});

const foodValue = document.getElementById("nama-makanan").value;
const btn = document.getElementById("submit-food");

const makanan = {
  nasiGoreng: "nasi goreng",
  ayamGoreng: "ayam goreng",
  seblak: "seblak",
};

btn.addEventListener("click", outputGizi);

function outputGizi() {
  const foodValue = document.getElementById("nama-makanan").value;
  const kalori = document.getElementById("kalori");
  const protein = document.getElementById("protein");
  const karbo = document.getElementById("karbo");
  const lemak = document.getElementById("lemak");

  if (foodValue == makanan.nasiGoreng) {
    kalori.textContent = "Kalori: 250 kcal";
    protein.textContent = "Protein: 20 gram";
    karbo.textContent = "Karbohidrat: 10 gram";
    lemak.textContent = "Lemak: 30 gram";
  } else if (foodValue == makanan.ayamGoreng) {
    kalori.textContent = "Kalori: 300 kcal";
    protein.textContent = "Protein: 10 gram";
    karbo.textContent = "Karbohidrat: 6 gram";
    lemak.textContent = "Lemak: 2 gram";
  } else if (foodValue == makanan.seblak) {
    kalori.textContent = "Kalori: 100 kcal";
    protein.textContent = "Protein: 0 gram";
    karbo.textContent = "Karbohidrat: 20 gram";
    lemak.textContent = "Lemak: 9999 gram";
  }
}
