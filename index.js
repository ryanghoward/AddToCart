import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://addtocart-19974-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldElement = document.getElementById("input-field");
const addButtonElement = document.getElementById("add-button");

addButtonElement.addEventListener("click", function () {
  let inputValue = inputFieldElement.value;
  push(shoppingListInDB, inputValue);
  // console.log(inputValue);
});
