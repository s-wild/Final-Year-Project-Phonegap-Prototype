/*
* Custom jQuery scripts.
* This script is for data snychronisation.
*/
$( document ).ready(function() {
    console.log( "ready!" );

    // On load, hide result div (not needed).
    $('#results').hide();

    // get value of telephone number input box on key up.
    $('#phoneNoS').keypress(function() {
      var dInput = this.value;
      // if (dInput.length > 4) {
      //   console.log("freephone");
      // }
      // console.log(dInput);

      // Example for natwest http://up637415.co.uk/node.json?field_free_phone=0800 200400

      // jQuery JSON.
      var freeAlternativeAPI = "http://up637415.co.uk/node.json?field_premium_number=" + dInput;
      var data_fields = $.getJSON( freeAlternativeAPI, function(data) {

        // Get all of the fields.
        var list_of_fields = data.list[0];
        console.log(list_of_fields); 

        // Get value of title field.
        var node_title = list_of_fields.title;
        if (node_title.length){
          $('#results').show();
          $( "<h2>" + node_title + "</h2>" ).appendTo( "#results" );
          console.log("title exists");
        }
        var free_phone_numbers = list_of_fields.field_free_phone;
        $.each( free_phone_numbers, function( key, value ) {
          $( "<p>" + value + "</p>" ).appendTo( "#results" );
          //console.log(formatted_free_numbers);
        });
      });
    });

});
