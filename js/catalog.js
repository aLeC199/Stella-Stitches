document.addEventListener("DOMContentLoaded", () => {
  // --- Selectors ---
  const previewImg = document.querySelector(".items");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.querySelector(".close-modal");
  const modalName = document.getElementById("modalName");
  const modalPrice = document.getElementById("modalPrice");
  const modalFabric = document.getElementById("modalFabric");
  const modalDesc = document.getElementById("modalDesc");

  // Target your nav links
  const navLinks = document.querySelectorAll("nav a");

  let selectedStyle = null;
  let allCatalogItems = []; // Store the full list here for filtering

  // --- 1. Fetch Data ---
  fetch("../data/catalog.json")
    .then((res) => res.json())
    .then((CatalogItems) => {
      allCatalogItems = CatalogItems; // Save data
      console.log("Catalog loaded:", allCatalogItems);
      renderCatalog(allCatalogItems); // Initial render
    })
    .catch((err) => {
      console.error("Failed to load catalog.json", err);
    });

  // --- 2. Render Function ---
  // We moved the rendering into a function so we can call it when filtering
  function renderCatalog(itemsToRender) {
    previewImg.innerHTML = ""; // Clear existing items

    itemsToRender.forEach((item, index) => {
      const { src, name, price, fabric, desc } = item;

      // Create container
      const catalogItem = document.createElement("div");
      catalogItem.className = "catalogItem";
      catalogItem.dataset.index = index;

      // Create image
      const img = document.createElement("img");
      img.src = src;
      img.className = "style";

      // 🔍 Single click → Open Modal (Zoom)
      img.addEventListener("click", (e) => {
        e.stopPropagation();
        modal.classList.add("show");
        modalImg.src = src;
        modalName.textContent = name;
        modalPrice.textContent = `₦${price.toLocaleString()}`;
        modalFabric.textContent = fabric;
        modalDesc.textContent = desc;
      });

      // ✅ Double click → trigger selection
      img.addEventListener("dblclick", (e) => {
        e.stopPropagation();
        catalogItem.click();
      });

      // ✅ Click card → Select Item
      catalogItem.addEventListener("click", () => {
        selectedStyle = {
          type: "preset",
          src,
          index,
        };
        console.log("Selected preset:", selectedStyle);

        document
          .querySelectorAll(".catalogItem")
          .forEach((el) => el.classList.remove("active"));
        catalogItem.classList.add("active");
      });

      catalogItem.appendChild(img);
      previewImg.appendChild(catalogItem);
    });
  }

  // --- 3. Navigation / Filter Logic ---
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Only filter if the link text matches a category
      const categoryRequest = link.textContent.trim();

      // "All product" shows everything
      if (categoryRequest === "All product") {
        renderCatalog(allCatalogItems);
        return;
      }

      // Logic for "Royals" (mapped to Traditional) and "Elegant Couture" (mapped to Luxury)
      let filterKey = categoryRequest;
      if (categoryRequest === "Royals") filterKey = "Traditional";
      if (categoryRequest === "Elegant Couture") filterKey = "Luxury";
      if (categoryRequest === "Your idea") {
        alert("Redirecting to custom design form...");
        return;
      }

      // Filter the array
      const filtered = allCatalogItems.filter(
        (item) => item.category.toLowerCase() === filterKey.toLowerCase()
      );

      renderCatalog(filtered);
    });
  });

  // --- 4. Modal Controls ---
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.remove("show");
  });
});
