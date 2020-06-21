//DOM
let buttonDemo =document.getElementById('demo');
buttonDemo.addEventListener('click',(e)=>{
    console.log('a');
    document.getElementById('heading1').innerHTML='changed';
    document.getElementById('heading1').style='color:blue';
})

