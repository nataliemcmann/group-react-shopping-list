# React Shopping List

Isn't is the worst when you head to the store with a paper list but lose it in the parking lot or while you're walking down the aisle? Tired of looking at the list in the notes app on your phone, only to be uncertain whether you picked up an item or not?

Here's a simple shopping list app to solve all those pesky problems.

<insert screenschot>

## Technology:

- Postgres SQL and Postico
- React
- Express
- Node
- Material UI (https://mui.com/)

## Installation:

1. Make sure Postgres SQL and Postico are installed. Using Postico, create a database named `fs-react-shopping`.
2. Run the queries from `database.sql` to set up the database in Postico. 
3. Open your text editor of choice and run an `npm install` in your terminal
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal.
6. Upon running `npm run client`, a new browser tab will open for you!

## Usage: 

1. Add an item to the list using the form under the page header. You can type in the item name, add the quantity as a number, and the type of unit (lbs, bunch, bag, etc). Then hit the add button.
2. The items in your shopping list will display underneath the list controls. Each item will have a "Buy" button and a "Remove" button. 
    - The "Buy" button will mark your item as purchased (describe conditional render)
    - The "Remove" button will delete the item from the list
3. The list controls allow you to reset your list or clear it completely. Resetting the list changes all item statuses from purchased to not, allowing you keep frequently needed items on the list instead entering them for each shopping trip. Clearing the list removes all items from the list, so you start with a clean slate!