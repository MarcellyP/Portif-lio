export default function puxarBio() {
    const parag = document.querySelector('.preface-p')
    fetch("https://api.github.com/users/MarcellyP")
      .then(response => response.json())
      .then(biografia => {
        parag.innerHTML = biografia.bio
      })
    }   