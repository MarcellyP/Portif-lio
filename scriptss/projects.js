const project = document.querySelector('ul');

  function getApiGithub(){
  fetch('https://api.github.com/users/MarcellyP/repos')
  .then(async res =>{
    if(!res.ok) {
      throw new Error(res.status)
    }

    const data = await res.json()
    data.map(item =>{
      let li =document.createElement('li');

      li.innerHTML = `
      <stong>${item.name.toUpperCase()}</strong>
      <span>URL:${item.url}</span>
      <span> Data criação: 
        ${Intl.DateTimeFormat('pt-BR')
      .format(new Date(item.created_at))}
      </span>
      
    `

    project.appendChild(li);
    })
  }).catch(e => console.log(e))
}
getApiGithub()
