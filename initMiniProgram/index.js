const fs = require('fs')

const folderName = process.argv.splice(2, 1);
const path = `/Users/tit1e/Public/miniProgram/${folderName}`

function createFile(folderName) {
  fs.writeFile(`${path}/index.html`,
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${folderName}</title>
    <link rel="stylesheet" href="./css/index.css">
  </head>
  <body>
    <script src="./js/index.js"></script>
  </body>
  </html>`,'utf8',err => {
      if (err) throw err;
  })
}

function createCSS() {
  fs.mkdirSync(`${path}/css`)
  fs.writeFileSync(`${path}/css/index.css`, '')
  fs.writeFileSync(`${path}/css/index.scss`, '')
}
function createJs() {
  fs.mkdirSync(`${path}/js`)
  fs.writeFileSync(`${path}/js/index.js`, '')
}

fs.mkdir(`${path}`, { recursive: true }, (err) => {
  if (err) throw err;
  createFile(folderName)
  createCSS()
  createJs()
})