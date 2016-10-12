myApp.factory("makePageService", function () {
  const range = function(start, stop) {
    let numbersInRange = [];
    for (let i = start; i < stop; i ++) {
      numbersInRange.push(i);
    }
    return numbersInRange;
  };

  return {
    elementsOnPage: function (elements, elementsPerPage, currentPage) {
      return elements.slice(
        (elementsPerPage * currentPage) - elementsPerPage,
        (elementsPerPage * currentPage)
      );
    },

    allPages: function(elements, elementsPerPage) {
      let totalPages = Math.ceil(elements.length/elementsPerPage);
      let pages = [];

      for (let i = 0; i < totalPages; i ++) {
        pages.push(this.elementsOnPage(elements, elementsPerPage, i + 1));
      }

      return pages;
    },

    pageButtonRange: function(currentPage, totalPages) {
      let buttonInfo = [];

      if (currentPage <= 5 || totalPages <= 8) {
        buttonInfo = range(1, 9).slice(0, totalPages + 1);
        if (totalPages > 8) buttonInfo[7] = "..." ;
      }
      else {
        if (totalPages > currentPage + 3) {
          buttonInfo = range(currentPage - 4, currentPage + 3);
          buttonInfo[0] = "...";
          buttonInfo[7] = "...";
        }

        else {
          let paddingPages = (currentPage + 3) - totalPages;
          buttonInfo = range(currentPage - (4 + paddingPages), totalPages + 1);
          buttonInfo[0] = "...";
        }
      }
      return buttonInfo;
    },

    scrollPageButtonRange: function(buttonRange, totalPages, incrementBy) {
      let pageRange = [];
      let lowerPageNum;
      let upperPageNum;

      if (incrementBy === -1 && buttonRange[1] >= 1) {
        lowerPageNum = buttonRange[1] - 1;
        upperPageNum = lowerPageNum + 8;
        pageRange = range(lowerPageNum, upperPageNum + 1);

        if (lowerPageNum > 1) pageRange.unshift("...");
        pageRange = pageRange.slice(0, 9);
        if (pageRange[7] < totalPages) pageRange[7] = "...";
      }

      else if (buttonRange[buttonRange.length - 1] != totalPages) {
        upperPageNum = buttonRange[buttonRange.length - 2] + 1;
        lowerPageNum = upperPageNum - 8;
        pageRange = range(lowerPageNum, upperPageNum);

        if (upperPageNum < totalPages) {
          pageRange.push("...");
          pageRange.shift(1);
        }
        pageRange[0] = "...";
      }

      return pageRange;
    }
  };
});
