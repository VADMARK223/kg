/**
 * @author Markitanov Vadim
 * @since 28.03.2023
 */
import * as fs from 'fs'
import { DicDto } from '../models/DicDto'
import { WordDto } from '../models/WordDto'

const express = require('express')
const app = express()
const port = 9000
const DIC_PATH: string = __dirname + '\\dict.json'

const cors = require('cors')

app.use(cors())

app.post('/set_dic', function (request: any, response: any) {
  let body = ''
  request.on('data', function (data: any) {
    body += data
  })

  request.on('end', function () {
    fs.rm(DIC_PATH, function () {
      console.log('Словарь перезаписан.')
      fs.appendFile(DIC_PATH, body, function () {
        response.end()
      })
    })
  })
})

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

const rewriteDic = (data: DicDto, response: any) => {
  console.log('Перезаписать словарь')
  fs.rm(DIC_PATH, function () {
    fs.appendFile(DIC_PATH, JSON.stringify(data, null, 2), function () {
      console.log('Словарь перезаписан.')

      fs.stat(DIC_PATH, (err, stat) => {
        if (err == null) {
          console.log('Файл существует.')
          fs.readFile(DIC_PATH, 'utf8', (err: any, data: any) => {
            if (err) {
              console.log('Error:', err)
              return
            }
            console.log('Отправляем ответ.')
            response.send(JSON.parse(data))
          })
        } else if (err.code === 'ENOENT') {
          const message = `Файл '${DIC_PATH}' не существует.`
          console.error(message)
        }
      })
    })
  })
}

const addNewWordInDic = (newWord: WordDto, resp: any) => {
  fs.stat(DIC_PATH, (err, stat) => {
    if (err == null) {
      fs.readFile(DIC_PATH, 'utf8', (err: any, data: any) => {
        if (err) {
          console.log('Ошибка чтения словаря:', err)
          return
        }

        const dicDto: DicDto = JSON.parse(data) as DicDto
        dicDto.words.push(newWord)
        console.log('Файл:', dicDto)
        rewriteDic(dicDto, resp)
      })
    }
  })
}

app.post('/add_word', (request: any, response: any) => {
  console.log('Add word.')
  request.on('data', function (data: any) {
    const newWord: WordDto = JSON.parse(data)
    addNewWordInDic(newWord, response)
  })
})

// Стартуем сервер
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
