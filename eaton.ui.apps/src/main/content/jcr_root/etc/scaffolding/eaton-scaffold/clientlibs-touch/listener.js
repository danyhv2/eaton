/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/


/* ==========================================================================================
 * jQuery-based listeners (Touch-optimized UI)
 * ==========================================================================================
 */
(function ($, $document) {
    "use strict";

    $(document).ready(function() {

		$("#eaton-scaffold-pdh-family-record-path").change(function(e) {
            var prodId = $("input[name='./pdhRecordPath']").val();
            console.log("path browser change event :::"+prodId);

            $.ajax({
                 type: 'GET',    
                 url:'/eaton/productfamilypagedata',

                 data: { p: prodId},
                 success: function(msg){
                    $("input[name='./pdhProdName']").val(msg.pdhTitle);
                    $("input[name='./pdhProdDesc']").val(msg.pdhMarDesc);
                    $("input[name='./pdhPrimaryImg']").val(msg.primaryImgName);
                    $("input[name='./jcr:title']").val(msg.inventoryItemId);
                    $("input[name='./identifier']").val(msg.prodFamilyIdentifier);
                    $("input[name='./pdhCoreFeatures']").val(msg.coreFeatures);
                    $("input[name='./pdhSupportInfo']").val(msg.supportInfo);


                    var content = "<ol>"
                    
                    for (var i in msg.labelList) {
                    
                         content += "<li>"+ msg.labelList[i]+"</li>";
                         content += "<ul><li>"+msg.countryList[i]+"</li>";
                         content += "<li>"+msg.valueList[i]+"</li></ul>";
                    
                    
                        // $("input[name='./textpdh']").siblings('div.coral-Textfield').append(obj);
                        //console.log(obj);
                    }

                    content += "</ol>"
                    $("input[name='./textpdh']").siblings('div.coral-Textfield').html(content);
                    
                    //$("input[name='./textpdh']").siblings('div.coral-Textfield').attr("contenteditable", "false");
                    
                    /*var conten = "<table>";
                    conten += "<tr><th>country</th><th>Label</th><th>Value</th></tr>";
                    
                     for (var i in msg.countryList) {
                         conten += "<tr>";
                        conten += '<td>' + msg.countryList[i] + '</td>';
                         conten += '<td>' + msg.labelList[i] + '</td>';
                         conten += '<td>' + msg.valueList[i] + '</td>';
                         conten += "</tr>";
                    }
                    
                    conten += "</table>";
                    
                    $("input[name='./resources']").siblings('div.coral-Textfield').html(conten);*/

                 }
             });
        });

        

    });

})($, $(document));
