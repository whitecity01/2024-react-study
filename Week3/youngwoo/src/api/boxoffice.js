import axios from 'axios'; // npm install axios -> npm audit fix --force

// const BASE_URL = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101'
const BASE_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/'

const API = axios.create({
	BASE_URL: BASE_URL,
    headers: {
      	'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default API;