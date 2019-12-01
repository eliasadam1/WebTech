$(document).ready(function()  {

    $("#content").load('../home.html');

    $("#cars").click(function () {
        navigate("cars");
    })
    $(document).on ("click", "#manufacturers", function () {
        navigate('manufacturers');
    });
    $(document).on ("click", "#newcar", function () {
        navigate('newcar');
    });
    $(document).on ("click", "#newmanufacturer", function () {
        navigate('newmanufacturer');
    });
    $(document).on ("click", "#homepage", function () {
        navigate('homepage');
    });
    $(document).on ("click", "#clickableTr", function () {
        $("#manufacturertable td").slideToggle();

    });

    $(document).on ("click", "#clickableTr", function () {
        $("#carstable td").slideToggle();

    });

    $(document).on ("click", "#homebutton", function () {
        $("#menuBar").fadeIn();
        $("#menu").slideUp();

    });
});
