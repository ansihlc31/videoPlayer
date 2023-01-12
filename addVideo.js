const ans = document.querySelector('.video-continer')
const btn = document.querySelector(".btn")

btn.addEventListener('click',()=>{
    ans.classList.remove('active')
})

const close =document.querySelector('.icon').onclick = ()=>{
    ans.classList.add('active')
    video.pause();
    video.currentTime=0;

}

