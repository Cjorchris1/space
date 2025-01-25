import { Howl } from 'howler';
    
    const gameState = {
      currentLevel: 1,
      isPlaying: false,
      asteroidSpeed: 2,
      asteroidInterval: 1000,
      scareTriggered: false
    };

    const screens = {
      mainMenu: document.getElementById('main-menu'),
      game: document.getElementById('game')
    };

    const elements = {
      timer: document.getElementById('timer'),
      spaceship: document.getElementById('spaceship'),
      asteroids: document.getElementById('asteroids')
    };

    const screamSound = new Howl({
      src: ['data:audio/mp3;base64,YOUR_BASE64_MP3_HERE']
    });

    function showScreen(screen) {
      Object.values(screens).forEach(s => s.classList.add('hidden'));
      screen.classList.remove('hidden');
    }

    function startGame() {
      gameState.currentLevel = 1;
      gameState.isPlaying = true;
      gameState.scareTriggered = false;
      showScreen(screens.game);
      startLevel();
    }

    function startLevel() {
      // Game logic implementation
    }

    function triggerScare() {
      // Jump scare implementation
    }

    // Event listeners
    document.getElementById('play').addEventListener('click', startGame);
