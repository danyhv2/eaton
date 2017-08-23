//-----------------------------------
// Search Results Component
//-----------------------------------
'use strict';

let App = window.App || {};

App.searchResults = (function() {

  const resultListCSSClass = '.results-list';
  const $componentElement = $('.search-results').find(resultListCSSClass);
  const templates = {};
  let i18n = {};


  /**
  * Initialize
  */
  const init = () => {
    addEventListeners();
    loadI18NStrings();
  };


  /**
   * Bind All Event Listeners
   */
  const addEventListeners = function () {
    $componentElement.find('[data-load-more]').on('click', fetchMoreResults);
  };


  /**
   * Get i18n String from a HTML data-attribute
   * @return {[type]} [description]
   */
  const loadI18NStrings = function() {

    let i18nData = $componentElement[0].dataset.i18n;

    // Save i18n Strings as an Object in a global variable
    i18n = (JSON.parse(i18nData))
      ? JSON.parse(i18nData)
      : {};
  };


  // Product Family Template
  //--------------
  templates.family = function(data, i18n) {
    return `
      <div class="results-list-submodule results-list-submodule--type-${ data.contentType }">
        <div class="results-list-submodule__image-wrapper b-body-copy-small">
          <a href="${ data.contentItem.link.url }"
            class="results-list-submodule__image-link"
            target="${ data.contentItem.link.target }"
          >
            <img src="${ data.contentItem.imgSrc }"
              class="results-list-submodule__image"
              alt="${ data.contentItem.imgAlt }" />
            </a>
        </div>
        <div class="results-list-submodule__content-wrapper">

          <h4 class="results-list-submodule__name b-heading-h5">
            <a href="${ data.contentItem.link.url }"
              target="${ data.contentItem.link.target }"
              class="results-list-submodule__name-link"
            >${ data.contentItem.name }</a>
          </h4>

          <div class="results-list-submodule__description b-body-copy-small">${ data.contentItem.description }</div>

          <div class="results-list-submodule__url b-body-copy-small">
            <a href="${ data.contentItem.link.url }"
              target="${ data.contentItem.link.target }"
              class="results-list-submodule__url-link"
              aria-label="${ i18n.goTo } ${ data.contentItem.link.text }"
            >${ data.contentItem.link.text }</a>
          </div>

          <ul class="results-list-submodule__link-list b-body-copy-small u-list-inline">

            ${ data.contentItem.secondaryLinks.map((link) => {
              return `
                <li class="results-list-submodule__link-item">
                  <a class="results-list-submodule__link-item-link"
                    href="${ link.url }"
                    target="${ link.target }"
                    aria-label="${ i18n.goTo } ${ link.text }"
                  >${ link.text }</a>
                </li>`;
            }).join('')
            }
          </ul>
        </div>
      </div>`;
  };


  // Article Template
  //--------------
  templates.article = function(data, i18n) {

    let articleDateTPL = (data.contentItem.date)
      ? `<div class="results-list-submodule__date b-body-copy-small">${ data.contentItem.date }</div>`
      : '';

    let articleExternalIconTPL = (data.contentItem.articleType === 'external')
      ? '<i class="icon icon-link-external" aria-hidden="true"></i>'
      : '';

    return `
      <div class="results-list-submodule results-list-submodule--type-${ data.contentType }">

        <div class="results-list-submodule__content-wrapper">

          <h4 class="results-list-submodule__name b-heading-h5">
            <a href="${ data.contentItem.link.url }"
              class="results-list-submodule__name-link"
              target="${ data.contentItem.link.target }"
            >
              <span class="name-label">${ data.contentItem.name }</span>
              ${ articleExternalIconTPL }
            </a>
          </h4>

          ${ articleDateTPL }

          <div class="results-list-submodule__description b-body-copy-small">${ data.contentItem.description }</div>

          <div class="results-list-submodule__url b-body-copy-small">
            <a href="${ data.contentItem.link.url }"
              target="${ data.contentItem.link.target }"
              class="results-list-submodule__url-link"
              aria-label="${ i18n.goTo } ${ data.contentItem.link.text }"
            >${ data.contentItem.link.text }</a>
          </div>

        </div>
      </div>
    `;
  };


  // Resource Template
  //--------------
  templates.resource = function(data, i18n) {
    return `
      <div class="results-list-submodule results-list-submodule--type-${ data.contentType }">

        <div class="results-list-submodule__icon-wrapper">
          <a href="${ data.contentItem.link.url }"
            target="${ data.contentItem.link.target }"
            class="results-list-submodule__url-link"
            aria-label="${ i18n.download } ${ data.contentItem.documentName }"
          >
            <i class="icon icon-download" aria-hidden="true"></i>
            <span class="sr-only">${ data.contentItem.link.text }</span>
          </a>
        </div>

        <div class="results-list-submodule__content-wrapper">

          <h4 class="results-list-submodule__name b-heading-h5">
            <a href="${ data.contentItem.link.url }"
              target="${ data.contentItem.link.target }"
              class="results-list-submodule__name-link"
            >${ data.contentItem.name }</a>
          </h4>

          <div class="results-list-submodule__document b-body-copy">(${ data.contentItem.documentType } ${ data.contentItem.documentSize })</div>

          <div class="results-list-submodule__link-url b-body-copy-small">
            <a data-sly-attribute.href="${ data.contentItem.link.url }"
              target="${ data.contentItem.link.target }"
              class="results-list-submodule__link"
              aria-label="${ i18n.download } ${ data.contentItem.documentName }"
            >${ data.contentItem.link.text }</a>
          </div>

        </div>
      </div>
    `;
  };


  /**
  * Fetch the next page of results and add them to the DOM
  * @param { Object } event - Click Event Object
  */
  const fetchMoreResults = (event) => {

    const $currentComponent = $(event.currentTarget).closest(resultListCSSClass);
    const requestURL = $currentComponent.attr('data-results-url');
    const requestNextPage = $currentComponent.attr('data-results-next-page');

    // If the Request URL doesn't exists don't proceed
    if (!requestURL) { return; }

    // Else Configure AJAX Request
    let newElements = '';

    const requestOptions = {
      page: requestNextPage,
      format: 'json'
    };

    const fetch = $.getJSON(requestURL, requestOptions);

    fetch
      .done(({ search }) => {

        // Loop over all result items
        search.results.forEach((data, index) => {

          // Based on the Content Type, use the appropiate Template passing the received data
          //--------------
          if (data.contentType === 'family' || data.contentType === 'sku') {
            newElements += templates.family(data, i18n);
          }

          else if (data.contentType === 'article') {
            newElements += templates.article(data, i18n);
          }

          else if (data.contentType === 'resource') {
            newElements += templates.resource(data, i18n);
          }

        });

        // Append the new List of Result Elements to the DOM
        $currentComponent.find('.results-list__content').append(newElements);

        // if There are no more results, remove "Load More" button
        if (!search.ajaxRequestNextPage) {
          $currentComponent.find('[data-load-more]').remove();
        }

        // Update Fetch URL for the next set of items / next AJAX Request
        $currentComponent.attr('data-results-url', search.ajaxRequestUrl);
        $currentComponent.attr('data-results-next-page', search.ajaxRequestNextPage);

      })

      // Callback for Failed Request
      .fail((data) => {
        console.error('[Request-Error]', data);
      });

  };


  /**
  * If containing DOM element is found, Initialize and Expose public methods
  */
  if ($componentElement.length > 0) {
    init();
    // Public methods
    // return { }
  }

}());
