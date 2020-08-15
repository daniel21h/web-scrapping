(async () => {
  // Abrir o arquivo de dados (json)
  const response = await fetch('../instagram.json')
  const data = await response.json()

  // Formatar os dados p/ enviar p/ HTML
  const htmlList = data.map(({src}) => `
    <li>
      <img src=${src} />
    </li>
  `).join('')

  // Colocar no html
  document.querySelector('.container').innerHTML = htmlList
})()