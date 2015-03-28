


$(document).ready(function() {
    var data = video_data.getVideos();
    videolistrow.appendRow(data.slice(0,4),"#videolistcontainer");
    videolistrow.appendRow(data.slice(4,7),"#videolistcontainer");

});