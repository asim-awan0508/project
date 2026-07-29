let todoList = JSON.parse(localStorage.getItem('todoList'))||
[
    {
        items: "Buy Milk",
        dueDate : '24/7/2026',
    },
    {
        items: "GO to collage ",
        dueDate : '24/7/2026',
    }
];
display();
function addTodo(){
   let inputElement = document.querySelector('#todo-input');
   
   let date = document.querySelector('#todo-date')
   let todoDate = date.value;
   let todoItem = inputElement.value;
   console.log(todoItem);
   todoList.push({
    items:todoItem,
    dueDate:todoDate,
    });
   inputElement.value = '';
   date.value = '';
   localStorage.setItem('todoList',JSON.stringify(todoList))
   display()
}
function display(){
    let containerElement = document.querySelector('.todo-container')
    let newHtml = '';
    

    for (let i = 0; i < todoList.length; i++){
        let items = todoList[i].items;
        let dueDate = todoList[i].dueDate
        newHtml+=
        `
    
        <span>${items}</span>
        <span>${dueDate}</span>
        <button id ="del-bt" onclick = "todoList.splice(${i},1)
        localStorage.setItem('todoList',JSON.stringify(todoList))
        display()">Delete</button>
 
        `;


    }
   
        containerElement.innerHTML = newHtml;
    
}