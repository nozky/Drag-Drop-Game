// Use this: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2
// Figure out how to not allow two pills to overlap OR jump over one or many  ( only one space at a time and only hor/ver)
//, add exit point, add game end page when drag/dropped on,
// Then figure out how to make random divs on each load (with same exit space to middle-right)
//and add Completed, retry or home button ( also add homepage with start and exit button )



function allowDrop(ev) {
    notAllowed = document.getElementById("div3").innerHTML

    if (document.getElementById("text") != notAllowed) {

        ev.preventDefault();
    }
}

function drag(ev) {


    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

}

