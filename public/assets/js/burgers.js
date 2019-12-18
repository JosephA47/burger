$(function() {
  $(".search-form").on("submit", function(event) {
    event.preventDefault();
    var id = $(this).data("#id")

    $.ajax("/burgers/:id", {
      type: "GET",
      data: id
    }).then(
      function() {
        console.log("search burger");
        location.reload();
      }
    );
  });

  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");

    var newDevourState = {
      devoured: 1
    };
    $.ajax("/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed sleep to", changeDevour);
        location.reload();
      }
    );
  });

  $(".add-burger").on("submit", function(event) {
    event.preventDefault();
    var createBurger = {
      burgerName: $("#burger").val().trim(),
      devoured: false
    }

    $.ajax("/burgers", {
      type: "POST",
      data: createBurger
    }).then(
      function() {
        console.log("burger created");
        location.reload();
      }
    );
  })
});
