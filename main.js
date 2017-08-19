const fs = require('fs');
const readline = require('readline');
const rs = fs.createReadStream('/proc/net/wireless');
const rl = readline.createInterface(rs, {});

let lineNo = 0;
rl.on('line', (line) => {
	lineNo++;
	if (lineNo === 3) {
		let data = line.split('.');
		let rssi = data[1].trim();

		const epoch = new Date();

		console.log('wifi.rssi\t' + rssi + '\t' + epoch.getTime());
	}
});