//myLogo Move
setInterval(()=>{
    document.querySelectorAll(".myLogo")[0].getElementsByClassName("myLogo_eye")[0].setAttribute("fill","black");
    document.querySelectorAll(".myLogo")[0].getElementsByClassName("myLogo_circle_head")[0].setAttribute("cx","40");
    document.querySelectorAll(".myLogo")[0].getElementsByClassName("myLogo_eye")[0].setAttribute("cx","40");
    setTimeout(()=>{
        document.querySelectorAll(".myLogo")[0].getElementsByClassName("myLogo_circle_head")[0].setAttribute("cx","63");
        document.querySelectorAll(".myLogo")[0].getElementsByClassName("myLogo_eye")[0].setAttribute("cx","70");
        document.querySelectorAll(".myLogo")[0].getElementsByClassName("myLogo_eye")[0].setAttribute("fill","white");
    },
1000)

}, 5000)