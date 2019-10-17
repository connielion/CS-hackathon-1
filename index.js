//const searchForm = document.getElementById("form");



window.addEventListener('load', function () {


  // sticky scroll
  const searchForm = document.getElementById("form");
  let sticky = searchForm.offsetTop;
  function scrollBar() {
    if (window.pageYOffset >= sticky) {
      searchForm.classList.add("sticky")
    } else {
      searchForm.classList.remove("sticky");
    }
  }
  window.onscroll = function () { scrollBar() };

  // contains iframes
  const vidContainer = document.getElementById('videoContainer');

  // Google API key: 
  const apiKey = "AIzaSyAP9m96VRNSNyam2zrAAhSBV9YIWok9Cl8";
  let searchVal = 'sushi%20bar';
  console.log(searchVal); // user input
  //console.log(searchInput)

  console.log(`outside async function: `, searchVal)

  const apiCall = (async () => {
    //const searchTerm = e.target.value;
    //console.log(searchTerm);
    // console.log('INSIDE ASYNC: ', e.target)
    console.log('search term: ', searchVal) // string
    const api_call = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${searchVal}&type=video&key=${apiKey}`)
    const resp = await api_call.json(); // array of objets

    for (let i = 0; i < resp.items.length; i++) {
      // for each video, create iframe tag
      const iframeTag = document.createElement('iframe');
      let vidId = resp.items[i].id.videoId;
      //console.log('video ID: ', vidId)

      let url = `https://www.youtube.com/embed/${vidId}`;
      // give each iframe tag a src attribute and set it equal to url
      iframeTag.setAttribute('src', url);

      // append each video into videoContainer
      vidContainer.appendChild(iframeTag);
    }
    //console.log('Response: ', resp);
  })
  // FORM SUBMIT EVENT LISTENER
  //console.log(apiCall)
  const searchInput = document.getElementById('searchInput');
  console.log(searchInput.value)
  searchInput.addEventListener('submit', apiCall);


})