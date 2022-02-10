const ss = ["ss1.jfif","ss2.jpg.","ss7.jpg","ss4.jpg","ss5.jpg","ss6.jpg"];
const slider = document.getElementById('slider-img')
showSlides(0);

function showSlides(i){
    if(i==ss.length){
        i=0;
    }
    slider.setAttribute("src", ss[i]);
    setTimeout(function()
    {
        showSlides(i + 1);
        console.log("hi")

    }, 3000)
}

