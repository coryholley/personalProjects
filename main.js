(function () {
    "use strict";
    $("#playButton").hide();

    $(document).ready(function(){
        setTimeout(function() {
            $("#playButton").show('slow');
        }, 8000)

    });

})();