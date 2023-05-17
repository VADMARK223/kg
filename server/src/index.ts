/**
 * @author Markitanov Vadim
 * @since 28.03.2023
 */
import * as fs from 'fs'
import cors from 'cors'
import express from 'express'
import shell from 'shelljs'

const app = express()
const port = 9000
const CLIENT_ASSETS_DIC = 'C:\\Users\\vmark\\WebstormProjects\\kg\\src\\assets\\dictionary.json'
const BUILD_PATH = 'C:\\Users\\vmark\\WebstormProjects\\kg\\build\\'
const BUILD_PROJECT_PATH = 'C:\\Users\\vmark\\WebstormProjects\\kg_build'

app.use(cors())

app.post('/export_dic', (request: any, response: any) => {
  let body = ''
  request.on('data', (data: any) => {
    body += data
  })

  request.on('end', () => {
    fs.rm(CLIENT_ASSETS_DIC, () => {
      console.log('Dictionary exported.')
      fs.appendFile(CLIENT_ASSETS_DIC, body, () => {
        response.end()
      })
    })
  })
})

const getCurrentTime = (): string => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

app.post('/build', (req: any, response: any) => {
  shell.echo('Start build...')
  shell.cd(__dirname + '\\..\\..')
  shell.exec('npm run build')
  shell.cd('build')
  shell.cd(BUILD_PROJECT_PATH)
  shell.echo('Clear build folder.')
  shell.exec('for /f "tokens=*" %A in (\'dir /b /a-d /s ^| findstr /v /i "\\.git" ^& dir /b /ad /s ^| findstr /v /i "\\.git" \') do @del /q "%A"');
  shell.echo('Copy folder..')
  shell.cp('-R', `${BUILD_PATH}/*`, BUILD_PROJECT_PATH)
  shell.exec('git add .')
  shell.exec(`git commit -m "Auto-commit ${getCurrentTime()}"`)
  shell.exec('git push')
  shell.echo('End build.')
  response.end()
})

// Стартуем сервер
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
