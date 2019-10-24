//Image Optimization
(() => {
  'use strict';
  // Page is loaded
  const objects = document.getElementsByClassName('asyncImage');
  Array.from(objects).map((item) => {
    // Start loading image
    const img = new Image();
    img.src = item.dataset.src;
    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
      item.classList.remove('asyncImage');
      return item.nodeName === 'IMG' ?
        item.src = item.dataset.src :
        item.style.backgroundImage = `url(${item.dataset.src})`;
    };
  });
})();

//PAST SECTION
  /*function showPast() {
    if ($('#past').classList.contains('non-display')){
      $('#past').toggleClass('non-display');
      $('#present').toggleClass('non-display');
      $('#future').toggleClass('non-display');
    }
  }*/
  //First past image toggle
  $('#pastFirst').click(function(){
    $('#pentacrest').toggleClass('non-display');
    $('#fiber').toggleClass('non-display');
    $('#UofIHead').toggleClass('non-display');
    $('#UofIP').toggleClass('non-display');
  });
  //Second past image toggle
  $('#pastSecond').click(function(){
    $('#boulder').toggleClass('non-display');
    $('#pnw').toggleClass('non-display');
    $('#movingHead').toggleClass('non-display');
    $('#movingP').toggleClass('non-display');
  });
  //Fourth past image toggle
  $('#pastThird').click(function(){
    $('#academy').toggleClass('non-display');
    $('#forest').toggleClass('non-display');
    $('#portlandHead').toggleClass('non-display');
    $('#portlandP').toggleClass('non-display');
  });
  //Fourth past image toggle
  $('#pastFourth').click(function(){
    $('#beach').toggleClass('non-display');
    $('#blackHole').toggleClass('non-display');
    $('#godHead').toggleClass('non-display');
    $('#godP').toggleClass('non-display');
  });

//PRESENT SECTION
  /*function showPresent() {
    if ($('#present').classList.contains('non-display')){
      $('#past').toggleClass('non-display');
      $('#present').toggleClass('non-display');
      $('#future').toggleClass('non-display');
    }
  }*/
  //First present image toggle
  $('#presentFirst').click(function(){
    $('#newAgenda').toggleClass('non-display');
    $('#return').toggleClass('non-display');
    $('#returnHead').toggleClass('non-display');
    $('#returnP').toggleClass('non-display');
  });
  //Second past image toggle
  $('#presentSecond').click(function(){
    $('#trees').toggleClass('non-display');
    $('#field').toggleClass('non-display');
    $('#permaHead').toggleClass('non-display');
    $('#permaP').toggleClass('non-display');
  });
  //Fourth past image toggle
  $('#presentThird').click(function(){
    $('#journey').toggleClass('non-display');
    $('#UCBoulder').toggleClass('non-display');
    $('#journeyHead').toggleClass('non-display');
    $('#journeyP').toggleClass('non-display');
  });
  //Fourth past image toggle
  $('#presentFourth').click(function(){
    $('#midwest').toggleClass('non-display');
    $('#horticulture').toggleClass('non-display');
    $('#horticultureHead').toggleClass('non-display');
    $('#horticultureP').toggleClass('non-display');
  });
