

// server.js
const
    http = require('http'),
    https = require('https'),
    fs = require('fs'),
   path = require('path');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}
// console.log(fs);
// fs.mkdir(resolve('/home'), function(e) {
//     console.log(e);
//     fs.writeFile(resolve('/home/hello-world.txt'), 'Hello world22!\n', function() {
//         fs.readFile(resolve('/home/hello-world.txt'), 'utf-8', function(err, data) {
//             console.log(data);
//         });
//     });
// });
const url='https://m.youtube.com/feed/account';
// http.get(url, function(res){
https.get(url, function(res){
    var chunks = [];
    console.log(res);

    //web服务端产生的动态内容 , 通过http传输的时候是采用的传输方式是「分块传输」

    //所以会接收到几段数据 , 触发若干次on('data',fn) , 在此需要把接收到的数据暂存进chunks数组

    res.on('data',function(data){
        chunks.push(data);
    });
    res.on('end',function(){
        //合并接收到的chunks , 并转化为字符串
        var data = Buffer.concat(chunks),
            html = data.toString();
        // var imgReg = /<img.*?(?:>|\/>)/gi;
        //
        // var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        // var arr = html.match(imgReg);
        // console.log('所有已成功匹配图片的数组：');
        // for (var i = 0; i < arr.length; i++) {
        //     var src = arr[i].match(srcReg);
        //     //获取图片地址
        //     if(src[1]){
        //         console.log('已匹配的图片地址'+(i+1)+'：'+src[1]);
        //     }
        // }
        console.log(html)
        fs.writeFile(resolve('/home/tmp.html'),html,function(err){//保存文件
            if(err)throw err;
            console.log('保存成功');
        });
    });

});

// http.createServer(function(request, response){
//     // 使用二进制方式读取图片
//     fs.readFile('./src/test.txt', 'binary', function(err, file){
//         if( err ) throw err;
//         // 当前数据以image/png方式进行输出
//         response.writeHead(200, {"Content-Type": "image/png"});
//         response.write(file, 'binary');
//         response.end();
//     });
// }).listen(3000);
console.log('server has started...');