angular.module('pol.controllers', [])

.controller('DashCtrl', function($scope) {
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

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})
.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
