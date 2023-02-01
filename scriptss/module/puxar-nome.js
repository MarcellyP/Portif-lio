export default function puxarName() {
    const h2 = document.querySelector('.preface-h2')
    fetch("https://api.github.com/users/MarcellyP")
      .then(response => response.json())
      .then(nome => {
        h2.innerHTML = nome.login
      })
  }