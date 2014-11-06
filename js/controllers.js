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
.controller('PhotoopAddCtrl', ['$scope', function($scope, $stateParams, Photoops){
	console.log('entered AddCtrl');
	$scope.btnSave=function(){
		console.debug('photoop.name is ' + $scope.photoop.name,'\n',$scope.photoop.description);
	};
}])

.controller('AccountCtrl', function($scope) {
});
