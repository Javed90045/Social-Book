

var settings = document.querySelector(".settings-menu");
var darkButton = document.querySelector("#dark-btn");

function settingsMenu(){
    settings.classList.toggle("settings-menu-height");
}

function darkBtnon()
{
    darkButton.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")== "light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}

if(localStorage.getItem("theme") == "light")
{
    darkButton.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark")
{
    darkButton.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}

localStorage.setItem("theme","dark");
localStorage.getItem("theme");