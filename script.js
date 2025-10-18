let button = document.querySelector("button")
let currMode= "Light"

button.addEventListener("click",()=>{
    if(currMode==="Light"){
        currMode="Dark"
        document.querySelector("body").style.backgroundColor = "black"
    }
    else{
        currMode="Light"
        document.querySelector("body").style.backgroundColor = "white"

    }
    console.log(currMode)
})