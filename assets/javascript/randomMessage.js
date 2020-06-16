/* jshint esversion: 8 */

$(document).ready(function() {
    function getMsg() {
        let messages = [
            "this is a landing page for liams.tech",
            "ooga booga",
            "i wonder why you are here",
            "take a look around why dont you?",
        ];

        let n = Math.floor(Math.random() * messages.length) - 1;
        let m = messages[n];
        
        if(m == undefined || m == null) {
            m = "Nothing to see here!";
        }

        var container = $("#message");
        container.append('<h3>' + m + "</h3>");
    }
    getMsg();
});