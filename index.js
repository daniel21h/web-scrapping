const puppeteer = require('puppeteer');
const fs = require('fs');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://instagram.com/rocketseat_oficial');

  
  const imgList = await page.evaluate(() => {
    // Toda essa função será executada no browser

    // Pegar todas as imagens que estao na aba posts
    const nodeList = document.querySelectorAll('article img')

    // Transformar o NodeList em array
    const imgArray = [...nodeList]

    // Trasformar os node (elementos html) em objetos JS
    const imgList = imgArray.map(img => ({
      src: img.src
    }))

    // Colocar para fora da função
    return imgList
  });

  // Escrever os dados em um arquivo local
  fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
    if (err) {
      throw new Error('Something went wrong')
    }

    console.log('Well done!')
  })
 
  await browser.close();
})();