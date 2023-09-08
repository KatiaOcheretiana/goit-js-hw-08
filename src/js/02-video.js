import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);
    
const savedTime = localStorage.getItem('videoplayer-current-time')

player.on('timeupdate', throttle( evt => {
    localStorage.setItem('videoplayer-current-time', evt.seconds)}, 1000));


    player.setCurrentTime(savedTime).then(function(seconds) {
  localStorage.removeItem('videoplayer-current-time')
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;

            default:
                break;
        }
    });