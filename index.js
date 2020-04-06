const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/client", {useNewUrlParser:true, useUnifiedTopology: true});

const Customer = require('./models/Customer')

const addCustomer = async (customer) => {
 try {
   await Customer.create(customer);
   console.info('New customer added..');
  } catch (err) {
    console.log(err);
 }
}


const findCustomer = async (name) => {
  try {

    const search = new RegExp(name, 'i');
    const customer = await Customer.find({$or: [{firstname: search}, {lastname: search}]});
    console.info(customer);
   } catch (err) {
    console.log(err);
  }
 }

 module.exports = {addCustomer, findCustomer};