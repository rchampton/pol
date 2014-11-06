angular.module('pol.services', [])

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
  var loadq=$http.get('data/samples.json').success(function(d){
      for(var i=0, max=d.length; i<max; i++)
        photoops.push(d[i]);
      // $scope.dataLoaded=true;
    }).error(function(d){
      console.log('An error occurred loading samples ' + d);
    });

  return{
    loadq: loadq
    , all: function(){
      return photoops;
    }
    , create: function(){
      return {
        "id": 0
        , "name": ""
        , "description": ""
        , "latitude": 0
        , "longitude": 0
        , "datetime": Date.now()
        , "temperature": 0
        , "humidity": 0
        , "pressure": 0
        , "windspeed": 0
        , "sunrise": 0
        , "sunset": 0
        , "weather": ""
        , "image": ""
      };
    }
    , add: function(newPhotoop){
      console.debug('TODO add Photoop');
    }
    , get: function(photoopId){
      return photoops[photoopId];
    }
  };
});