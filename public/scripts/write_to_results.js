
exports.write_to_results = function(results) {
    console.log("in write the results file" + results)
    var resultsJson = JSON.stringify(results[0])
    var fs = require('fs');
    fs.writeFile('results.json', resultsJson, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
}
