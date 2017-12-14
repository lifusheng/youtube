

const ffmpeg = require('ffmpeg');
const vpath='../../../static/video/1243454564756722.ogg'
const imgpath='../../../static/images/video/1243454564756722'

try {
    var process = new ffmpeg(vpath);
    console.log('process',process)
    process.then(function (video) {
        // Callback mode
        const opt={
            frame_rate : 1,
            number : 1,
            file_name : 'my_frame_%t_%s'
        };
        video.fnExtractFrameToJPG(imgpath,opt , function (error, files) {
            if (!error)
                console.log('Frames: ' + files);
            else
                console.log('Error: ' + error);
        });
    }, function (err) {
        console.log('Error: ' + err);
    });
} catch (e) {
    console.log(e.code);
    console.log(e.msg);
}

// module.exports = {
//     // 登录
//
//
// };