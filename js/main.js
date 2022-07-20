let input = document.getElementById('newTask')
let button = document.getElementById('addItem');
let card = document.getElementById('card')
let todos = document.getElementById('todo')
let sortItem= document.getElementById('two')
let listItem = []

card.addEventListener('click', function () {
    let val = input.value.trim()
    if (val) {
        addTodoTask({
            text:val,
        })
        // saveTodoList()
    }
    input.value=""
})

addTodoTask = (todo) => {

    var li = document.createElement('li')
    li.innerHTML=`
                <span>${todo.text}</span>
                <i  class="fa-solid fa-trash-can"></i>
    `
    // if (todo.status==='completed') {
    //     li.setAttribute('class','completed')
    // }
    listItem.push(todo.text)
    

    li.addEventListener('click', function () {
        this.classList.toggle('checked')
    })

    li.querySelector('i').addEventListener('click',function(){
        this.parentElement.remove()
    })

    todos.appendChild(li)

}
sortItem.addEventListener('click', function () {
    // console.log(listItem.sort())
    let showText="";
    let show =listItem.sort();
    for(let i =0;i<show.length;i++){ 
        showText+=`<li>
        <span>${show[i]}</span>
        <i class="fa-solid fa-trash-can"></i></li>`
       
    }
    todos.innerHTML=showText;
})






//  saveTodoList=()=>{
//     let todoList= document.querySelectorAll('li')
//     let todoStorage=[]
//     todoList.forEach(function(item){
//         let text = item.querySelector('span').innerText
//         let status = item.querySelector('span').getAttribute('class')

//         todoStorage.push({
//             text,
//             status
//         })
//     })
//     localStorage.setItem('todoList', JSON.stringify(todoStorage ))
    
// }

// init = () => {
//     let data = JSON.parse(localStorage.getItem('todolist'))
//     data.forEach((item) => { 
//         addTodoTask(item)
//      })
// }
// init()


