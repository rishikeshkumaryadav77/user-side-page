// // navbar
// const hamburgerMenu = document.getElementById('hamburgerMenu');
//     const sidebar = document.getElementById('sidebar');
//     const overlay = document.getElementById('overlay');

//     hamburgerMenu.addEventListener('click', () => {
//       sidebar.classList.add('open');
//       overlay.classList.add('visible');
//     });

//     overlay.addEventListener('click', () => {
//       sidebar.classList.remove('open');
//       overlay.classList.remove('visible');
//     });


// // carousel.js


// // fetched data

// async function fetchData() {
//   let response = await fetch("http://localhost:3000/product");
//   try {
//     if (!response.ok) {
//       throw new Error("Failed to fetch");
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   let data = await response.json();
//   console.log(data);
//   getData(data);
// }



// //get data
// function getData(data) {
//   let container = document.getElementById("container");
//   data.forEach(element => {
//     let ParentDiv = document.createElement("div");
//     ParentDiv.classList.add("product");
//     ParentDiv.innerHTML = `
//       <img src='${element.image}' alt='${element.title}' class='product-image'>
//       <h1 class='product-title'>${element.title}</h1>
//       <p class='product-price'>Price: ${element.price}/-</p>
//       <button class='add-to-cart-btn'>Add To Cart</button>
//       <button class='buy-btn'>Buy</button>
//     `;
//     container.appendChild(ParentDiv);
//   });
// }

// fetchData();// Navbar
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

hamburgerMenu.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('visible');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
});

// Fetch data
async function fetchData() {
  let response = await fetch("https://tortoiseshell-lime-town.glitch.me/product");
  try {
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
  } catch (error) {
    console.log(error);
  }
  let data = await response.json();
  console.log(data);
  getData(data);
}

// Get data and add event listeners
function getData(data) {
  let container = document.getElementById("container");
  data.forEach(element => {
    let ParentDiv = document.createElement("div");
    ParentDiv.classList.add("product");
    ParentDiv.innerHTML = `
      <img src='${element.image}' alt='${element.title}' class='product-image'>
      <h1 class='product-title'>${element.title}</h1>
      <p class='product-price'>Price: ${element.price}/-</p>
      <button class='add-to-cart-btn'>Add To Cart</button>
      <button class='buy-btn'>Buy</button>
    `;
    container.appendChild(ParentDiv);

    // Add event listeners for buttons
    const addToCartBtn = ParentDiv.querySelector('.add-to-cart-btn');
    const buyBtn = ParentDiv.querySelector('.buy-btn');

    addToCartBtn.addEventListener('click', () => {
      showCartNotification(element.title);
    });

    buyBtn.addEventListener('click', () => {
      showBuyAnimation(element.title);
    });
  });
}

// Show cart notification
function showCartNotification(productTitle) {
  const notification = document.createElement('div');
  notification.classList.add('cart-notification');
  notification.textContent = `${productTitle} has been added to the cart!🛒`;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 1000);
}

// Show buy animation
function showBuyAnimation(productTitle) {
  const animation = document.createElement('div');
  animation.classList.add('buy-animation');
  animation.innerHTML = `
    <h1>Congratulations!</h1>
    <p>🎉 Congratulations! Your ${productTitle} will arrive at your door soon!🚪</p>
  `;
  document.body.appendChild(animation);

  setTimeout(() => {
    animation.remove();
  }, 1000);
}

fetchData();

