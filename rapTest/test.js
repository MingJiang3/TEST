



let url = 'http://rap2api.taobao.org/app/mock/7058/index/hostLists'



let axios = require('axios')
axios.post(url,{
    pageNum:1,
    pageSize:10
}).then(res=>{ Debugger
    console.log(res.data.lists)
})