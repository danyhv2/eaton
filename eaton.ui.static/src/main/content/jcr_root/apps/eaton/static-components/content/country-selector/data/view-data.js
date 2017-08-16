'use strict';
use(function () {

    var data = {};
    var testdata = this.testdata;

    data = {
      header: 'Select your location',
      regionList : [
        {
          regionName: 'Africa',
          regionId: 'africa',
          countryList: [
              {
                countryName: 'Egypt',
                countryId: 'egypt',
                languageList: [
                  {
                    languageName: 'English',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  }
                ]
              },
              {
                countryName: 'South Africa',
                countryId: 'south-africa',
                languageList: [
                  {
                    languageName: 'English',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  }
                ]
              }
            ]
          },
          {
            regionName: 'Asia',
            regionId: 'asia',
            countryList: [
              {
                countryName: 'China',
                countryId: 'china',
                languageList: [
                  {
                    languageName: 'Chinese',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  },
                  {
                    languageName: 'English',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  }
                ]
              },
              {
                countryName: 'India',
                countryId: 'india',
                languageList: [
                  {
                    languageName: 'English',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  }
                ]
              },
              {
                countryName: 'Japan',
                countryId: 'japan',
                languageList: [
                  {
                    languageName: 'Japanese',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  },
                  {
                    languageName: 'English',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  }
                ]
              },
              {
                countryName: 'Korea',
                countryId: 'korea',
                languageList: [
                  {
                    languageName: 'Korean',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  },
                  {
                    languageName: 'English',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  }
                ]
              },
              {
                countryName: 'Thailand',
                countryId: 'thailand',
                languageList: [
                  {
                    languageName: 'Thai',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  },
                  {
                    languageName: 'Vietnamese',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  },
                  {
                    languageName: 'English',
                    languagePath: '#link-to-site',
                    target: '_blank'
                  }
                ]
              }
            ]
          },
          {
            regionName: 'Central America and Caribbean',
            regionId: 'central-america-caribbean'
          },
          {
            regionName: 'Europe',
            regionId: 'europe'
          },
          {
            regionName: 'Middle East',
            regionId: 'middle-east'
          },
          {
            regionName: 'North America',
            regionId: 'north-america'
          },
          {
            regionName: 'Oceania',
            regionId: 'oceania'
          },
          {
            regionName: 'South America',
            regionId: 'south-america'
          }
        ]
    };


    return data;
});
