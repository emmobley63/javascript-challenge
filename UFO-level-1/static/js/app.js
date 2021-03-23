// from data.js
var tableData = data;

function init(data) {
    pullTable(data);
}

// Creating arrays to loop through and call the table building function
function pullTable(tdata) {
    var datetime = tdata.map(item => item.datetime);
    var city = tdata.map(item => item.city);
    var state = tdata.map(item => item.state);
    var country = tdata.map(item => item.country);
    var shape = tdata.map(item => item.shape);
    var durationMinutes = tdata.map(item => item.durationMinutes);
    var comments = tdata.map(item => item.comments);
    makeTable(datetime, city, state, country, shape, durationMinutes, comments);
};
    
function makeTable(datetime, city, state, country, shape, durationMinutes, comments) {    
    // Selecting the table and the tbody
    var myTable = d3.select(".the-table");
    var tbody = myTable.select("tbody");
    // Clearing the table
    tbody.selectAll("tr").remove();
    var trow;    
    for (i=0; i < datetime.length; i++) {
            // Appending a row
            trow = tbody.append("tr");
            // Appending the data to the row
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


function datefilter() {
    // Variable for the input date by the user
    var inputdate = d3.select(".form-control").node().value;
    // checking to make sure it exists
    console.log(inputdate);
    // Array to make sure that the date is in the data (if statement)
    var datetimecheck = tableData.map(item => item.datetime);
    // Variable to display error message or not
    var showreturn = d3.select(".datecheck");
    console.log(showreturn);
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
        showreturn.style("display", "none");
    }  else {
        // Else return the error block 
        showreturn.style("display", "block");
    };
    // Reset the button so that they can search again
};

init(tableData);

};
