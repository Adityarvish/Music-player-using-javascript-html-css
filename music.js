console.log("WELECOME TO Music");
let songIndex = 0;
let audioElement = new Audio('s/.mp3');
let master = document.getElementById('master');
let progress = document.getElementById('progress');
let gf = document.getElementById('gf');
let n = document.getElementById('n');
let song= Array.from(document.getElementsByClassName('song'));
let songs= [
    {name:"No time", filePath: "s/1.mp3", coverPath:"5.jpg"}, 
    {name:"Can You Feel My Heart", filePath: "s/3.mp3", coverPath:"1.jpg"},
    {name:"Gangsta Paradise", filePath: "s/4.mp3", coverPath:"2.jpg"},
    {name:"What color is your bugatti",filePath:"s/2.mp3",coverPath:"3.jpg"},
    {name:"Binding Lights", filePath: "s/5.mp3", coverPath:"4.jpg"}

]
song.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("soname")[0].innerText = songs[i].name;
})
master.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        master.classList.remove('fa-circle-play');
        master.classList.add('fa-circle-pause');
        gf.style.opacity = 0.8;
    }
    else{
        audioElement.pause();
        master.classList.remove('fa-circle-pause');
        master.classList.add('fa-circle-play');
        gf.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    valueer= parseInt(audioElement.currentTime/audioElement.duration*100);
    progress.value = valueer;
}
)
progress.addEventListener('change',()=>{
    audioElement.currentTime = progress.value * audioElement.duration/100;
}
)
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay ')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 's/${songIndex+1}.mp3';
        n.innerText = songs[songIndex+1].name;
        audioElement.currentTime = 0;
        audioElement.play();
        gf.style.opacity = 0.8;
        master.classList.remove('fa-circle-play');
        master.classList.add('fa-circle-pause');
        
    })
    })
    document.getElementById('previous').addEventListener('click', ()=>
    {
    
    
        if(songIndex<=0){
            songIndex = 0
        }
        else{
            songIndex -= 1;
        }   
        audioElement.src = 'songs/${songIndex+1}.mp3';
        n.innerText = songs[songIndex].name;
        audioElement.currentTime = 0;
        audioElement.play();
        master.classList.remove('fa-circle-play');
        master.classList.add('fa-circle-pause');
    
    })
    