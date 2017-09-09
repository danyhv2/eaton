//-----------------------------------
// Re-Usable HTML Templates used by Javascript Files
//-----------------------------------
'use strict';

let App = App || {};
App.global = App.global || {};

App.global.templates = (function() {


  /**
  * Based on AEM Template: /eaton.ui.static/src/main/content/jcr_root/apps/eaton/static-components/shared/templates/rendition-image.html
  * @param { Object } image - Image URL's for all breakpoints
  * Aditional Info: Jira EATON-81
  */
  const renditionImage = (image) => {
    return `
      <div class="rendition">
        <img
          class="rendition__image img-responsive"
          data-src="${ image.mobile }"
          data-mobile-rendition="${ image.mobile }"
          data-tablet-rendition="${ image.tablet }"
          data-desktop-rendition="${ image.desktop }"
          alt="${ image.altText }"
        />
      </div>
    `;
  };


  /**
  * Based on AEM Template: /eaton.ui.static/src/main/content/jcr_root/apps/eaton/static-components/shared/templates/rendition-background.html
  * @param { Object } image - Image URL's for all breakpoints
  * Aditional Info: Jira EATON-81
  */
  const renditionBackground = (image) => {
    return `
      <div class="rendition-bg"
        style="background-image: url('${ image.mobile }');"
        data-src="${ image.mobile }"
        data-mobile-rendition="${ image.mobile }"
        data-tablet-rendition="${ image.tablet }"
        data-desktop-rendition="${ image.desktop }"
      >
      </div>
    `;
  };


  // M-36: SKU Card Template
  //--------------
  const productGridSKU = function(data, i18n) {
    return `
      <div class="product-card-sku">

        <div class="product-card-sku__image-wrapper b-body-copy-small">
          <a href="${ data.contentItem.link.url }"
            class="product-card-sku__image-link"
            target="${ data.contentItem.link.target }"
          >
            ${ renditionImage(data.contentItem.image) }
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
            <div class="product-card-sku__price b-body-copy">${ data.contentItem.productPrice }*</div>
          </div>

          <ul class="product-card-sku__links-list">
            <li class="product-card-sku__link-item">
              <a href="${ data.contentItem.productLinks.specificationsURL }"
                class="product-card-sku__link-item-link"
                target="_self"
                aria-label="${ i18n.goTo } ${ i18n.productSpecificationTitle }"
              >
                <span class="link-label">${ i18n.productSpecificationTitle }</span>
                <i class="icon icon-chevron-right u-visible-mobile" aria-hidden="true"></i>
              </a>
            </li>

            <li class="product-card-sku__link-item">
              <a href="${ data.contentItem.productLinks.resourcesURL }"
                class="product-card-sku__link-item-link"
                target="_self"
                aria-label="${ i18n.goTo } ${ i18n.productResourcesTitle }"
              >
                <span class="link-label">${ i18n.productResourcesTitle }</span>
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
                  <div class="product-card-sku__attr-label b-eyebrow-small text-uppercase">${ attribute.productAttributeLabel }</div>
                  <div class="product-card-sku__attr-value b-body-copy">${ attribute.productAttributeValue }</div>
                </div>`;
            }).join('')
            }

          </div>
          <div class="product-card-sku__description">${ data.contentItem.description }</div>
        </div>

      </div>`;
  };


  // M-37: Subcategory Card Template
  //--------------
  const productGridSubcategory = function(data, i18n) {
    return `
      <div class="product-card-subcategory">

        <a href="${ data.contentItem.link.url }"
          target="${ data.contentItem.link.target }"
          class="product-card-subcategory__link">
          <span class="sr-only">${ i18n.goTo } ${ data.contentItem.name }</span>
        </a>

        <div class="product-card-subcategory__image-wrapper">
          ${ renditionImage(data.contentItem.image) }
        </div>

        <div class="product-card-subcategory__content-wrapper">
          <div class="product-card-subcategory__subcategory b-eyebrow-small">${ data.contentItem.subcategory }</div>
          <h2 class="product-card-subcategory__name">${ data.contentItem.name }</h2>
        </div>

      </div>`;
  };




  // Search Results: Product Family Template
  //--------------
  const searchResultsProductFamily = function(data, i18n) {
    return `
      <div class="results-list-submodule results-list-submodule--type-${ data.contentType }">
        <div class="results-list-submodule__image-wrapper b-body-copy-small">
          <a href="${ data.contentItem.link.url }"
            class="results-list-submodule__image-link"
            target="${ data.contentItem.link.target }"
          >
            ${ renditionImage(data.contentItem.image) }
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


  // Search Results: Article Template
  //--------------
  const searchResultsArticle = function(data, i18n) {

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


  // Search Results: Resource Template
  //--------------
  const searchResultsResource = function(data, i18n) {
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

  return {
    renditionImage,
    renditionBackground,
    productGridSKU,
    productGridSubcategory,
    searchResultsProductFamily,
    searchResultsArticle,
    searchResultsResource
  };

})();
