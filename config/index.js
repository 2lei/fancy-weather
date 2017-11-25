const { miApiUrl, miSign} = require('./miWeather.js')
const config = {
  latitude: 0,
  longitude: 0,
  locationKey: encodeURIComponent('weathercn:101010100'),
  sign: miSign,
  isGlobal: false,
  locale: 'zh-cn',
  days: 5
}
exports.config = config