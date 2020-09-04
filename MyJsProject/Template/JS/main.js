let mainColor = localStorage.getItem("color_option");
//random background option
let backgroundOption = true;
//change background image url

let backgroundInterval;
//function to randomizeImgs
if(mainColor !== null)
{ 
    document.documentElement.style.setProperty('--main-color',mainColor);
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
 
    if(element.dataset.color === mainColor){
        element.classList.add("active");
    }
});
}
// toggle Spin class on Icon
  //after clicking over this icon i need that this
  document.querySelector(".settings-box .toggle-settings .sp ").onclick =  function(){
    console.log("cog clicked") 
    this.classList.toggle("fa-spin");
      //if the icon is clicked so open the setting box!!
       document.querySelector(".settings-box").classList.toggle("open");
       
    };
    //switch background option
    const randomBackEl = document.querySelectorAll(".random-backgrounds span");
 
    randomBackEl.forEach(span =>{
    span.addEventListener("click",(e)=> {    
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        //add active class on clicked color
        e.target.classList.add("active");
        if(e.target.dataset.background === 'yes') {

            backgroundOption = true;
            console.log(backgroundOption);
            randomizeImgs();


        }else{
            console.log("no");
            backgroundOption = false;
            console.log(backgroundOption);
            clearInterval(backgroundInterval);
        }
    });
} );
// switch the color
 
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li =>{
    li.addEventListener("click",(e)=> {
        console.log(e.target.dataset.color);
        //set color on root color var
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
        //set color on local storage
        localStorage.setItem("color_option",e.target.dataset.color);
        //remove the active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        //add active class on clicked color
        e.target.classList.add("active");
    });
} );

 let landingPage  = document.querySelector(".langing-page");
// Get array Of Imgs

let imgsArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];



function randomizeImgs() {
    if(backgroundOption === true)
    {
        backgroundInterval = setInterval(() => {
        let randomNumber = Math.floor(Math.random()*imgsArray.length);
        landingPage.style.backgroundImage = 'url("resources/'+imgsArray[randomNumber]+'")';
        }, 10000);
    }
}
//get randon value
randomizeImgs();