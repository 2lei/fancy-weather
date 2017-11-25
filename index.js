const Koa = require('koa')
const app = new Koa()
const _ = require('lodash')
const cors = require('koa-cors')
const { router } = require('./router') 


const key = '7b91d2cd6b0847f3aed73242bed0e527'
// const apiUrl = 'https://free-api.heweather.com/s6/weather/now'
app.use(cors())
   .use(router.routes())
   .use(router.allowedMethods());

app.listen(3001)
console.log('[demo] start-quick is starting at port 3001')