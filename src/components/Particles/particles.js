export const effects = [
  {
    "particles": {
      "number": {
        "value": 19,
        "density": {
          "enable": true,
          "value_area": 481.0236182596568
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 12
        },
        "image": {
          "src": "https://www.sprinklr.com/wp-content/themes/sprinklr/assets/images/logo_sprinklr.svg",
          "width": 250,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3286994724774322,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 47.34885849793636,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 9.59040959040959,
          "size_min": 5.594405594405594,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6.413648243462092,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 320.6824121731046,
          "rotateY": 481.0236182596568
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  },
  {
    "particles": {
      "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
      },
      "color": {
        "value": "#3a7ee4"
      },
      "shape": {
          "type": "circle",
          "stroke": {
          "width": 0,
          "color": "#000000"
          },
          "polygon": {
          "nb_sides": 5
          },
          "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
          }
      },
      "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
          }
      },
      "size": {
          "value": 5,
          "random": false,
          "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 300,
          "color": "#3a7ee4",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
      },
      "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
      },
      "retina_detect": true,
      "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  },{
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
      },
      shape: {
        type: ["circle"],
        stroke: {
          width: 0,
          color: "#fff"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 8,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          size_min: 10,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  },{
    particles: {
      number: {
        value: 52,
        density: {
          enable: true,
          value_area: 631.3280775270874
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  },{
    "particles":{
      "number":{
        "value":200,
        "density":{
          "enable":true,
          "value_area":3000
        }
      },
      "color":{
        "value":"#fd7907"
      },
      "shape":{
        "type":"circle",
        "stroke":{
          "width":0,
          "color":"#000000"
        },
        "polygon":{
          "nb_sides":3
        },
        "image":{
          "src":"img/github.svg",
          "width":100,
          "height":100
        }
      },
      "opacity":{
        "value":0.8,
        "random":true,
        "anim":{
          "enable":false,
          "speed":1,
          "opacity_min":0.1,
          "sync":false
        }
      },
      "size":{
        "value":4,
        "random":true,
        "anim":{
          "enable":true,
          "speed":5,
          "size_min":0.01,
          "sync":false
        }
      },
      "line_linked":{
        "enable":false,
        "distance":500,
        "color":"#ffffff",
        "opacity":0.4,
        "width":1
      },
      "move":{
        "enable":true,
        "speed":7.8,
        "direction":"top",
        "random":true,
        "straight":false,
        "out_mode":"out",
        "bounce":false,
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":1200
        }
      }
    },"interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
          "mode":"bubble"
        },
        "onclick":{
          "enable":false,
          "mode":"repulse"
        },
        "resize":true
      },
      "modes":{
        "grab":{
          "distance":400,
          "line_linked":{
            "opacity":0.5
          }
        },
        "bubble":{
          "distance":400,
          "size":4,
          "duration":0.3,
          "opacity":1,
          "speed":3
        },
        "repulse":{
          "distance":200,
          "duration":0.4
        },
        "push":{
          "particles_nb":4
        },
        "remove":{
          "particles_nb":2
        }
      }
    },
    "retina_detect":true
  },{
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff0000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 12,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  },{
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": ["#ff7fbf", "#ff7fff", "#bf7fff", "#ff7f7f", "#7f7fff", "#7fbfff", "#7fffff", "#7fffbf", "#7fff7f", "#bfff7f", "#ffff7f", "#ffbf7f"]
      },

      "shape": {
        "type": "edge", //circle, edge, triangle, polygon, star, image 複数指定["circle", "triangle", "image"]

        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        
        "polygon": {
          "nb_sides": 5
        },
      },

      "opacity": {
        "value": 0.5,
        "random": true, //true:有効, false:無効

        "anim": {
          "enable": true, //true:有効, false:無効
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false //true:有効, false:無効
        }
      },

      "size": {
        "value": 20,
        "random": true, //true:有効, false:無効
        "anim": {
          "enable": false, //true:有効, false:無効
          "speed": 10,
          "size_min": 1,
          "sync": false //true:有効, false:無効
        }
      },

      "line_linked": {
        "enable": false, //true:有効, false:無効
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      
      "move": {
        "enable": true, //true:有効, false:無効
        "speed": 4,
        "direction": "top", //none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
        "random": false, //true:有効, false:無効
        "straight": false, //true:有効, false:無効
        "out_mode": "out", //ボックス内で動かす bounce ボックス外に逃がす out
        "attract": {
          "enable": true,
          "rotateX": 1000,
          "rotateY": 1000
        }
      }
    },
  
    "interactivity": {
      "detect_on": "canvas",

      "events": {
        "onhover": {
          "enable": false, //true:有効, false:無効
          "mode": "bubble" //grad:付近のシェイプと線を繋ぐ, bubble:拡大, repulse:拒絶
        },

        "onclick": {
          "enable": true, //true:有効, false:無効
          "mode": "push" //push:追加, remove:削除, bubble:拡大, repulse:拒絶
        },
        "resize": true
      },
      
      "modes": {
        "grab": {
          "distance": 300,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 100,
          "size": 7.5,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 1
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
  },{
    'particles': {
      'number': {
        'value': 38
      },
      'color': {
        'value': ['#ff223e', '#5d1eb2', '#ff7300']
      },
      'shape': {
        'type': 'circle'
      },
      'opacity': {
        'value': 1,
        'random': false,
        'anim': {
          'enable': false
        }
      },
      'size': {
        'value': 6,
        'random': true,
        'anim': {
          'enable': false,
        }
      },
      'line_linked': {
        'enable': false
      },
      'move': {
        'enable': true,
        'speed': 4,
        'direction': 'none',
        'random': true,
        'straight': false,
        'out_mode': 'out'
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': false
        },
        'onclick': {
          'enable': false
        },
        'resize': true
      }
    },
    'retina_detect': true
  }
]