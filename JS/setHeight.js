//Används inte längre
function setHeight(bodyid, id){
    const body = document.getElementById(bodyid);
    const element = document.getElementById(id);

    console.log("hej");
    while(true){
        if(body.style.height < (100 + 'vh')){
            element.style.marginTop = element.style.marginTop + (1 + 'px');
            console.log(body.style.height);
        }else{
            break;
        }
    }
}

function ClosePop(a){
    console.log("hej");
    const id = document.getElementById(a);
    id.remove();
}