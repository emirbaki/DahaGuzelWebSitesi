

const grup = document.getElementById('div-transform');

function clickFunction(elementID)
{
    const yazi = document.getElementById(elementID);
    yazi.innerHTML = "Oldu";
    yazi.style.color = "lightgreen";
}

document.addEventListener("keydown", translateAnimation);
document.addEventListener("mousedown", (e) => {
    console.log(e.target);
    
});



/**

@param {KeyboardEvent} e
*/
function translateAnimation(e)
{
    if(e.key === "k")
    {
        console.log(grup.style.animationName);
        console.log(grup.style);

       grup.style.animationName = "animasyon";
    }
    if(e.key === "l")
    {
        console.log(grup.style.animationName);
        console.log(grup.style);

       grup.style.animationName = "animasyonDefault";
    }
}

