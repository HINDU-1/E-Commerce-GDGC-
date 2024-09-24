let products = [];
let cart = [];

    // Fetch products from the Fake Store API
    async function fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      products = await response.json();
      displayProducts(products);
    }

    // Display the products
    function displayProducts(productList) {
      const productContainer = document.getElementById('product-list');
      productContainer.innerHTML = '';

      productList.forEach(product => {
        productContainer.innerHTML += `
          <div class="product">
            <img src="${product.image}" alt="${product.title}" width="100" />
            <p>${product.title}</p>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        `;
      });
    }

    // Add items to the cart
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      const cartItem = cart.find(item => item.id === productId);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      updateCartUI();
    }

    // Remove items from the cart
    function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      updateCartUI();
    }

    // Increase quantity of item in the cart
    function increaseQuantity(productId) {
      const cartItem = cart.find(item => item.id === productId);
      cartItem.quantity++;
      updateCartUI();
    }

    // Decrease quantity of item in the cart (remove if quantity is 0)
    function decreaseQuantity(productId) {
      const cartItem = cart.find(item => item.id === productId);

      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        removeFromCart(productId);
      }

      updateCartUI();
    }

    // Update the cart UI
    function updateCartUI() {
      const cartContainer = document.getElementById('cart-items');
      cartContainer.innerHTML = '';

      cart.forEach(item => {
        cartContainer.innerHTML += `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" width="100px" height="100px"/>
            <p class="item-title">${item.title}</p>
            <p class="item-inside-cart">${item}</p>
            <p>₹${item.price}</p>
            <button onclick="decreaseQuantity(${item.id})">-</button>
            <span>${item.quantity}</span>
            <button onclick="increaseQuantity(${item.id})">+</button>
            <button onclick="removeFromCart(${item.id})" class="remove-from-cart">X</button>
          </div>
        `;
      });

      calculateTotal();
    }

    // Calculate total price of items in the cart
    function calculateTotal() {
      let total = 0;
      cart.forEach(item => {
        total += item.price * item.quantity;
      });
      document.getElementById('total').innerText = `Total: ₹${total}`;
    }

    // Search products by name
    function searchProducts() {
      const query = document.getElementById('search').value.toLowerCase();
      const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(query)
      );
      displayProducts(filteredProducts);
    }

     // Place Order functionality
     function placeOrder() {
        if (cart.length > 0) {
          alert('Order has been placed successfully!');
          cart = [];
          updateCartUI();
          document.getElementById('total').textContent = 'Total: ₹0';
        } else {
          alert('Cart is empty. Please add items to the cart.');
        }
      }

    // Initial fetch of products
    fetchProducts();