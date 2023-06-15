import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";

// UI Elements
// Hidden loader
loader()

//show Menu
showMenu()

//ShoWCart
showCart()

//end UI Elements


//Products
const {db, printProducts} = products(await getProducts())

//Cart
cart(db, printProducts)