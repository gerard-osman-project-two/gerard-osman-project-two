import app from './firebaseConfig.js';
import {
  getDatabase,
  ref,
  push,
  onValue,
} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js';

// Create a file (firebase.js) to configure and export the Firebase object.

// Import the database object, and any required Firebase modules at the top of the main app file (app.js)

// ========= CHANGE THIS ==========

// Use document.querySelector() to get three JS objects:
// One that points to the UL where caught Pokemon will be displayed.
// One that points to the text input where users can add Pokemon names.
// One that points to the form containing the text input.

// Call getDatabase() and ref() to create a reference to the Firebase database.

// Call onValue() to get a snapshot of the database, and to get a new snapshot any time the data changes/updates.
// First, clear all content in the UL on the page, so that we can update it with the current list of Pokemon.
// Loop through the snapshot object.
// For each Pokemon in the database:
// Create a new LI and two P elements (document.createElement()).
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
