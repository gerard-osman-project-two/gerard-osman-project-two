import app from './firebaseConfig.js';
import {
  getDatabase,
  ref,
  push,
  onValue,
} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js';

// Create a file (firebase.js) to configure and export the Firebase object.

// Import the database object, and any required Firebase modules at the top of the main app file (app.js)

// Use document.querySelector() to get:
// The UL/P/SPAN where info about plants in cart will be displayed (e.g. quantity, price, name)
// The SPAN where total price will be displayed
// The BUTTONS that increase/decrease the quantity of individual items in cart
// The BUTTON to purchase all items in cart

// Call getDatabase() and ref() to create a reference to the Firebase database.

// Call onValue() to get a snapshot of the database, and to get a new snapshot any time the data changes/updates.
// First, clear all content in the UL on the page, so that we can update it with the current list of selected plants

// Loop through the snapshot object.
// For each plant in the database:
// Create a new LI, IMG, 2 P/SPAN, 2 BUTTON elements (document.createElement()).
// Put plant image, name, price, quantity in innerHTML of respective elements that we just created, and each into LI
// Append the new LI into UL

// Add an event listener to all add-to-cart buttons, which will listen for a click. Once clicked:
// Somehow figure out which corresponding plant was selected and add one to the quantity (default is 0) if already in the list. Otherwise, add the plant to the list and set quantity to 1.

// ========= CHANGE THIS ==========

// Put the Pokemon name in one P and the number of logged catches in the other, and .append() both into the LI.
// .append() the new LI into the UL on the page.

// Add an event listener to the form to listen for submission. On submit it should:
// Prevent the submit from causing the page to refresh (using the event.preventDefault() method).
// Get what the user wrote in the text input (using the .value property).
// Use Firebase's get() function to get a snapshot of current list of Pokemon in the database.
// Loop through the current list of Pokemon.
// If the Pokemon the user entered is already in the list, add one to the number of logged catches (using ++, the increment operator).
// If not, add the new Pokemon to the list and set the logged catches to 1.
// Use Firebase's update() function to send the updated list of Pokemon to Firebase (this will trigger the onValue() listener to update the page).
