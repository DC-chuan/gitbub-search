const express = require('express')
const app = express()
const port = 5001



app.get('/cars', (req, res) => {
    const cars = [
        { id: '001', name: '奔驰', price: 199 },
        { id: '002', name: '马自达', price: 109 },
        { id: '003', name: '捷达', price: 120 },
    ]
    res.send(cars)
    console.log(` ${port} 被请求了`)
})
app.listen(port, () => console.log(` ${port} 被请求了`))