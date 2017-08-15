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
