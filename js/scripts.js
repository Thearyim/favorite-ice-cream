function getFormHtmlOptions(iceCreamFlavorArray) {
  var htmlFormOptions = "";
  iceCreamFlavorArray.forEach(function(flavor) {
    htmlFormOptions +=
    "<div class='form-group'>" +
    "<div class='checkbox'>" +
    "<label class='form-check-label'>" +
    "<input type='checkbox' value='" + flavor + "' class='form-check-input'>" +
    flavor +
    "</label>" +
    "</div>" +
    "</div>";
  });
  htmlFormOptions += "<button type='submit' name='showFlavorsButton'>Show Flavors</button>";
  return htmlFormOptions;
}

$(document).ready(function() {
  $("#result").hide();
  var flavors = ["Strawberry", "Chocolate", "Vanilla", "Butter Pecan", "Mint Chocolate Chips", "Fudge Brownie", "Coffee Toffee"];
  var formOptions = getFormHtmlOptions(flavors);
  $("form#iceCreamForm").html(formOptions);
  $("form#iceCreamForm").submit(function(event) {
    showFlavors();
    event.preventDefault();
    });
});

function showFlavors() {
  var selectedFlavors = $("form#iceCreamForm input[type=checkbox]:checked");
  var flavorListItems = "";

  for (i = 0; i < selectedFlavors.length; i++){
    flavorListItems += "<li>" + selectedFlavors[i].value + "</li>";
  }

  $("#resultList").html(flavorListItems);
  $("form#iceCreamForm").hide();
  $("#result").show();

}
