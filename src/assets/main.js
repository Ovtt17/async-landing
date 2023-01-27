const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCvC4D8onUfXzvjTOM-dBfEA&part=snippet%2Cid&order=date&maxResults=4';

const content = null || document.querySelector('#content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4fb7d26fc5msh9a5fa4aca6a8f64p123f08jsn08fa6cf186ee',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch (urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video =>`
    <ahref="https://youtube.com/watch?v=${video.id.videoId}"target="_blank">
    <divclass="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <imgsrc="${video.snippet.thumbnails.high.url}"alt="${video.snippet.description}"class="w-full">
        </div>
        <divclass="mt-4 flex justify-between">
          <h3class="text-sm text-gray-700">
            <spanaria-hidden="true"class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
      </a>
    `).slice(0,4).join('')}
      
    `;
    content.innerHTML = view;
  } catch (error){
    console.error(error);
    console.log(error);
  }
})();

