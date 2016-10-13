const DEFAULTBUTTONS = 8;

const range = function(start, stop) {
  let numbersInRange = [];
  for (let i = start; i < stop; i ++) {
    numbersInRange.push(i);
  }
  return numbersInRange;
};

const addElipsisButtons = function(pageRange, totalPages, maxButtons) {
  maxButtons = maxButtons || DEFAULTBUTTONS;

  if (pageRange[0] > 1) pageRange[0] = "...";

  if (pageRange[pageRange.length - 1] < totalPages &&
    pageRange.length === maxButtons){
      pageRange[pageRange.length - 1] = "...";
    }

    return pageRange;
  };

myApp.factory("pageService", function () {

  return {
    pageRange: function(totalPages) {
      return range(1, totalPages + 1);
    },

    elementsOnPage: function (elements, elementsPerPage, pageNum) {
      return elements.slice(
        (elementsPerPage * pageNum) - elementsPerPage,
        (elementsPerPage * pageNum)
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

    centerPageRange: function(totalPages, initialPageIndex, maxButtons) {
      maxButtons = maxButtons || DEFAULTBUTTONS;
      let centerButton = Math.floor(maxButtons / 2) + 1;

      let startPage = Math.max(0, initialPageIndex - centerButton);
      let endPage = startPage + maxButtons;
      if (endPage > totalPages) startPage -= (endPage - totalPages);

      let centeredRange = this.pageRange(totalPages)
        .slice(startPage, endPage);

      return addElipsisButtons(centeredRange, totalPages);
    },

    scrollRange: function(totalPages, visibleButtons, scrollAmount, maxButtons) {
      maxButtons = maxButtons || DEFAULTBUTTONS;
      let fullPageRange = this.pageRange(totalPages);

      // going by the second [1] num and subtracting 1 to ignore the "..."
      let startPage = Math.max(1, visibleButtons[1] + scrollAmount - 1);
      let endPage = startPage + (visibleButtons.length - 1);
      if (endPage > totalPages) startPage -= (endPage - totalPages);

      let scrollRange = fullPageRange.slice(
        startPage - 1,
        (startPage - 1) + visibleButtons.length
      );

      return addElipsisButtons(scrollRange, totalPages);
    },
  };
});
