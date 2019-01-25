/*
    Author: Kaveshan Kistan
    Project: Betting Entertainment Technology Assessment
*/

$(document).ready(function(){
    // Dismisses the sidebar on button click or backround click
    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    // Activates the sidebar menu
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    // Activates the theme button
    $('#theme').click(function (){
        // Checks if the dark theme is on, if not then add it else remove it
        if ($('link[href="./css/general_dark.css"]').length == 0){
            $('head').append('<link rel="stylesheet" href="./css/general_dark.css">');
        } else {
            $('link[href="./css/general_dark.css"]').remove();
        }
    });    
});

// Function performs the sign in
function signIn() {
    // Initializes the sign in form variables
    var inputValue = $("#inputEmail").val();
    var inputPassword = $("#inputPassword").val();

    // Validates the email address
    var state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(inputValue);
    
    // Checks if there is a valid email address and password
    if (state === true && inputPassword.length > 0){
        // Display's relevant panels
        $('#loginPanel').addClass('hidden');
        $('#wrapper').removeClass('hidden');
        $('body').css('background-image', 'none');
    } else {
        // Display's Error Message
        $(".alert").show().delay(3000).hide(400);
    }
}