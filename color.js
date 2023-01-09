var body = {
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    setBgColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayMode(){
var links = document.querySelectorAll('a');
var i = 0; 
if(document.querySelector('body').style.backgroundColor === 'white'){
    body.setBgColor('black');
    body.setColor('white');
    document.querySelector('h1').style.borderColor='white';
    document.querySelector('#list').style.borderColor='white';
    while(i<links.length){
        links[i].style.color = 'white';
        i++;
    }
}else{
    body.setBgColor('white');
    body.setColor('black');
    document.querySelector('h1').style.borderColor='black';
    document.querySelector('#list').style.borderColor='black';
    while(i<links.length){
        links[i].style.color = 'black';
        i++;
    }
}
}