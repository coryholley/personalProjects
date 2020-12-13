(function () {
    "use strict";
    $("#playButton").hide();
    $("#pickGame").hide();
    $("#lyricOptions").hide();
    $("#triviaOptions").hide();

    $(document).ready(function(){
        setTimeout(function() {
            $("#playButton").show('slow');
        }, 7000)

        $('#playButton').click(function() {
            $("#playButton").hide();
            $("#header").hide();
            $("#pickGame").show('slow');
        });

        $('#triviaSelection').click(function() {
            $("#lyricSection").hide();
            $("#triviaOptions").show();
        });

        $('#lyricSelection').click(function() {
            $("#triviaSection").hide();
            $("#lyricOptions").show();
        });

    });

})();