const axios = require('axios')
/* const fuck = 'https://weatherapi.market.xiaomi.com/wtr-v3/weather/all?latitude=110&longitude=112&isLocated=true&locationKey=weathercn%3A101190101&days=15&appKey=weather20151024&sign=zUFJoAR2ZVrDy1vF3D07&romVersion=7.2.16&appVersion=87&alpha=false&isGlobal=false&device=cancro&modDevice=&locale=zh_cn' */
// const baseURL = 'https://weatherapi.market.xiaomi.com'
/* const defaultConfig = {
    latitude: 110,
    longitude: 112,
    isLocated: true,
    locationKey: 'weathercn%3A101190101',
    days: 15,
    appKey: 'weather20151024', //城市编码
    sign: 'zUFJoAR2ZVrDy1vF3D07',
    romVersion: '7.2.16',
    appVersion: 87,
    alpha: false,
    isGlobal: false,
    device: 'cancro',
    modDevice: '',
    locale: 'zh_cn'
} */
const baseURL = 'https://free-api.heweather.com'
const hefengKey = '7b91d2cd6b0847f3aed73242bed0e527'
const api = axios.create({
    baseURL
})
const defaultConfig = {
    location: '南京',
    key: hefengKey
}
exports.api = api
exports.defaultConfig = defaultConfig