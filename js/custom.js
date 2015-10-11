// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    // $(".well").html("<p>test jQuery</p>");
    $("p").click(function(){
    alert("The paragraph was clicked.");
});
});
