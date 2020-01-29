var imagePuzzle = {
    startGame: function (image, gridSize) {
        this.setImage(image, gridSize);
        helper.doc('playPanel').style.display = 'block';
    }



    setImage: function (image, gridSize = 3) {
    var percentage = 100 / (gridSize);
    var image = image[Math.floor(Math.random() * image.length)];
    console.log(image.length);
    helper.doc('imgTitle').innerHTML = image.title;
        helper.doc('actualImage').setAttribute('src', image.src);
        helper.doc('sortable').innerHTML = '';
        for (var i = 0; i < gridSize * gridSize; i++) {
            var xpos = (percentage * (i % gridSize)) + '%';
            var ypos = (percentage * Math.floor(i / gridSize)) + '%';

            let li = document.createElement('li');
            li.id = i;
            li.setAttribute('data-value', i);
            li.style.backgroundImage = 'url(' + image.src + ')';
            li.style.backgroundSize = (gridSize * 100) + '%';
            li.style.backgroundPosition = xpos + ' ' + ypos;
            li.style.width = 400 / gridSize + 'px';
            li.style.height = 400 / gridSize + 'px';

    }
}