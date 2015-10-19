/*
* Custom jQuery scripts.
* This script is for data snychronisation.
*/
$( document ).ready(function() {
    console.log( "ready!" );

    // On load, hide result div (not needed).
    $('#results').hide();

    // get value of telephone number input box on key up.
    $('#phoneNo').keyup(function() {
      var dInput = this.value;

      // Check if 0870 number.
      if (dInput.indexOf("0870") >= 0) {

        $('#results').empty();
        console.log("0870 detected.");

        // Check if length is greater than 4
        if (dInput.length >= 12 && dInput.length <= 13) {

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
              $( "<p>" + node_title + "</>" ).appendTo( "#results" );
              console.log("title exists");
            }
            var free_phone_numbers = list_of_fields.field_free_phone;
            $.each( free_phone_numbers, function( key, value ) {
              $( "<p>" + value + "</p>" ).appendTo( "#results" );
              //console.log(formatted_free_numbers);
            });
          });
        }else {
          $('#results').hide();
        }
        console.log(dInput);


      }

    });

});
