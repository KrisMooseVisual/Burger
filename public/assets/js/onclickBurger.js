//AJAX CALLING FOR BUTTON ACTIONS
$(document).ready(function () {

    $("#create-form").on("submit", function (event) {
        event.precventDefault();

        var makeBurger = {
            burger_name: $("#newBurger").val().trim()
        };

        //POST REQUEST
        $.ajax("/api/burgers", {
            type: "POST",
            data: makeBurger
        }).then(function () {
            console.log("New burger made");
            location.reload();
        })
    });

    //DEVOUR BURGER ONCLICK EVENT
    $(".eatDaBurger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr("data-id");
        var devouredBurger = {
            devoured: 1
        };
        //PUT POST REQUEST AND RELOAD
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function () {
            console.log("Burger Devoured");
            location.reload();
        });
    });

    //TRASH BURGER ONCLICK EVENT TO DELETE BURGER
    $(".trashburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id")

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});