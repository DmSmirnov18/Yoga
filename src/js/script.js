// tabs
window.addEventListener('DOMContentLoaded', function() {
  'use strict';
  const infoHeader = document.querySelector('.info-header');
  const infoHeaderTab = document.querySelectorAll('.info-header-tab');
  const infoTabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < infoTabContent.length; i++) {
      infoTabContent[i].classList.remove('show');
      infoTabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  function showTabContent(b) {
    if (infoTabContent[b].classList.contains('hide')) {
      infoTabContent[b].classList.remove('hide');
      infoTabContent[b].classList.add('show');
    }
  }

  infoHeader.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < infoHeaderTab.length; i++ ) {
        if (target == infoHeaderTab[i]){
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //Timer

	let deadline = '2020-08-21';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);

			function addZero(num) {
				if (num <= 9) {
					return '0' + num;
				} else return num;
			};

			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}

	}

	setClock('timer', deadline);
});