"use strict";
use(function () {
	
    var data = {};
    var testdata = this.testdata;
    
    if ((typeof(testdata) != "undefined") && (testdata == "t9-secondary-landing-investors")) {
    	
    	data.text = 'We continue to see powerfull megatrends that will create enormous opportunities for years to come a growing global population, investments in vital infracstructure in the U.S. and around the world, the importance of protecting the enviroments and rapidly changing technology in an increasingly connected world';
		data.author = {
		  	name : 'Craig Arnold',
		  	title : 'Chairman and CEO'
		};
    	
    } else {
    	
    	data.text = 'There is an urgent demand for sockets that facilitate the easy charging of multiple devices at the same time without using conversion plugs. That is why Eaton has improved its PREMERA and COPA 2-gang sockets to provide access to power using USB devices.';
		data.author = {
		  	name : 'Phil Williams',
		  	title : 'Product Marketing Manager, Eaton'
		};
    	
    }

    return data;

});
