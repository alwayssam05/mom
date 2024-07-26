let enter=document.getElementById('name');
function subm(){
    let entername=enter.value;
    if(entername.trim()==="madhavi"){
        window.location.href="second.html"
    }else{
        alert(" Please Enter madhavi");
    }
}