var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Making online proctoring')
.pauseFor(700)
.deleteChars(25)
.typeString('Online learning')
.pauseFor(700)
.deleteChars(24)
.deleteAll()
.start();