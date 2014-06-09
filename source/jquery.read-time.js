;(function($) {

    $.fn.readTime = function( options ) {

        //return if no text was found 
        if(!this.length) { 
            return this; 
        }

        //define default settings
        var defaults = {
            wpm: 275,
            readTimeTarget: '.readTime'
        };

        // define plugin and element
        var plugin = this;
        var el = $(this);

        //combine the default settings and options
        plugin.settings = $.extend({}, defaults, options);

        // define words per minute and read time node
        var wpm = plugin.settings.wpm
        var readTimeTarget = plugin.settings.readTimeTarget

        //function to calculate read time
        var calculateTime = function (text) {
            
            //count all the words inside of the element
            var wordCount = text.split(' ').length;

            //divide the word count by the wpm setting and round it
            var readTime = Math.round(wordCount / wpm);

            //if readTime is less than 1
            if (readTime < 1) 
            {
                //display 'less than a minute'
                $(readTimeTarget).text("less than a minute");
            } 
            //otherwise if readTime is less than 2
            else if (readTime < 2) 
            {
                //display 'about a minute'
                $(readTimeTarget).text("about a minute")
            } 
            //otherwise its 2 minutes or more
            else {
                //so display the number of minutes
                $(readTimeTarget).text(readTime + ' minutes');
            }
        };

        //run the calculate time fuction on the element text
        calculateTime(el.text());

    };

}(jQuery));