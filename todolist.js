function createRecord (){
    let element = document.createElement("div");
    let note = document.querySelector("#note")
    
    element.className="record";
    element.innerHTML=`
    <input type="text" value="`+note.value+`">
        <i class="ri-edit-fill "></i>
        
        <i class=" ri-delete-bin-6-fill delete"></i>
        
    ` ;
    
    let parent = document.querySelector('body');
    parent.appendChild(element);
    note.value="";
    addDeleteEventListeners();
}    

let addDeleteEventListeners = () => {
    let current_tasks = document.querySelectorAll(".delete");
    for(let i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick =(event)=> {
            console.log("hello"+i)
            
            event.target.parentNode.remove();
        }
    }
}
// btn.addEventListener("click",createRecord);
// console.log("dsfdsfds")






// method 1
// let note = document.querySelector("#note");

// setInterval(() => {
//   console.log(note.value);
// }, 1000);
//method 2
// let note = document.querySelector("#note");

// note.oninput = () => {
//   console.log(note.value);
// };
// method 3
// let note = document.querySelector("#note");

// let previousValue = "";

// note.oninput = () => {
//   let currentValue = note.value;
//   if (currentValue.length > previousValue.length) {
//     console.log(currentValue.slice(-1));
//   } else {
//     console.log(currentValue);
//   }
//   previousValue = currentValue;
// };