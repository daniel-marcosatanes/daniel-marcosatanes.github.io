/*
 * This JavaScript code has been adapted from the article
 * https://css-tricks.com/reading-position-indicator/ authored by Pankaj Parashar,
 * published on the website https://css-tricks.com on the 7th of May, 2014.
 * Couple of changes were made to the original code to make it compatible
 * with the `al-foio` theme.
 */
const progressBar = $("#progress");
/*
 * We set up the bar after all elements are done loading.
 * In some cases, if the images in the page are larger than the intended
 * size they'll have on the page, they'll be resized via CSS to accomodate
 * the desired size. This mistake, however, breaks the computations as the
 * scroll size is computed as soon as the elements finish loading.
 * To account for this, a minimal delay was introduced before computing the
 * values.
 */
window.onload = function () {
  setTimeout(progressBarSetup, 50);
};
/**
 * Initializes and registers scroll/resize event listeners for the progress bar.
 * Detects if the browser native 'progress' element is supported.
 *
 * @returns {void}
 */
function progressBarSetup() {
  if ("max" in document.createElement("progress")) {
    initializeProgressElement();
    $(document).on("scroll", function () {
      progressBar.attr({ value: getCurrentScrollPosition() });
    });
    $(window).on("resize", initializeProgressElement);
  } else {
    resizeProgressBar();
    $(document).on("scroll", resizeProgressBar);
    $(window).on("resize", resizeProgressBar);
  }
}

/**
 * Retrieves the current vertical scroll position of the window.
 *
 * @returns {number} The current vertical scroll position in pixels.
 */
function getCurrentScrollPosition() {
  return $(window).scrollTop();
}

/**
 * Computes and initializes dimensions and offsets for the progress element.
 * Accounts for the height of the fixed navigation bar.
 *
 * @returns {void}
 */
function initializeProgressElement() {
  let navbarHeight = $("#navbar").outerHeight(true);
  $("body").css({ "padding-top": navbarHeight });
  $("progress-container").css({ "padding-top": navbarHeight });
  progressBar.css({ top: navbarHeight });
  progressBar.attr({
    max: getDistanceToScroll(),
    value: getCurrentScrollPosition(),
  });
}

/**
 * Computes the total scrollable height distance of the document.
 *
 * @returns {number} The maximum scrollable distance in pixels.
 */
function getDistanceToScroll() {
  return $(document).height() - $(window).height();
}

/**
 * Adjusts the width percentage of the custom progress bar based on user scroll position.
 * Used as a fallback when native progress element is unsupported.
 *
 * @returns {void}
 */
function resizeProgressBar() {
  progressBar.css({ width: getWidthPercentage() + "%" });
}

/**
 * Computes the percentage of the current scroll position relative to total scrollable height.
 *
 * @returns {number} Scroll percentage value between 0 and 100.
 */
function getWidthPercentage() {
  return (getCurrentScrollPosition() / getDistanceToScroll()) * 100;
}
