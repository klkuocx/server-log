// Require express and server related variables
const express = require('express')
const app = express()
const port = 3000

// Define log functions
function reqLog(req, res, next) {
  console.log(`${timeStamps()} | ${req.method} from ${req.originalUrl}`)
  next()
}

function timeStamps() {
  const timeNow = new Date()
  const year = timeNow.getFullYear()
  const month = timeNow.getMonth()
  const date = timeNow.getDate()
  const hour = timeNow.getHours()
  const min = timeNow.getMinutes()
  const sec = timeNow.getSeconds()
  const timeStamps = `${year}-${month}-${date} ${hour}:${min}:${sec}`
  return timeStamps
}

// Set routes
app.get('/', reqLog, (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', reqLog, (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res, next) => {
  const { id } = req.params
  if (id !== 'favicon.ico') {
    reqLog(req, res, next)
  }
  next()
}, (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', reqLog, (req, res) => {
  res.send('新增一筆  Todo')
})


// Listen to server
app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`)
})