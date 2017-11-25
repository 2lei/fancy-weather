const Router = require('koa-router')
const axios = require('axios')
const { fuck } = require('./config')
const util = require('util');

// 
const router = new Router()
const getData = async () => {
    const res = await axios.get(fuck)
    return res
}

router.get('/weather', async (ctx, next)=> {
    console.log(ctx)
    console.log(next)
    const data = await getData()    
    ctx.response.body = data.data
})

exports.router = router