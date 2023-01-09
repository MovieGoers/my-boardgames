var body = {
    setColor:function(color){
        $('body').css('color', color);
    },
    setBgColor:function(color){
        $('body').css('backgroundColor', color);
    }
}
function nightDayMode(){
if(document.querySelector('body').style.backgroundColor === 'white'){
    body.setBgColor('black');
    body.setColor('white');
    $('h1').css('borderColor', 'white');
    $('#list').css('borderColor', 'white');
    $('a').css('color', 'white');
}else{
    body.setBgColor('white');
    body.setColor('black');
    $('h1').css('borderColor', 'black');
    $('#list').css('borderColor', 'black');
    $('a').css('color', 'black');
}
}