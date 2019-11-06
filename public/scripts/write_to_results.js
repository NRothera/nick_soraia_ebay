var fs = require('fs');

write_to_results = function(results) {
    var resultsJson = JSON.stringify(results)
    fs.writeFileSync('results.json', resultsJson, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}

get_json_results = function() {
    let rawdata = fs.readFileSync("/Users/nicolasrothera/Projects/nick_soraia_ebay/results.json");
    let results = JSON.parse(rawdata);
    return results
}


compare_two_objects = function(obj1, obj2, countries) {
    var flag=true;
    var differenceResults = []

    for (var countryIndex = 0; countryIndex < countries.length; countryIndex++ ) {
        var country = countries[countryIndex];
        for (let index = 0; index < obj1[country].length; index++) {
            console.log(obj2[country])
            for(key in obj1[country][index]) {
                if(obj1[country][index][key] != obj2[country][index][key]) {
                    console.log(obj1[country][index][key])
                    differenceResults.push(obj1[country][index][key])
                }
                
            }
        }
    }
    
    
    return differenceResults
}

exports.write_to_results_if_new_item = function(current_results, countries) {
    var previous_results = get_json_results();
    var same_results = compare_two_objects(current_results, previous_results, countries)

    if (same_results === true) {
        console.log("you got lucky mate")
    } else{
        write_to_results(current_results)
    }
    
}