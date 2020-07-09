
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY
const express = require ('express')
const app = express ()
const fs = require ('fs')
const { request } = require('http')
const stripe = require('stripe')(stripeSecretKey)
const bodyParser = require('body-parser');


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))

app.get('/store', function (req, res) {
fs.readFile('items.json', function (error, data){
    if (error) {
        res.status(500).end()
    } else {
      res.render('store.ejs', {
          stripePublicKey: stripePublicKey,
          items: JSON.parse(data)
      })
    }
})

})



// app.post('/checkout', function(req, res) {
//     fs.readFile('items.json', function(error, data) {
//       if (error) {
//         res.status(500).end()
//       } else {
//         const itemsJson = JSON.parse(data)
//         const itemsArray = itemsJson.items
//         let total = 0
//         req.body.items.forEach(function(item) {
//           const itemJson = itemsArray.find(function(i) {
//             return i.id == item.id
            
//           })
//           total = total + itemJson.price * item.quantity 
//         })
  
//         stripe.charges.create({
//           amount: total,
//           source: req.body.stripeTokenId,
//           currency: 'usd',
//           description: "Charge"
//         }).then(function() {
//           console.log('Charge Successful')
//           res.json({ message: `Your purchase is successful. Your total is $${total / 100}!` })
//         }).catch(function() {
//           console.log('Charge Fail')
//           res.status(500).end()
//         })
  
//       }
//     })
//   })

 
app.post('/checkout', function(req, res) {
  fs.readFile('items.json', function(error, data) {
    if (error) {
      res.status(500).end()
    } else {
      const itemsJson = JSON.parse(data)
      const itemsArray = itemsJson.items
      let total = 0
      req.body.items.forEach(function(item) {
        const itemJson = itemsArray.find(function(i) {
          return i.id == item.id
          
        })
        total = total + itemJson.price * item.quantity 
      })

      stripe.charges.create(
        {
          amount: 2000,
          currency: 'usd',
          source: req.body.stripeTokenId,
        }, 
        function(err, charge) {
          console.log(charge)
          res.json({ message: `Your purchase is successful. Your total is $${total / 100}! \r Your Charge ID: ${charge.id}` })
        }).catch(function() {
        console.log('Charge Fail')
        res.status(500).end()
      })

    }
  })
})


app.listen(3000)

