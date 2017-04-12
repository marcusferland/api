const speakeasy = require('speakeasy')
const app = require('express')()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bearerToken = require('express-bearer-token')
const compression = require('compression')
const port = 3002

function randomFloatBetween(minValue, maxValue, precision = 2, num = 30) {
  const arr = []
  for (let i = 0; i <= num; i++) {
    arr.push( parseInt( Math.min(minValue + (Math.random() * (maxValue - minValue)), maxValue).toFixed(precision) ) )
  }
  return arr
}

app.use(cors())
app.use(compression())

app.get('/api/v1/threats/total', (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      count: randomFloatBetween(100000, 200000)
    })
  } catch(err) {
    return res.status(400).json({
      err: err
    }).end()
  }
})

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}/`)
})
