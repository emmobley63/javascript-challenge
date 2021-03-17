// from data.js
function init() {
    pullTable();
}
var tableData = data;

// YOUR CODE HERE!
keys = Object.keys(data[0]);
console.log(keys);

// Trying to create a for loop to iterate through and create my arrays for me
// for (i=0; i < keys.length; i++) {
//     var ${keys.i} = data.map(item => item.key.i);
// };


//if exists -> variable equal to filtered data 

//Otherwise I can manually generate them
function pullTable() {
    //clearing the table
    var datetime = data.map(item => item.datetime);
    var city = data.map(item => item.city);
    var state = data.map(item => item.state);
    var country = data.map(item => item.country);
    var shape = data.map(item => item.shape);
    var durationMinutes = data.map(item => item.durationMinutes);
    var comments = data.map(item => item.comments);
    makeTable(datetime, city, state, country, shape, durationMinutes, comments);
    console.log(datetime);
    console.log(city);
    console.log(state);
    console.log(country);
    console.log(shape);
    console.log(durationMinutes);
    console.log(comments);
}
    
function makeTable(datetime, city, state, country, shape, durationMinutes, comments) {    
    var myTable = d3.select(".the-table");
    var tbody = myTable.select("tbody");
    var trow;    
    for (i=0; i < datetime.length; i++) {
            trow = tbody.append("tr");
            trow.append("td").text(datetime[i]);
            console.log(datetime[i]);
            trow.append("td").text(city[i]);
            trow.append("td").text(state[i]);
            trow.append("td").text(country[i]);
            trow.append("td").text(shape[i]);
            trow.append("td").text(durationMinutes[i]);
            trow.append("td").text(comments[i]);
    };  
    
};

init();
console.log(myTable);


function addNewRow(item) {
    myTable = "";
    // myTable += <tr>
        
    // </tr>
};
