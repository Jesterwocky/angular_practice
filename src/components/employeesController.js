//registering controllers with module myApp
myApp.controller("employeesController", function($scope, makePageService) {
  $scope.thing = "HI THERE";
  $scope.message = "Hello";

  let employees = [
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
  let totalPages = Math.ceil(employees.length / elementsPerPage);
  console.log(totalPages);

  $scope.pageEmployees = makePageService.elementsOnPage(employees, elementsPerPage, currentPage);

  $scope.changePage = function(pageNumber) {
    currentPage = pageNumber;
    $scope.pageEmployees = makePageService.elementsOnPage(employees, elementsPerPage, currentPage);
  };

  let pages = [];
  for (let i = 0; i < totalPages; i ++) {
    pages.push(makePageService.elementsOnPage(employees, elementsPerPage, i + 1));
  }

  let maxPageButtons = totalPages <= 8 ? totalPages : 8;

  // pull this out

  const range = function(start, stop) {
    let rangeNums = [];
    for (let i = start; i < stop; i ++) {
      rangeNums.push(i);
    }
    return rangeNums;
  };

  let buttonInfo = [];
  if (currentPage <= 5 || totalPages <= 8) {
    buttonInfo = range(1, 9).slice(0, totalPages);
    if (totalPages > 8) buttonInfo[7] = "..." ;
  }
  else {
    buttonInfo = range(currentPage - 4, Math.min(currentPage + 3, totalPages));
    if (totalPages > currentPage + 3) buttonInfo[7] = "...";
  }

  $scope.buttonInfo = buttonInfo;

  $scope.pageOfEmployees = pages[currentPage - 1];

  $scope.changePage2 = function(pageNumber) {
    currentPage = pageNumber;
    $scope.pageOfEmployees = pages[currentPage - 1];
  };
});
