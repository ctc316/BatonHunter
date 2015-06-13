var bottomNaviBar = (function () {	
	return {
		appendTo: function(dom_id){
			var html = '<nav id="bottomNaviBar" class="navbar navbar-default navbar-fixed-bottom">'
			    	 + '<span> 1 </span>'
			   		 + '<span> 2 </span>'
			    	 + '<span> 3 </span>'
			    	 + '<span> 4 </span>'
					 + '</nav>';
			$(dom_id).append(html);
		}
	}
})();