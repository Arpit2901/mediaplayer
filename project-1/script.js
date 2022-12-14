const container=document.querySelector(".container"),
mainVideo=container.querySelector("video"),
progressBar=container.querySelector(".progress-bar"),
volumeBtn=container.querySelector(".volume i"),
volumeSlider=container.querySelector(".left input"),
skipBackward= container.querySelector(".skip-backward i"),
skipForward= container.querySelector(".skip-forward i"),
playPauseBtn= container.querySelector(".play-pause i"),
speedBtn= container.querySelector(".playback-speed span"),
speedOptions= container.querySelector(".speed-options");

mainVideo.addEventListener("timeupdate",e=>{
    let {currentTime,duration}=e.target;
   let percent=(currentTime/duration)*100;
   progressBar.style.width=`${percent}%`;
})

volumeBtn.addEventListener("click",()=>{
    if(!volumeBtn.classList.contains("fa-volume-high")){
        mainVideo.volume=0.5;
        volumeBtn.classList.replace("fa-volume-xmark","fa-volume-high")
    }else{
        mainVideo.volume=0.0;
        volumeBtn.classList.replace("fa-volume-high","fa-volume-xmark")
    }
    volumeSlider.value=mainVideo.volume;
})

volumeSlider.addEventListener("click",e=>{
    mainVideo.volume=e.target.value;
    if(e.target.value==0){
        volumeBtn.classList.replace("fa-volume-high","fa-volume-xmark");
    }else{
        volumeBtn.classList.replace("fa-volume-xmark","fa-volume-high")
    }
})

speedBtn.addEventListener("click",()=>{
    speedOptions.classList.toggle("show"); 
})

speedOptions.querySelectorAll("li").forEach(Option=>{
   Option.addEventListener("click",()=>{
    mainVideo.playbackRate=Option.dataset.speed;
   })
})
document.addEventListener("click",e=>{
    if(e.target.tagName!=="SPAN"||e.target.className!=="material-symbols-rounded"){
        speedOptions.classList.remove("show");
    }
})

skipBackward.addEventListener("click",()=>{
    mainVideo.currentTime-=5;
})
skipForward.addEventListener("click",()=>{
    mainVideo.currentTime+=5;
})
playPauseBtn.addEventListener("click",()=>{
    mainVideo.paused? mainVideo.play():mainVideo.pause();
});
mainVideo.addEventListener("play",()=>{
    playPauseBtn.classList.replace("fa-play","fa-pause");
});
mainVideo.addEventListener("pause",()=>{
    playPauseBtn.classList.replace("fa-pause","fa-play");
});