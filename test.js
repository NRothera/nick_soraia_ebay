var fs = require('fs');

var result_test = {"0":{"countryCode":"GB","itemId":"113934548877","title":"Rear Brake Caliper Repair Kit Mitsubishi Isuzu:GALANT V 5,VI 6,SPACE WAGON",
"image":"https://thumbs2.ebaystatic.com/m/mbSEs9VZ6ulM-3EvgHslxLw/140.jpg","bestOffer":"false","price":"11.04",
"buyNow":"false","endDate":"2019-11-23T21:38:02.000Z",
"condition":"New", "url":"https://www.ebay.co.uk/itm/Rear-Brake-Caliper-Repair-Kit-Mitsubishi-Isuzu-GALANT-V-5-VI-6-SPACE-WAGON-/113934548877"},
"1":{"countryCode":"GB","itemId":"352831522130","title":"Super Mario 64 WATA 8.5 A+ N64 NES Nintendo First Print Red Label Factory Sealed",
"image":"https://thumbs3.ebaystatic.com/m/mE97fDJNO3nhyoZL3FEfNnA/140.jpg","bestOffer":"true","price":"2178.73",
"buyNow":"false","endDate":"2019-11-23T19:19:04.000Z","condition":"Very Good",
"url":"https://www.ebay.co.uk/itm/Super-Mario-64-WATA-8-5-A-N64-NES-Nintendo-First-Print-Red-Label-Factory-Sealed-/352831522130"},
"2":{"countryCode":"GB","itemId":"223717062384","title":"Star Wars: Episode I - Racer | Nintendo 64 N64 SEALED red strip graded VGA 80",
"image":"https://thumbs1.ebaystatic.com/m/mwkgrcRnWVWMtpnm5KgUgJw/140.jpg","bestOffer":"false","price":"229.9","buyNow":"false",
"endDate":"2019-11-22T20:44:22.000Z","condition":"New",
"url":"https://www.ebay.co.uk/itm/Star-Wars-Episode-Racer-Nintendo-64-N64-SEALED-red-strip-graded-VGA-80-/223717062384"},
"3":{"countryCode":"GB","itemId":"123948794894","title":"CONKER'S BAD FUR DAY - TOTAKU FIGURE NEW SEALED - NOT N64 GAME",
"image":"https://thumbs3.ebaystatic.com/m/mMpOORtlkvBbeo_ahfcAhjw/140.jpg","bestOffer":"false","price":"15.99",
"buyNow":"false","endDate":"2019-11-22T14:47:43.000Z","condition":"New",
"url":"https://www.ebay.co.uk/itm/CONKERS-BAD-FUR-DAY-TOTAKU-FIGURE-NEW-SEALED-NOT-N64-GAME-/123948794894"},
"4":{"countryCode":"GB","itemId":"323955653348","title":"Pokemon Snap SOLID STRIP VGA 85 - Nintendo 64 - New - Factory Sealed N64",
"image":"https://thumbs1.ebaystatic.com/m/mdxPdJwmgVMFMBs2o9nNfuw/140.jpg","bestOffer":"false","price":"750.0","buyNow":"false",
"endDate":"2019-11-22T06:20:19.000Z","condition":"New",
"url":"https://www.ebay.co.uk/itm/Pokemon-Snap-SOLID-STRIP-VGA-85-Nintendo-64-New-Factory-Sealed-N64-/323955653348"}}

var writing_to_json = function(results) {
    console.log("in write the results file" + results)
    var resultsJson = JSON.stringify(results[0])
    fs.writeFileSync('results.json', resultsJson, (err) => {
    if (err) throw err;
    console.log('Data written to file');
    });
}


var get_json_results = function() {
    let rawdata = fs.readFileSync(previousResults);
    let results = JSON.parse(rawdata);
    console.log(results);
}

get_json_results()