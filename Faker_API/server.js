const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port= 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//User Account Section
const createUser = () => (
    { 
        password: faker.internet.password(),
        email: faker.internet.email() ,
        phoneNumber: faker.phone.number() ,
        lastName: faker.name.lastName() , 
        firstName: faker.name.firstName(),
        _id: faker.datatype.string() 
    })


const createCompany = () => (
    {
        _id: faker.datatype.string(),
        name: faker.company.name(),
            address: 
            {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country()
            }
    })

// End of User Account Section

// App Request & Responses
// app.get('/api/users', (res, req) => {
//     req.json({createUser, createCompany})
// }) 

app.get('/api/users/new', (res, req) => {
    const newUser = createUser()
    res.json(newUser)
})

app.get('/api/companies/new', (res, req) => {
    const newCompany = createCompany()
    res.json(newCompany)
})

app.post('/api/user/company', (res,req) => {
    const newUser = createUser()
    const newCompany = createCompany()
    const newAccount = {
        user: newUser,
        company: newCompany
    }
    res.json(newAccount)
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

