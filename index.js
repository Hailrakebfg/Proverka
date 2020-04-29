var audio = new Audio('./best.mp3');
audio.volume = 0.6;

audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

function showLove(){
    alert("ppl be groovin");
    document.body.style.background = "url('laba.gif') repeat";
    audio.play();
}