function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "-dragPoint")) {
        // if present, the header is where you move the DIV from:
        var dragPoint = document.getElementById(elmnt.id + "-dragPoint");
        dragPoint.onmousedown = _dragMouseDown;
    }
    /*
    else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = _dragMouseDown;
    }
    */


    function _dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = _closeDragElement;
        dragPoint.onmouseup = _closeDragElement;

        // call a function whenever the cursor moves:
        document.onmousemove = _elementDrag;
        dragPoint.onmousemove = _elementDrag;

    }

    function _elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        dragPoint.style.top = (dragPoint.offsetTop - pos2) + "px";
        dragPoint.style.left = (dragPoint.offsetLeft - pos1) + "px";
    }

    function _closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        dragPoint.onmouseup = null;
        dragPoint.onmousemove = null;
    }
}

function hideElement(e) {
    e.style.display = '';
    e.style.display = '';
}

function showElement(e, displayType = 'inline') {
    e.style.display = displayType;
    e.style.display = displayType;
}

function changeClothVisibility(clothName) {
    console.log("HELOOOOO");
    let cloth = document.getElementById(clothName);
    let clothDragPoint = document.getElementById(clothName + '-dragPoint');
    console.log("DISPLAY IS NOW " + cloth.style.display);
    if (cloth.style.display == '') {
        console.log("DOOOING IT");
        showElement(cloth);
        showElement(clothDragPoint);
    } else {
        hideElement(cloth);
        hideElement(clothDragPoint);
    }
}