'use strict';
use(function () {

  var data = {
    level1 : {
      text : 'level1',
      url : '#',
      levels : [
        {
          text : 'level2',
          url : '#'
        },
        {
          text : 'level2',
          url : '#',
          levels : [
            {
              text: 'level3',
              url: '#'
            },
            {
              text: 'level3',
              url: '#'
            },
            {
              text: 'level3',
              url: '#',
              levels: [
                {
                  text: 'level4',
                  url: '#'
                },
                {
                  text: 'level4',
                  url: '#',
                  levels: [
                    {
                      text: 'level5',
                      url: '#'
                    },
                    {
                      text: 'level5',
                      url: '#',
                      levels: [
                        {
                          text: 'level6',
                          url: '#'
                        },
                        {
                          text: 'level6',
                          url: '#'
                        }
                      ]
                    },
                    {
                      text: 'level5',
                      url: '#'
                    }
                  ]  
                },
                {
                  text: 'level4',
                  url: '#'
                }
              ]
            }
          ]
        },
        {
          text : 'level2',
          url : '#'
        },
        {
          text : 'level2',
          url : '#'
        },
        {
          text : 'level2',
          url : '#'
        },
        {
          text : 'level2',
          url : '#',
          levels: [
            {
              text: 'level3',
              url: '#'
            },
            {
              text: 'level3',
              url: '#'
            }
          ]
        }
      ]
    }
  };

  

  return data;
});
