const axios = require("axios");

const secret2url = "https://raw.githubusercontent.com/kovdmm/itmo-master-web-tasks/master/crypto/public09092019/secret2";
const url = "http://3336.kodaktor.ru/mystery?kovdmm";

axios.post(url, secret2url, {
	headers: {
		"content-type": "multipart/form-data" 
	} 
})

.then(response => {
	console.log(response.data);
})

.catch(function (error) {
	console.log(error);
});
