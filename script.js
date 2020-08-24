$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    $(".card").hover(
        function () {
            $(this).addClass('shadow-lg').css('cursor', 'pointer');
        }, function () {
            $(this).removeClass('shadow-lg');
        }
    );

    // document ready  
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Dark Mode

// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }