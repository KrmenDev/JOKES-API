
document.querySelector('.button').addEventListener('click', getFetch)
const url = 'https://official-joke-api.appspot.com/random_joke'

function getFetch(){
  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.querySelector('.setup').innerText = '" '+data.setup+' "'
        document.querySelector('.punchline').innerText = '... ' + data.punchline
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
