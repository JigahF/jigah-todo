// Generate unique id
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Throw empty field error
const throwEmptyFieldError = (idValue) =>{
    const errorText = document.getElementById(idValue)
    console.log("here", errorText);
    errorText.classList.remove("hidden")
    setTimeout(() => {
        errorText.classList.add("hidden")
    }, 3000)
}

// Retrieve todos from database
const readTodo = (todoKey) => {
    if(!todoKey){
        throw new Error("todo does not exist!")
        return
    }
    return JSON.parse(localStorage.getItem(todoKey)) || [];
}

//Store todos in the database
const storeTodo = (todoKey, todoDatabase) => {
    localStorage.setItem(todoKey, JSON.stringify(todoDatabase))
}


const handlePreviewTodo = (todoId) =>{
    storeTodo("currentTodoId", todoId)
    location.href = "./preview.html"
}