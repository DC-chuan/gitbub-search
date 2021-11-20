const express = require('express')
const app = express()
const port = 5000
    // app.use((req, res) => {
    //     res.setHeader('Access-Control-Allow-Origin', '*')
    // })


app.get('/students', (req, res) => {
    const students = [
        { id: '001', name: 'tom', age: 18 },
        { id: '002', name: 'jerry', age: 19 },
        { id: '003', name: 'tony', age: 120 },
    ]
    res.send(students)
    console.log(` ${port} 被请求了`)
})
app.listen(port, () => console.log(` ${port} 成功开启`))