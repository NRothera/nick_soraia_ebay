var http = require('http')
var axios = require('axios');
var items = require('../../controllers/search_criteria_controller')


  // Parse the response and build an HTML table to display search results
    function _cb_findItemsByKeywords(root) {
      var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
      var html = [];
      html.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tbody>');
      for (var i = 0; i < items.length; ++i) {
        var item     = items[i];
        var title    = item.title;
        var pic      = item.galleryURL;
        var viewitem = item.viewItemURL;
        if (null != title && null != viewitem) {
          html.push('<tr><td>' + '<img src="' + pic + '" border="0">' + '</td>' +
          '<td><a href="' + viewitem + '" target="_blank">' + title + '</a></td></tr>');
        }

      }
      // console.log(item)
      html.push('</tbody></table>');
      document.getElementById("results").innerHTML = html.join("");
    }  
    // End _cb_findItemsByKeywords() function
    // Create a JavaScript array of the item filters you want to use in your request
    var filterarray = [
      {"name":"MaxPrice",
       "value":"25",
       "paramName":"Currency",
       "paramValue":"GBP"},
      {"name":"FreeShippingOnly",
       "value":"true",
       "paramName":"",
       "paramValue":""},
      {"name":"ListingType",
       "value":["AuctionWithBIN", "FixedPrice"],
       "paramName":"",
       "paramValue":""},
      ];
      // Define global variable for the URL filter
    var urlfilter = "";
    // Generates an indexed URL snippet from the array of item filters
    function  buildURLArray() {
      // Iterate through each filter in the array
      for(var i=0; i<filterarray.length; i++) {
        //Index each item filter in filterarray
        var itemfilter = filterarray[i];
        // Iterate through each parameter in each item filter
        for(var index in itemfilter) {
          // Check to see if the paramter has a value (some don't)
          if (itemfilter[index] !== "") {
            if (itemfilter[index] instanceof Array) {
              for(var r=0; r<itemfilter[index].length; r++) {
              var value = itemfilter[index][r];
              urlfilter += "&itemFilter\(" + i + "\)." + index + "\(" + r + "\)=" + value ;
              }
            }
            else {
              urlfilter += "&itemFilter\(" + i + "\)." + index + "=" + itemfilter[index];
            }
          }
        }
      }
    }  // End buildURLArray() function
    var searchedItem = "Zelda";
    var result_object = {}

    // Execute the function to build the URL filter

    buildURLArray(filterarray);
    var ebay_api = "http://svcs.ebay.co.uk/services/search/FindingService/v1";
      ebay_api += "?OPERATION-NAME=findItemsByKeywords";
      ebay_api += "&SERVICE-VERSION=1.0.0";
      ebay_api += "&SECURITY-APPNAME=soraiaca-plugin-PRD-253bf921e-d4d9cb10";
      ebay_api += "&GLOBAL-ID=EBAY-GB";
      ebay_api += "&RESPONSE-DATA-FORMAT=JSON";
      //ebay_api += "&callback=_cb_findItemsByKeywords";
      ebay_api += "&REST-PAYLOAD";
      // url += "&keywords=" + searchedItem;
      ebay_api += "&keywords=" + "gameboy";
      ebay_api += "&paginationInput.entriesPerPage=50";
      ebay_api += urlfilter;
      // Submit the request
      // s=document.createElement('script'); // create script element
      // s.src= url;
      // document.body.appendChild(s);

  // This function grabs the api results
    exports.get_api_results = function(){
        axios.get(ebay_api)
    .then(response => {
      var index = 0;
      // console.log(response)
      // console.log(ebay_api)
      // console.log(JSON.stringify(response.data,null,4))
      var api_results = response.data["findItemsByKeywordsResponse"][0]["searchResult"][0]["item"]

      // this command below allows you to filter by category
    
      // console.log(api_results)
      // console.log(api_results[0]["condition"][0]["conditionDisplayName"])

      for (var results of api_results){
        priceJson = api_results[index]["sellingStatus"][0]["currentPrice"][0];
        price = 0 
        Object.keys(priceJson).forEach(function(key) {
          if (priceJson[key] != "GBP"){
            price = priceJson[key]
          }
          
        })
        // console.log(price)
      result_object[index] = {"itemId":api_results[index]["itemId"][0], "title": api_results[index]["title"][0],
      "image":api_results[index]["galleryURL"][0], "bestOffer": api_results[index]["listingInfo"][0]["bestOfferEnabled"][0], "price": "£" + price,
      "buyNow": api_results[index]["listingInfo"][0]["buyItNowAvailable"][0], "endDate": api_results[index]["listingInfo"][0]["endTime"][0], 
      "condition": api_results[index]["condition"][0]["conditionDisplayName"][0]};
        index += 1
      }
      console.log(result_object)
      return result_object
    })
    .catch(error => {
      console.log(error);
    });

  }


 
