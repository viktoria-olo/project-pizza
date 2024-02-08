// Start here

// Defining some useful variables 
let orderedFood = "";
let price = "";
let portionSize = "";
 
// Step 1 - Welcome and introduction

alert(
  "Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.");

const customer = prompt("Please enter your name:"); 

if (customer) {
  alert(`Happy to meet you, ${customer}!`);
} else {
  alert("That's not a name. Please refresh site and try again.");
  exit(1);
}

// Step 2 - Food choice

const foodType = parseInt(prompt(`
  What type of food would you like to order? 
  Please enter a number: 
  1 - Pizza 
  2 - Pasta 
  3 - Salad`));

if (foodType === 1) {
  alert("You've chosen Pizza!");
} else if (foodType === 2) {
  alert("You've chosen Pasta!");
} else if (foodType === 3) {
  alert("You've chosen Salad!");
} else {
  alert("Invalid food type. Please refresh site and try again.");
  exit(1);
}

// Step 3 - Subtype choice

// Pizza 
if (foodType === 1) {
  const pizzaType = parseInt(prompt(
    `Please select a type of Pizza. 
    Enter a number:  
    1 - Vesuvius  
    2 - Hawaii 
    3 - Capricciosa`));
        
  if (pizzaType === 1) {
    orderedFood = "Vesuvius";
  } else if (pizzaType === 2) {
    orderedFood = "Hawaii";
  } else if (pizzaType === 3) {
    orderedFood = "Capricciosa";
  } else {
    alert("Invalid pizza type. Please refresh site and try again");
    exit(1); 
  }

// Pasta 
} else if (foodType === 2) {
  const pastaType = parseInt(prompt(
    `Please select a Pasta dish. 
    Enter a number:  
    1 - Spaghetti Bolognese 
    2 - Penne all’Arrabbiata 
    3 - Frutti de Mare`));

  if (pastaType === 1) {
    orderedFood = "Spaghetti Bolognese";
  } else if (pastaType === 2) {
    orderedFood = "Penne all’Arrabbiata";
  } else if (pastaType === 3) {
    orderedFood = "Frutti de Mare";
  } else {
    alert("Invalid pasta type. Please refresh site and try again");
    exit(1); 
  }

  // Salad 
} else if (foodType === 3) {
  const saladType = parseInt(prompt(
    `Please select a Salad. 
    Enter a number: 
    1 - Caesar Salad
    2 - Salade Niçoise 
    3 - Waldorf Salad`));

  if (saladType === 1) {
    orderedFood = "Caesar Salad";
  } else if (saladType === 2) {
    orderedFood = "Salade Niçoise";
  } else if (saladType === 3) {
    orderedFood = "Waldorf Salad";
  } else {
    alert("Invalid salad type. Please refresh site and try again");
    exit(1); 
  }
} 

alert(`You've chosen ${orderedFood}!`);


// Step 4 - Age

const age = (prompt("Is this food for a child or an adult? Type your age:"));

if (age) {  
  if (age <= 17) {
    price = "€10";
    portionSize = "child-sized";
  } else { 
    price = "€15";
    portionSize = "adult-sized";
  } 
} else {
  alert("Invalid age entry. Please refresh site and try again.");
  exit(1);
}


// Step 5 - Order confirmation

const confirmOrder = parseInt(prompt(
  `One ${portionSize} ${orderedFood} will be prepared for you. That'll be ${price}. Are you sure you want to order this? 
  Enter a number to confirm: 
  1 - Yes 
  2 - No`));

if (confirmOrder === 1) {
  alert("Thank you for your order! Your meal will be prepared."); 
} else if (confirmOrder === 2) {
  alert("No worries, we'll be here if you change your mind.");
} else {
  alert("Apologies, but that was neither a 'yes' nor a 'no'. Please try again.");
}