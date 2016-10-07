var app = angular.module('app', []);
app.controller('mainCtr', function($scope,$http,$location){
	$http({
		method:'get',
		url:'http://api.tianapi.com/social/?key=d6142f13fc0a3c38605e660347e2d624&num=20',
	}).success(function(data){
		if(data.code == 200){
			$scope.newslist = data.newslist;
		}
	})
	$scope.show = function(url){
		window.location.href = url;
	}
})

