window.addEventListener('load', function () {

  // Google API key: 
  const apiKey = "AIzaSyAP9m96VRNSNyam2zrAAhSBV9YIWok9Cl8";
  const searchInput = document.getElementById('searchInput');
  console.log(searchInput)
  //console.log(searchInput)
  //let searchContent = searchInput.value;
  console.log(`outside: `, searchInput.value)

  const vidContainer = document.getElementById('videoContainer');
  //console.log(searchTerm)
  const apiCall = async (e) => {
    console.log('INSIDE ASYNC: ', searchInput.value)
    let searchTerm = searchInput.value;
    console.log('search term: ', searchTerm) // string
    const api_call = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${searchTerm}&type=video&key=${apiKey}`)
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
    console.log('Response: ', resp);


  }
  // FORM SUBMIT EVENT LISTENER
  document.getElementById('form').addEventListener('submit', apiCall());

  // SUBMIT BUTTON
  function getInput() {
    let term = document.getElementById('searchInput').value;
    return term;
  }
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', getInput())



})