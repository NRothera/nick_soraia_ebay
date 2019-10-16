var http = require('http')
var axios = require('axios');
var items = require('../../controllers/search_criteria_controller')

    // Create a JavaScript array of the item filters you want to use in your request

    var filterarray = [
      {"name":"MaxPrice",
       "value":"100000",
       "paramName":"Currency",
       "paramValue":"GBP"},
      {"name":"FreeShippingOnly",
       "value":"false",
       "paramName":"",
       "paramValue":""},
      {"name":"ListingType",
       "value":["AuctionWithBIN", "FixedPrice"],
       "paramName":"",
       "paramValue":""},
       {"name": "sortOrder",
        "value": "StartTimeNewest"}
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
      ebay_api += "&keywords=" + "n64%20new";
      ebay_api += "&paginationInput.entriesPerPage=30";
      ebay_api += "&sortOrder=StartTimeNewest";
      ebay_api += urlfilter;
      // Submit the request
      // s=document.createElement('script'); // create script element
      // s.src= url;
      // document.body.appendChild(s);

  // This function grabs the api results
  exports.getAndFilterApi = function(){

    // function getAndFilterApi(){
    
  
    // exports.get_api_results = function(){
      axios.get(ebay_api)
    .then(response => {
      var index = 0;
      var ids = []
      var api_results = response.data["findItemsByKeywordsResponse"][0]["searchResult"][0]["item"]

      console.log(api_results);
      for (var results of api_results){
        var result = api_results[index]
        priceJson = result["sellingStatus"][0]["currentPrice"][0];
        price = 0 
        Object.keys(priceJson).forEach(function(key) {
          if (priceJson[key] != "GBP"){
            price = priceJson[key]
          }
          
        })
        if (ids.includes(result["itemId"][0])){
          continue;
        }
        else{
          result_object[index] = {"itemId":result["itemId"][0], "title": result["title"][0],
        "image":result["galleryURL"][0], "bestOffer": result["listingInfo"][0]["bestOfferEnabled"][0], "price": "£" + price,
        "buyNow": result["listingInfo"][0]["buyItNowAvailable"][0], "endDate": result["listingInfo"][0]["endTime"][0], 
        "condition": result["condition"][0]["conditionDisplayName"][0], "url": result["viewItemURL"][0]};
        ids.push(result["itemId"][0])

        }
        // console.log(price)
        index += 1
      
      }
      // console.log(result_object)
      return result_object
    })
    .catch(error => {
      console.log(error);
    });
    return result_object;
 
}


 
// exports.getAndFilterApi