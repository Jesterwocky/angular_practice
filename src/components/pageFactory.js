const DEFAULTBUTTONS = 8;

myApp.factory("pageService", function () {
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

  return {
    pageRange: function(totalPages) {
      return range(1, totalPages + 1);
    },

    elementsOnPage: function (elements, elementsPerPage, centeredPage) {
      return elements.slice(
        (elementsPerPage * centeredPage) - elementsPerPage,
        (elementsPerPage * centeredPage)
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

    centerPageRange: function(numPages, centeredPage, maxButtons) {
      maxButtons = maxButtons || DEFAULTBUTTONS;

      let centerButton = Math.floor(maxButtons / 2) + 1;
      let firstPage = Math.max(0, centeredPage - centerButton);
      let lastPage = firstPage + maxButtons;

      if (lastPage > numPages) {
        firstPage = Math.max(0, firstPage - (lastPage - numPages));
      }

      let centeredRange = this.pageRange(numPages).slice(
        firstPage,
        lastPage
      );

      return addElipsisButtons(centeredRange, numPages);
    },

    scrollRange: function(numPages, currentView, scrollAmount, maxButtons) {
      maxButtons = maxButtons || DEFAULTBUTTONS;
      let buttonsLength = currentView.length;
      let fullPageRange = this.pageRange(numPages);

      // going by the second [1] num and subtracting 1, because of the "..."
      let firstPage = Math.max(1, currentView[1] + scrollAmount - 1);
      let lastPage = firstPage + (buttonsLength - 1);
      if (lastPage > numPages) firstPage -= (lastPage - numPages);

      let scrollRange = fullPageRange.slice(
        firstPage - 1,
        (firstPage - 1) + buttonsLength
      );

      return addElipsisButtons(scrollRange, numPages);
    },

    rightScrollRange: function(numPages, currentView, scrollAmount) {
      return this.scrollRange(numPages, currentView, scrollAmount || 1);
    },

    leftScrollRange: function(numPages, currentView, scrollAmount) {
      return this.scrollRange(numPages, currentView, scrollAmount || -1);
    }
  };
});
