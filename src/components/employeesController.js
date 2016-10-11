//registering controllers with module myApp
myApp.controller("employeesController", function($scope, makePageService) {
  $scope.thing = "HI THERE";
  $scope.message = "Hello";

  var employees = [
    {
      firstName: "Joe",
      lastName: "Golightly",
      gender: "Male",
      skills: [
        {skill: "writing"},
        {skill: "trapeze"},
        {skill: "RUNRUNRUNAWAAAAY" }
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
    },
    {
      firstName: "Alexia",
      lastName: "Gould",
      gender: "Female",
      skills: [
        {skill: "Hammering"},
        {skill: "Knitting"}
      ]
    },
    {
      firstName: "Winston",
      lastName: "Karlsbad",
      gender: "Male",
      skills: [
        {skill: "Queueing"},
        {skill: "Blinking"},
        {skill: "Empathy"}
      ]
    },
  ];

  let currentPage = 1;
  let elementsPerPage = 2;
  let totalPages = employees / elementsPerPage;

  $scope.pageEmployees = makePageService.elementsOnPage(employees, elementsPerPage, currentPage);

  $scope.changePage = function(pageNumber) {
    currentPage = pageNumber;
    $scope.pageEmployees = makePageService.elementsOnPage(employees, elementsPerPage, currentPage);
  };

});
