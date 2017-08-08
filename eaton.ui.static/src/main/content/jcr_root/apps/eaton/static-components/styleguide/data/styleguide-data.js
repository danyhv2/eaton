'use strict';
use(function () {

  var data = {};


  //-----------------------------------
  // Color Palette
  //-----------------------------------
  data.colors = [
    {
      "name": "Eaton Blue",
      "colorCode": "#005EB8",
      "sassVariable": "$color__primary-blue"
    },
    {
      "name": "Gray 1",
      "colorCode": "#333F48",
      "sassVariable": "$color__primary-gray1"
    },
    {
      "name": "Gray 2",
      "colorCode": "#5B6770",
      "sassVariable": "$color__primary-gray2"
    },
    {
      "name": "Gray 3",
      "colorCode": "#98A4AE",
      "sassVariable": "$color__primary-gray3"
    },
    {
      "name": "Gray 4",
      "colorCode": "#CCD2D7",
      "sassVariable": "$color__secondary-gray4"
    },
    {
      "name": "Gray 5",
      "colorCode": "#EEF0F2",
      "sassVariable": "$color__secondary-gray5"
    },
    {
      "name": "Gray 6",
      "colorCode": "#F8F8F8",
      "sassVariable": "$color__secondary-gray6"
    },
    {
      "name": "Dark Blue",
      "colorCode": "#003865",
      "sassVariable": "$color__accent-darkblue"
    },
    {
      "name": "Aqua",
      "colorCode": "#00B2A9",
      "sassVariable": "$color__accent-aqua"
    },
    {
      "name": "Orange",
      "colorCode": "#ED8B00",
      "sassVariable": "$color__accent-orange"
    },
    {
      "name": "Black",
      "colorCode": "#000",
      "sassVariable": "$color__black"
    },
    {
      "name": "White",
      "colorCode": "#FFF",
      "sassVariable": "$color__white"
    },
    {
      "name": "Green",
      "colorCode": "#4C8C2B",
      "sassVariable": "$color__green"
    },
    {
      "name": "Red",
      "colorCode": "#9D2235",
      "sassVariable": "$color__red"
    }
  ];


  //-----------------------------------
  // Font Ramp
  //-----------------------------------
  data.typography = {};


  // Font Familes
  //--------------
  data.typography.fonts = [
    {
      name: "Arial",
      fontFamily: "Arial",
      cssStyle: "font-family: Arial; font-weight: normal;"
    },
    {
      name: "ArialBold",
      fontFamily: "Arial",
      cssStyle: "font-family: Arial; font-weight: bold;"
    },
    {
      name: "Eaton",
      fontFamily: "Eaton",
      cssStyle: "font-family: Eaton; font-weight: normal;"
    },
    {
      name: "EatonMedium",
      fontFamily: "EatonMedium",
      cssStyle: "font-family: EatonMedium; font-weight: normal;"
    },
    {
      name: "EatonBold",
      fontFamily: "EatonBold",
      cssStyle: "font-family: EatonBold; font-weight: normal;"
     }
  ];


  // Text Elements
  //--------------
  data.typography.styles = {
    headings: [
      {
        name: "H1 Hero",
        id: "h1-hero",
        className: "b-heading-h1-hero",
        mobile: {
          fontFamily: "'EatonMedium', sans-serif",
          fontSize: "35px",
          fontWeight: "normal",
          lineHeight: "40px"
        },
        desktop: {
          fontFamily: "'EatonMedium', sans-serif",
          fontSize: "54px",
          fontWeight: "normal",
          lineHeight: "68px"
        }
      },
      {
        name: "H1",
        id: "h1",
        className: "b-heading-h1",
        mobile: {
          fontFamily: "'EatonMedium', sans-serif",
          fontSize: "33px",
          fontWeight: "normal",
          lineHeight: "38px"
        },
        desktop: {
          fontFamily: "'EatonMedium', sans-serif",
          fontSize: "52px",
          fontWeight: "normal",
          lineHeight: "62px"
        }
      },
      {
        name: "H2",
        id: "h2",
        className: "b-heading-h2",
        mobile: {
          fontFamily: "'EatonMedium', sans-serif",
          fontSize: "28px",
          fontWeight: "normal",
          lineHeight: "32px"
        },
        desktop: {
          fontFamily: "'EatonMedium', sans-serif",
          fontSize: "40px",
          fontWeight: "normal",
          lineHeight: "50px"
        }
      },
      {
        name: "H3",
        id: "h3",
        className: "b-heading-h3",
        mobile: {
          fontFamily: "'EatonMedium', sans-serif",
          fontSize: "28px",
          fontWeight: "normal",
          lineHeight: "32px"
        },
        desktop: {
          fontFamily: "'EatonMedium', sans-serif",
          fontSize: "40px",
          fontWeight: "normal",
          lineHeight: "50px"
        }
      },
      {
        name: "H4",
        id: "h4",
        className: "b-heading-h4",
        mobile: {
          fontFamily: "Arial, sans-serif",
          fontSize: "22px",
          fontWeight: "bold",
          lineHeight: "29px"
        },
        desktop: {
          fontFamily: "Arial, sans-serif",
          fontSize: "30px",
          fontWeight: "bold",
          lineHeight: "42px"
        }
      },
      {
        name: "H5",
        id: "h5",
        className: "b-heading-h5",
        mobile: {
          fontFamily: "Arial, sans-serif",
          fontSize: "20px",
          fontWeight: "bold",
          lineHeight: "30px"
        },
        desktop: {
          fontFamily: "Arial, sans-serif",
          fontSize: "26px",
          fontWeight: "bold",
          lineHeight: "40px"
        }
      }
    ],

    bodyStyles: [
      {
        name: "Body Copy",
        id: "body-copy",
        className: "b-body-copy",
        mobile: {
          fontFamily: "Arial, sans-serif",
          fontSize: "18px",
          fontWeight: "normal",
          lineHeight: "28px"
        },
        desktop: {
          fontFamily: "Arial, sans-serif",
          fontSize: "24px",
          fontWeight: "normal",
          lineHeight: "38px"
        }
      },
      {
        name: "Body Copy Small",
        id: "body-copy-small",
        className: "b-body-copy-small",
        mobile: {
          fontFamily: "Arial, sans-serif",
          fontSize: "13px",
          fontWeight: "normal",
          lineHeight: "17px"
        },
        desktop: {
          fontFamily: "Arial, sans-serif",
          fontSize: "18px",
          fontWeight: "normal",
          lineHeight: "24px"
        }
      },
      {
        name: "Hero Description",
        id: "hero-description",
        className: "b-hero-description",
        mobile: {
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          fontWeight: "normal",
          lineHeight: "22px"
        },
        desktop: {
          fontFamily: "Arial, sans-serif",
          fontSize: "20px",
          fontWeight: "normal",
          lineHeight: "16px"
        }
      },
      {
        name: "Eyebrow Large",
        id: "eyebrow-large",
        className: "b-eyebrow-large",
        mobile: {
          fontFamily: "Arial, sans-serif",
          fontSize: "17px",
          fontWeight: "bold",
          lineHeight: "20px"
        },
        desktop: {
          fontFamily: "Arial, sans-serif",
          fontSize: "24px",
          fontWeight: "bold",
          lineHeight: "38px"
        }
      },
      {
        name: "Eyebrow Small",
        id: "eyebrow-small",
        className: "b-eyebrow-small",
        mobile: {
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
          lineHeight: "17px"
        },
        desktop: {
          fontFamily: "Arial, sans-serif",
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "24px"
        }
      }
    ]
  };



  //-----------------------------------
  // CTA's / Buttons
  //-----------------------------------
  data.buttons = [
    {
      name: "Primary Light",
      theme: "light",
      cssClasses: "b-button b-button__primary b-button__primary--light"
    },
    {
      name: "Primary Dark",
      theme: "dark",
      cssClasses: "b-button b-button__primary b-button__primary--dark"
    },
    {
      name: "Secondary Light",
      theme: "",
      cssClasses: "b-button b-button__secondary b-button__secondary--light"
    },
    {
      name: "Secondary Dark",
      theme: "dark",
      cssClasses: "b-button b-button__secondary b-button__secondary--dark"
    },
    {
      name: "Tertiary Light (TBD)",
      theme: "",
      cssClasses: "b-button b-button__tertiary b-button__tertiary--light"
    },
    {
      name: "Tertiary Dark (TBD)",
      theme: "dark",
      cssClasses: "b-button b-button__tertiary b-button__tertiary--dark"
    }
  ]



  //-----------------------------------
  // IconFont
  //-----------------------------------
  data.glyphiconFont = [
    "icon-badge",
    "icon-book",
    "icon-bulb",
    "icon-calendar",
    "icon-chevron-down",
    "icon-chevron-left",
    "icon-chevron-right",
    "icon-close",
    "icon-doc-badge",
    "icon-doc-download",
    "icon-doc-text",
    "icon-download",
    "icon-globe",
    "icon-hamburger",
    "icon-headset",
    "icon-help",
    "icon-info",
    "icon-link-external",
    "icon-list-checkmark",
    "icon-list-items",
    "icon-checklist",
    "icon-marker",
    "icon-phone",
    "icon-plane",
    "icon-player-pause",
    "icon-player-play",
    "icon-quote-dark",
    "icon-quote-light",
    "icon-search-minus",
    "icon-search-plus",
    "icon-search",
    "icon-shopping-cart",
    "icon-sign-minus",
    "icon-sign-plus",
    "icon-tiles",
    "icon-tree",
    "icon-user",
    "icon-livechat",
    "icon-share"
  ];

  return data;

});
