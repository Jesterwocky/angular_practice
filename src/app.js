var myApp = angular.module("myModule", []);

//registering controllers with module myApp
myApp.controller("myController", function($scope) {
  $scope.thing = "HI THERE";
  var employees = [
    {
      firstName: "Joe",
      lastName: "Groening",
      gender: "Male",
      skills: [
        {skill: "writing"},
        {skill: "dancing"},
        {skill: "eating" }
      ]
    },
    {
      firstName: "Jane",
      lastName: "Bread",
      gender: "Female",
      skills: [
        {skill: "basket-weaving"},
        {skill: "wrestling"},
        {skill: "singing"}
      ]
    }
  ];
  $scope.employees = employees;
  $scope.message = "Hello";
});
