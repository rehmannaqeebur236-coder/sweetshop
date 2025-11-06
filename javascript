// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Sample product data
const products = [
  {
    id: "s1",
    category: "sweets",
    name: "Gulab Jamun (Box of 6)",
    price: 8.5,
    weight: "300g",
    img: "https://images.unsplash.com/photo-1570642645949-30b6a1f6b8b3?q=80&w=800",
  },
  {
    id: "s2",
    category: "sweets",
    name: "Pistachio Barfi",
    price: 12.0,
    weight: "250g",
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800",
  },
  {
    id: "b1",
    category: "bakery",
    name: "Sourdough Loaf",
    price: 6.75,
    weight: "450g",
    img: "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=800",
  },
  {
    id: "b2",
    category: "bakery",
    name: "Chocolate Croissant",
    price: 3.25,
    weight: "85g",
    img: "https://images.unsplash.com/photo-1542831371-29e0e12a5a64?q=80&w=800",
  },
];

// Gift hampers
const gifts = [
  {
    id: "g1",
    name: "Celebration Hamper",
    price: 35.0,
    weight: "1.2kg",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000",
  },
  {
    id: "g2",
    name: "Tea Time Hamper",
    price: 28.0,
    weight: "900g",
    img: "https://images.unsplash.com/photo-1541601379-9b8f8d3c2c1b?q=80&w=1000",
  },
];

// Render functions
const productsGrid = document.getElementById("productsGrid");
const giftsGrid = document.getElementById("giftsGrid");

function renderProducts(category = "sweets") {
  productsGrid.innerHTML = "";
  const filtered = products.filter((p) => p.category === category);
  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">$${p.price.toFixed(2)}</p>
      <p>${p.weight}</p>
    `;
    productsGrid.appendChild(card);
  });
}

function renderGifts() {
  giftsGrid.innerHTML = "";
  gifts.forEach((g) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${g.img}" alt="${g.name}">
      <h3>${g.name}</h3>
      <p class="price">$${g.price.toFixed(2)}</p>
      <p>${g.weight}</p>
    `;
    giftsGrid.appendChild(card);
  });
}

renderProducts();
renderGifts();

function switchCategory(event) {
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  event.target.classList.add("active");
  const cat = event.target.dataset.cat;
  renderProducts(cat);
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form handler
function handleContact(e) {
  e.preventDefault();
  alert("Message sent successfully (demo)");
  e.target.reset();
}