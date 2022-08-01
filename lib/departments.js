//ingredients
const db = require("../db/connection");
const cTable = require('console.table');
const inquirer = require("inquirer");


// first prompt question
const startInquirer = () => {
    inquirer.prompt([
      {
        type: "list",
        name: "toDo",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Remove an employee",
          "Exit"
        ]
      }
    ])

    
