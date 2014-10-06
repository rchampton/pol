angular.module('pol.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('PhotoopsCtrl', function($scope, Photoops){
	$scope.photoops=[];
	$scope.dataLoaded=false;

console.log('Photoops.loadq.status ' + Photoops.loadq.status);
console.log('Photoops.getLoadQ().status ' + Photoops.getLoadQ().status);
console.log('[0] Photoops.hasBeenLoaded2() ' + Photoops.hasBeenLoaded());

	Photoops.loadq.then(function(d){
console.log('then executed1 ' + d.status);
console.log('Photoops.hasBeenLoaded() ' + Photoops.hasBeenLoaded());
		if(d.status=200){
			$scope.photoops=Photoops.all();
			$scope.dataLoaded=true;
		}

	});
})
.controller('PhotoopDetailCtrl', function($scope, $stateParams, Photoops){
	$scope.photoop=Photoops.get($stateParams.photoopId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})
.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
