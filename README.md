# demo

To do:

Technical Requirements

You will use jquery traversal methods and jquery animation to complete this assignment. You should work with the html and css that is provided. You are not allowed to modify the html for this project.

Logic

(Note: Examine the html and css. You will find for all images, opacity is set to 0 to "hide" them)

1. When a user clicks on "Start a new game" button

Show all the images in all the square for about 5 seconds
set the message in the div with id="messages" to say "Let's begin!!! Remember the cards...".
After 5 seconds, hide all the images
set the message in the div with id="messages" to say "Click on any 2 cards to find a match". 

2. When a user click on a blue square , the image in that square should become visible.

3. When the 2nd blue square is clicked, check to see if the images match.

If the 2 images match:

a) leave the images visible.

b) set the message to say "Hurray!!! Match found...".

If the 2 images do not match:

a) hide the images

b)  set the message to say "Oops!!! Please try again...".

4. Keep track of how many matched pairs are found. When all 6 image pairs are found,  set the message in the div with id="messages" to say "All matches found. Game over!!!".

5. Nothing happens when the user clicks on an open square (square with image visible).

6. Bonus

Adding the rotation animation will fetch you 10 bonus points. However it is optional so you won't lose points if you don't do it.


PSEUDOCODE

Note: Write all jq code inside $(function{}) except functions
Write $function(){}) inside your script file
•	Write all code to declare and initialize global variables inside $(function() {});
•	Also add event listener code here inside $(function(){});
1.	We will write code to attach click event to all boxes:
a.	Attach a click event to all “div”s under the div with id=”container”. Look at jquery selector (w3schools) or any of your jQuery labs to find out how to do it.
b.	The click event will call a function called flipcard() and send the information about the div that was clicked (hint: use $(this))
c.	Logic to turn the image visible will be inside flipcard() function
2.	We will write code to attach click event to the “Start Game” button:
a.	Attach a click event to the “Start Game button”
b.	The click event will call a function called StartGame()
When a user clicks on any blue square, the image in that square should become visible.
Declare a function called flipCard(elem). Elem is the parameter that was passed to us from the click event. Elem will point to the “div” that was clicked. Inside this function:
We want to identify the img and make it visible:
•	You can use jquery traversal methods to do that with respect to the parameter “elem” that is passed to flipcard() function (example - parent() or children() or siblings() )
•	Using .css() set the opacity of the image to 1.
•	Call checkForWinner(elem)
3. When the 2nd blue square is clicked, check to see if the images match.
Show the image
Declare a method called checkForWinner(elem).
We want to identify if there is a match between the 2 images that were clicked:
•	In order to compare if 2 images match, first you need to save the images that were clicked.
•	You can do so by having 4 variables called curImage, curDivId, prevImage and prevDivId in GLOBAL scope and initialize them to “”. (after $function(){ statement)
•	You can use a variable called “nbrMatches” in GLOBAL scope and set to it 0. This will be used to track the number of matching pairs.
•	Using jquery, 
o	capture the “src” attribute of the image and save it to prevImage variable if prevImage is equal to “”. Capture “id” attribute and save to prevDivId
o	If prevImage is not equal to “”, then that means, this is not the first image that is clicked. So leave prevImage alone and capture the “src” attribute of the image and save it to curImage variable. Capture “id” attribute and save to curDivId.
If the 2 images match:
a) leave the images visible.
b) set the message to say "Hurray!!! Match found...".
o	If prevImage is not “” and curImage is not “”, then compare them to see if they match
	If they match, then yay!
•	Set messages to “Hurray!!! Match found…”
Keep track of how many matched pairs are found. When all 6 image pairs are found,  set the message in the div with id="messages" to say "All matches found. Game over!!!".
•	Increment nbrMatches by 1
•	check if nbrMatches is equal to 6. If so set the messages to “Game over”

If the 2 images do not match:
a) hide the images
b)  set the message to say "Oops!!! Please try again...".
	If they don’t match, then
•	Flip the 1st card by changing the opacity of div matching prevDivId
•	Flip the 2nd card by changing the opacity of the div matching curDivId
•	Set prevImage, curImage, prevDivId and curDivId to “” (reset everything)
5. Nothing happens when the user clicks on an open square (square with image visible).
1.	When a user clicks on "Start a new game" button
a.	Show all the images in all the square for about 5 seconds
b.	set the message in the div with id="messages" to say "Let's begin!!! Remember the cards...".
c.	After 5 seconds, hide all the images
d.	set the message in the div with id="messages" to say "Click on any 2 cards to find a match". 
Declare a function called StartGame()
Inside this function
Get all images on the page
For all the images
•	Use jquery animate function to set the opacity to 1 for 5 seconds (animate) and Set the “message” to “Let’s begin!!! Remember the cards…”
•	Then set opacity to 0 at the end of 5 seconds.
•	Bonus: Adding the rotation animation will fetch you 10 bonus points. However it is optional so you won't lose points if you don't do it.
•	You can add this as a “step” to the above animation to rotate the images.
