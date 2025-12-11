// API key MapTiler
const MAPTILER_KEY = "YYFzd6laNue2jLRh4aFe";

// Konfigurasi MapTiler SDK (wajib sebelum dipakai).[web:39][web:50]
maptilersdk.config.apiKey = MAPTILER_KEY;

// Inisialisasi peta Leaflet
const map = L.map("map").fitWorld();

L.tileLayer(
  `https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`,
  {
    //style URL
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    crossOrigin: true,
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

const hospitalLayer = L.layerGroup().addTo(map);
let userMarker = null;
let userCircle = null;
let userLat = null;
let userLon = null;

const statusText = document.getElementById("status");
const resultsList = document.getElementById("rs-list");

// Fungsi Haversine: hasil meter.[web:57][web:59][web:69]
function distanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000; // jari-jari bumi (m)
  const toRad = (deg) => (deg * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function formatKm(meters) {
  const km = meters / 1000;
  return km.toFixed(2); // 2 angka desimal
}

async function searchHospitalsNear(lat, lon, radiusKm = 5) {
  const radiusMeters = radiusKm * 1000;
  const overpassUrl = "https://overpass-api.de/api/interpreter";

  // Query Overpass: hospital (amenity=hospital) di sekitar user.[web:26][web:16]
  const query = `
        [out:json][timeout:25];
        (
          node["amenity"="hospital"](around:${radiusMeters},${lat},${lon});
          way["amenity"="hospital"](around:${radiusMeters},${lat},${lon});
          relation["amenity"="hospital"](around:${radiusMeters},${lat},${lon});
        );
        out center;
      `;

  statusText.textContent =
    "Mengambil data rumah sakit terdekat dari OpenStreetMap...";
  hospitalLayer.clearLayers();
  resultsList.innerHTML = "";

  try {
    const response = await fetch(overpassUrl, {
      method: "POST",
      body: query,
    });
    if (!response.ok) throw new Error("Overpass API error");

    const data = await response.json();
    const elements = data.elements || [];
    const hospitals = [];

    if (elements.length === 0) {
      statusText.textContent =
        "Tidak ada rumah sakit dalam radius sekitar lokasi Anda.";
      return;
    }

    statusText.textContent = `Ditemukan ${elements.length} rumah sakit di sekitar Anda.`;

    const bounds = [];
    elements.forEach((el) => {
      const latEl = el.lat || (el.center && el.center.lat);
      const lonEl = el.lon || (el.center && el.center.lon);
      if (!latEl || !lonEl) return;

      const name = (el.tags && el.tags.name) || "Rumah Sakit tanpa nama";
      const addr =
        (el.tags && el.tags["addr:full"]) ||
        (el.tags && el.tags["addr:street"]) ||
        "";

      const distM = distanceMeters(lat, lon, latEl, lonEl);
      const distKm = formatKm(distM);

      hospitals.push({
        lat: latEl,
        lon: lonEl,
        name,
        addr,
        distM,
        distKm,
      });
    });

    hospitals.sort((a, b) => a.distM - b.distM);

    hospitals.forEach((h, idx) => {
      const marker = L.marker([h.lat, h.lon]).addTo(hospitalLayer);
      marker.bindPopup(
        `<b>${h.name}</b><br>Jarak: ${h.distKm} km<br>Lat: ${h.lat.toFixed(
          6
        )}, Lon: ${h.lon.toFixed(6)}${h.addr ? "<br>" + h.addr : ""}`
      );

      bounds.push([h.lat, h.lon]);

      const item = document.createElement("div");
      item.className = "result-item";
      item.textContent = `${idx + 1}. ${h.name} (${h.distKm} km)`;
      item.onclick = () => {
        map.setView([h.lat, h.lon], 16);
        marker.openPopup();
      };
      resultsList.appendChild(item);
    });

    if (bounds.length > 0) {
      bounds.push([lat, lon]);
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  } catch (err) {
    console.error(err);
    statusText.textContent =
      "Terjadi kesalahan saat mengambil data rumah sakit. Coba lagi beberapa saat.";
  }
}

function onLocationFound(e) {
  const lat = e.latitude || e.latlng.lat;
  const lon = e.longitude || e.latlng.lng;
  const accuracy = e.accuracy || 0;
  userLat = lat;
  userLon = lon;

  if (userMarker) map.removeLayer(userMarker);
  if (userCircle) map.removeLayer(userCircle);

  userMarker = L.marker([lat, lon]).addTo(map);
  userMarker.bindPopup("Lokasi Anda").openPopup();

  userCircle = L.circle([lat, lon], {
    radius: accuracy,
    weight: 1,
    color: "blue",
    fillColor: "#2196f3",
    fillOpacity: 0.15,
  }).addTo(map);

  map.setView([lat, lon], 15);
  statusText.textContent =
    "Lokasi berhasil dideteksi. Mencari rumah sakit terdekat...";

  searchHospitalsNear(lat, lon, 5); // radius 5km
}

function onLocationError(e) {
  console.error(e);
  statusText.textContent =
    "Gagal mendapatkan lokasi. Izinkan akses lokasi di browser dan reload halaman.";
  alert("Tidak bisa mengakses lokasi. Pastikan izin lokasi diaktifkan.");
}

// Geolocation (Leaflet locate memakai Geolocation API browser).[web:23][web:46]
if ("geolocation" in navigator) {
  map.locate({
    setView: true,
    maxZoom: 16,
    enableHighAccuracy: true,
  });
  map.on("locationfound", onLocationFound);
  map.on("locationerror", onLocationError);
} else {
  statusText.textContent = "Browser Anda tidak mendukung Geolocation API.";
}

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    window.location.href = "/index.html";
  }
});
