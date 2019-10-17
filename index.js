document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
    document.getElementById('contents').style.visibility = "hidden";
  } else if (state == 'complete') {
    setTimeout(function () {
      document.getElementById('interactive');
      document.getElementById('load').style.visibility = "hidden";
      document.getElementById('contents').style.visibility = "visible";
    }, 1000);
  }
}
window.addEventListener('DOMContentLoaded', function () {

  document.body.addEventListener('keydown', function (e) {
    if (e.keyCode === 32) {
      window.close();
    }
  })

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
  //const mychalKey = "AIzaSyAP9m96VRNSNyam2zrAAhSBV9YIWok9Cl8";
  const myKey = 'AIzaSyCgY2dvutPrUFpNqwSpM2xxkP9NAaogEj4';



  function fetchData() {
    let searchInput = document.getElementById('searchInput');
    console.log(searchInput)
    let searchTerm = 'cats';
    // fetchData returns inner function that takes in 'search term', returns Promise object
    return () => {
      console.log(`search term: `, searchTerm)
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=relevance&q=${searchTerm}&type=video&key=${myKey}`).then(res => {
        if (res.status == 200) {

          return res.clone().json().then(data => {
            for (let i = 0; i < data.items.length; i++) {
              // for each video, create iframe tag
              const iframeTag = document.createElement('iframe');
              let vidId = data.items[i].id.videoId;
              //console.log('video ID: ', vidId)

              let url = `https://www.youtube.com/embed/${vidId}`;
              // give each iframe tag a src attribute and set it equal to url
              iframeTag.setAttribute('src', url);

              // append each video into videoContainer
              vidContainer.appendChild(iframeTag);
            }
          })
          // const promise = res.clone().json();
          // console.log(`data: `, promise)
          // for (let key in promise) {
          //   console.log(key)
          // }
        } else {
          throw new Error(res.status);
        }
      })
    }
  }
  const search = fetchData();
  const btn = document.getElementById('submitBtn');
  btn.addEventListener('click', search);

  // let searchVal = searchInput.value.replace(' ', '%');
  //let searchVal = 'cats%20dogs';
  //console.log(searchVal); // user input
  //console.log(searchInput)

  //console.log(`outside async function: `, searchVal)

  // let searchInput = document.getElementById('searchInput');
  // console.log(searchInput)
  // let searchTerm = searchInput.value;
  //console.log(`OUTSIDE function search term: `, searchTerm)
  //console.log('search term: ', searchTerm)


  //console.log(search('cats'))
  // const apiCall = async () => {
  //   //const searchTerm = e.target.value;
  //   //console.log(searchTerm);
  //   // console.log('INSIDE ASYNC: ', e.target)
  //   console.log('search term: ', searchVal) // string
  //   return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=relevance&q=${searchVal}&type=video&key=${myKey}`).then(res => {
  //     if (res.status == 200) {
  //       return res.json(); // array of objets
  //     } else {
  //       throw new Error(res.status);
  //     }
  //   })

  //}
  // FORM SUBMIT EVENT LISTENER
  //console.log(apiCall)
  //const searchForm = document.getElementById('form');

  //const data = search('cats'); // takes in search value

  //console.log('Response: ', search());
  //const userInput = document.getElementById('searchInput').value;
  //console.log(userInput)

  // function getInput() {
  //   const userInput = document.getElementById('searchInput').value;
  //   console.log(userInput)
  //   return userInput;
  // }
  // let input = getInput()
  //btn.addEventListener('click', getInput)
  //const userInput =



})