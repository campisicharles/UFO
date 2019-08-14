// from data.js
var sightings = data;

// YOUR CODE HERE!
// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Loop through the sightings and build the table
// tried to do this wihout the arrows, couldn't get it to work..
// Used Day 3, Ex 3 as the template - #5
sightings.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//TABLE COMPLETE _ PART II


  var button = d3.select("#filter-btn");

  button.on("click", function() {
  
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  

    var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);

    // Took me asking for help to figure out I had to redefine these variables and clear the HTML
    // Had everything going corretly to the console.log, but couldn't get it into the table
    // Was told to make the table building a function and then I wouldn't have to do this over, I could simply call it 
    // not 100% sure I could do that, but I'll work on that
    var tbody = d3.select("tbody");

    var table = d3.select("table");
    
    table.attr("class", "table table-striped");

    tbody.html("");

    //I had the below info and couldn't figure out why it wasn't populating the table - hence the previous comment

    filteredData.forEach((filter) => {
      var row = tbody.append("tr");
      Object.entries(filter).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

    });
