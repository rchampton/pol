angular.module('pol.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

// A simple localStorage service a la http://learn.ionicframework.com/formulas/localstorage/
.factory('$localStorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
    , hasKey: function(key){
      return $window.localStorage.hasOwnProperty(key);
    }
  }
}])

// Sample weather svc call to http://openweathermap.org/
// http://api.openweathermap.org/data/2.5/weather?q=richmond,ky&callback=test
.factory('Photoops', function($http){
  // Some fake testing data
  var photoops=[];

  $http.get('data/samples.json').success(function(d){
    for(var i=0, max=d.length; i<max; i++)
      photoops.push(d[i]);
  }).error(function(d){
    console.log('An error occurred loading samples ' + d);
  });

  return{
    all: function(){
      return photoops;
    }
    , get: function(photoopId){
      return photoops[photoopId];
    }
  };
});