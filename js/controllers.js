angular.module('pol.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('PhotoopsCtrl', function($scope, Photoops){
	$scope.photoops=[];
	$scope.dataLoaded=false;

	Photoops.loadq.then(function(d){
		if(d.status=200){
			$scope.photoops=Photoops.all();
			$scope.dataLoaded=true;
		}
	});
})
.controller('PhotoopDetailCtrl', function($scope, $stateParams, Photoops){
	$scope.photoop=Photoops.get($stateParams.photoopId);
})
.controller('PhotoopAddCtrl', function($scope, $stateParams, Photoops){
	console.log('entered AddCtrl');
	$scope.name='ss';
	$scope.btnSave=function(){
		console.debug('btnSave clicked, name is ' + $scope.name);
	};
})

.controller('AccountCtrl', function($scope) {
});
