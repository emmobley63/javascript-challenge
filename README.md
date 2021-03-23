# javascript-challenge

I wanted to create a website that used javascript and d3 to interactively allow a user to filter through our data of sitings and return to the user their wanted criteria. 

First, I had to create a function that used d3 to locate the part of the Index page ("tbody"). The function would then clear all previous data via "tr" (rows), in case there was another siting added. Then it would append rows by loooping through mapped arrays of the data. The function, "makeTable" would append a "tr" (row) and then each individual column. 

We then used a second function "pullTable" to map the data into arrays and call our "makeTable" function.
