(function () {
    "use strict";
    $("#playButton").hide();
    $("#pickGame").hide();

    $(document).ready(function(){
        setTimeout(function() {
            $("#playButton").show('slow');
        }, 7000)

        $('#playButton').click(function() {
            $("#playButton").hide();
            $("#header").hide();
            $("#pickGame").show('slow');
        });

    });

})();