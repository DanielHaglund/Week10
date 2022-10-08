let id = 0;

document.getElementById('add-name-button').addEventListener('click', () => { 
    let table = document.getElementById('name')
    let row = table.insertRow(1); 
    row.setAttribute('id', `item-${id}`); 
    row.insertCell(0).innerHTML = document.getElementById('picture-select').value; 
    row.insertCell(1).innerHTML = document.getElementById('add-name').value; 
    let actions = row.insertCell(2); 
    actions.appendChild(createDeleteButton(id++)); 
    document.getElementById('add-name').value = '';
});

function createDeleteButton(id) { 
    let btn = document.createElement('button');
    btn.className = 'btn btn-outline-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => { 
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
