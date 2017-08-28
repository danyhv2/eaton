//-----------------------------------
// M-62: Faceted Navigation
//-----------------------------------
'use strict';

let App = window.App || {};
App.facets = (function() {

  const $componentClass = $('.faceted-navigation');

  const init = () => {
    $(function() {
      addEventListeners();
      localStorage.setItem('backToSearch','true');
    });
  };


  const addEventListeners = () => {
    $componentClass.on('click', '[data-facets-more-groups]', showAllFacetsGroups);
    $componentClass.on('click', '[data-facets-more-values]', showAllFacetsValues);
    $componentClass.find('.faceted-navigation__header').on('click', toggleIcons);
    $('[data-toggle-modal-facet]').on('click', toggleModal);
  };

  /**
  * toggle the mobile factes modal
  * @param  { Object } event - the click event object
  */
  const toggleIcons = function(e) {
    e.preventDefault();
    $(this).find('.icon-sign-plus').toggleClass('u-hide');
  };

  /**
  * toggle the mobile factes modal
  * @param  { Object } event - the click event object
  */
  const toggleModal = (event) => {
    event.preventDefault();
    $('body').toggleClass('facets-open');
  };

  /**
  * Show the remaining facets-items/groups that were hidden on page load
  * @param  { Object } event - the click event object
  */
  const showAllFacetsGroups = function(event) {
    // Show hidden facets
    $componentClass
      .find('.faceted-navigation__more-facets')
      .slideDown(200);

    // Hide "View more" <button>
    event.currentTarget.classList.add('u-hide');
  };



  /**
  * Show the remaining facets-values / options hidden in Each Group (eg: Checkboxes, radios)
  * @param  { Object } event - the click event object
  */
  const showAllFacetsValues = (event) => {

    const $parentItem = $(event.currentTarget).closest('.faceted-navigation__facet-group');

    // Show hidden facet-values
    $parentItem
      .find('.faceted-navigation__list-item.u-hide')
      .slideDown(200);

    // Hide "View more" <button>
    event.currentTarget.classList.add('u-hide');
  };



  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentClass.length > 0) {
    init();
  }

}());
