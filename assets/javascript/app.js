$('#start').on('click', function(){
    game.start();
})

var questions = [{
    question: "What was Lord Helmet doing privately in his room that he didn't want anyone to see?",
    answers: ["Playing with dolls", "Playing cars", "Playing Football", "Patriots are the worst"],
    correctAnswer:"Plating with dolls"
}, {
    question: "John Candy plays a creature that is half-man half, what?",
    answers: ["Bear", "Cat", "Dog", "Man-Bear-Pig"],
    correctAnswer: "Dog" 
}, {
        question: "What statement can be read on the bumper sticker located on the back of 'Spaceball 1'?",
    answers: ["Shit Happens", "We Brake for Nobody", "Pull My Hair", "Honk-Honk"],
    correctAnswer: "We Brake for Nobody"
}, {
        question: "What did the alien do after it jumped out of the guy's stomach at the bar?",
    answers: ["Rode a bike", "Played Baseball", "Killed Everyone", "Sang and Danced"],
    correctAnswer: "Sang and Danced"
}, {
        question: "What kind of yogurt is Yogurt?",
    answers: ["Blueberry", "Strawberry", "Plain", "Cherry"],
    correctAnswer: "Plain"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log('Time Is Up');
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>')
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        } 

    }

}