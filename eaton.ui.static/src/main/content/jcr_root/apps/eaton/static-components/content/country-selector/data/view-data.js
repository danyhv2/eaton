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
                    languageName: '中文	',
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
                    languageName: '日本語',
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
            regionId: 'central-america-caribbean',
            countryList: [
              {
                countryName: 'Costa Rica',
                countryId: 'costa-rica',
                languageList: [
                  {
                    languageName: 'Español',
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
                countryName: 'Dominican Republic',
                countryId: 'dominican-republic',
                languageList: [
                  {
                    languageName: 'Español',
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
                countryName: 'El Salvador',
                countryId: 'el-salvador',
                languageList: [
                  {
                    languageName: 'Español',
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
                countryName: 'Guatemala',
                countryId: 'guatemala',
                languageList: [
                  {
                    languageName: 'Español',
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
                countryName: 'Honduras',
                countryId: 'honduras',
                languageList: [
                  {
                    languageName: 'Español',
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
                countryName: 'Nicaragua',
                countryId: 'nicaragua',
                languageList: [
                  {
                    languageName: 'Español',
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
                countryName: 'Panama',
                countryId: 'panama',
                languageList: [
                  {
                    languageName: 'Español',
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
                countryName: 'Trinidad and tobago',
                countryId: 'trinidad-tobago',
                languageList: [
                  {
                    languageName: 'Español',
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
            regionName: 'Europe',
            regionId: 'europe',
            countryList: [
              {
                countryName: 'Austria',
                countryId: 'austria',
                languageList: [
                  {
                    languageName: 'Deustch',
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
                countryName: 'Belgium',
                countryId: 'belgium',
                languageList: [
                  {
                    languageName: 'Français',
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
                countryName: 'Czech Republic',
                countryId: 'czech-republic',
                languageList: [
                  {
                    languageName: 'čeština ',
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
                countryName: 'Denmark',
                countryId: 'denmark',
                languageList: [
                  {
                    languageName: 'Dansk',
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
                countryName: 'Estonia',
                countryId: 'estonia',
                languageList: [
                  {
                    languageName: 'Eesti',
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
                countryName: 'Finland',
                countryId: 'finland',
                languageList: [
                  {
                    languageName: 'Finnish',
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
                countryName: 'France',
                countryId: 'france',
                languageList: [
                  {
                    languageName: 'Français',
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
                countryName: 'Germany',
                countryId: 'germany',
                languageList: [
                  {
                    languageName: 'Deustch',
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
                countryName: 'Italy',
                countryId: 'italy',
                languageList: [
                  {
                    languageName: 'Italiano',
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
                countryName: 'Latvia',
                countryId: 'latvia',
                languageList: [
                  {
                    languageName: 'Latvijā',
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
                countryName: 'Lithuania',
                countryId: 'lithuania',
                languageList: [
                  {
                    languageName: 'Lithuanian',
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
                countryName: 'Netherlands',
                countryId: 'netherlands',
                languageList: [
                  {
                    languageName: 'Nederlands',
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
                countryName: 'Norway',
                countryId: 'norway',
                languageList: [
                  {
                    languageName: 'Norsk',
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
                countryName: 'Poland',
                countryId: 'poland',
                languageList: [
                  {
                    languageName: 'Polski',
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
                countryName: 'Portugal',
                countryId: 'portugal',
                languageList: [
                  {
                    languageName: 'Português',
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
                countryName: 'Russia',
                countryId: 'russia',
                languageList: [
                  {
                    languageName: 'Русский',
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
                countryName: 'Slovakia',
                countryId: 'slovakia',
                languageList: [
                  {
                    languageName: 'slovenský',
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
                countryName: 'Spain',
                countryId: 'spain',
                languageList: [
                  {
                    languageName: 'Español',
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
                countryName: 'Sweden',
                countryId: 'sweden',
                languageList: [
                  {
                    languageName: 'Svenska',
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
                countryName: 'Switzerland',
                countryId: 'switzerland',
                languageList: [
                  {
                    languageName: 'Deustch',
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
                countryName: 'Turkey',
                countryId: 'turkey',
                languageList: [
                  {
                    languageName: 'Türkiye',
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
                countryName: 'United Kingdom',
                countryId: 'united-kingdom',
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
