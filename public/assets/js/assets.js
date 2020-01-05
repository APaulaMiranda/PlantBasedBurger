console.log("yolo")

$(function () {

    $(".devour-the-burger").on("click", function (event) {
        var id = $(this).data("id");

        var newBurger = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/plantBurgers/" + id, {
            type: "PUT",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });


    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/plantBurgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
