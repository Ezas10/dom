let b=document.getElementById("p")
let a=document.getElementById("btn")
a.onclick=function(){
    b.textContent="Hi Every one What are you doing"
    b.style.backgroundColor="yellow"
    b.style.borderRadius="50%";
    b.style.fontSize="60px";
} 

var c=document.getElementById("btn1")
var d=document.getElementById("img1")
var e=document.getElementById("img2")
var f=document.getElementById("img3")
c.onclick=function(){
    d.innerHTML=`<img src="https://images3.alphacoders.com/134/1346885.png" width="300" style="border-radius:30px"/>`
    e.innerHTML=`<img src="https://e1.pxfuel.com/desktop-wallpaper/257/144/desktop-wallpaper-artstation-nidavellir.jpg"width="300" style="border-radius:100px">`
    f.innerHTML=`<img src="https://png.pngtree.com/background/20230330/original/pngtree-travel-around-the-world-route-earth-background-picture-image_2206926.jpg" width="300" style="border-radius:50%">`
}


