'use strict';

var videolistrow = (function() {
    return {
        appendRow: function(video_data, dom_id) {
            var layout = $(dom_id);
            layout.append('<div id="testlayout" class="row"></div>');
            var lastRow = layout.find('.row').last(); 
        
            for(var i=0; i<video_data.length && i<4; i++)
            {
                lastRow.append('<div id="test'+i+'" class="videolistitem col-md-3"></div>');
                (function(idx) {
                    $('.videolistitem').last().load("components/videolist/videolistrow/videolistrow.html", function()
                    {
                        $(this).find('.videotitle').text(video_data[idx].title);
                        $(this).find('.videodescription').text(video_data[idx].description);
                    });
                })(i);
            }
        }
    }
})();
