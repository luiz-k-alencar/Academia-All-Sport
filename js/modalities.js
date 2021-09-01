var m1 = document.getElementById('modalidade1')
var m2 = document.getElementById('modalidade2')
var m3 = document.getElementById('modalidade3')
var m4 = document.getElementById('modalidade4')
var m5 = document.getElementById('modalidade5')

var b1 = document.getElementById('button1')
var b2 = document.getElementById('button2')
var b3 = document.getElementById('button3')
var b4 = document.getElementById('button4')
var b5 = document.getElementById('button5')

var img1L = document.getElementById('img1Laranja')
var img2L = document.getElementById('img2Laranja')
var img3L = document.getElementById('img3Laranja')
var img4L = document.getElementById('img4Laranja')
var img5L = document.getElementById('img5Laranja')

var img1B = document.getElementById('img1Branca')
var img2B = document.getElementById('img2Branca')
var img3B = document.getElementById('img3Branca')
var img4B = document.getElementById('img4Branca')
var img5B = document.getElementById('img5Branca')

function changeTo1(){
  m2.classList.add('hidden')
  m3.classList.add('hidden')
  m4.classList.add('hidden')
  m5.classList.add('hidden')
  
  m1.classList.remove('hidden')

  b2.classList.remove('orangeButton')
  b3.classList.remove('orangeButton')
  b4.classList.remove('orangeButton')
  b5.classList.remove('orangeButton')
  
  b1.classList.add('orangeButton')
 
  img1L.classList.add('hidden')
  img1L.classList.remove('buttonImg')
  img1B.classList.add('buttonImg')
  img1B.classList.remove('hidden')
  
  img2B.classList.add('hidden')
  img2B.classList.remove('buttonImg')
  img2L.classList.add('buttonImg')
  img2L.classList.remove('hidden')
  
  img3B.classList.add('hidden')
  img3B.classList.remove('buttonImg')
  img3L.classList.add('buttonImg')
  img3L.classList.remove('hidden')
  
  img4B.classList.add('hidden')
  img4B.classList.remove('buttonImg')
  img4L.classList.add('buttonImg')
  img4L.classList.remove('hidden')
  
  img4B.classList.add('hidden')
  img4B.classList.remove('buttonImg')
  img4L.classList.add('buttonImg')
  img4L.classList.remove('hidden')
  
  img5B.classList.add('hidden')
  img5B.classList.remove('buttonImg')
  img5L.classList.add('buttonImg')
  img5L.classList.remove('hidden')

};

function changeTo2(){
  m1.classList.add('hidden')
  m3.classList.add('hidden')
  m4.classList.add('hidden')
  m5.classList.add('hidden')
  
  m2.classList.remove('hidden')

  b1.classList.remove('orangeButton')
  b3.classList.remove('orangeButton')
  b4.classList.remove('orangeButton')
  b5.classList.remove('orangeButton')
  
  b2.classList.add('orangeButton')

  img2L.classList.add('hidden')
  img2L.classList.remove('buttonImg')
  img2B.classList.add('buttonImg')
  img2B.classList.remove('hidden')
  
  img1B.classList.add('hidden')
  img1B.classList.remove('buttonImg')
  img1L.classList.add('buttonImg')
  img1L.classList.remove('hidden')
  
  img3B.classList.add('hidden')
  img3B.classList.remove('buttonImg')
  img3L.classList.add('buttonImg')
  img3L.classList.remove('hidden')
  
  img4B.classList.add('hidden')
  img4B.classList.remove('buttonImg')
  img4L.classList.add('buttonImg')
  img4L.classList.remove('hidden')
  
  img4B.classList.add('hidden')
  img4B.classList.remove('buttonImg')
  img4L.classList.add('buttonImg')
  img4L.classList.remove('hidden')
  
  img5B.classList.add('hidden')
  img5B.classList.remove('buttonImg')
  img5L.classList.add('buttonImg')
  img5L.classList.remove('hidden')
};

function changeTo3(){
  m1.classList.add('hidden')
  m2.classList.add('hidden')
  m4.classList.add('hidden')
  m5.classList.add('hidden')
  
  m3.classList.remove('hidden')

  b1.classList.remove('orangeButton')
  b2.classList.remove('orangeButton')
  b4.classList.remove('orangeButton')
  b5.classList.remove('orangeButton')
  
  b3.classList.add('orangeButton')

  img3L.classList.add('hidden')
  img3L.classList.remove('buttonImg')
  img3B.classList.add('buttonImg')
  img3B.classList.remove('hidden')
  
  img1B.classList.add('hidden')
  img1B.classList.remove('buttonImg')
  img1L.classList.add('buttonImg')
  img1L.classList.remove('hidden')
  
  img2B.classList.add('hidden')
  img2B.classList.remove('buttonImg')
  img2L.classList.add('buttonImg')
  img2L.classList.remove('hidden')
  
  img4B.classList.add('hidden')
  img4B.classList.remove('buttonImg')
  img4L.classList.add('buttonImg')
  img4L.classList.remove('hidden')
 
  img5B.classList.add('hidden')
  img5B.classList.remove('buttonImg')
  img5L.classList.add('buttonImg')
  img5L.classList.remove('hidden')
};

function changeTo4(){
  m1.classList.add('hidden')
  m2.classList.add('hidden')
  m3.classList.add('hidden')
  m5.classList.add('hidden')
  
  m4.classList.remove('hidden')

  b1.classList.remove('orangeButton')
  b2.classList.remove('orangeButton')
  b3.classList.remove('orangeButton')
  b5.classList.remove('orangeButton')
  
  b4.classList.add('orangeButton')

  img4L.classList.add('hidden')
  img4L.classList.remove('buttonImg')
  img4B.classList.add('buttonImg')
  img4B.classList.remove('hidden')
  
  img1B.classList.add('hidden')
  img1B.classList.remove('buttonImg')
  img1L.classList.add('buttonImg')
  img1L.classList.remove('hidden')

  img2B.classList.add('hidden')
  img2B.classList.remove('buttonImg')
  img2L.classList.add('buttonImg')
  img2L.classList.remove('hidden')
  
  img3B.classList.add('hidden')
  img3B.classList.remove('buttonImg')
  img3L.classList.add('buttonImg')
  img3L.classList.remove('hidden')
  
  img5B.classList.add('hidden')
  img5B.classList.remove('buttonImg')
  img5L.classList.add('buttonImg')
  img5L.classList.remove('hidden')
};

function changeTo5(){
  m1.classList.add('hidden')
  m2.classList.add('hidden')
  m3.classList.add('hidden')
  m4.classList.add('hidden')
  
  m5.classList.remove('hidden')

  b1.classList.remove('orangeButton')
  b2.classList.remove('orangeButton')
  b3.classList.remove('orangeButton')
  b4.classList.remove('orangeButton')
  
  b5.classList.add('orangeButton')

  img5L.classList.add('hidden')
  img5L.classList.remove('buttonImg')
  img5B.classList.add('buttonImg')
  img5B.classList.remove('hidden')
  
  img1B.classList.add('hidden')
  img1B.classList.remove('buttonImg')
  img1L.classList.add('buttonImg')
  img1L.classList.remove('hidden')
  
  img2B.classList.add('hidden')
  img2B.classList.remove('buttonImg')
  img2L.classList.add('buttonImg')
  img2L.classList.remove('hidden')
  
  img3B.classList.add('hidden')
  img3B.classList.remove('buttonImg')
  img3L.classList.add('buttonImg')
  img3L.classList.remove('hidden')
  
  img4B.classList.add('hidden')
  img4B.classList.remove('buttonImg')
  img4L.classList.add('buttonImg')
  img4L.classList.remove('hidden')
  
  img4B.classList.add('hidden')
  img4B.classList.remove('buttonImg')
  img4L.classList.add('buttonImg')
  img4L.classList.remove('hidden')
};
