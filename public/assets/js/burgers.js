//AJAX CALLING FOR BURGER ADD
$(function () {

    //DEVOUR BURGER ONCLICK EVENT
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");

        var devouredBurger = $(this).data("devouredBurger");

        var devouredState = {
            devoured: devouredBurger
        };

        //PUT POST REQUEST AND RELOAD
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger Devoured"), devouredBurger;
            //PAGE RELOAD TO UPDATE BURGER LIST
            location.reload();
        });
    });

    $("#.change-form").on("submit", function (event) {
        event.precventDefault();


        var newBurger = {
            burger_name: $("#burgerNew").val().trim(), devoured: 0
        };
        //POST REQUEST TO BURGERS_DB
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New burger created");
            location.reload();
        })
    });

    //TRASH BURGER ONCLICK EVENT TO DELETE BURGER
    $(".trash-burger").on("click", function (event) {
        var id = $(this).data("id")

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(function () {
            console.log("Burger Deleted", id);
            location.reload();
        }
        );
    });
});