//AJAX CALLING FOR BUTTON ACTIONS
$(function () {

    $(".create-form").on(submit, function (event) {
        event.precventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(), devoured: 0
        };

        //POST REQUEST
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New Burger Added");
            location.reload();
        })
    });

    //DEVOUR BURGER ONCLICK EVENT
    $(".eatDaBurger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredBurger = {
            devoured: 1
        };
        //PUT POST REQUEST AND RELOAD
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function () {
            console.log("Da Burger Devoured");
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