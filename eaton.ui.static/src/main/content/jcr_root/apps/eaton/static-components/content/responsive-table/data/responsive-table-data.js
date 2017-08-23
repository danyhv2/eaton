'use strict';
use(function () {

  var testdata = this.testdata;
  var data = {};

  data.sectionTitle = 'UPS models';

  data.tableHeader = {
    columns: [
      'ItemA',
      'ItemB',
      'ItemC',
      'ItemD',
      'ItemE Long Value for Tablet Header Item'
    ]
  };

  // Default Data with 6 Columns
  //--------------
  data.tableRows = [
    {
      rowLabel: "Attribute 1",
      columns: [
        'ValueA1',
        'ValueB1',
        'ValueC1',
        'ValueD1',
        'ValueE1'
      ]
    },
    {
      rowLabel: "Attribute 2",
      columns: [
        "ValueA2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "ValueB2",
        "ValueC2",
        "ValueD2",
        "ValueE2"
      ]
    },
    {
      rowLabel: "Attribute 3",
      columns: [
        "ValueA3",
        "ValueB3",
        "ValueC3",
        "ValueD3 Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        "ValueE3"
      ]
    },
    {
      rowLabel: "Attribute 4",
      columns: [
        "ValueA4",
        "ValueB4",
        "ValueC4 Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        "ValueD4",
        "ValueE4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt"
      ]
    }
  ];


  // 5-Columns: Remove Last item in the array of Column Values
  //--------------
  if ((typeof(testdata) != "undefined") && (testdata == "5-columns")) {
    data.sectionTitle = 'Example with 5 Columns';
    data.tableHeader.columns = data.tableHeader.columns.slice(0, -1);
    data.tableRows = data.tableRows.map(function(row) {
      row.columns = row.columns.slice(0, -1);
      return row;
    });
  }

  // 4-Columns: Remove Last 2 items in the array of Column Values
  //--------------
  if ((typeof(testdata) != "undefined") && (testdata == "4-columns")) {
    data.sectionTitle = 'Example with 4 Columns';
    data.tableHeader.columns = data.tableHeader.columns.slice(0, -2);
    data.tableRows = data.tableRows.map(function(row) {
      row.columns = row.columns.slice(0, -2);
      return row;
    });
  }

  return data;

});
