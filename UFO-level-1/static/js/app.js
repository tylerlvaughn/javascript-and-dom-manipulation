// From data.js
var tableData = data;

//console.log(tableData);
// Select the button using d3
var dateButton = d3.select("#filter-btn");
var tbody = d3.select("tbody");

// console.log(dateButton);

dateButton.on("click", function(){

    // Select the datetime input element html raw code
    var DateElement = d3.select("#datetime");

    // Get the value of the datetime input element
    var DateValue = DateElement.property("value");

    console.log("DateValue:",DateValue);
    // console.log(tableData);

    var filterDateData = tableData.filter(sighting => sighting.datetime === DateValue);

    console.log(filterDateData);

    // Clear any rows and cells
    tbody.html("");

    filterDateData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });


});
