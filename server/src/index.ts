/**
 * @author Markitanov Vadim
 * @since 28.03.2023
 */
import * as fs from 'fs'

const express = require('express')
const app = express()
const port = 9000
const DIC_PATH: string = __dirname + '\\dict.json'

const cors = require('cors')

app.use(cors())

app.get('/get_dic', function (request: any, response: any, next: any) {
  fs.stat(DIC_PATH, (err, stat) => {
    if (err == null) {
      console.log('Файл существует.')
      fs.readFile(DIC_PATH, 'utf8', (err: any, data: any) => {
        if (err) {
          console.log('Error:', err)
          next(err)
          return
        }
        console.log('Файл:', JSON.parse(data))
        response.send(JSON.parse(data))
      })
    } else if (err.code === 'ENOENT') {
      const message = `Файл '${DIC_PATH}' не существует.`
      console.error(message)
      response.status(500).json({ message })
    }
  })
})

app.post('/add_word', (request: any, response: any) => {
  console.log('Add word.')
  request.on('data', function (data: any) {
    console.log('New word:', JSON.parse(data))
    response.end()
  })
})

// Стартуем сервер
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
