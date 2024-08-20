document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input')
    const addButton = document.getElementById('add-button')
    const toDoList = document.getElementById('to-do-list')

    addButton.addEventListener('click', add);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            add()
        }
    })

    function add(){
        const inputValue = input.value.trim()
        if(inputValue !== '') {
            const li = document.createElement('li')
            li.textContent = inputValue;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Deletar";
            deleteButton.className = "delete";
            deleteButton.style.backgroundColor = 'red';
            deleteButton.addEventListener('click', () => {
                toDoList.removeChild(li)
            })
            li.appendChild(deleteButton)
            toDoList.append(li);
            input.value = '';
        }
    }
});