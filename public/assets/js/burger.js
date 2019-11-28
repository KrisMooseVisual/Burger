$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger")
                .val().trim(),
            devoured: 0
        };

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added Da New Burger");
            location.reload();
        });

    });

    $(".devourBurger").on("click", function (event) {
        event.preventDevault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Da Burger Devoured");
            location.reload();
        });
    });

    $("trashBurger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "delete",
            url: "api/burgers/" + id
        }).then(locatin.reload());
    });
});