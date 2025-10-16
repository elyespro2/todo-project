let todo;
let nb;
let oldtask
let test=false;
let h;
let k;
let list1 = [];











window.onload = function() {
  if( localStorage.getItem("list")!=null){
    fromjsonto();
  }
  h=list1.length;
if(h!=0){
  for (const item of list1 ){
    console.log("zaz")
    const para = document.createElement("div");
    para.className = "box";
    para.id ="_"+item;
    const box = document.createElement("input");
    box.type = "checkbox";
    para.appendChild(box);
    const text = document.createElement("h2");
    para.append(text);
    const spanele = document.createElement("span");
    const node= document.createTextNode(item);
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
    const link2 = document.createElement("a");
    const node1 = document.createTextNode("update");
    const node2 = document.createTextNode("delete");
    link1.appendChild(node1); 
    link2.appendChild(node2);
    link1.id="_"+list1.indexOf(item);;
    link1.id="_"+list1.indexOf(item);;
    spanele1.appendChild(link1);
    spanele2.appendChild(link2);
    const element = document.getElementById("container");
    const element2 = document.getElementById("souscontainer");
    element.insertBefore(para, container.firstChild);
    test=true;
}
};
}


function add() {
    todo = document.getElementById("todo");
    console.log((todo.value));
    const para = document.createElement("div");
    para.className = "box"; 
    para.id= "_"+h;
    const box = document.createElement("input");
    box.type = "checkbox";
    para.appendChild(box);
    const text = document.createElement("h2");
    para.append(text);
    const spanele = document.createElement("span");
    const node= document.createTextNode(todo.value);
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
    link1.id="_"+h;
    const link2 = document.createElement("a");
    link2.id="_"+h;
    const node1 = document.createTextNode("update");
    const node2 = document.createTextNode("delete");
    link1.appendChild(node1); 
    link2.appendChild(node2);
    spanele1.appendChild(link1);
    spanele2.appendChild(link2);
    let element2;
    const element = document.getElementById("container");
    element.insertBefore(para, container.firstChild);
    list1.push(todo.value);
    todo.value = '';
    k=JSON.stringify(list1);
    localStorage.setItem("list",k);
}



function fromjsonto(){
  list1=JSON.parse(localStorage.getItem("list"));
  console.log(list1);

}
























