export default function puxarPerfil() {
    fetch("https://avatars.githubusercontent.com/u/116754560?v=4")
      .then(function (data) {
        return data.blob();
      }).then(function (result) {
        const imgURL = URL.createObjectURL(result);
        const img = `<img src="${imgURL}" class="imgs"/>`
  
        document.querySelector('.preface').innerHTML = img;
      })
  }
  