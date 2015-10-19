/*
* Custom jQuery scripts.
* This script is for data snychronisation.
*/
$( document ).ready(function() {
    console.log( "ready!" );

    // get value of telephone number input box on key up.
    $('#phoneNoS').keypress(function() {
      var dInput = this.value;
      if (dInput.length > 4) {
        console.log("freephone");
      }
      console.log(dInput);

      // Example for natwest http://up637415.co.uk/node.json?field_free_phone=0800 200400

      // jQuery JSON.
      var freeAlternativeAPI = "http://up637415.co.uk/node.json?field_free_phone=" + dInput;
      $.getJSON( freeAlternativeAPI, function( data ) {
        dataString = JSON.stringify(data);
        console.log("Data:::::" + dataString);
        var items = JSON.parse(dataString);

        $(items).each(function(){

        });

        // $.each( data, function( key, val ) {
        //   console.log("Val:::::" + val);
        //   console.log("Key:::::" + key);
        // });
        // $( "<ul/>", {
        //   "class": "my-new-list",
        //   html: items.join( "" )
        // }).appendTo( "#response-text" );
      });
    });

    $( document ).on( "vclick", ".SeeMore2", function() {
    // $(this).hide();



    });

});
