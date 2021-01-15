const inputField = document.getElementById('input');

const btnAdd = document.getElementById('btn');

const list = document.getElementById('toDoList');

const circleV = document.querySelector('.circle');

const itemNames = document.getElementById('itemNames');

const toDoList = document.getElementById('toDoList');

btnAdd.addEventListener('click', j => {
    
    let newItem = document.createElement('ol');
    newItem.className = 'listItem';
    
    let inputValue = document.createElement('p');
    inputValue.innerText = inputField.value;
    inputValue.className = 'itemName';
    
    let appendCircle = document.createElement('small');
    appendCircle.className = 'circle';
    
    let appendDelete = document.createElement('i');
    appendDelete.className = 'delete';
    appendDelete.innerHTML = "❌";
    
    list.appendChild(newItem);
    newItem.appendChild(appendCircle);
    newItem.appendChild(inputValue);
    newItem.appendChild(appendDelete);

    inputField.value = "";


    appendCircle.addEventListener('click', e => {
        if(appendCircle.innerHTML === "") {
        appendCircle.innerHTML = "✓";
        inputValue.style.textDecoration = 'line-through';
        } else {
            appendCircle.innerHTML = "";
            inputValue.style.textDecoration = "none";
        }
    })

    appendDelete.addEventListener('click', h => {
     toDoList.removeChild(newItem);
    })
    
})








