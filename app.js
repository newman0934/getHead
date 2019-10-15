const express = require('express')
const app = express()
const port = 3000

//Q1
app.use((req, res, next) => {
    const showTime = new Date().toLocaleString()
    console.log(showTime + ` | ${req.method} from ${req.protocol}://${req.get("host")}${req.originalUrl}`)
    next()
})

//Q2
app.use((req, res, next) => {
  const showTime = new Date().toLocaleString()
  const reqTime = Date.now()
  res.once("finish",()=>{
    console.log(`${showTime} | ${req.method} from ${req.protocol}://${req.get("host")}${req.originalUrl} | ${Date.now() - reqTime }ms`)
  })
  next()
})

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})
 
// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})