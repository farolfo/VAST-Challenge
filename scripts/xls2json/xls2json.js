node_xj = require("xls-to-json");

node_xj({
		input: process.argv[2],  // input xls 
		output: process.argv[3], // output json 
		sheet: process.argv[4] || "Sheet1"  // specific sheetname 
	}, 
	function(err, result) {
		if(err) {
		  console.error(err);
		} else {
		  console.log(result);
		}
	}
);
