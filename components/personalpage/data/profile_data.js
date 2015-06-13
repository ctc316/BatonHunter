var profile_data = (function() {
    var fbID_cookie_key = "batonhunter_fbid",
        email_cookie_key = "batonhunter_email";

    var profile = (function() {
        var uuid = "9219affc-8c9d-4705-a13e-e6a1a882c522";
        var fbID;
        var fbProfilePic;
        var email;
        var name ;
        var job;
        var jobPic ;
        var strength = [];    

        return {
            getUuid: function() {
                return uuid;
            },
            getFbID: function(){
                var id = fbID?fbID:$.cookie(fbID_cookie_key);
                //console.log("fbid: " +id);
                return id;
            },
            getEmail:function(){
                var email = email?email:$.cookie(email_cookie_key);
                //console.log("fbid: " +id);
                return email;
            },
            getFbProfilePic: function (){
                console.log(fbID);
                return 'https://graph.facebook.com/'+ this.getFbID() +'/picture?type=large'
            },
            getName: function() {
                return name;
            },
            getJob: function() {
                return job;
            },
            getJobPic: function() {
                return jobPic;
            },
            getStrength: function() {
                for (var i = 0; i < 8; ++i) {
                    strength[i] = Math.floor(Math.random() * 100);
                }
                return strength;
            },
        };
    })();



    return {
        setfbID: function(fbID){
            profile.fbID = fbID;
            $.cookie(fbID_cookie_key, fbID, { path:'/', expires: 1}); 
        },
        setEmail: function(email){
            profile.email = email;
            $.cookie(email_cookie_key, email, { path:'/', expires: 1}); 
        },
        setMTBI: function(job,strength){
            profile.job = job;
            profile.strength = strength;
        },
        getProfile: function() {
            return profile;
        },
        getProfileFromServer: function(email, callback) {
            //request data from backend server
            $.post("https://wwww.xxx.yyyy/test.php",email,function(result){  
                console.log(result);
            });

            setTimeout(function() {
                callback(profile);
            }, 1000);
        },

        postProfileToServer: function(email,name,PhotoUrl,callback) {

            setTimeout(function() {
                callback(profile);
            }, 1000);

        }

    };
})();
