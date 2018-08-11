var search = require('./return_search_api');
var axios = require('axios');





exports.get_api_results = function() {
  axios.get(String(search.get_ebay_api_url))
.then(response => {
  console.log(search.get_ebay_api_url)
  // console.log(response.data)
  // var api_results = response.data
})
.catch(error => {
  // console.log(error);
});
};
