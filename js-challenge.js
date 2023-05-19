<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>js-challenge</title>
<style>
    .btn {
    cursor: pointer;
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: #eee;
    transition: background-color 0.2s;
}

    .btn:hover {
    background-color: #ddd;
}

    .btn:active {
    background-color: #bbb;
}
</style>
</head>
<body>
<div class="container">
    <div class="buttons">
        <span id="font-button" class= "btn" onclick="toggleFont()">Change Font</span>
        <span class="btn" onclick="shuffleWords()">Shuffle Words</span>
        <span class="btn" onclick="unshuffleWords()">Unshuffle Words</span>
    </div>
    <div class="content" id="content">
        <h1>THE CATCHER IN THE RYE</h1>
        <p id="text1">
            I got excited as hell thinking about it. I really did. I knew the part about
            pretending I was a deaf-mute was crazy, but I liked thinking about it anyway. But I really
            decided to go out West and all. All I wanted to do first was say good-by to old Phoebe.
            So all of a sudden, I ran like a madman across the street--I damn near got killed doing it,
            if you want to know the truth--and went in this stationery store and bought a pad and
            pencil.
        </p>
        <p id="text2">
            Anyway, these two nuns were sitting next to me, and we sort of struck up a
            conversation. The one right next to me had one of those straw baskets that you see nuns
            and Salvation Army babes collecting dough with around Christmas time. You see them
            standing on corners, especially on Fifth Avenue, in front of the big department stores and
            all.
        </p>
        <p id="text3">
            When I got there, though, I didn't see her around anywhere. There were a few kids
            around, skating and all, and two boys were playing Flys Up with a soft ball, but no
            Phoebe. I saw one kid about her age, though, sitting on a bench all by herself, tightening
            her skate. I thought maybe she might know Phoebe and could tell me where she was or
            something, so I went over and sat down next to her and asked her, "Do you know Phoebe
            Caulfield, by any chance?"
        </p>

    </div>
    <p><br>
        Enter the word that will get replaced:
        <input type="text" id="find-input" value="">
    </p>
    <p>Enter the word that it will replace to:
        <input type="text" id="replace-input" value=" ">
            <span class="btn" onclick="findReplace()">Find and Replace</span>
    </p>

</div>

<script>
    var fontState = 0;
    function toggleFont() {
    var content = document.getElementById('content');
    var fontButton = document.getElementById('font-button');

    if (fontState === 0) {
    content.style.fontFamily = "Arial, sans-serif";
    fontButton.classList.add('active');
    fontState = 1;
} else {
    content.style.fontFamily = "Times New Roman, serif";
    fontButton.classList.remove('active');
    fontState = 0;
}
}

    function findReplace() {
    var findInput = document.getElementById('find-input').value;
    var replaceInput = document.getElementById('replace-input').value;
    var content = document.getElementById('content');

    if (findInput !== '' && replaceInput !== '') {
    var regex = new RegExp('\\b' + findInput + '\\b', 'g');
    var content2 = content.innerHTML.replace(regex, replaceInput);
    content.innerHTML = content2;
}
}

    var originalContent = null;
    function shuffleWords() {
    var content = document.getElementById('content');
    if (originalContent === null) {
    originalContent = content.innerText;
}
    var words = content.innerText.match(/\S+/g);


    for (var i = words.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = words[i];
    words[i] = words[j];
    words[j] = temp;
}

    //Re-arrange into an array
    var shuffledContent = '';  //This line initializes an empty string called shuffledContent
    for (var i = 0; i < words.length; i++) {//This for loop iterates through the words array, which contains the shuffled words.
    shuffledContent += words[i] + (i < words.length - 1 ? ' ' : '');
}
    content.innerText = shuffledContent;
}

</script>
</body>
</html>