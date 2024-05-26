# MP Burger 🍔

### Project link running at Vercel: https://mp-burguer-place.vercel.app/

<br />

**MP Burger** is a burger restaurant developed using React and a JSON server to store orders when there is one in the cart. No highly professional server was created, the intention was just to store the requests somewhere, without me worrying about creating a schema and storing them within a database.

The fictitious burger joint **opens at 6pm Brasília time** and it **closes at 11pm**, outside of this period it is **not** possible to place any orders, as the establishment is closed. In this project, a CNPJ and an address, both random, were generated for the burger restaurant.

I have no idea about the price of food, all the values ​​were generated with the price and quantity that came from my head, the images of the snacks, dishes, drinks and desserts were generated with artificial intelligence (AI).

<hr />

### Categories
We have several food categories, including: "**Appetizers**", "**Standards**", "**Chicken**", "**Handmate**", "**Portions**", "**Drinks**" and "**Desserts**"**.**

#### Appetizers
Small portions, as if it were really a restaurant starter. Think of them as an "option" to include in the meal.

#### Standards
Standard snack that everyone knows, the famous X Bacon, X Salad, X Ham, among others...

#### Chicken
The same as the standard snack, however, instead of beef it's chicken, these snacks are called Galis something, be it Galis Bacon, Galis Tudo, whatever.

#### Handmate
In these options, artisanal (or gourmet) burgers are demonstrated, which consequently have the highest price due to their special preparation method and the high selection of their ingredients.

#### Portions
Unlike the starters, this section features some dishes that can be served as a meal, as most of them are usually accompanied by rice, beans and salad, among other options.

#### Drinks
Self-explanatory, here it shows the drinks available for consumption at the burger restaurant. A warning was placed when selecting an alcoholic drink, alerting the user that the establishment does not sell this type of drink to anyone under 18 years of age.

#### Desserts
Some dessert options. Only a pudding and a passion fruit mousse were added, as the AI ​​couldn't make a petit-gateau at all.

**Note:** when clicking on the category in the navigation menu that is fixed on the screen, you will be taken to where that category begins.

<hr />

### Searching for items
In the application header, we have a search field where you can search for the name of the items. The filter is **case insensitive**, that is, it does not consider lowercase and uppercase letters, if you search for "salad" or "Salad" or even "SALADA", it will not interfere, the filter will search for all items that have "salad" in its name and will show it on the screen to the user, it is up to them to choose which option they like most.

<hr />

### How to place an order
Placing an order is simple, just click on what you want to order and a modal will appear with some options. Each item has its own individual modal, with options exclusive to that item only. All items allow the user to write a note if they wish, for example: there is no need to fry the onion too much.

Some items have additional values ​​that are deducted from the final value of your order. The values ​​that decrease the final value are in red, those that increase are in green and those that do not change the value are written exactly that in gray. The total order value is updated in real time and this is the value that goes to your cart when you complete it.

Each completed field is stored in local storage, meaning that, even if the user reloads or closes the page, the order he made when clicking "**Add to cart**" (which is only available if the establishment is open) remains. When doing this, the page is reloaded and the "**Cart**" option appears to the user in the bottom right corner of the screen, allowing the user to continue placing more orders or not.

<hr />

### Finalizing the order
In the "**Cart**", you will have two fields: "**Review your order**" and "**Confirm your order**".

#### Review your order
Here all the items you had added will appear, with everything you ordered, their extras, the price of these extras and your comments. The price of extras is in yellow under "**Complements**", it can be a positive, negative value or there may even be no value. The final amount to be paid appears in green, just below the name of the dish. It is in this tab that the user will review their order and remove items from the cart if they wish.

#### Confirm your order
In this tab there is a form to fill out with some information, such as: "**Name**", "**Address**", "**ZipCode**", "**Neighborhood**", "**Reference point**", "**Complement**" and "**Payment method** ". Next to the field for filling in the delivery address, there is a checkbox "**I will pick up at the location**", when checking it, all information regarding delivery will be disabled, making the user only fill in the name and the form of payment. The mandatory fields are marked in red and also have a red asterisk, the ZipCode field for example, the user is required to write the ZipCode in the correct format, when this event happens, the field will turn green, this also applies to the other fields in the form. After everything happens, the cart is reset and another order can now be placed again.
If the user clicks on the "**Confirm order**" button located at the end of the form, before completing the mandatory fields, a message will appear alerting the user that there are still fields to be completed, the user is unable to complete the order. if he does not complete what is mandatory. If he has filled out everything and clicks the button, the button text will change and it will be disabled, a message will appear saying that the order was made successfully.

When the checkbox is selected, only the name, payment method and order are sent to the server. If it is not checked, all form items are sent.
