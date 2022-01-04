// fetch(https://v2.jokeapi.dev/joke/Any?blacklistFlags=political)

const jokes = document.getElementById('joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = () => {

    const setHeader = () => {
        headers: {
            Accept: "application/json"
        }
    }
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=political', setHeader)
        .then((res) => res.json())
        .then((data) => {
            jokes.innerHTML = data.joke;
        })
        .catch((error) => {
            console.log(error);
        })
}
jokeBtn.addEventListener('click', generateJokes);
generateJokes();