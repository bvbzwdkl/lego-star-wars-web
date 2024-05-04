document.addEventListener('DOMContentLoaded', function() {
    var shipContainer = document.querySelector('.ship-container');
    var ship = document.querySelector('.flying-ship');
  
    function randomizeShipPosition() {
      var randomDirection = Math.random() < 0.5 ? 'left' : 'right';
      var randomY = Math.random() * (window.innerHeight - ship.offsetHeight);
  
      ship.style.setProperty('--startY', randomY + 'px');
  
      if (randomDirection === 'left') {
        ship.style.setProperty('--startX', '-' + ship.offsetWidth + 'px');
        ship.style.setProperty('--endX', 'calc(100vw + ' + ship.offsetWidth + 'px)');
        ship.style.setProperty('--flipX', '1');
      } else {
        ship.style.setProperty('--startX', 'calc(100vw + ' + ship.offsetWidth + 'px)');
        ship.style.setProperty('--endX', '-' + ship.offsetWidth + 'px');
        ship.style.setProperty('--flipX', '-1');
      }
    }
  
    randomizeShipPosition();
    setInterval(randomizeShipPosition, 10000);
  });