// import modules

import express from 'express'

// create Express app

const app = express()

// configure the app (app.set)



// mount Middleware (app.use)



// mount routes

app.get('/home', function(req,res) {
  res.render('home')
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})