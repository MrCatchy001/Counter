let countNo = document.getElementById("Count-no");

let x = 0;

function asser(){

x += 1
countNo.innerText = x ;

}

function asserm(){

    x -= 1
    countNo.innerText = x ;
    
    }


function refreshPage(){
    x = 0
    countNo.innerText = x ;
} 