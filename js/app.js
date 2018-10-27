$(function () {
    cuenta = 0;
    txtArray = ["Fast Delivery", "Best Price", "100% Safe", "24/7 Support"];
    setInterval (function () {
        $("#adv").fadeOut(500, function () {
            $(this).text(txtArray [cuenta % txtArray.length]).fadeIn(500);
        cuenta++;
        });
    }, 2000);
});