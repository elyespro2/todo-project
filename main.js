let todo;
let nb;
let oldtask
let test = false;
let h;
let k;
let list1 = [];
let elementId;
let constpressed;
let i;











window.onload = function () {
  if (localStorage.getItem("list") != null) {
    fromjsonto();
  }
  h = list1.length;
  if (h != 0) {
    for (const item of list1) {
      creatediv(item);
    }
  }
  workme();

document.getElementById('todoForm').addEventListener('submit', function (event) {
  // Now, this submit event will only fire IF the HTML5 validation passes.
  // The browser will handle showing error messages if validation fails.
  // We still need to prevent the default submission to stop a page reload.
  event.preventDefault();

  // Get the value from the form input
  const todoInput = document.getElementById("todo");
  const todoValue = todoInput.value;

  // Use your existing `add()` logic here
  list1.push(todoValue);
  creatediv(todoValue);
  todoInput.value = '';
  updatelist();
  h++;
  workme();
});

}

function updatelist() {
  k = JSON.stringify(list1);
  localStorage.setItem("list", k);

}



function fromjsonto() {
  list1 = JSON.parse(localStorage.getItem("list"));
  console.log(list1);

}

function workme() {
  for (let m = 0; m != h; m++) {
    elementId = "__" + m;
    constpressed = document.getElementById(elementId);
    console.log(m);
    if (constpressed) {
      constpressed.addEventListener('click', function () {
        handle(m);

      })
    }
  };

};



function handle(az,ok) {
  const elementToRemove = document.getElementById('_' + ok);
  // Call the remove() method
  if (elementToRemove) {
    elementToRemove.remove();
  }
  list1.splice(az, 1);
  h = list1.length;
  updatelist()


}




function creatediv(bb) {
  const para = document.createElement("div");
  const taskId = Date.now() + Math.random();
  para.className = "box";
  para.id = "_" + taskId;
  const box = document.createElement("input");
  box.type = "checkbox";
  para.appendChild(box);
  const text = document.createElement("h2");
  para.append(text);
  const spanele = document.createElement("span");
  const node = document.createTextNode(bb);
  spanele.appendChild(node);
  text.appendChild(spanele);
  const para2 = document.createElement("div");
  para2.className = "actions";
  text.appendChild(para2);
  const spanele1 = document.createElement("span");
  const spanele2 = document.createElement("span");
  para2.appendChild(spanele1);
  para2.appendChild(spanele2);
  const link1 = document.createElement("a");
  link1.id = "u" + taskId;
  const link2 = document.createElement("a");
  link2.id = "__" + taskId;
  const node1 = document.createTextNode("update");
  const node2 = document.createTextNode("delete");
  link1.appendChild(node1);
  link2.appendChild(node2);
  spanele1.appendChild(link1);
  spanele2.appendChild(link2);
  let element2;
  const element = document.getElementById("container");
  element.insertBefore(para, container.firstChild);
  link2.addEventListener('click', function () {
    handle(bb,taskId); // or use a stable ID
  });
  
}