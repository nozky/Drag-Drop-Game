// Use this: https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2
// Figure out how to not allow two pills to overlap OR jump over one or many  ( only one space at a time and only hor/ver)
//, add exit point, add game end page when drag/dropped on,
// Then figure out how to make random divs on each load (with same exit space to middle-right)
//and add Completed, retry or home button ( also add homepage with start and exit button )

// im lazy
const getId =(id)=>{
    return document.getElementById(id)
}

const message = getId("message")
let prevParent = null
let prevNumber = null
let preventOverPill = false


// event- dragOver
function allowDrop(ev) {
    // do not allow if the div child is more than 1
    if( ev.target.childElementCount < 1){
        ev.preventDefault()
    }

    console.log("drag over", ev.target.id)
    if(ev.target.id === "drag2"){
        preventOverPill = true
        console.log('true')
    } else{
        preventOverPill = false
    }

}


// Start startDrag
function drag(ev) {
    //clear msg when star dragging
    getId("message").innerText =""
    
    // store prevState / prev parent of the pill
    prevParent = ev.target.parentNode.id
    ev.dataTransfer.setData("pill", ev.target.id);
    prevNumber = ev.target.parentNode.getAttribute('value')
    console.log(prevNumber)
}


// on onDrop
function drop(ev) {
    ev.preventDefault();

    //prevent dropping it on non empty div
    const data = ev.dataTransfer.getData("pill");
    if(ev.target.childElementCount < 1 ){
      ev.target.appendChild(getId(data));
    }else{
        getId(prevParent).appendChild(getId(data))
    }

    //do not allow drop over image/pill 
    if(ev.target.localName === "img"){
        getId("message").innerText ="Your not allowed to drop pill on another pill"
        getId(prevParent).appendChild(getId(ev.dataTransfer.getData("pill")))
    }
    
}

