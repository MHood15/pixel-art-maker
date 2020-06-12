let penColor = "pink";

function palette(){
    let palette = document.getElementById("palette");
    let colorArray = ["black", "blue", "red", "yellow", "orange", "purple", "white", "green", "brown",
                     "darkSalmon", "darkMagenta", "aqua", "coral", "greenYellow", "fuschia", "gray", "mediumseagreen",
                    "saddlebrown", "steelblue", "thistle", "tomato", "teal", "wheat", "Plum", "salmon", "olive", "orangered",
                    "midnightblue", "maroon", "gold", "darkslategray", "lightgreen", "lightcyan", "lightpink"]

    for(var i = 0; i < colorArray.length; i++){
        currentColor = colorArray[i];
        let colorCell = document.createElement("div");
        colorCell.classList.add("pen");
        colorCell.style.backgroundColor = currentColor;
        colorCell.setAttribute("onClick", "makeColor('"+currentColor+"')")
        palette.appendChild(colorCell);
    }

}
palette();


function grid(){
    let grid = document.getElementById("art");

    for(var i = 0; i < 16; i++){
        let divRow = document.createElement("div");
        divRow.classList.add("row");

        for(var j = 0; j < 38; j++){
            let divCell = document.createElement("div");
            divCell.classList.add("pixel");
            divCell.setAttribute("onClick", "setColor(this)");
            divRow.appendChild(divCell);
        }
        grid.appendChild(divRow);
    }

}
grid();

function makeColor(color){
    penColor = color;
}
makeColor();

function setColor(pixel){
    pixel.style.backgroundColor = penColor;
}
setColor()

