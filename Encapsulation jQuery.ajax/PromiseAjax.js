window.jQuery = function(nodeOrSelector) {let nodes = {};nodes.addClass = function(){};nodes.html =  function(){};return nodes} 
window.jQuery.ajax = function({url,method,body,headers}) {
    return new Promise(function(resolve,reject){
        let request = new XMLHttpRequest()
        request.open(method,url)
        for(let key in headers){
            let value = headers[key]
            resquest.setRequestHeader(key,value)
        }
        request.onreadystatechange = function(){
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined,request.responseText)
                }else if(request.status >= 400){
                    reject.call(undefined,request)
                }
            }
        }
        request.send(body)
    })
}