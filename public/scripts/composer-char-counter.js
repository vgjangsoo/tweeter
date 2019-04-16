// make sure the DOM is loaded.
$(document).ready(function() {
  // --- our code goes here ---

  //when user inputs in textarea.
  $("textarea").on("input", function() {
    // get the length of input.
    let counterNumber = $(this).val().length;
    let newCounter = 140 - counterNumber;
    //update the counter.
    $(".counter").text(newCounter);
    //If they exceed the 140 limit, the counter should appear red.
    if(newCounter < 0) {
      $(".counter").css("color", "red");
      // and counter becomes black when they erase input texts.
    } else {
      $(".counter").css("color", "black");
    }

  });

});