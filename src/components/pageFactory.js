myApp.factory("makePageService", function () {
  const range = function(start, stop) {
    let rangeNums = [];
    for (let i = start; i < stop; i ++) {
      rangeNums.push(i);
    }
    return rangeNums;
  };

  return {
    elementsOnPage: function (elements, elementsPerPage, currentPage) {
      return elements.slice(
        (elementsPerPage * currentPage) - elementsPerPage,
        (elementsPerPage * currentPage)
      );
    },

    pageButtonRange: function(currentPage) {
      let buttonInfo = [];
      if (currentPage <= 5 || totalPages <= 8) {
        buttonInfo = range(1, 9).slice(0, totalPages);
        if (totalPages > 8) buttonInfo[7] = "..." ;
      }
      else {
        buttonInfo = range(currentPage - 4, Math.min(currentPage + 3, totalPages));
        if (totalPages > currentPage + 3) buttonInfo[7] = "...";
      }
    }
  };
});
