function CheckElement(e) {
     if(document.querySelectorAll(e).length >=1){
        return true ;
     } else{
        return false;
     } 
}


function MainPageVideo(){
    if(CheckElement(".box-image .video video")){
       let video = document.querySelector(".box-image .video video"); 
       console.log(video)
    }
}MainPageVideo();


function Accordion() {
    if(CheckElement(".accordion")){
        const  Accordion = document.querySelector(".accordion");
        const Accordion_item = Accordion.querySelectorAll(".accordion-item");
           
          for (let i = 0; i < Accordion_item.length; i++) {
                 let toggle = Accordion_item[i].querySelector(".accordion-title");
                 toggle.onclick = ()=>{ 
                    Accordion_item[i].classList.toggle("active"); 
                }
          }
    }
}Accordion();


document.addEventListener("onselect", (e)=>{
    console.log(e);
})

function VideoTrailer() {
  if(CheckElement("#thrailer-video")){
    if(CheckElement(".header-video-details")){
        let Header = document.querySelector("header");
        let HeaderOver = document.querySelector(".header-video-details");
      
         let video = document.querySelector("#thrailer-video");
         video.play();
         let src = video.getAttribute("src"); 
         video.onended = ()=>{ 
              if(HeaderOver.classList.contains("hide")){
              HeaderOver.classList.remove("hide");}
              video.src = src;
         }

         let videoStatus = false;
        setInterval(() =>{
            videoStatus = video.paused;
            if(!videoStatus){  
                   setTimeout(() => {
                      if(videoStatus  === false){
                        if(!HeaderOver.classList.contains("hide")){
                          HeaderOver.classList.add("hide");}
                      }
                    }, 2000);  
            }   
        },100);


        let btnVolume = Header.querySelector(".btn-volume"); 

        btnVolume.onclick = ()=>{
            if (video.muted){
                video.muted = false;
                btnVolume.querySelector("i").classList.remove("fa-volume-down");
                btnVolume.querySelector("i").classList.add("fa-volume-up");
            }else{
                video.muted = true;
                btnVolume.querySelector("i").classList.remove("fa-volume-up");
                btnVolume.querySelector("i").classList.add("fa-volume-down");
            }
        }
        
 
     } 
    } 

}VideoTrailer();
 

function ScrollEvents(){ 
        window.onscroll = ()=>{ 

            if(CheckElement(".navbar")) {
                let navbar = document.querySelector(".navbar");
                if(document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50){
                   if(!navbar.classList.contains("fixed")){
                      navbar.classList.toggle("fixed"); 
                   } 
                }else{
                    if(navbar.classList.contains("fixed")){
                        navbar.classList.toggle("fixed"); 
                    } 
                } 
            } 
           

            if(CheckElement(".fixed-title")){
                let title = document.querySelector(".fixed-title"); 
                if(document.body.scrollTop > 80 ||
                    document.documentElement.scrollTop > 80){ 
                       if(!title.classList.contains("fixed")){
                          title.classList.toggle("fixed"); 
                       } 
                    }else{
                        if(title.classList.contains("fixed")){
                            title.classList.toggle("fixed"); 
                        } 
                }  
            } 
        }


    }   
ScrollEvents();

 
  
function   HomeSlider(){
    if (CheckElement(".row.row-category.owl-carousel")) {
        $(".row.row-category.owl-carousel").owlCarousel({
            loop:true,
            margin:20,
            autoplay:false,
            nav:false,
            dots:false,
            responsive:{
                0:{items:1},
                1200:{items:4.4,margin:100}, 
                1300:{items:6.2},
            }
        })
    }
    if (CheckElement(".search-results .row.row-result.owl-carousel")) {
        $(".search-results .row.row-result.owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            autoplay:false,
            nav:false,
            dots:false,
            responsive:{
                0:{items:1},
                1200:{items:4,margin:20}, 
                1300:{items:6,margin:5},
            }
        })
    }
  }HomeSlider();
  
 

function TrendVideo(params) {
    if(CheckElement(".video-box video")){
         let video = document.querySelector(".video-box video");
         let src = video.getAttribute("src"); 
         video.play();
         video.onended = ()=>{ 
              video.src = src;
         }  
    }
}TrendVideo();

 

function NavbarSearch() {
    if (CheckElement(".navbar form")) {
        let input = document.querySelector(".navbar form input");
        input.focus = true;
        let clear = document.querySelector(".navbar form .clear-input");
        setInterval(() => { 
             if(input.value.length <= 0){
                clear.classList.add("hideIcon"); 
             }else{
               if(clear.classList.contains("hideIcon")){
                   clear.classList.remove("hideIcon");
                   clear.onclick = ()=>{
                       input.value = "";
                  }
               } 
             }
        }, 500);
    }
}NavbarSearch();


function DropdownProfile() {
    if(CheckElement(".navbar .profile-dropdown")){
       let dropdown = document.querySelector(".navbar .profile-dropdown");
       let dropdown_menu = document.querySelector(".navbar .profile-dropdown ul");
       
       dropdown.onclick = ()=>{ 
          dropdown_menu.classList.toggle("show");
       }  

       document.addEventListener("click", function(e){ 
          if(e.target.closest(".navbar .profile-dropdown")) return;
          dropdown_menu.classList.remove("show"); 
       });

    }
}DropdownProfile();



 

function backFunction(){
    if (CheckElement(".back-button")){
        let btn = document.querySelector(".back-button");
        btn.onclick = ()=>{
            window.history.back();
        }
    }
}backFunction();





function WatchPlayer(continuePlayingTime) {
    if (CheckElement(".watch-video-container video")){
        const videoContainer = document.querySelector(".watch-video-container");
        const video_player = videoContainer.querySelector("video");
        const continueBar = videoContainer.querySelector(".continue-bar")

        const btn_fullscreen = videoContainer.querySelector(".screen-mode-btn");
        const btn_play_pause = videoContainer.querySelector(".play-video-btn");
        const btn_skip_backward = videoContainer.querySelector(".skip-backward-btn");
        const btn_skip_foward = videoContainer.querySelector(".skip-foward-btn");
        const btn_volume = videoContainer.querySelector(".volume-btn");
        const btn_previues = videoContainer.querySelector(".previus-btn");
        const btn_next = videoContainer.querySelector(".next-btn");
        const btn_playlist = videoContainer.querySelector(".playlist-btn");
        const btn_subtitles = videoContainer.querySelector(".subtitles-btn");
        const btn_picture_in_picture = videoContainer.querySelector(".picture-in-picture-btn");

        const loader = videoContainer.querySelector('.loader');
        const video_timeline = videoContainer.querySelector(".timeline-container");
        const volume_range = videoContainer.querySelector(".toggle-volume input");
        const player_total_time = videoContainer.querySelector(".total-time");

        /** key functions */

        
        /** default player events */ 
        video_player.oncontextmenu = (e)=>{
           // e.preventDefault();
        }

 
        /** format time function */
         leadingZeroFormatter = new Intl.NumberFormat(undefined, {
             minimumIntegerDigits : 2,//in case we have only one number add zero
         })
        
         function formatDuration(time) {
            const seconds = Math.floor(time % 60);
            const minutes = Math.floor(time / 60) % 60;
            const hours = Math.floor(time / 3600);
            if (hours === 0) {
                return `${minutes} : ${leadingZeroFormatter.format(seconds)}`;
            }else{
                return `${hours}:${leadingZeroFormatter.format(minutes)}: 
                ${leadingZeroFormatter.format(seconds)}`
            }
         }

        /***fullscreen Mode */
        
        btn_fullscreen.onclick = ()=>{
             fullscreenMode();
        }
        
        const fullscreenMode = ()=>{
            if(document.fullscreenElement == null) {
                videoContainer.requestFullscreen();
            }else{
                document.exitFullscreen();
            }
        }


        /*** play events */

        video_player.onwaiting = (e)=>{  
             loader.classList.toggle('hide'); 
         }

        const playPause =()=>{
            if (video_player.paused) {
                  video_player.play();
                  btn_play_pause.querySelector("img").src = './images/icons/pause.png';
            } else {
                video_player.pause();
                btn_play_pause.querySelector("img").src = './images/icons/play.png';
            }
        }

        btn_play_pause.onclick = ()=>{
              playPause();  
        }

        video_player.onclick = ()=>{
            playPause();  
        }

        video_player.ontimeupdate = ()=>{ 
            if(!loader.classList.contains('hide')){loader.classList.toggle("hide")}
            const percent = video_player.currentTime / video_player.duration;
            video_timeline.style.setProperty("--progress-position", percent);
            player_total_time.textContent = formatDuration(video_player.duration);
 
            if(percent > continuePlayingTime){continueBar.style.width = 0+'%'}
        }

        video_player.onended = ()=>{
            btn_play_pause.querySelector("img").src = './images/icons/play.png';
        }

       /// volume events
       
       const mute_player = ()=>{
         if(video_player.muted == true){
             video_player.muted = false;
             btn_volume.querySelector("img").src = './images/icons/volume_high.png';
          }else{
            video_player.muted = true;
            btn_volume.querySelector("img").src = './images/icons/volume_muted.png';
          }  
       }


       btn_volume.onclick = ()=>{
           mute_player();
       } 


       volume_range.oninput = (e)=>{
            video_player.volume = e.target.value;
            if (e.target.value == 0){
                btn_volume.querySelector("img").src = './images/icons/volume_muted.png';
              }else if(e.target.value >= .4){
                 btn_volume.querySelector("img").src = './images/icons/volume_high.png';
              }else{
                 btn_volume.querySelector("img").src = './images/icons/volume_low.png';
              }
       }

      
       video_player.onvolumechange = ()=>{ 
           volume_range.value = video_player.volume;
       }


        /*** Timeline bar */
        continueBar.style.width = continuePlayingTime+"%" 

        video_timeline.addEventListener("mousemove",handleTimelineUpdate);
        video_timeline.addEventListener("mousedown", toggleScrubbing);


        document.addEventListener("mouseup", e=>{
            if(isScrubbing) toggleScrubbing(e)
        })

        document.addEventListener("mousemove", e=>{
            if(isScrubbing) handleTimelineUpdate(e)
        })

        let wasPaused
        let isScrubbing  = false;

        function toggleScrubbing(e) {
            const rect = video_timeline.getBoundingClientRect();
            const percent = Math.min(Math.max(0, e.x  - rect.x), rect.width) / rect.width ;
            isScrubbing = (e.buttons & 1);
            videoContainer.classList.toggle("scrubbing", isScrubbing);
            if (isScrubbing) {
                wasPaused = video_player.paused
                video_player.pause()
            }else{
                video_player.currentTime = percent * video_player.duration
                if (!wasPaused) video_player.play()
            }
            handleTimelineUpdate(e);
        } 

        function handleTimelineUpdate(e) {
            const rect = video_timeline.getBoundingClientRect();
            const percent = Math.min(Math.max(0, e.x  - rect.x), rect.width) / rect.width ;
            const previewImgNumber = Math.max(1, Math.floor((percent*  video_player.duration) /10));
            //const previewImgSrc = `assets/previewImgs/preview${previewImgNumber}.jpg`;
            //previewImg.src = previewImgSrc;
            video_timeline.style.setProperty("--preview-position", percent);

            if (isScrubbing) {
                e.preventDefault();   
                //thumbnailImg.src = previewImgSrc;
                video_timeline.style.setProperty("--progress-position", percent);
            }
        }




       /** Hide video controls */ 
        var timer;
        $(document).on("mousemove touchmove", function () {
            if (timer) {
                clearTimeout(timer);
                timer = 0;
            }
            $('.watch-video-controls').fadeIn(1500);
            timer = setTimeout(function () {
                $('.watch-video-controls').fadeOut(3000)
            }, 3000) 
       });
       

    }
}WatchPlayer(10);