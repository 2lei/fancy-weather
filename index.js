const Koa = require('koa')
const axios = require('axios')
const app = new Koa()
const { config } = require('./config/index.js')
const { miApiUrl } = require('./config/miWeather.js')
const key = '7b91d2cd6b0847f3aed73242bed0e527'

// const apiUrl = 'https://free-api.heweather.com/s6/weather/now'
const getWeather = async () => {
  let data = await axios.get(miApiUrl, {
    params: config
  })
  data = JSON.stringify(data)
  return data
}
app.use(async(ctx) => {
  ctx.body = getWeather()
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')