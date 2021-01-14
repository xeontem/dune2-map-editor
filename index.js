var mapGrid = [
    ["DC", "AF", "12", "3E", "3E"],
    ["DC", "AF", "12", "32", "32"],
    ["DC", "AF", "12", "32", "32"],
    ["DC", "AF", "12", "E3", "E3"],
    ["DC", "AF", "12", "33", "33"]
];

var mapDiv = document.createElement('DIV');
mapDiv.classList.add('map');
document.body.appendChild(mapDiv);

mapGrid.forEach(row => {
    var rowDiv = document.createElement('DIV');
    rowDiv.classList.add('row');

    row.forEach(spriteName => {
        var spriteDiv = document.createElement('DIV');
        spriteDiv.innerHTML = spriteName;
        rowDiv.appendChild(spriteDiv);
    });

    mapDiv.appendChild(rowDiv);
});
