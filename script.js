  //  var s = skrollr.init();
  $('.style').smoove({offset:'40%'})
  // $(document).ready(function(){
  //   $('.gallery').magnific-popup({
  //     delegate: 'a',
  //     type: 'image',
  //     mainClass :'mfp-img-mobile',
  //     gallery:{
  //       enabled:true,
  //       navigateByImgClick:true,
  //       preload:[0.1]
  //     },
  // }) 

  var MenuButton = document.querySelector('.menu-button');
var cross = document.querySelector('.cross');
var menu = document.querySelector('.menu');
var MenuLinks = document.querySelector('.menu #links')
var registerAndLogIn = document.querySelector('.registerAndLogIn')
var style1 = document.querySelector('#style1')
var file = document.querySelector('#file');
var uploadimg =document.querySelector('#uploadimg')
    var img = document.querySelector('#upload div img');
    img.addEventListener('click',function(){
      file.click();
    })
    file.addEventListener('change' ,function(){
      uploadimg.submit();
    })
MenuButton.addEventListener('click',function(){
  menu.style.height = '500px';
  MenuButton.style.opacity = '0';
  cross.style.display = 'block';
  registerAndLogIn.style.display = 'flex';
  MenuLinks.style.display = 'flex';
})
cross.addEventListener('click',function(){
  menu.style.height = '0'
  MenuButton.style.opacity = '1'
  cross.style.display = 'none';
  registerAndLogIn.style.display = 'none';
  MenuLinks.style.display = 'none';
})

