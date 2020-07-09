# E-commerce App Using Node.JS and Stripe Checkout

## Application Overview 

Utilizing the [Charges](https://stripe.com/docs/api/charges) and [Tokens](https://stripe.com/docs/api/tokens) APIs, this Express app allows users to accept payments through Stripe [Checkout](https://stripe.com/docs/payments/checkout). Upon a successful payment, the app returns a JSON response displaying the total amount of the charge and the Stripe charge Id.

#### Design Approach:

1. When a user clicks on the ‘Add to Cart’ button, selected items get added to the cart at the bottom of the page. Users can modify item quantity, remove item, or add additional items.

![Add to Cart](images/image2.png)

2. Once the user finalizes the items in the cart, he/she clicks the ‘Checkout’ button. This prompts the user to enter his/her payment information in the Stripe Checkout pop-up. The Checkout pop-up will then collect the user’s information and send it to Stripe. Stripe will parse this information, tokenize it, and send the token to the server created in this sample application. Using the token along with the secret API key, we then create charges on the server. After a charge is created, we can always confirm that the total amount the user paid is equivalent to the amount they are being charged through the Stripe Dashboard.


![Enter Payment Info](images/image3.png)

</b>
</b>
</b>

3. The user will receive a payment confirmation displaying the total amount of the charge and the Stripe charge Id.

![Payment Confirmation](images/image4.png)

</b>
</b>
4. When a user clicks OK, the cart resets to $0. 

</b>
</b>



### Run App Locally:


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

4. Go to `localhost:3000` to add items to cart, checkout, and receive payment confirmation

</br>
</br>

## Language/Frameworks Used

* [EJS](https://ejs.co/)
* [Node.js](https://nodejs.org/en/about/)
* [Express](https://expressjs.com/)
* [Stripe](https://expressjs.com/)

Node.js allows me to build server-side applications in JavaScript. Thus, it was my language of choice. I chose Express as my web framework for multiple reasons: it is a minimalist framework; it is the most common framework used for developing Node.js; it makes Node.js app development fast; and it easily integrates with different template engines like EJS. Express also integrates well with Stripe. I'm using the Stripe library because it enables communication with the Charges and Tokens APIs. Lastly, I chose EJS as my template engine because it allows server side code in html.


## How to Extend App 

I want to extend this app with the intent of providing users a seamless and end-to-end payment experience. Features to include are, but not limited to, authentication, automatic emails with payment receipts, or a refund feature. 

