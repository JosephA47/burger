$(function() {
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

  $(".newBurger-form").on("submit", function(event) {
    event.preventDefault();
    var burgerInput = $("#burgerName").val().trim()
    console.log(burgerInput)

    var createBurger = {
      burgerName: burgerInput,
      devoured: 0
    }

    $.ajax("/burgers/insert", {
      type: "POST",
      data: createBurger
    }).then(
      function() {
        console.log(createBurger);
        location.reload()
      }
    );
  })
});
