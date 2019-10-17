// FORM SUBMIT EVENT LISTENER
// Google API key: 
const apiKey = "AIzaSyAP9m96VRNSNyam2zrAAhSBV9YIWok9Cl8";

//let searchContent = document.getElementById('searchInput').value;
//const searchTerm = "the+office"
const searchTerm = document.getElementById('searchInput').value;

const apiCall = async (e) => {
  e.preventDefault();
  const api_call = await fetch(`https://www.googleapis.com/youtube/v3/search?part=id&q=${searchTerm}&type=video&key=${apiKey}`)
  const data = await api_call.json();
  //console.log(data);
  console.log(searchTerm);
}
document.getElementById('form').addEventListener('submit', apiCall(e));



// SUBMIT BUTTON
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function logInput(e) {
  e.preventDefault();

  console.log(searchInput.value);
})


