// from data.js
var tableData = data;

function init(data) {
    pullTable(data);
}


// YOUR CODE HERE!
keys = Object.keys(data[0]);
console.log(keys);

//if exists -> variable equal to filtered data 

//Otherwise I can manually generate them
function pullTable(tdata) {
    //clearing the table
    var datetime = tdata.map(item => item.datetime);
    var city = tdata.map(item => item.city);
    var state = tdata.map(item => item.state);
    var country = tdata.map(item => item.country);
    var shape = tdata.map(item => item.shape);
    var durationMinutes = tdata.map(item => item.durationMinutes);
    var comments = tdata.map(item => item.comments);
    makeTable(datetime, city, state, country, shape, durationMinutes, comments);
    // console.log(datetime);
    // console.log(city);
    // console.log(state);
    // console.log(country);
    // console.log(shape);
    // console.log(durationMinutes);
    // console.log(comments);
};
    
function makeTable(datetime, city, state, country, shape, durationMinutes, comments) {    
    var myTable = d3.select(".the-table");
    var tbody = myTable.select("tbody");
    // Clearing the table
    tbody.selectAll("tr").remove();
    var trow;    
    for (i=0; i < datetime.length; i++) {
            trow = tbody.append("tr");
            trow.append("td").text(datetime[i]);
            trow.append("td").text(city[i]);
            trow.append("td").text(state[i]);
            trow.append("td").text(country[i]);
            trow.append("td").text(shape[i]);
            trow.append("td").text(durationMinutes[i]);
            trow.append("td").text(comments[i]);
    };  
    
};

// Creating click action to execute datefilter on the "filter" button
filterclick = d3.select("#filter-btn");
filterclick.on("click", datefilter);
console.log(filterclick);

// test function for button working
// function test() {
//     console.log("It works");
// }


// Conditional for the filter function

// function sameDate(datetime, inputdate) {
//     return datetime.datetime === inputdate;
// };

function datefilter() {
    // Variable for the input date by the user
    var inputdate = d3.select(".form-control").node().value;
    // checking to make sure it exists
    console.log(inputdate);
    // Array to make sure that the date is in the data (if statement)
    var datetimecheck = tableData.map(item => item.datetime);
    // Variable to display error message or not
    var showreturn = d3.select(".datecheck");
    // Check if input date is in mapped dates from the data (boolean) to hide the error block
    if (datetimecheck.includes(inputdate)) {
        function sameDate(datetime) {
            return datetime.datetime === inputdate;
        };
        // pull data with the same date using filter and boolean function
        var datedata = tableData.filter(sameDate);
        console.log(datedata)
        // Call function with new data
        pullTable(datedata);
        // Hide the "datecheck-error" block
        showreturn.style.display = "none";
        console.log("date was right but didn't change the table or style")
    }  else {
        // Else return the error block 
        console.log("date was wrong but style didn't change")
        showreturn.style.display = "block";
    };
    // Reset the button so that they can search again
};

init(tableData);



function addNewRow(item) {
    myTable = "";
    // myTable += <tr>
        
    // </tr>
};
