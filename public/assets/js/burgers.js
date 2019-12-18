$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var changeDevour = $(this).data("changeDevour");

    var newDevourState = {
      devoured: changeDevour
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed sleep to", changeDevour);
        location.reload();
      }
    );
  });

  $("")

  $(".search-form").on("submit", function(event) {
    event.preventDefault();
    var id = $(this).data("#id")

    $.ajax("/api/burgers/:id", {
      type: "GET",
      data: id
    }).then(
      function() {
        console.log("search burger");
        location.reload();
      }
    );
  });
});
