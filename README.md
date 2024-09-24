# E-Commerce-GDGC-
assignment to build a website using HTML, CSS, and JavaScript as part of second round of the GDGC VNRVJIET volunteer recruitment process for the Web Development domain!
Table of Contents:
1.	Introduction
2.	Project Structure
3.	How to Run
4.	Execution Process
o	1. Fetch and Display Products
o	2. Search Functionality
o	3. Cart Management
o	4. Placing Orders
5.	Screenshots
6.	Dependencies
7.	File Descriptions
8.	Responsive Design
9.	Final Notes
________________________________________
Introduction
This is a basic e-commerce platform that allows users to browse products, add them to a cart, and place orders. The application fetches products from the Fake Store API and dynamically renders them on the webpage. Users can interact with the cart and place orders through a simple and intuitive interface.
________________________________________
Project Structure
1.	HTML (index.html): Defines the structure of the webpage, including the product listing, cart, and search bar.
2.	JavaScript (app.js): Handles the core functionality such as fetching products, adding/removing from the cart, and placing orders.
3.	CSS (style.css): Provides styling for the webpage, including responsive layouts, animations, and hover effects.
________________________________________
How to Run
Step 1: Download the Project
Download or clone the project to your local machine.

Step 2: Open index.html
Open the index.html file in your browser to load the platform. Ensure you have an internet connection, as the platform fetches product data from an external API.
Step 3: Interact with the Application
•	Use the search bar to filter products.
•	Add products to the cart.
•	Adjust quantities and place orders.
________________________________________
Execution Process
1. Fetch and Display Products
•	Upon loading, the platform fetches products from the Fake Store API.
•	The fetchProducts() function uses fetch() to retrieve the product data and displays them using the displayProducts() function.
•	Each product is shown with an image, title, price, and an "Add to Cart" button.
![image](https://github.com/user-attachments/assets/8f96fc14-a2d2-4ad7-9b0d-af6acdce8e7e)
 ________________________________________
2. Search Functionality
•	The platform includes a search bar at the top that allows users to filter products by name.
•	As the user types in the search bar, the searchProducts() function filters the products in real-time based on the input and updates the display.
 ![image](https://github.com/user-attachments/assets/a49b32eb-c3f2-448d-96dd-53ce493659c0)

________________________________________


3. Cart Management
•	Adding to Cart: When a user clicks "Add to Cart," the selected product is added to the cart array, and the cart UI is updated accordingly.
•	Quantity Management: Users can adjust the quantity of each product in the cart using + and - buttons.
•	Removing Items: Users can remove products from the cart by clicking the "X" button.
![image](https://github.com/user-attachments/assets/84a7b008-e385-47b7-8bb3-c796b220b4c5)

 ________________________________________
4. Placing Orders
•	When the user clicks the "Place Order" button, the placeOrder() function checks if there are items in the cart. If so, it clears the cart and displays an order success message.
•	If the cart is empty, a warning prompts the user to add products before placing an order.
![image](https://github.com/user-attachments/assets/462d9e17-92b7-48f0-8d1f-733b1ce6fc29)

 ________________________________________



Screenshots
1.	Home Page and Product List:
 ![image](https://github.com/user-attachments/assets/f7ef5a69-7e48-4f54-9481-31dde41df544)
![image](https://github.com/user-attachments/assets/e16c56a4-34a3-48a7-bf44-7a6d6930f570)

 
Description: This shows the homepage with product listings and a search bar. Users can browse products and filter them using the search bar.
2.	Cart and Order Placement:
 ![image](https://github.com/user-attachments/assets/227ea5d0-0dfe-4a90-95fd-524184313c03)

Description: The cart section allows users to adjust quantities or remove items before placing an order.
________________________________________
Dependencies
1.	Fake Store API: Products are fetched from the Fake Store API (https://fakestoreapi.com/products).
2.	Modern Browser: Ensure that JavaScript is enabled in your browser to run the project.
________________________________________
File Descriptions
1.	index.html: Contains the basic structure of the platform, including sections for product listing, search bar, and cart.
2.	app.js: Handles fetching, filtering, and managing products in the cart. Also manages the order placement functionality.
3.	style.css: Provides styling for the platform, ensuring it is visually appealing and responsive across devices.
________________________________________
Responsive Design
The platform has been designed with responsiveness in mind. Media queries ensure that it works on different screen sizes, including mobile phones and tablets.
•	For larger screens (desktops): The product layout is displayed in a grid format, with ample spacing between elements.
•	For smaller screens (mobile devices): The layout adjusts to stack elements vertically, and some elements (such as product images in the cart) are hidden for a cleaner interface.
________________________________________
Final Notes
This project is a simple e-commerce platform demo. You can extend its functionality by adding user authentication, a real-time backend, and payment gateways.



