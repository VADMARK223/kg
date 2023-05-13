/**
 * @author Markitanov Vadim
 * @since 28.03.2023
 */
import * as fs from 'fs'
import { DicDto } from '../models/DicDto'
import { WordDto } from '../models/WordDto'
import { v4 as uuidv4 } from 'uuid'

const express = require('express')
const app = express()
const port = 9000
const DIC_PATH: string = __dirname + '\\..\\..\\dict.json'
const CLIENT_ASSETS_DIC = 'C:\\Users\\vmark\\WebstormProjects\\kg\\src\\assets\\dictionary.json'
const BUILD_PATH = 'C:\\Users\\vmark\\WebstormProjects\\kg_build_temp'

const cors = require('cors')
app.use(cors())
const shell = require('shelljs')

app.post('/export_dic', function (request: any, response: any) {
  let body = ''
  request.on('data', function (data: any) {
    body += data
  })

  request.on('end', function () {
    fs.rm(CLIENT_ASSETS_DIC, function () {
      console.log('Словарь перезаписан.')
      fs.appendFile(CLIENT_ASSETS_DIC, body, function () {
        response.end()
      })
    })
  })
})

app.post('/build', (req: any, response: any) => {
  shell.echo('Start')
  shell.cd('..')
  // console.log(shell.pwd().stdout)
  // shell.exec('npm run build')
  shell.cd(BUILD_PATH)
  console.log(shell.pwd().stdout)
  // exec('./build.sh',
  //   (error: ExecException | null, stdout: string, stderr: string) => {
  //     console.log(stdout);
  //     console.log(stderr);
  //     if (error !== null) {
  //       console.log(`exec error: ${error}`);
  //     }
  //   })
  // shell.exec('bash build.sh', (error: any, stdout: any, stderr: any) => {
  //   shell.echo('Error', error)
  //   if (error !== null) {
  //     console.log(`exec error: ${error}`);
  //   }
  // })
  shell.echo('End')
  response.end()
})

app.get('/dic_get', function (request: any, response: any, next: any) {
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
        newWord.id = uuidv4()
        newWord.ru = newWord.ru.charAt(0).toUpperCase() + newWord.ru.slice(1)
        newWord.kg = newWord.kg.charAt(0).toUpperCase() + newWord.kg.slice(1)
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

app.delete('/remove_word', (request: any, response: any) => {
  console.log('Remove word.')
  request.on('data', function (data: any) {
    const wordId: string = JSON.parse(data)
    console.log('wordId:', wordId)
    removeWordFromDic(wordId, response)
  })
})

const removeWordFromDic = (id: string, resp: any) => {
  fs.stat(DIC_PATH, (err, stat) => {
    if (err == null) {
      fs.readFile(DIC_PATH, 'utf8', (err: any, data: any) => {
        if (err) {
          console.log('Ошибка чтения словаря:', err)
          return
        }

        function removeById (value: WordDto, index: number, arr: WordDto[]) {
          if (value.id === id) {
            arr.splice(index, 1)
            return true
          }

          return false
        }

        const dicDto: DicDto = JSON.parse(data) as DicDto
        const words: WordDto[] = dicDto.words
        words.filter(removeById)

        console.log('Файл:', dicDto)
        rewriteDic(dicDto, resp)
      })
    }
  })
}

// Стартуем сервер
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
