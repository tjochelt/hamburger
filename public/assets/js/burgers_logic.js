// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  console.log("we ready!");
  $(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newburger");
      console.log("hi", id, newDevour);
      // var newBurgerState = true;
      var newBurgerState = {
        devoured: !newDevour
      };

      console.log("you clicked button", id, newDevour);
      console.log("this is new burger statue", id, newBurgerState);

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(function() {
        console.log("burger is now", newDevour);
        // Reload the page to get the updated list
        location.reload();
      });
    });

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      var newBurger = {
        name: $("#ca")
          .val()
          .trim(),
        devoured: $("[name=devoured]:checked")
          .val()
          .trim()
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });

    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
      console.log("nice try, sonny - think you're gonna delete me?");
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });
});
