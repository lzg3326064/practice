window.onload = window.onresize = function() {

	var cont = document.getElementById("container");
	autoFullScreen(cont);

	var map = new BMap.Map("allmap");
	var point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,10);
	var geolocation = new BMap.Geolocation();

	geolocation.getCurrentPosition(function(r){
		if(this.getStatus() == BMAP_STATUS_SUCCESS){
			var mk = new BMap.Marker(r.point);
			map.addOverlay(mk);
			map.panTo(r.point);

			// 天气信息获取
			var para = "https://free-api.heweather.com/v5/weather?city=" + r.point.lng + "," + r.point.lat + "&key=148cf84806dd4a418188a7c7da44edcf";
			$.getJSON(para, function(json) {
				var city = json["HeWeather5"][0]["basic"]["city"];
				var weatherNow = json["HeWeather5"][0]["now"]["cond"]["txt"];
				var degree = json["HeWeather5"][0]["now"]["tmp"];
				var wind = json["HeWeather5"][0]["now"]["wind"]["dir"];

				$("#city").html(city);
				$("#weather").html(weatherNow);
				$("#degree").html(degree + "℃");
				$("#wind").html(wind);
			});
		}
		else {
			alert('failed'+this.getStatus());
		}   
		console.log(r.point.lng);     
	},{enableHighAccuracy: true})
} 

// 自动全屏
function autoFullScreen(obj) {
	obj.style.width = document.documentElement.clientWidth + "px";
	obj.style.height = document.documentElement.clientHeight + "px";
}