let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/starship1.png') {
    myImage.setAttribute ('src','images/starship2.png');
  } else {
    myImage.setAttribute ('src','images/starship1.png');
  }
}