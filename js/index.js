let p = document.querySelector(".firstpage p");
setTimeout(function(){
    p.style.opacity=1;
},2000);

let nameContainer = document.querySelector('.name-container');
setTimeout(() => {
    nameContainer.style.opacity=1;
}, 3000);
let dateTime = document.querySelector('.datetime');
const specialDay = new Date(2020,4,21,21,24,00);
setInterval(getTime1,1000);

//设置按钮事件
let love = document.querySelector('.left button');
love.addEventListener('click',scollToDiv);
let homeButton = document.querySelector('.button button');
homeButton.addEventListener('click',scollToDiv); 
let toFirst = document.querySelector('.toFirst');
let toStory = document.querySelector('.toStory');
let toPic = document.querySelector('.toPic');

toFirst.addEventListener('click',scollToDiv);
toStory.addEventListener('click',scrollToS);
toPic.addEventListener('click',scrollToAlbum);

let audioCtrl = document.querySelector('.audioctrl');
let audioTag = document.querySelector('.audio');
let flag=false;
const url1 = "http://m701.music.126.net/20220522174216/81d5c85b1d8b2ba4acccbb880cafc167/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8679512154/cbfc/7334/150b/2ebfc577ed8b27ce5ce78c0724cd0131.mp3";
const url2 = "http://m701.music.126.net/20220522190004/92de5e9d6fe4c29f8e0a12caa4877409/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/4621088085/11c4/1794/6cce/1c8ff3c55e426e3757df6ebe186b0bec.mp3";
const url3 = "http://m8.music.126.net/20220522182420/0ec0506cedcdf72732db484488176d4e/ymusic/550b/0758/030c/ba8b3a9847022989c9304f9e993f629f.mp3";
const url4 = "http://m701.music.126.net/20220522190004/92de5e9d6fe4c29f8e0a12caa4877409/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/4621088085/11c4/1794/6cce/1c8ff3c55e426e3757df6ebe186b0bec.mp3";
const url5 = "http://m8.music.126.net/20220522183102/63e299bf1f2a56d918f9643bfb930ba8/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/2868349721/9096/7a83/eaf1/5d3c6e1df5358b0f6090f6e0f516d647.mp3";
const url6 = "http://m8.music.126.net/20220522184325/bb44109b2c07bc1e3fc22bff018bf880/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3277408450/713d/431c/7abf/8eea0bdeeb7f024f9fbc30f29fa3ba99.mp3";
audioCtrl.addEventListener('click',() =>{
    if(flag){
        audioTag.pause();
        flag=false;
    }else{
        audioTag.play();
        flag=true;
    }
    
})
let changeMusic = document.querySelector('.changeMusic');
changeMusic.addEventListener('click',()=>{
    const num = Math.random();
    const code = Math.floor(6*num+1);
    switch(code){
        case 1:
            audioTag.src=url1;
            break;
        case 2:
            audioTag.src=url2;
            break;
        case 3:
            audioTag.src=url3;
            break;
        case 4:
            audioTag.src=url4;
            break;
        case 5:
            audioTag.src=url5;
            break;
        case 6:
            audioTag.src=url6;
            break;
        default:
            audioTag.src=url1;
    }
    audioTag.play();
    flag = true;
})

wordsFadeIn('.part1');
wordsFadeIn('.part2');
wordsFadeIn('.part3');
wordsFadeIn('.part4');
wordsFadeIn('.part5');
wordsFadeIn('.part6');
wordsFadeIn('.part7');
wordsFadeIn('.part8');
wordsFadeIn('.part9');
wordsFadeIn('.part10');
wordsFadeIn('.part11');
wordsFadeIn('.part12');
wordsFadeIn('.part13');

let autoPlay=document.querySelector('.autoPlay');
let playFlag = false;
let timer;
autoPlay.addEventListener('click',()=>{
    let height=window.scrollY;
    if(playFlag==false){
            timer=setInterval(()=>{ 
                window.scrollTo({
                    top: height,
                    behavior: "smooth"
                });
                height++;
            },10);
        autoPlay.innerHTML='停止滚动';
        autoPlay.style.backgroundColor='pink';
        playFlag=true;
    }else{
       clearInterval(timer);
       autoPlay.innerHTML='自动滚动';
       autoPlay.style.backgroundColor='';
       playFlag=false;
    }
})

function wordsFadeIn(str){
let part1 = document.querySelector(str);
setInterval(()=>{
    if(part1.getBoundingClientRect().top<500){
        part1.style.opacity=1;
    }
    else{
        part1.style.opacity=0;
    }
},100);
}
function scollToDiv(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToS(){
    let firstpage = document.querySelector('.firstpage');
    window.scrollTo({
        top: firstpage.clientHeight,
        behavior: "smooth"
    });
}

function scrollToAlbum(){
    let firstpage = document.querySelector('.firstpage');
    let story = document.querySelector('.story');
    let time = document.querySelector('.time');
    window.scrollTo({
        top: firstpage.clientHeight+story.clientHeight+time.clientHeight,
        behavior: "smooth"
    });
}

function getTime1(){
    let dt = new Date();
    let deltaSeconds = dt.getTime()-specialDay.getTime();
    let day = parseInt(deltaSeconds/(24 * 60 * 60 * 1000));
    let hour = parseInt((deltaSeconds-day*24*60*60*1000)/(60*60*1000));
    let minutes = parseInt((deltaSeconds-day*24*60*60*1000-hour*60*60*1000)/(60*1000));
    let seconds = parseInt((deltaSeconds-day*24*60*60*1000-hour*60*60*1000-minutes*60*1000)/1000);
    dateTime.innerHTML=`${day}天 ${hour}小时 ${minutes}分 ${seconds}秒`;
}