let request = new XMLHttpRequest()
request.open('get','http://yyy')
request.send()
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
            let jsons = window.JSON.parse(request.responseText)
        }
    }
}