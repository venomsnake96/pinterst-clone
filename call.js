const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el)); 
  
  const $video = document.querySelector('#video');
  const $play = document.querySelector('#play');
  const $pause = document.querySelector('#pause');
  
  $play.addEventListener('click', handlePlay)
  $pause.addEventListener('click', handlePause)
  
  function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false 
    console.log('play')
  }
  
  function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('pause')
  }
  
  
  
  