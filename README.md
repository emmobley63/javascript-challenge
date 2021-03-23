# javascript-challenge

I wanted to create a website that used javascript and d3 to interactively allow a user to filter through our data of sitings and return to the user their wanted criteria. 

First, I had to create a function that used d3 to locate the part of the Index page ("tbody"). The function would then clear all previous data via "tr" (rows), in case there was another siting added. Then it would append rows by loooping through mapped arrays of the data. The function, "makeTable" would append a "tr" (row) and then each individual column. 

We then used a second function "pullTable" to map the data into arrays and call our "makeTable" function.

In order to create a filter function, I needed input from the user and a button for the user to call my "datefilter" function with the new criteria. I used d3 to call the class of the button create an event on the filter button.

Within my called "datefilter" function, I used d3 to assign the user input to a variable. I then used this to check against the dates in my dataset. An if statement returns the filtered data to the user or a hidden error block appears below the filter data. If the date is correct the function calls the function "pullTable" with the newly created variable "datedata" that contains the filtered data. The error block is hidden until the user adds an incorrect date, and d3 is used to select the error block and change it's display attribute from "none" to "block."

Finally we call our "init" function to initialize the table data when the user first opens the page. The "init" funtion calls our previous "pullTable" function with the intial data.

Our data that I used in this was in the form of a javascript array of an array.

