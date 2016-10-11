myApp.factory("makePageService", function () {
  return {
    elementsOnPage: function (elements, elementsPerPage, currentPage) {
      return elements.slice(
        (elementsPerPage * currentPage) - elementsPerPage,
        (elementsPerPage * currentPage)
      );
    }
  };
});
