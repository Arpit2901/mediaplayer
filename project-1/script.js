const container=document.querySelector(".container"),
mainVideo=container.querySelector("video"),
progressBar=container.querySelector(".progress-bar"),
volumeBtn=container.querySelector(".volume i"),
volumeSlider=container.querySelector(".left input"),
skipBackward= container.querySelector(".skip-backward i"),
skipForward= container.querySelector(".skip-forward i"),
playPauseBtn= container.querySelector(".play-pause i");

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
})

volumeSlider.addEventListener("click",e=>{
    mainVideo.volume=e.target.value;
    if(e.target.value==0){
        volumeBtn.classList.replace("fa-volume-high","fa-volume-xmark");
    }else{
        volumeBtn.classList.replace("fa-volume-xmark","fa-volume-high")
    }
    volumeSlider.value=mainVideo.volume;
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