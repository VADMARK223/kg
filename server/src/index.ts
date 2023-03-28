/**
 * @author Markitanov Vadim
 * @since 28.03.2023
 */
const express = require('express')
const app = express()
const port = 9000

const cors = require('cors')

app.use(cors())

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
