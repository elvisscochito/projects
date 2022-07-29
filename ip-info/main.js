const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};

const fetchData = async (ip) => {
    fetch('https://ip-geolocation-and-threat-detection.p.rapidapi.com/54.85.132.205', OPTIONS)
};
