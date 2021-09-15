let $video = document.querySelector('video');
let $backward = document.querySelector('#backward');
let $pause = document.querySelector('#pause');
let $play = document.querySelector('#play');
let $forward = document.querySelector('#forward');
let $range = document.querySelector('#range');

$range.max = $video.duration

$backward.addEventListener('click', (e) => {
    if($video.currentTime>10){
        $video.currentTime -= 10;
    }else{
        $video.currentTime = 0;
    }
})

$play.addEventListener('click', (e) => {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
})

$pause.addEventListener('click', (e) => {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
})

$forward.addEventListener('click', (e) => {
    $video.currentTime += 10;
})

$video.addEventListener('loadedmetadata', () => {
    $range.max = $video.duration
})

$video.addEventListener('timeupdate', () => {
    $range.value = $video.currentTime
})

$range.addEventListener('input', () => {
    $video.currentTime = $range.value
})