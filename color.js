var body = {
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    setBgColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayMode(){
if(document.querySelector('body').style.backgroundColor === 'white'){
    body.setBgColor('black');
    body.setColor('white');
    document.querySelector('h1').style.borderColor='white';
    document.querySelector('#list').style.borderColor='white';
    $('a').css('color', 'white');
}else{
    body.setBgColor('white');
    body.setColor('black');
    document.querySelector('h1').style.borderColor='black';
    document.querySelector('#list').style.borderColor='black';
    $('a').css('color', 'black');
}
}