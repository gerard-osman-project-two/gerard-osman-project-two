import app from './firebaseConfig.js';
import {getDatabase, ref, set, push, onValue} from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js';

// Step 1:  Create a file (firebase.js) to configure and export the Firebase object.
// Import the database object, and any required Firebase modules at the top of the main app file (app.js)
// Call getDatabase() and ref() to create a reference to the Firebase database.

const database = getDatabase(app);
const dbRef = ref(database);

// Step 2:  Declare a function that will add our data both the inventory and the currencies, to our database.

const addToDatabase = (key, value) => {
  const plantRef = ref(database, key);
  set(plantRef, value);
};

// Array of plant objects
const plants = [
  {
    name: 'American marigold',
    price: 23.45,
    cartQuantity: 0,
    storeQuantity: 10,
    url: './assets/p1.jpeg',
  },
  {
    name: 'Black eyed susan',
    price: 25.45,
    cartQuantity: 0,
    storeQuantity: 10,
    url: './assets/p2.jpeg',
  },
  {
    name: 'Bleeding heart',
    price: 30.45,
    cartQuantity: 0,
    storeQuantity: 10,
    url: './assets/p3.jpeg',
  },
  {
    name: 'Bloody cranesbill',
    price: 45,
    cartQuantity: 0,
    storeQuantity: 10,
    url: './assets/p4.jpeg',
  },
  {
    name: 'Butterfly weed',
    price: 50.45,
    cartQuantity: 0,
    storeQuantity: 10,
    url: './assets/p5.jpeg',
  },
  {
    name: 'Common yarrow',
    price: 65,
    cartQuantity: 0,
    storeQuantity: 10,
    url: './assets/p6.jpeg',
  },
  {
    name: 'Double viburnum',
    price: 67.45,
    cartQuantity: 0,
    storeQuantity: 10,
    url: './assets/p7.jpeg',
  },
  {
    name: 'Feather reed grass',
    price: 20,
    cartQuantity: 0,
    storeQuantity: 10,
    url: './assets/p8.jpeg',
  },
];

// An object that allows us to organize information that will be displayed conditionally depending on what currency the user selects:
const currencies = {
  usd: {
    exchange: 1,
    symbol: `$`,
    displayName: `USD`,
    altText: `the US flag`,
    flag: `images/USD-flag.png`,
  },
  cad: {
    exchange: 1.28,
    symbol: `$`,
    displayName: `CAD`,
    altText: `the Canadian flag`,
    flag: `images/CAD-flag.png`,
  },
  gbp: {
    exchange: 0.76,
    symbol: `£`,
    displayName: `GBP`,
    altText: `the UK flag`,
    flag: `images/GBP-flag.png`,
  },
};

// Step 3: Call our function twice, once to add our inventory data, and another time to add our currencies
addToDatabase('plants', plants);
addToDatabase('currencies', currencies);

// Step 4:  Call onValue() to get a snapshot of the database, and to get a new snapshot any time the data changes/updates.
// Clear all content in the UL on the page, so that we can update() it with the current list of selected plants
// Store our currencies and inventory data in variables

onValue(dbRef, (data) => {
  const storeData = data.val();
  const plants = storeData.plants;
  const currencies = storeData.currencies;
  // ========== FILTERS FOR WHAT PLANTS APPEAR INITIALLY GO HERE ==========
  // put [filtered] item on page with a chosenCurrency param
  const displayItems = (chosenCurrency) => {
    // Find UL element that will contain our plants and empty it of any contents
    const plantsUL = document.querySelector('.plants-list');
    plantsUL.innerHTML = '';
    // loop through plants and create an LI for each item
    plants.forEach((item) => {
      const newLI = document.createElement('li');
      newLI.innerHTML = `
      <a href="#">
        <img src="${item.url}" alt=""/>
        <button class="btn-add">
          <img src="assets/icons/cart.svg" alt=""/>
        </button>
      </a>
      <p>${item.name}</p>
      <span>${chosenCurrency.symbol}${(item.price * chosenCurrency.exchange).toFixed(2)}</p>
      `;
      // append the LI to UL
      plantsUL.appendChild(newLI);
    });
  };
  displayItems(currencies.cad);
});

// Step 5:  Loop through the snapshot object.
// For each plant in the database:
//
// filter our inventory data to remove items that are out of stock
// filter will return a new array that only includes items that are in stock
// Create a new LI, IMG, 2 P/SPAN, 2 BUTTON elements (document.createElement())
// Put plant image, name, price, quantity in innerHTML of respective elements that we just created, and each into LI
// Use document.querySelector() to get:
// The UL/P/SPAN where info about plants in cart will be displayed (e.g. quantity, price, name)
// The SPAN where total price will be displayed
//  The BUTTONS that increase/decrease the quantity of individual items in cart
// The BUTTON to purchase all items in cart
// Append the new LI into UL

// Step 6:  Initialize cartQuantity as 0
// listen for clicks on the shopping icons
// increment the cartQuantity variable when the button is clicked
// change the cartQuantity element in the HTML to show the new cartQuantity

// Step 7:  Initialize totalCost as 0
// listen for clicks on the shopping icons
// Create a function that is the totalCost equals the sum of inventory.price when the button is clicked
// add a <p> element in the HTML
//change the total-cost id int he HTML to show the new total

// STRETCH GOALS //
// Add an event listener 'click' to the shopping cart icon to open modal box
// Add an event listener 'click' to the close-modal button

// MVP rough draft//
// add event listener 'click' to plant icons that will return a new shopping cart array of chosen plants (default is 0)
// increase counter on shopping cart icon
// Determine which plant will be added to the shopping cart (maybe id in each button)
// Add plant price to total value
// Decrease stock value of chosen plant (stretch goal)

// Write a function that displays the available inventory on the page, in correct currency
// Since we've filtered already, we can use a "currentStock" array that was created as a result of the filter

// Attach an event listener that will notice when a user clicks on a currency button, finds out which curreny they have selected, and calls our dislay items method again. Don't forget to update the flag at the top right

// By now should be able to declare two functions: one to display our items, another to handle any currency changes
