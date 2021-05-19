var user = {
    name: "new_user",
    pw: "123456789"
}

var username = $("#username");
var password = $("#password");

var tacnoUsername = $("#tacnoUsername");
var tacnoPassword = $("#tacnoPassword");
var netacnoUsername = $("#netacnoUsername");
var netacnoPassword = $("#netacnoPassword");

username.keyup(function(e) {
    if (e.keyCode === 13) {
        login();
    }
})
password.keyup(function(e) {
    if (e.keyCode === 13) {
        login();
    }
})

$("#login").click(login)

function login() {
    var usernameVal = username.val();
    var passwordVal = password.val();
    if (usernameVal === user.name && passwordVal === user.pw) {
        username.removeClass("greska");
        password.removeClass("greska");
        username.addClass("ispravno");
        password.addClass("ispravno");
        $("p").text("Successful login!")
        tacnoUsername.show();
        tacnoPassword.show();
        netacnoUsername.hide();
        netacnoPassword.hide();
    } else if (usernameVal === user.name && passwordVal != user.pw) {
        username.removeClass("greska");
        password.removeClass("ispravno");
        username.addClass("ispravno");
        password.addClass("greska");
        tacnoUsername.show();
        tacnoPassword.hide();
        netacnoUsername.hide();
        netacnoPassword.show();
        if (passwordVal == "") {
            $("p").text("*please, enter password")
        } else {
            $("p").text("*please, enter valid password")
        }
    } else if (usernameVal != user.name && passwordVal === user.pw) {
        password.removeClass("greska");
        username.removeClass("ispravno");
        password.addClass("ispravno");
        username.addClass("greska");
        tacnoUsername.hide();
        tacnoPassword.show();
        netacnoUsername.show();
        netacnoPassword.hide();
        if (usernameVal == "") {
            $("p").text("*please, enter username")
        } else {
            $("p").text("*please, enter valid userame")
        }
    } else {
        password.removeClass("ispravno");
        username.removeClass("ispravno");
        password.addClass("greska");
        username.addClass("greska");
        netacnoUsername.show();
        netacnoPassword.show();
        tacnoUsername.hide();
        tacnoPassword.hide();
        $("p").text("*please, enter valid username and password")
    }
}
