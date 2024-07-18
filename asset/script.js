let dropdownBtn = document.getElementById("dropdown-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");


// show dropdown list on click dropdown btn
dropdownBtn.onclick = function(){
    if(list.classList.contains('show')){
        icon.style.rotate = "0deg";
    }else{
        icon.style.rotate = "-180deg";
    }
    list.classList.toggle('show');
}

// hide dropdown list when click outside dropdown btn
window.onclick = function(e){
    if(e.target.id == "dropdown-text" && 
    e.target.id == "span" && 
    e.target.id == "icon"){
        list.classList.remove('show');
        icon.style.rotate = "0deg";
    }
}

for(item of listItems){
    item.onclick = function(e){
        // change dropdwon btn text on click on select list items
        span.innerText = e.target.innerText;
        if(e.target.innerText == "Everything"){
            input.placeholder = "Search Anything..."
        }else{
            input.placeholder = "Search in " + e.target.innerText + "...";

        }

    }
}