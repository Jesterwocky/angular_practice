//registering controllers with module myApp
myApp.controller("employeesController", function($scope, pageService) {
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
    {
      firstName: "Anne",
      lastName: "Gregor"
    },
    {
      firstName: "Brandon",
      lastName: "Noise"
    },
    {
      firstName: "Rita",
      lastName: "Yuli"
    },
    {
      firstName: "Evan",
      lastName: "Moss"
    },
    {
      firstName: "Helene",
      lastName: "Robespierre"
    },
    {
      firstName: "Mark",
      lastName: "Hilton"
    },
    {
      firstName: "Gemma",
      lastName: "Nearfar"
    },
    {
      firstName: "Joe",
      lastName: "Balliard"
    },
    {
      firstName: "Lora",
      lastName: "Valentino"
    },
    {
      firstName: "Hastings",
      lastName: "Clark"
    },
    {
      firstName: "Pauline",
      lastName: "Noelle"
    },
    {
      firstName: "Grover",
      lastName: "Daring"
    },
    {
      firstName: "Melanie",
      lastName: "Ferris"
    },
    {
      firstName: "Uther",
      lastName: "Pendragon"
    },
    {
      firstName: "Eliana",
      lastName: "Zomg"
    },
    {
      firstName: "Philadelphia",
      lastName: "Jones"
    },
    {
      firstName: "Yvonne",
      lastName: "Dorn"
    }
  ];

  let currentPage = 1;
  let elementsPerPage = 2;
  let pages = pageService.allPages(employees, elementsPerPage);
  console.log(pages);

  $scope.test = "TEST";
  $scope.pageOfEmployees = pages[currentPage - 1];
  $scope.buttonList = pageService.centerPageRange(pages.length, currentPage);

  $scope.prevPage = function() {
    if (currentPage > 1) $scope.changePage(currentPage - 1);
  };

  $scope.nextPage = function() {
    if (currentPage < pages.length) $scope.changePage(currentPage + 1);
  };

  $scope.changePage = function(pageNumber, index) {
    if (pageNumber === "...") {
      let scrollAmount = (index === 0) ? -1 : 1;
      $scope.buttonList = pageService.scrollRange(
        pages.length,
        $scope.buttonList,
        scrollAmount
      );
    }

    else {
      currentPage = pageNumber;
      $scope.pageOfEmployees = pages[currentPage - 1];
      $scope.buttonList = pageService.centerPageRange(pages.length, currentPage);
    }
  };
});
