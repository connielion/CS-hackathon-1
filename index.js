document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('prevented reload');
});


function logInput() {
  const input = document.getElementById('searchInput');
  let inputval = input.value;
  console.log(inputval);
  const iframe = document.getElementById('iframe');
  document.getElementById('videoContainer').removeChild(iframe);
}

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', logInput())


