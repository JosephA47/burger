// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var changeDevour = $(this).data("changeDevour");

    var newDevourState = {
      devoured: changeDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed sleep to", changeDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".search-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var showBurger = {
      burger: $("#ca").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "GET",
      data: showBurger
    }).then(
      function() {
        console.log("search burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
