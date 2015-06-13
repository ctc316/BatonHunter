


$(document).ready(function() {
	var profile = profile_data.getProfile();
	var prev_width ;
	$('#profile_pic').attr("src", profile.getFbProfilePic());

	prev_width = $(window).width();
	drawRadarChart();

	$(window).resize(function() {	
		var curr_width = $(window).width();
		if(Math.abs(curr_width - prev_width) > 10)
		{
	  		prev_width = $(window).width();
	  		console.log(prev_width);
	  		$("#radar-chart").find("svg").remove();
	  		drawRadarChart();
	  	}
	});

	console.log(bottomNaviBar);
	bottomNaviBar.appendTo("#footer");
});


var drawRadarChart = function (){
	console.log("drawRadarChart");
	var d = [[
      {axis: "行動力", value: 13},
      {axis: "好奇心", value: 3},
      {axis: "知識力", value: 8},
      {axis: "思考力", value: 4},
      {axis: "語文力", value: 9},
      {axis: "人際力", value: 3},
      {axis: "肢體力", value: 6},
      {axis: "音樂力", value: 8}
    ]];

    var width = $("#radar-chart").width();
    // console.log("width: "+width);
    if(width > 600)
    	width = 600;
    var options = {
    	w: width,
    	h: width,
    }

	RadarChart.draw("#radar-chart", d, options);
}