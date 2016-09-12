// Closes the sidebar menu
$("#menu-close").click(function(e){
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("hello");
});

//open the sidebar menu
$("#menu-toggle").click(function(e){
    $("#sidebar-wrapper").toggleClass("hello");
});