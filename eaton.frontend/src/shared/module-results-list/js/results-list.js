//-----------------------------------
// M-60: Results List Container
//-----------------------------------
'use strict';

let App = window.App || {};

App.resultsList = (function() {

  const componentCSSClass = '.results-list';
  const $componentElement = $(componentCSSClass);
  const templates = {};


  /**
  * Initialize
  */
  const init = () => {
    addEventListeners();
  };


  /**
   * Bind All Event Listeners
   */
  const addEventListeners = function () {
    $componentElement.find('[data-load-more]').on('click', fetchMoreResults);
  };


  // Product Family Template
  //--------------
  templates.family = function(data) {
    return `
      <div class="results-list-module results-list-module--type-${ data.contentType }">
        <div class="results-list-module__image-wrapper b-body-copy-small">
          <a href="${ data.contentItem.link.url }"
            class="results-list-module__image-link"
            target="${ data.contentItem.link.target }"
          >
            <img src="${ data.contentItem.imgSrc }"
              class="results-list-module__image"
              alt="${ data.contentItem.imgAlt }" />
            </a>
        </div>
        <div class="results-list-module__content-wrapper">

          <h4 class="results-list-module__name b-heading-h5">
            <a href="${ data.contentItem.link.url }"
              target="${ data.contentItem.link.target }"
              class="results-list-module__name-link"
            >${ data.contentItem.name }</a>
          </h4>

          <div class="results-list-module__description b-body-copy-small">${ data.contentItem.description }</div>

          <div class="results-list-module__url b-body-copy-small">
            <a href="${ data.contentItem.link.url }"
              target="${ data.contentItem.link.target }"
              class="results-list-module__url-link"
              aria-label="Go to ${ data.contentItem.link.text }"
            >${ data.contentItem.link.text }</a>
          </div>

          <ul class="results-list-module__link-list b-body-copy-small u-list-inline">

            ${ data.contentItem.secondaryLinks.map((link) => {
              return `
                <li class="results-list-module__link-item">
                  <a class="results-list-module__link-item-link"
                    href="${ link.url }"
                    target="${ link.target }"
                    aria-label="Go to ${ link.text }"
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
  templates.article = function(data) {

    let articleDateTPL = (data.contentItem.date)
      ? `<div class="results-list-module__date b-body-copy-small">${ data.contentItem.date }</div>`
      : '';

    let articleExternalIconTPL = (data.contentItem.articleType === 'external')
     ? '<i class="icon icon-link-external" aria-hidden="true"></i>'
     : '';

    return `
      <div class="results-list-module results-list-module--type-${ data.contentType }">

        <div class="results-list-module__content-wrapper">

          <h4 class="results-list-module__name b-heading-h5">
            <a href="${ data.contentItem.link.url }"
              class="results-list-module__name-link"
              target="${ data.contentItem.link.target }"
            >
              <span class="name-label">${ data.contentItem.name }</span>
              ${ articleExternalIconTPL }
            </a>
          </h4>

          ${ articleDateTPL }

          <div class="results-list-module__description b-body-copy-small">${ data.contentItem.description }</div>

          <div class="results-list-module__url b-body-copy-small">
            <a href="${ data.contentItem.link.url }"
              target="${ data.contentItem.link.target }"
              class="results-list-module__url-link"
              aria-label="Go to ${ data.contentItem.link.text }"
            >${ data.contentItem.link.text }</a>
          </div>

        </div>
      </div>
    `;
  };


  // Resource Template
  //--------------
  templates.resource = function(data) {
    return `
      <div class="results-list-module results-list-module--type-${ data.contentType }">

        <div class="results-list-module__icon-wrapper">
          <a href="${ data.contentItem.link.url }"
            target="${ data.contentItem.link.target }"
            class="results-list-module__url-link"
            aria-label="Download ${ data.contentItem.documentName }"
          >
            <i class="icon icon-download" aria-hidden="true"></i>
            <span class="sr-only">${ data.contentItem.link.text }</span>
          </a>
        </div>

        <div class="results-list-module__content-wrapper">

          <h4 class="results-list-module__name b-heading-h5">
            <a href="${ data.contentItem.link.url }"
              target="${ data.contentItem.link.target }"
              class="results-list-module__name-link"
            >${ data.contentItem.name }</a>
          </h4>

          <div class="results-list-module__document b-body-copy">(${ data.contentItem.documentType } ${ data.contentItem.documentSize })</div>

          <div class="results-list-module__link-url b-body-copy-small">
            <a data-sly-attribute.href="${ data.contentItem.link.url }"
              target="${ data.contentItem.link.target }"
              class="results-list-module__link"
              aria-label="Download ${ data.contentItem.documentName }"
            >${ data.contentItem.link.text }</a>
          </div>

        </div>
      </div>
    `;
  };


  // SKU Card Template
  //--------------
  templates.productCard = function(data) {
    return `
      <div class="product-card-sku">

        <div class="product-card-sku__image-wrapper b-body-copy-small">
          <a href="${ data.contentItem.link.url }"
            class="product-card-sku__image-link"
            target="${ data.contentItem.link.target }"
          >
            <img src="${ data.contentItem.imgSrc }"
              class="product-card-sku__image"
              alt="${ data.contentItem.name }" />
          </a>
        </div>

        <div class="product-card-sku__header">

          <div class="product-card-sku__title-wrapper">
            <h3 class="product-card-sku__name">
              <a href="${ data.contentItem.link.url }"
                target="${ data.contentItem.link.target }"
                class="product-card-sku__url-link"
              >
                <span class="name-label">${ data.contentItem.name }</span>
                <i class="icon icon-chevron-right" aria-hidden="true"></i>
              </a>
            </h3>
            <div class="product-card-sku__price b-body-copy">${ data.contentItem.price }*</div>
          </div>

          <ul class="product-card-sku__links-list">
            <li class="product-card-sku__link-item">
              <a href="${ data.contentItem.productLinks.specificationsURL }"
                class="product-card-sku__link-item-link"
                target="_self"
                aria-label="Go to Specifications"
              >
                <span class="link-label">Specifications</span>
                <i class="icon icon-chevron-right u-visible-mobile" aria-hidden="true"></i>
              </a>
            </li>

            <li class="product-card-sku__link-item">
              <a href="${ data.contentItem.productLinks.resourcesURL }"
                class="product-card-sku__link-item-link"
                target="_self"
                aria-label="Go to Resources"
              >
                <span class="link-label">Resources</span>
                <i class="icon icon-chevron-right u-visible-mobile" aria-hidden="true"></i>
              </a>
            </li>
          </ul>

        </div>

        <div class="product-card-sku__content">
          <div class="product-card-sku__attrs-list">

            ${ data.contentItem.productAttributes.map((attribute) => {
              return `<div class="product-card-sku__attrs-list-item">
                  <div class="product-card-sku__attr-label b-eyebrow-small text-uppercase">${ attribute.label }</div>
                  <div class="product-card-sku__attr-value b-body-copy">${ attribute.value }</div>
                </div>`;
            }).join('')
            }

          </div>
          <div class="product-card-sku__description">${ data.contentItem.description }</div>
        </div>

      </div>`;
  };



  /**
  * Fetch the next page of results and add them to the DOM
  * @param { Object } event - Click Event Object
  */
  const fetchMoreResults = (event) => {

    const $currentComponent = $(event.currentTarget).closest(componentCSSClass);
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
            newElements += templates.family(data);
          }

          else if (data.contentType === 'article') {
            newElements += templates.article(data);
          }

          else if (data.contentType === 'resource') {
            newElements += templates.resource(data);
          }

          else if (data.contentType === 'product-card') {
            newElements += templates.productCard(data);
          }

        });

        // Append the new List of Result Elements to the DOM
        $currentComponent.find('.results-list__content').append(newElements);

        // Update Fetch URL for the next set of items / next AJAX Request
        $currentComponent.attr('data-results-url', search.ajaxRequestUrl);
        $currentComponent.attr('data-results-next-page', search.ajaxRequestNextPage);

      })

      // If The AJAX Request couldn't be completed
      .fail((data) => {
        console.error('error', data);
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
