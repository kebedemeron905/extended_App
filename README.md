# E-commerce App Using Node.JS and Stripe Checkout

![Homepage](images/image1.png)

## Application Overview 

Utilizing the [Charges](https://stripe.com/docs/api/charges) and [Tokens](https://stripe.com/docs/api/tokens) APIs, this Express app allows users to accept payments through Stripe [Checkout](https://stripe.com/docs/payments/checkout). Upon a successful payment, the app returns a JSON response displaying the total amount of the charge and Stripe charge Id.

#### Design Flow:

* When a user clicks on the ‘Add to Cart’ button, selected items will be added to a cart at the bottom of the page. Users can modify the item quantity,  remove the item, or add additional items. 

![Add to Cart](images/image2.png)


#### Libraries Used :

* [EJS](https://ejs.co/):
* [Express](https://expressjs.com/):
* [Strip](https://stripe.com/docs/development/quickstart):


#### Run App Locally


1. Clone app from Github

```
https://github.com/kebedemeron905/express-stripe.git
```


2. Install dependencies

```
npm install --save express ejs stripe
```

3. Run the application

```
node server.js
```

4. Go to `localhost:3000` to make add items to cart, checkout, and receive payment confirmation

## Design Approach



## Language/Frameworks Used



## How to Extend App with Stripe