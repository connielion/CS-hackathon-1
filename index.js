// FORM SUBMIT EVENT LISTENER
// Google API key: 
const apiKey = "AIzaSyAP9m96VRNSNyam2zrAAhSBV9YIWok9Cl8";

//let searchContent = document.getElementById('searchInput').value;
//const searchTerm = "the+office"
const searchTerm = document.getElementById('searchInput').value;

const apiCall = async () => {

  const api_call = await fetch(`https://www.googleapis.com/youtube/v3/search?part=id&q=${searchTerm}&type=video&key=${apiKey}`)
  const data = await api_call.json();
  for (let i = 0; i < data.items.length; i++) {
    console.log('video ID: ', data.items[i].id.videoId)
  }
  console.log('DATA: ', data);
  console.log(searchTerm)

}
document.getElementById('form').addEventListener('submit', apiCall());


// SUBMIT BUTTON
//const submitBtn = document.getElementById('submitBtn');
//submitBtn.addEventListener('click', apiCall())


