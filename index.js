const dns = require("dns");

function generateVerificationToken(tokenName) {
	return tokenName + "=" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function hasToken(domain, tokenName, token) {
	return hasTxtEntry(domain, tokenName + "=" + token);
}

function hasTxtEntry(domain, entry) {
	return resolveDnsTxt(domain)
		.then(entries => entries.includes(entry));
}


function resolveDnsTxt(domain){
	return new Promise((resolve,reject) => {
		dns.resolveTxt(domain, (error, result) => {
			if(error) return reject(error);
			return resolve(result);
		});
	}).then(entries => entries.map(e => e[0]));
}

module.exports = { generateVerificationToken, hasTxtEntry, hasToken };
