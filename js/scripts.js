import app from './firebaseConfig.js';
import {
  getDatabase,
  ref,
  push,
  onValue,
} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js';


// Create a file (firebase.js) to configure and export the Firebase object.

//MVP//
// Import the database object, and any required Firebase modules at the top of the main app file (app.js)

// Call getDatabase() and ref() to create a reference to the Firebase database.

// Call our function twice, once to add our inventory data, and another time to add our currencies!

// Call onValue() to get a snapshot of the database, and to get a new snapshot any time the data changes/updates.
// First, clear all content in the UL on the page, so that we can update() it with the current list of selected plants
// Store our currencies and inventory data in variables
// Loop through the snapshot object.
// For each plant in the database:
  // filter our inventory data to remove items that are out of stock
    // filter will return a new array that only includes items that meet our conditions
  // Create a new LI, IMG, 2 P/SPAN, 2 BUTTON elements (document.createElement()).
  // Put plant image, name, price, quantity in innerHTML of respective elements that we just created, and each into LI
// Use document.querySelector() to get:
  // The UL/P/SPAN where info about plants in cart will be displayed (e.g. quantity, price, name)
  // The SPAN where total price will be displayed
  //  The BUTTONS that increase/decrease the quantity of individual items in cart
  // The BUTTON to purchase all items in cart
// Append the new LI into UL

// Add an event listener to all add-to-cart buttons, which will listen for a click. Once clicked:

// MVP//
// add event listener 'click' to plant icons that will return a new shopping cart array of chosen plants (default is 0)
  // Determine which plant will be added to the shopping cart (maybe id in each button) 

// Write a function that displays the available inventory on the page, in correct currency
  // Since we've filtered already, we can use a "currentStock" array that was created as a result of the filter

// Attach an event listener that will notice when a user clicks on a currency button, finds out which curreny they have selected, and calls our dislay items method again. Don't forget to update the flag at the top right

// By now should be able to declare two functions: one to display our items, another to handle any currency changes

// Stretch Goal
// Add an event listener 'click' to the shopping cart icon to open modal box
// Add an event listener 'click' to the close-modal button

