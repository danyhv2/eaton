//-----------------------------------
// Product Gird Component
//-----------------------------------
'use strict';

let App = window.App || {};

App.productGrid = (function() {

  const resultListCSSClass = '.results-list';
  const $componentElement = $('.product-grid').find(resultListCSSClass);
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


  // M-36: SKU Card Template
  //--------------
  templates.productCardSKU = function(data) {
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
              return `
                <div class="product-card-sku__attrs-list-item">
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


  // M-37: Family Card Template
  //--------------
  templates.productCardFamily = function(data) {
    return `
      <div class="product-card-family">

        <a href="${ data.contentItem.link.url }"
          target="${ data.contentItem.link.target }"
          class="product-card-family__link">
          <span class="sr-only">Go to ${ data.contentItem.name }</span>
        </a>

        <div class="product-card-family__image-wrapper">
          <img src="${ data.contentItem.imgSrc }"
            class="product-card-family__image"
            alt="${ data.contentItem.name }" />
        </div>

        <div class="product-card-family__content-wrapper">
          <div class="product-card-family__subcategory b-eyebrow-small">${ data.contentItem.subcategory }</div>
          <h2 class="product-card-family__name">${ data.contentItem.name }</h2>
        </div>

      </div>`;
  };



  /**
  * Fetch the next page of results and add them to the DOM
  * @param { Object } event - Click Event Object
  */
  const fetchMoreResults = (event) => {

    const $currentComponent = $(event.currentTarget).closest(resultListCSSClass);
    const requestURL = $currentComponent.attr('data-results-url');
    const requestNextPage = $currentComponent.attr('data-results-next-page');
    const resultsType = $currentComponent.attr('data-results-type');
    let templateType = '';

    // Use Template for Product-SKU Type
    if (resultsType === 'product-card-sku') { templateType = 'card-sku'; }

    // Else Use Template for Product-Family Type
    else if (resultsType === 'product-card-family') { templateType = 'card-family'; }

    // If the Request URL doesn't exists don't proceed
    if (!requestURL) { return; }

    // Else Configure AJAX Request
    let newElements = '';

    const requestOptions = {
      page: requestNextPage,
      format: 'json'
    };

    const fetch = $.getJSON(requestURL, requestOptions);

    // Once the AJAX Request is completed
    fetch
      .done(({ search }) => {

        // Loop over all result items
        search.results.forEach((data, index) => {

          // Based on the Content Type, use the appropiate Template passing the received data
          //--------------
          if (data.contentType === 'product-card' && templateType === 'card-sku') {
            newElements += templates.productCardSKU(data);
          }

          else if (data.contentType === 'product-card' && templateType === 'card-family') {
            newElements += templates.productCardFamily(data);
          }

        });

        // Append the new List of Result Elements to the DOM
        $currentComponent.find('.results-list__content').append(newElements);

        // if the next page of results is "null" or empty, remove "Load More" button
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
