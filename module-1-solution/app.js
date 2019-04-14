(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.lunch == ""

  $scope.checkTooMuch = function () {
    console.log($scope.lunch);
    if ($scope.lunch == ""){
      $scope.message = "Please enter data first"
    }
    else{
     if ($scope.lunch.toString().split(',').length <= 3){
       $scope.message = "Enjoy!"
     }
     else {
       $scope.message = "Too much!"
     }
   }
  };

}

})();
