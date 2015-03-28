var video_data = (function() {
    var video = (function() {
        var videos = [{
            id: 1,
            title: "Video 1",
            description: "Business lesson 1\n"
            url:"",
        }, {
            id: 2,
            title: "Video 2",
            description: "Business lesson 2\n"
            url:"",
        }, {
            id: 3,
            title: "Video 3",
            description: "Business lesson 3\n"
            url:"",
        }, {
            id: 4,
            title: "Video 4",
            description: "Business lesson 4\n"
            url:"",
        }, {
            id: 5,
            title: "Video 5",
            description: "Business lesson 5\n"
            url:"",
        }, {
            id: 6,
            title: "Video 6",
            description: "Business lesson 6\n"
            url:"",
        }, {
            id: 7,
            title: "Video 7",
            description: "Business lesson 7\n"
            url:"",
        }, {
            id: 8,
            title: "Video 8",
            description: "Business lesson 8\n",
            url:"",
        }];

        return {
            getVideos: function() {
                return videos;
            },
        };
    })();
})();
