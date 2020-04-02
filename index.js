window.onload = function() {

    function FauxGif(element, frames, speed) {
        this.currentFrame = 0,
        this.domElement   = element,
        this.frames       = frames || null,
        this.speed        = speed  || 200;
        this.interval;
        this.init();
    }

    FauxGif.prototype = {
        init: function() {
            // set the first one to the first image
            console.log(this.frames[0])
            this.domElement.style.backgroundImage = "url(" + this.frames[0] + ")";
        },
        pause: function() {
            clearInterval(this.interval);
        },
        resume: function() {
            var that = this;

            that.interval = setInterval(function(){
                console.log(that.frames[that.currentFrame])
                console.log(that.frames.length);
                that.currentFrame < that.frames.length - 1 ? that.currentFrame++ : that.currentFrame = 0;
                that.domElement.style.backgroundImage = "url(" + that.frames[that.currentFrame] + ")";
            }, this.speed);
        }
    }

    var frames = [
                    'https://i.imgur.com/E2ee6fI.gif',
                    'https://i.imgur.com/JIi0uul.gif',
                    'https://i.imgur.com/owNGnNN.gif',
                    'https://i.imgur.com/2Ii6XOz.gif',
                    'https://i.imgur.com/ZmQBrQ5.gif',
                    'https://i.imgur.com/iAsfHyY.gif',
                    'https://i.imgur.com/AJwRblj.gif',
                    'https://i.imgur.com/fx5wUNY.gif'
                ]

    var elem = document.querySelector('#faux-gif'),
        gif  = new FauxGif(elem, frames, 60);


    elem.addEventListener('mouseenter', function(){
        gif.resume();
    });

    elem.addEventListener('mouseleave', function() {
        gif.pause();
    });
}
