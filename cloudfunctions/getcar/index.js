// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"teamtest-q4g25"
})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return await db.collection('datas').where({
    type:"car"
  }).orderBy('Nowtime', 'desc')
  .get({
    success(res){
      console.log(res);
    }
  })
}