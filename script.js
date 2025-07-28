let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "./assets/white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "./assets/short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "./assets/sporty-smartwatch.jpg",
    },
    {
      productName: "Fossil Watch",
      category: "Watch",
      price: "3000",
      image: "./assets/men8.jpg",
    },
    {
      productName: "VictorInox Watch",
      category: "Watch",
      price: "2999",
      image: "./assets/men10.jpg",
    },
    {
      productName: "Titan Watch",
      category: "Watch",
      price: "5000",
      image: "./assets/men9.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "./assets/knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "./assets/black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "./assets/pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "./assets/brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "./assets/comfy-gray-pants.jpg",
    },
    {
      productName: "Iphone 16",
      category: "Mobile",
      price: "80000",
      image: "./assets/phone1.jpg",
    },
     {
      productName: "Iphone 15",
      category: "Mobile",
      price: "60000",
      image: "./assets/phone2.jpg",
    },
     {
      productName: "Iphone 14",
      category: "Mobile",
      price: "50000",
      image: "./assets/phone3.jpg",
    },
     {
      productName: "Iphone 16 pro",
      category: "Mobile",
      price: "120000",
      image: "./assets/phone4.jpg",
    },
    {
      productName: "Samsung s25 ultra",
      category: "Mobile",
      price: "110000",
      image: "./assets/phone12.jpg",
    },
     {
      productName: "Rebook Shoe",
      category: "Shoes",
      price: "3000",
      image: "./assets/men11.jpg",
    },
    {
      productName: "Puma Shoe",
      category: "Shoes",
      price: "2500",
      image: "./assets/men12.jpg",
    },
    {
      productName: "Puma Shoe",
      category: "Shoes",
      price: "4500",
      image: "./assets/men13.jpg",
    },
    {
      productName: "Leather Shoe",
      category: "Shoes",
      price: "3000",
      image: "./assets/men14.jpg",
    },
     {
      productName: "LG OLED Tv",
      category: "Tv",
      price: "50000",
      image: "./assets/tv1.jpg",
    },
     {
      productName: "Sony UHD Tv",
      category: "Tv",
      price: "30000",
      image: "./assets/tv2.jpg",
    },
     {
      productName: "XIAOMI OLED Tv",
      category: "Tv",
      price: "35000",
      image: "./assets/tv3.jpg",
    },
     {
      productName: "Samsung OLED Tv",
      category: "Tv",
      price: "60000",
      image: "./assets/tv4.jpg",
    },
  ],
};

for (let i of products.data) {
  
  let card = document.createElement("div");

  card.classList.add("card", i.category, "hide");
  
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}


function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
   
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  
  let elements = document.querySelectorAll(".card");
  
  elements.forEach((element) => {
   
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      
      if (element.classList.contains(value)) {
        
        element.classList.remove("hide");
      } else {
        
        element.classList.add("hide");
      }
    }
  });
}


document.getElementById("search").addEventListener("click", () => {
  
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

 
  elements.forEach((element, index) => {
    
    if (element.innerText.includes(searchInput.toUpperCase())) {
     
      cards[index].classList.remove("hide");
    } else {
      
      cards[index].classList.add("hide");
    }
  });
});

document.querySelectorAll('#top')[0]?.addEventListener('click', () => {
  document.querySelectorAll('#modal-categories input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";
  document.getElementById("sortSelect").value = "none";

  // Reset product container
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  // Re-render original products
  products.data.forEach((i) => {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    productsContainer.appendChild(card);
  });

  // Apply 'all' filter again
  filterProduct("all");
});


// Firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyAZlwqeVFzVQZf-dmp6Vglcjx9zeKE0Ikc",
      authDomain: "sports-f6789.firebaseapp.com",
      projectId: "sports-f6789",
      storageBucket: "sports-f6789.appspot.com",
      messagingSenderId: "1089375819705",
      appId: "1:1089375819705:web:af7492d1c285e78788c868",
      measurementId: "G-QJE2HPWQ9Y"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    const userData = JSON.parse(localStorage.getItem("loggedUser"));
    if (!userData) {
      window.location.href = "login.html";
    } else {
      document.getElementById("userName").innerText = userData.name;
      document.getElementById("userEmail").innerText = userData.email;
    }

    document.getElementById("logoutBtn").addEventListener("click", async () => {
      try {
        await auth.signOut();
        localStorage.removeItem("loggedUser");
        window.location.href = "login.html";
      } catch (err) {
        alert("Logout failed: " + err.message);
      }
    });

    // Dropdown toggle
    const userIcon = document.getElementById("userIcon");
    const userMenu = document.getElementById("userMenu");

    userIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      userMenu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!userMenu.contains(e.target) && !userIcon.contains(e.target)) {
        userMenu.classList.remove("show");
      }
    });

const modal = document.getElementById("filterModal");
  const openModalBtn = document.querySelectorAll("#top")[1]; // second button = Product List
  const closeModal = document.getElementById("closeModal");

  openModalBtn.addEventListener("click", () => modal.style.display = "flex");
  closeModal.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target == modal) modal.style.display = "none";
  });

  document.getElementById("applyFilters").addEventListener("click", () => {
    const selectedCategories = [...document.querySelectorAll('#modal-categories input:checked')].map(c => c.value);
    const min = parseInt(document.getElementById("minPrice").value) || 0;
    const max = parseInt(document.getElementById("maxPrice").value) || Infinity;
    const sort = document.getElementById("sortSelect").value;

    let allCards = Array.from(document.querySelectorAll(".card"));
    allCards.forEach(card => {
      const category = card.classList[1]; // second class is category
      const price = parseFloat(card.querySelector("h6").innerText.replace("₹", "").replace("$", ""));

      const showCategory = selectedCategories.length === 0 || selectedCategories.includes(category);
      const showPrice = price >= min && price <= max;

      if (showCategory && showPrice) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });

    // Sorting
    if (sort !== "none") {
      const productsContainer = document.getElementById("products");
      const sorted = allCards.filter(c => !c.classList.contains("hide"));

      sorted.sort((a, b) => {
        const priceA = parseFloat(a.querySelector("h6").innerText.replace("₹", "").replace("$", ""));
        const priceB = parseFloat(b.querySelector("h6").innerText.replace("₹", "").replace("$", ""));
        const nameA = a.querySelector(".product-name").innerText;
        const nameB = b.querySelector(".product-name").innerText;

        if (sort === "priceLow") return priceA - priceB;
        if (sort === "priceHigh") return priceB - priceA;
        if (sort === "az") return nameA.localeCompare(nameB);
      });

      sorted.forEach(card => productsContainer.appendChild(card));
    }

    modal.style.display = "none";
  });

  document.getElementById("clearFilters").addEventListener("click", () => {
  // Uncheck all category checkboxes
  document.querySelectorAll('#modal-categories input[type="checkbox"]').forEach(cb => cb.checked = false);

  // Clear price inputs
  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";

  // Reset sort dropdown
  document.getElementById("sortSelect").value = "none";

  // Show all products
  filterProduct("all");

  // Re-render original product order
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = ""; // Clear current content

  products.data.forEach((i) => {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    productsContainer.appendChild(card);
  });

  // Apply 'all' filter again to make cards visible
  filterProduct("all");

  // Hide modal
  modal.style.display = "none";
});



window.onload = () => {
  filterProduct("all");
};



