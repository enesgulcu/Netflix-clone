// drop down part -- when click anywhere and rotate => X on the dropdown head title line.
const acordioncard = document.querySelector("#accordion");

acordioncard.addEventListener("click",function(e){
    if(e.target.tagName == "DIV"){
        if(e.target.className == "card-header acordion-label collapsed"){            
            e.target.querySelector("img").classList.add("clicked");
        }
        else if(e.target.className == "card-header acordion-label"){
            e.target.querySelector("img").classList.remove("clicked");
        }
    }
    else if(e.target.tagName == "IMG"){
        if(e.target.parentElement.className == "card-header acordion-label collapsed"){            
            e.target.classList.add("clicked");
        }
        else if(e.target.parentElement.className == "card-header acordion-label"){
            e.target.classList.remove("clicked");
        }
    }
    else if(e.target.tagName == "BUTTON"){
        if(e.target.parentElement.className == "card-header acordion-label collapsed"){            
            e.target.parentElement.querySelector("img").classList.add("clicked");
        }
        else if(e.target.parentElement.className == "card-header acordion-label"){
            e.target.parentElement.querySelector("img").classList.remove("clicked");
        }
    }  
});
// drop down part finish...
