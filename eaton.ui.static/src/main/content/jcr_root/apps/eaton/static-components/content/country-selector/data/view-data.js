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
                    languagePath: '#Egypt-English-Site',
                    target: '_blank'
                  }
                ]
              },
              {
                countryName: 'South Aftrica',
                countryId: 'south-africa',
                languageList: [
                  {
                    languageName: 'English',
                    languagePath: '#SA-English-Site',
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
                    languagePath: '#Chinese-Site',
                    target: '_blank'
                  },
                  {
                    languageName: 'English',
                    languagePath: '#China-English-Site',
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
                    languagePath: '#India-English-Site',
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
                    languagePath: '#japanese-Site',
                    target: '_blank'
                  },
                  {
                    languageName: 'English',
                    languagePath: '#Japan-English-Site',
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
                    languagePath: '#korean-Site',
                    target: '_blank'
                  },
                  {
                    languageName: 'English',
                    languagePath: '#Korea-English-Site',
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
                    languagePath: '#Thai-Site',
                    target: '_blank'
                  },
                  {
                    languageName: 'Vietnamese',
                    languagePath: '#Vietnamese-English-Site',
                    target: '_blank'
                  },
                  {
                    languageName: 'English',
                    languagePath: '#Thailand-English-Site',
                    target: '_blank'
                  }
                ]
              }
            ]
          }
        ]
    };


    return data;
});
