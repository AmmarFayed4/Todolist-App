/* Tasks for me
[1] use sweet alart on empty task [Done]
[2] check if the task is exist or not 
[3] CREATE btn delete all tasks [Done]
[4] CREATE btn finish all tasks [Done]
[5] Add tasks to local storage [Done]
*/

// Settings Up Variables
let theInput = document.querySelector(".add-task input"),
  addBtn = document.querySelector(".plus"),
  taskContent = document.querySelector(".tasks-content"),
  taskCount = document.querySelector(".task-count span"),
  delButn = document.querySelector(".del-all"),
  doneItButn = document.querySelector(".done-it"),
  compCount = document.querySelector(".task-completed span");

// focus on input fieled
window.onload = () => {
  theInput.focus();
};
// Adding THE Task
addBtn.onclick = () => {
  //if input is empty
  if (theInput.value === "") {
    // sweet alert if input is empty
    swal("Oops!", "Please Name The Task", "error");
  } else {
    taskMsg = document.querySelector(".N-T-M");

    if (document.body.contains(taskMsg)) {
      // no tasks message remove
      taskMsg.remove();
    }

    // create span
    let mainSpan = document.createElement("span"),
      // create done btn
      doneBtn = document.createElement("span"),
      // create text to main span
      taskText = document.createTextNode(theInput.value),
      // create done word to done btn
      doneWord = document.createTextNode("X");
    // add done to done btn
    doneBtn.appendChild(doneWord);
    // add task text to main span
    mainSpan.appendChild(taskText);
    // add btn to the main span
    mainSpan.appendChild(doneBtn);
    // add class to done btn
    doneBtn.className = "delete-task";
    // add the main span to task content
    taskContent.appendChild(mainSpan);
    theInput.value = "";
    theInput.focus();
    // calculate tasks
    calTasks();
    // set own class for every task
    for (
      i = 0;
      i <= document.querySelectorAll(".tasks-content .task-box").length;
      i++
    ) {
      let mylocalSpan = taskContent.children[i];
      mylocalSpan.setAttribute("id", `${i}-task`);
    }
    // set taskText in localStorage
    for (
      i = 0;
      i <= document.querySelectorAll(".tasks-content .task-box").length;
      i++
    ) {
      window.localStorage.setItem(
        `value${i}`,
        document.getElementById(`${i}-task`).firstChild.nodeValue
      );
    }
    // add class to the main span
    mainSpan.className = "task-box";
  }
};
theInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    //if input is empty
    if (theInput.value === "") {
      // sweet alert if input is empty
      swal("Oops!", "Please Name The Task", "error");
    } else {
      taskMsg = document.querySelector(".N-T-M");

      if (document.body.contains(taskMsg)) {
        // no tasks message remove
        taskMsg.remove();
      }

      // create span
      let mainSpan = document.createElement("span"),
        // create done btn
        doneBtn = document.createElement("span"),
        // create text to main span
        taskText = document.createTextNode(theInput.value),
        // create done word to done btn
        doneWord = document.createTextNode("X");
      // add done to done btn
      doneBtn.appendChild(doneWord);
      // add task text to main span
      mainSpan.appendChild(taskText);
      // add btn to the main span
      mainSpan.appendChild(doneBtn);
      // add class to done btn
      doneBtn.className = "delete-task";
      // add the main span to task content
      taskContent.appendChild(mainSpan);
      theInput.value = "";
      theInput.focus();
      // calculate tasks
      calTasks();
      // set own class for every task
      for (
        i = 0;
        i <= document.querySelectorAll(".tasks-content .task-box").length;
        i++
      ) {
        let mylocalSpan = taskContent.children[i];
        mylocalSpan.setAttribute("id", `${i}-task`);
      }
      // set taskText in localStorage
      for (
        i = 0;
        i <= document.querySelectorAll(".tasks-content .task-box").length;
        i++
      ) {
        window.localStorage.setItem(
          `value${i}`,
          document.getElementById(`${i}-task`).firstChild.nodeValue
        );
      }
      // add class to the main span
      mainSpan.className = "task-box";
    }
  }
});
// get item and set it in taskText
if (window.localStorage.length > 0) {
  for (i = 0; i < window.localStorage.length; i++) {
    taskMsg = document.querySelector(".N-T-M");
    if (document.body.contains(taskMsg)) {
      // no tasks message remove
      taskMsg.remove();
    }
    let mainSpan = document.createElement("span"),
      // create done btn
      doneBtn = document.createElement("span"),
      // create text to main span
      taskText = document.createTextNode(localStorage.getItem(`value${i}`)),
      // create done word to done btn
      doneWord = document.createTextNode("X");
    // add done to done btn
    doneBtn.appendChild(doneWord);
    // add task text to main span
    mainSpan.appendChild(taskText);
    // add btn to the main span
    mainSpan.appendChild(doneBtn);
    // add class to the main span
    mainSpan.className = "task-box";
    // add class to done btn
    doneBtn.className = "delete-task";
    // add the main span to task content
    taskContent.appendChild(mainSpan);
    // calculate tasks
    calTasks();
  }
}

document.addEventListener("click", (e) => {
  // delete the task
  if (e.target.className === "delete-task") {
    e.target.parentNode.remove();
    console.log(e.target.parentNode.nodeValue);
    if (taskContent.childElementCount == 0) {
      createMsg();
    }
  }
  // finish the task
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
  }
  calTasks();
});
//  Function for no tasks message
function createMsg() {
  // create the spanmsg
  let spanMsg = document.createElement("span"),
    spanMsgText = document.createTextNode("No Tasks To Show");
  // Add text to span msg
  spanMsg.appendChild(spanMsgText);
  // Add class to span msg
  spanMsg.className = "N-T-M";
  // Add spanmsg to content
  taskContent.appendChild(spanMsg);
}
//  function to calculate tasks
function calTasks() {
  // calculate all tasks
  taskCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;
  // calculate completed tasks
  compCount.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
// button delete all
delButn.onclick = () => {
  taskContent.innerHTML = "";
  window.localStorage.clear();
  createMsg();
};
// all done button
// doneItButn.onclick = () => {
//   taskContent.classList.add("finished");
// };
