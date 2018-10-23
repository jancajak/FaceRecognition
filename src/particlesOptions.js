const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      "move": {
        "enable": true,
        "speed": 1,
        "random": true,
        "direction": "none",
        "bounce": true,
        "out_mode": "bounce",
        "attract": {
          "enable": true,
          "rotateX": 10,
          "rotateY": 10
        }
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        }
      }
    }
}

export default particlesOptions;
