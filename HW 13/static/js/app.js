// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach(function(entry) {
    var newRow = tbody.append("tr");
    Object.entries(entry).forEach(function([key, value]) {
        newRow.append("td").text(value);
    });
});

var dateInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");

var inputArray = [dateInput, cityInput, stateInput, countryInput, shapeInput];

inputArray.forEach(function(field) {
    field.on("click", function() {
        var dateValue = dateInput.property("value");
        var cityValue = cityInput.property("value");
        cityValue = cityValue.toLowerCase();
        var stateValue = stateInput.property("value");
        stateValue = stateValue.toLowerCase();
        var countryValue = countryInput.property("value");
        countryValue = countryValue.toLowerCase();
        var shapeValue = shapeInput.property("value");
        shapeValue = shapeValue.toLowerCase();
        tbody.text("");
        tableData.forEach(function(entry) {
            if (entry['datetime'] === dateValue || dateValue === "") {
                if (entry['city'] === cityValue || cityValue === "") {
                    if (entry['state'] === stateValue || stateValue === "") {
                        if (entry['country'] === countryValue || countryValue === "") {
                            if (entry['shape'] === shapeValue || shapeValue === "") {
                                var newRow = tbody.append("tr");
                                Object.entries(entry).forEach(function([key, value]) {
                                    newRow.append("td").text(value);
                                });
                            };
                        };
                    };
                };
            };
        });       
    });
});