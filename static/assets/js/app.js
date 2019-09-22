/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
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
        "speed": 6,
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
  }

);




























;(function( $, window ) {

  var _defaults = {
    x : 7, // tiles in x axis
    y : 7, // tiles in y axis
    gap: 0
  };


$.fn.splitInTiles = function( options ) {

    var o = $.extend( {}, _defaults, options );

    return this.each(function() {

      var $container = $(this),
          width = $container.width(),
          height = $container.height(),
          $img = $container.find('img'),
          n_tiles = o.x * o.y,
          wraps = [], $wraps;

      for ( var i = 0; i < n_tiles; i++ ) {
        wraps.push('<div class="tile"/>');
      }

      $wraps = $( wraps.join('') );

      // Hide original image and insert tiles in DOM
      $img.hide().after( $wraps );

      // Set background
      $wraps.css(
      {
        width: (width / o.x) - o.gap,
        height: (height / o.y) - o.gap,
        marginBottom: o.gap +'px',
        marginRight: o.gap +'px',
        backgroundImage: 'url('+ $img.attr('src') +')'
  
      }

      );

       $wraps.hover(function() { 
                $(this).css('background-image', 'url(' + $img.attr('alt') + ')');
                $(this).css('border', '1px solid black'); 
  
                $(this).css('box-sizing', 'border-box'); 
            }, function() { 
                $(this).css('background-image', 'url(' + $img.attr('src') + ')'); 
                $(this).css('border', '0px solid black');
      
            }); 
      



      
      // Adjust position
      $wraps.each(function() {
        var pos = $(this).position();
        $(this).css( 'backgroundPosition', -pos.left +'px '+ -pos.top +'px' );
      });

    });

  };

}( jQuery, window ));


$('.image').splitInTiles();


function demo(arg){
  arg.style.opacity!=="0";
};





function change_pic(){
  var x = document.getElementsByClassName("tile");

  var i;
  for (i = 0; i < x.length; i++) {


      (function(i){

    window.setTimeout(function(){

       
         x[i].style["boxShadow"] = "0 0 3px #000";
        
         try{
          x[i-1].style["boxShadow"] = "0 0 2px #555";
          x[i-2].style["boxShadow"] = "0 0 1px #777";

         }
         catch(err){
           var q2=2;
         }
         
       


  }, i*100);

  }(i));

}};





change_pic();
setInterval(change_pic, 10000);
























































