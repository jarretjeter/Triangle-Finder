function matchSides() {
  const valueOne = parseInt($("#side1").val());
  const valueTwo = parseInt($("#side2").val());
  const valueThree = parseInt($("#side3").val());

  if (valueOne === valueTwo && valueOne === valueThree) {
    $("#equilateral").show();
    $("#isosceles").hide();
    $("#scalene").hide();
  }
    else if (valueOne === valueTwo && valueOne !== valueThree || valueOne === valueThree && valueOne !== valueTwo) {
      $("#isosceles").show();
      $("#equilateral").hide();
      $("#scalene").hide();
    }
    else if (valueTwo === valueThree) {
      $("#isosceles").show();
      $("#scalene").hide();
      $("#equilateral").hide();
    }
    else {
      $("#scalene").show();
      $("#isosceles").hide();      
      $("#equilateral").hide();
    }
}


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
  event.preventDefault();

  matchSides();
  });
});



