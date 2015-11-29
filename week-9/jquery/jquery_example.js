// U3.W9:JQuery


// I worked on this challenge [by myself, with: ].
// This challenge took me [#] hours.

$(document).ready(function(){

//RELEASE 0:
  //link the image (see HTML)

//RELEASE 1:

  //Link this script and the jQuery library to the jQuery_example.html file and analyze what this code does.

$('body').css({'background-color': 'pink'});

//RELEASE 2:
  //Add code here to select elements of the DOM
foobar = $('h1')

//RELEASE 3:
  // Add code here to modify the css and html of DOM elements



$('h1:first').css({
    "color": "blue",
    "border": "1px solid black",
    "visibility": "visible"
}).html("Island Foxes");

//RELEASE 4: Event Listener
  // Add the code for the event listener here

    
  $('img').on('mouseover', function(e){
      e.preventDefault()
    $(this).attr('src', 'http://cdn2.arkive.org/media/E3/E30E3601-D986-46EE-B8BB-070248581318/Presentation.Large/Island-fox-sitting-on-rock.jpg');
  });
  
 $('img').on('mouseout', function(e){
      e.preventDefault()
    $(this).attr('src', 'http://devbootcamp.com/assets/img/devbootcamp-logo-new.png')           
 });
    

})
//RELEASE 5: Experiment on your own


 $('img').on("click", function(){
      
      $('img').animate({width: 100}, 1000, function(){});


}); // end of the document.ready function: do not remove or write DOM manipulation below this. // end of the document.ready function: do not remove or write DOM manipulation below this.


//What is jQuery?

// JQuery works with HTML and CSS to manipulate and animate objects that HTML and CSS might otherwise be unable to do.
// JQuery is javascript based and makes it easy to manipulate DOM objects.

// What does jQuery do for you?
// JQuery makes it easy to animate and manipulate objects.  Whereas HTML and CSS are relatively static, JQuery gives you 
// the flexibility to have elements change and to add in real-time elements to the HTML.

// What did you learn about the DOM while working on this challenge?
// That the DOM can be manipulated by the client and in real-time!  I had previously thought it to be relatively fixed, but
// working with JQuery shows how easy it is to manipulate the DOM.





