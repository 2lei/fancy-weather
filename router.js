const Router = require('koa-router')
const { api, defaultConfig } = require('./config')
// const util = require('util')

// 
const router = new Router()
const getData = async (query) => {
    if (query.location) {
        const config = Object.assign(defaultConfig, query)
    } else {
        config = defaultConfig
    }   
    const res = await api.get('/s6/weather/forecast', {
        params: config
    })
    return res
}

router.get('/weather', async (ctx, next)=> {
    console.log(ctx.request)
    const query = ctx.request.query
    const data = await getData(query)    
    ctx.response.body = data.data
})

exports.router = router