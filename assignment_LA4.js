Below is a simple JavaScript program that implements a Queueing System for Customer Service:

// Define the customer queue with 5 customers
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to display the queue
function displayQueue() {
    console.log("Current Queue: " + customerQueue.join(", "));
}

// Function to add a customer to the queue
function addCustomer(name) {
    customerQueue.push(name);
    console.log(name + " has been added to the queue.");
    displayQueue();
}

// Function to serve a customer (remove from queue)
function serveCustomer(number) {
    if (number > 0 && number <= customerQueue.length) {
        let servedCustomer = customerQueue[number - 1];
        console.log(servedCustomer + " is being served.");
        customerQueue.splice(number - 1, 1); // Remove the served customer
    } else {
        console.log("Invalid number. Please enter a valid number in the queue.");
    }
    displayQueue();
}

// Main program loop
function main() {
    // 1. Ask for a customer's name and add to the queue
    let customerName = prompt("Enter your name to join the queue:");
    addCustomer(customerName);
    
    // 2. Ask for a number to be serviced by the representative
    while (true) {
        let serviceNumber = parseInt(prompt("Enter the number of the customer to be serviced (1-5):"));
        if (serviceNumber >= 1 && serviceNumber <= 5) {
            serveCustomer(serviceNumber);
            break;
        } else {
            alert("Please enter a valid number between 1 and 5.");
        }
    }
}

// Start the program
main();
