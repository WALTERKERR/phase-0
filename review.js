// Pseudocode:

// 1. To create new list, just create an object with a few different items with different values for each value.

// 2. To add an item to the list build a function that can add an item to the list.  The function should take a key and value and check to see if the item already exists in the list.  If it does, an error message should display.  If it does not, the item should be added, along with requisite quantity.

// 3. Then, a similar function should be created for deleting items.  The function should take only a key, not a value. Similar to the adding function, the delete function should check to see that the item exists.  If the item exists, the function should delete the item.  If it does not exist, the function should display an error message indicating that there is no item to delete.

//4.  Similarly, with updating a list, the function should take both a key and value.  If the key does not exist, an error message should display indicating that there is no key to update.  If the key does exist, the item should be updated.  You can update simply by re-assigning values for the key name.

//5. Finally, to print, develop a function that iterates through each item and prints each line separately indicating the item number, colon, number, and then items to make the list look nicer.  Consider adding text to the head to make it look nicer.

var grocery_list = {
  "milk": 1,
  "juice": 2,
  "eggs": 12,
  "coffee": 5, 
}

//Initial Solution

// var adding = function(grocery_list) {
// for (var item in grocery_list) {
//   if (grocery_list.hasOwnProperty(item)) {
//       grocery_list[item] = quantity;
//   else {
//     console.log("failure message here")
//   }
// }
// }

// var delete = function(grocery_list) {
// for (var item in grocery_list) {
//   if (grocery_list.hasOwnProperty(item)) {
//       delete.grocery_list[item];
//   else {
//     console.log("failure message here")
//   }
// }
// }

// var update = function(grocery_list) {
// for (var item in grocery_list) {
//   if (grocery_list.hasOwnProperty(item)) {
//       grocery_list[item] = quantity;
//   else {
//     console.log("failure message here")
//   }
// }
// }


// adding("pepper")

// console.log(grocery_list)

// Refactored Solution


function adds(item, quantity) {
  if (grocery_list.hasOwnProperty(item)){
    console.log('You already have this item, you cannot add it to your list.')}
  else {
    grocery_list[item] = quantity;
    console.log ('You added ' + item + " to your list."  );
    print_list(grocery_list)
}
}

function deletes(item) {
    if (grocery_list.hasOwnProperty(item)) {
      delete grocery_list[item]; 
      console.log ('You removed ' + item + " from your list."  );
      print_list(grocery_list);}
      else {
        console.log ("Sorry, you must add this item to your list before you can delete it!")
      }
}

function updates(item, quantity) {
  if (grocery_list.hasOwnProperty(item)){
    grocery_list[item] = quantity;
    console.log ('You updated ' + item + " on your list."  );
    print_list(grocery_list);}
  else {
    console.log('Sorry, you must add this item before you can update it.')
    }
}

function print_list(object_hash){
var value;
      console.log("These items are on your grocery list:")
for(var key in grocery_list) {
    value = grocery_list[key]
    console.log(key.toUpperCase() + ": " + value + " items");
}
}
  

adds("tea",4)
deletes("milk")
updates("juice",6)
print_list(grocery_list)



//Reflection:  What concepts did you solidify in working on this challenge? (reviewing the passing of information, objects, constructors, etc.)

// This challenge helped me solidify the basics of javascript -- adding elements to an object, deleting those elements, etc.  I also played with the 
// .hasOwnProperty method to check within an object if the element exists within the object.  Finally, I experimented with passing
// information to objects and between functions.

// // What was the most difficult part of this challenge?
// The most difficult part was thinking through the challenge.  At first, I thought that I needed to iterate through the object for each function to see if the
// given item was already within the object,
// but once I started using the hasOwnProperty method, I realized I didn't need to do that.

// Did an array or object make more sense to use and why?
// An object made much more sense because each element had a corresponding value.  In order to keep this key,value relationship, I needed to use an object.




