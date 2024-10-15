let inputs=document.getElementById("input1")
let button= document.getElementById("btn1")
let result=document.getElementById("content")



let todos=[];

button.addEventListener('click', ()=>{
   todos.push(inputs.value)
   addtodos(inputs.value)
   inputs.value=''
   
});

function addtodos(todo){
    let para= document.createElement('p');
    para.innerText=todo;
    result.appendChild(para);
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        

    })
    para.addEventListener('dblclick', ()=>{
        result.removeChild(para)
        remove(todo)

    })
}
function remove(todo){
    let index= todos.indexOf(todo)
    if(index>-1)
       todos.splice(index,1)
}

