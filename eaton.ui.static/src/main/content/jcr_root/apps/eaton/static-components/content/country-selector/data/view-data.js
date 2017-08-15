'use strict';
use(function () {

    var data = {};
    var testdata = this.testdata;

    data = {
      header: 'Select your location',
      locations : [
        {
          region: 'Africa',
          regionId: 'africa',
          countries: [
              {
                country: 'Egypt',
                languages: [
                  {
                    title: 'English',
                    url: '#Egypt-English-Site',
                    target: '_blank'
                  }
                ]
              },
              {
                country: 'South Aftrica',
                languages: [
                  {
                    title: 'English',
                    url: '#SA-English-Site',
                    target: '_blank'
                  }
                ]
              }
            ]
          },
          {
            region: 'Asia',
            regionId: 'asia',
            countries: [
              {
                country: 'China',
                languages: [
                  {
                    title: 'Chinese',
                    url: '#Chinese-Site',
                    target: '_blank'
                  },
                  {
                    title: 'English',
                    url: '#China-English-Site',
                    target: '_blank'
                  }
                ]
              },
              {
                country: 'India',
                languages: [
                  {
                    title: 'English',
                    url: '#India-English-Site',
                    target: '_blank'
                  }
                ]
              },
              {
                country: 'Japan',
                languages: [
                  {
                    title: 'Japanese',
                    url: '#japanese-Site',
                    target: '_blank'
                  },
                  {
                    title: 'English',
                    url: '#Japan-English-Site',
                    target: '_blank'
                  }
                ]
              },
              {
                country: 'Korea',
                languages: [
                  {
                    title: 'Korean',
                    url: '#korean-Site',
                    target: '_blank'
                  },
                  {
                    title: 'English',
                    url: '#Korea-English-Site',
                    target: '_blank'
                  }
                ]
              },
              {
                country: 'Thailand',
                languages: [
                  {
                    title: 'Thai',
                    url: '#Thai-Site',
                    target: '_blank'
                  },
                  {
                    title: 'Vietnamese',
                    url: '#Vietnamese-English-Site',
                    target: '_blank'
                  },
                  {
                    title: 'English',
                    url: '#Thailand-English-Site',
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
