const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
    "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now",
    "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good",
    "Very doubtful"]


document.getElementById('click').onclick = function () {
    clearBox('text');
    resetTextBox('textArea');
    var rand = answers[Math.floor(Math.random() * answers.length)];
    let randAnswer = document.createElement('p');
    var answerText = document.createTextNode(rand);
    randAnswer.appendChild(answerText);
    var destination = document.getElementById('text');
    destination.appendChild(randAnswer);
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

var textBoxDefault = 'What do you wish to ask?'


function resetTextBox(elementID)
{
    document.getElementById(elementID).value = textBoxDefault;
}