#!/usr/bin/env node

const program = require('commander');

const {addCustomer, findCustomer} = require('./index');

const {prompt} = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'firstname',
    message: 'Customer firstname'
  },
  {
    type: 'input',
    name: 'lastname',
    message: 'Customer lastname'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer phone'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer email'
  }
] 


program
      .version('1.0.0')
      .description('Client Management System');

// program.command('add <firstname> <lastname> <phone> <email>')
//        .alias('a')
//        .description('Add a customer')
//        .action((firstname, lastname, phone, email) => {
//          addCustomer({firstname, lastname, phone, email});
//        });

program.command('add')
       .alias('a')
       .description('Add a customer')
       .action(_ => {
         prompt(questions).then(answers => addCustomer(answers));
       });

program.command('find <name>')
       .alias('f')
       .description('Find a customer')
       .action(name => findCustomer(name));

program.parse(process.argv);