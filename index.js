function getImageClickListener () {
    var prevSelectedImage = null;

    function listener (e) {
        if (prevSelectedImage) {
            prevSelectedImage.classList.remove('selected');
        }
        e.target.classList.add('selected');
        prevSelectedImage = e.target;
    } 
    return listener;
}


function renderTerrain(matrix, listener) {
    var mapDiv = document.createElement('DIV');
    mapDiv.classList.add('map');
    document.body.appendChild(mapDiv);
  
    matrix.forEach(row => {
        var rowDiv = document.createElement('DIV');
        rowDiv.classList.add('row');
    
        row.match(/.{1,2}/g).forEach(spriteName => {
            var imgEl = document.createElement('IMG');
            imgEl.src = "terrain/" + spriteName + ".png";
            imgEl.addEventListener("click", listener);
            rowDiv.appendChild(imgEl);
        });
    
        mapDiv.appendChild(rowDiv);
    });
}

renderTerrain(map, getImageClickListener());
