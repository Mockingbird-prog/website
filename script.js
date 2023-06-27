console.log("Welcome");
let SongIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay= document.getElementById('song1');
let myProgressBar= document.getElementById('myProgressBar');
let songs= [
    {songname: "Love me baby, love me",
filePath:"",
coverPath:"im   {songname: "Love me baby, love me",
filePath:"song/5.mp3",
coverPath:"image.png"
}
}
{songname: "Love me baby, love me",
filePath:"",
coverPath:"image.png"
}
{songname: "Love me baby, love me",
filePath:"",
coverPath:"image.png"
}
{songname: "Love me baby, love me",
filePath:"",
coverPath:"image.png"
}
{songname: "Love me baby, love me",
filePath:"",
coverPath:"image.png"
}
{songname: "Love me baby, love me",
filePath:"",
coverPath:"image.png"
}
]

song1.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})