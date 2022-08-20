let songsIndex=0;
let songs = [
    {songName: 'kesaria', filePath: 'audio/Tera Ban Jaunga.mp3', coverPath: 'img/tera_ban_jaunga.jpg'},
    {songName: 'kesaria', filePath: 'audio/kesariya.mp3', coverPath: 'img/kesariya.jpg'},
    {songName: 'kesaria', filePath: 'audio/Lambiyaan Si Judaiyaan.mp3', coverPath: 'img/darshal.jpg'},
    {songName: 'kesaria', filePath: 'audio/Tera Fitoor.mp3', coverPath: 'img/fitoor.jpg'},
    {songName: 'kesaria', filePath: 'audio/Baarish.mp3', coverPath: 'img/baarish.jpg'},
    {songName: 'kesaria', filePath: 'audio/Night-Changes.mp3', coverPath: 'img/kesariya.jpg'},
    {songName: 'kesaria', filePath: 'audio/Raatan Lambiyan.mp3', coverPath: 'img/kesariya.jpg'},
    {songName: 'kesaria', filePath: 'audio/Tera Chehra.mp3', coverPath: 'img/tera_chehra.jpg'},
    {songName: 'kesaria', filePath: 'audio/Let-Me-Love-You.mp3', coverPath: 'img/kesariya.jpg'},
    {songName: 'kesaria', filePath: 'audio/Love Me Like You Do.mp3', coverPath: 'img/kesariya.jpg'},
    {songName: 'kesaria', filePath: 'audio/Tera Hone Laga Hoon.mp3', coverPath: 'img/kesariya.jpg'},
    {songName: 'kesaria', filePath: 'audio/Illegal Weapon 2 - Street Dancer 3D.mp3', coverPath: 'img/kesariya.jpg'},
    {songName: 'kesaria', filePath: 'audio/I Love You.mp3', coverPath: 'img/kesariya.jpg'},
    {songName: 'kesaria', filePath: 'audio/Alone.mp3', coverPath: 'img/kesariya.jpg'}
]
let masterplay = document.getElementById('play_button')
let songprogress = document.getElementById('song_progress')
let audioElement = new Audio(songs[songsIndex].filePath)
let playing = document.getElementById('playing')
let timebar = document.getElementById('time_bar')
let next_button = document.getElementById('next_button')
let previous_button = document.getElementById('previous_button')
console.log(KeyboardEvent.DOM_KEY_LOCATION_RIGHT)

function timestamp(){
    return timebar.innerHTML = audioElement.currentTime
}

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        playing.style.opacity = 1;    
        timestamp();   
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        playing.style.opacity = 0;
        
    }
})
next_button.addEventListener('click' || KeyboardEvent.DOM_KEY_LOCATION_RIGHT == 2,()=>{
    audioElement.pause();
    songsIndex++;
    audioElement = new Audio(songs[songsIndex].filePath)
    audioElement.play();
    audioElement.addEventListener('timeupdate',()=>{
        progress = (parseInt((audioElement.currentTime/audioElement.duration)*100))
        songprogress.value = progress
    })
      
    songprogress.addEventListener('change',()=>{
        audioElement.currentTime = (audioElement.duration * progress)/100
    }) 
})
previous_button.addEventListener('click',()=>{
    if (songsIndex>=1) {
        audioElement.pause();
        songsIndex--;
        audioElement = new Audio(songs[songsIndex].filePath)
        audioElement.play();
        audioElement.addEventListener('timeupdate',()=>{
            progress = (parseInt((audioElement.currentTime/audioElement.duration)*100))
            songprogress.value = progress
        })   
        songprogress.addEventListener('change',()=>{
            audioElement.currentTime = (audioElement.duration * progress)/100
        })
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress = (parseInt((audioElement.currentTime/audioElement.duration)*100))
    songprogress.value = progress
})

songprogress.addEventListener('change',()=>{
    audioElement.currentTime = (audioElement.duration * progress)/100
})