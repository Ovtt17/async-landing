const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=%40CrunchyrollCollection&part=snippet%2Cid&order=date&maxResults=9'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4fb7d26fc5msh9a5fa4aca6a8f64p123f08jsn08fa6cf186ee',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (urlApi) {
  const response = await fetch (urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    
  } catch {

  }
})();