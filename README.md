![Example image](solution/images/preview.png)

# Javascript Exercise Webstore

In this exercise, it's your task to make the webshop interactive. Aka: make the filters work and the products show up.
Now, I'll admit, this is not the easiest. So don't be worried if some things don't work.

This is also actually something you would most likely do in a framework like React, but sadly enough you'll have to wait until year 3
to learn that in school. Thus, we're gonna do it the long and imperative way.

I've split this exercise into different levels based on what I think is easier and harder. See how far you can get!

Tip: sometimes things seem really big and complex. Write down the logic with comments first. Start small, don't overdo it. Build up slowly.


<br/>
<br/>

## |--- LEVEL 0: FAMILIARIZE ---|

### Step 1:

Open the HTML file in the solution folder in your browser and take a look. This is ideally how everything should work.
Try clicking on the different filters and so on.

Keep in mind not everything is implemented (only in stock, closing filter windows ...)


### Step 2:

Open the exercise HTML file in your IDE (VS Code, IntelliJ ...).
Take a look at the structure. You don't have to understand everything, but I've written comments near the important parts.
Familiarize yourself a little bit. A good understanding of the structure goes a long way.

**You will not have to edit the HTML or CSS files. Only the .js files in the js folder**


### Step 3:

Take a look at the Javascript in the exercise folder. I used an OOP approach and gave you some templates to start.
If you want to do a completely different approach feel free. Anything is allowed.


<br/>
<br/>

## |--- LEVEL 1: DISPLAY THE PRODUCTS ---|






shrok

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠴⠊⠉⠀⠀⠀⠀⠀⠀⠈⠁⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠇⠀⠀⠀⠀⠀⠀⠀⢀⣴⣶⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⠿⠶⣄⡈⠂⠔⠀⠀⠈⠀⠀⠈⠉⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡘⡀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡆⠀⠀⠀⠀⠒⣉⣉⠛⢿⣿⣿⣄⠀⢀⣠⣤⣶⡾⠛⠋⠙⠁⣀⠔⠁⣠⣬⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠇⠀⠀⠀⠐⠁⢞⣯⠎⣸⠿⠛⠉⠀⠘⢿⣟⢭⣭⡅⠀⠀⠀⠀⡠⠚⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣀⡀⠀⠀⢀⣠⣤⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⠜⠻⠃⠀⠀⠀⠰⠀⠀⠀⠀⣠⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣀⣀⣤⣼⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⣠⣤⣤⣤⣦⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣶⣶⣿⣿⣿⡀⠀⠀⠀⠀⠀
⠠⠔⠒⠉⠉⠀⠈⠉⢿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢀⣼⠟⠛⠛⠛⠛⠻⢿⣷⣤⣄⣀⣠⣤⡶⠦⠤⡀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠟⠛⠉⠁⠒
⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⠀⠀⢀⠞⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠛⠉⠁⠀⠀⠀⠈⢳⣆⠀⠀⢸⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠀⠀⠈⠀⠐⣶⣿⣿⠿⣿⠖⢦⣄⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠻⠀⠀⢸⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠸⣿⣿⣇⣿⣀⡈⠀⠀⠋⠉⠙⠛⠛⢲⣦⠤⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣷⣶⣾⣶⣿⡿⠃⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠻⣿⣄⡉⠙⠛⠛⠛⠛⢻⡿⠋⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠈⠉⠛⠻⠷⠶⠶⠒⠉⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠲⣤⣤⣤⣤⣴⣾⣿⡿⠟⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠉⠉⠉⠉⠉⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⠢⠤⠤⠤⠤⠔⠊⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀
⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀
⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀
⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠛⠛⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠛⠛⠋⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
