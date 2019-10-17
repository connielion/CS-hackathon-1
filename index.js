document.addEventListener('DOMContentLoaded', function () {
  // FORM SUBMIT EVENT LISTENER
  // Google API key: 
  const apiKey = "AIzaSyAP9m96VRNSNyam2zrAAhSBV9YIWok9Cl8";

  //
  //const searchTerm = "the+office"
  const searchInput = document.getElementById('searchInput');
  console.log(searchInput)
  let searchContent = searchInput.value;
  console.log(searchContent)
  const vidContainer = document.getElementById('videoContainer');
  //console.log(searchTerm)
  const apiCall = async () => {

    const api_call = await fetch(`https://www.googleapis.com/youtube/v3/search?part=id&q=cat+videos&type=video&key=${apiKey}`)
    const data = await api_call.json();
    console.log(data)
    for (let i = 0; i < data.items.length; i++) {
      // for each video, create iframe tag
      const iframeTag = document.createElement('iframe');
      let vidId = data.items[i].id.videoId;
      //console.log('video ID: ', vidId)

      let url = `https://www.youtube.com/embed/${vidId}`;

      iframeTag.setAttribute('src', url);
      vidContainer.appendChild(iframeTag);
    }
    console.log('DATA: ', data);


  }
  document.getElementById('form').addEventListener('submit', apiCall());


  // SUBMIT BUTTON
  //const submitBtn = document.getElementById('submitBtn');
  //submitBtn.addEventListener('click', apiCall())



})