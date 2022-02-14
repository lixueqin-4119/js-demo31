function jsonp(url) {
    return new Promise((resolve, reject) => {
        const random = 'diaoyuJSONPCallbackName' + Math.random()
        //console.log(random)
        window[random] = (data) => {//成功调用resolve
            //console.log(data)
            resolve(data)
        }
        const script = document.createElement('script')
        script.src = `${url}?callback=${random}`
        script.onload = () => {
            script.remove()
        }
        script.onerror = () => {//失败调用reject
            reject()
        }
        document.body.appendChild(script)
    })
}

jsonp('http://qq.com:8888/friends.js').then((data) => {
    console.log(data)
})



