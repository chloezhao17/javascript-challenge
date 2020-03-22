// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var filterInput = {
  datetime: "",
  city: "",
  state: "",
  country: "",
  shape: ""
};

d3.selectAll(".form-control").on("keyup", () => {
  filterInput[d3.event.target.id] = d3.event.target.value;
});

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each object
// // Step 2:  Use d3 to append one table row `tr` for each report object
// // Step 3:  Use `Object.entries` to console.log each report value
// // Step 4: Use d3 to append 1 cell per report value
// // Step 5: Use d3 to update each cell's text
function buildTable(d) {
  d3.select("tbody").html("");
  d.forEach(ufoReport => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

button.on("click", function() {
  var filteredData = tableData.filter(
    filters =>
      (filterInput["datetime"] == filters.datetime ||
        filterInput["datetime"] == "") &&
      (filterInput["city"] == filters.city || filterInput["city"] == "") &&
      (filterInput["state"] == filters.state || filterInput["state"] == "") &&
      (filterInput["country"] == filters.country ||
        filterInput["country"] == "") &&
      (filterInput["shape"] == filters.shape || filterInput["shape"] == "")
  );
  // }

  console.log(filteredData);
  buildTable(filteredData);
});
buildTable(tableData);

// Get the input field
var input = document.getElementById("inputForm");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("submit", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  console.log("click");
  // Trigger the button element with a click
  document.getElementById("filter-btn").click();
});
