let data = [
	{
		id: 1,
		name: 'Vahag Hambardzumyan',
		role: 'Admin'
	}
]
let dataIndex = 1
function readAll() {
	localStorage.setItem('object', JSON.stringify(data))
	let dataTable = document.querySelector('.data_table')
	let object = localStorage.getItem('object')
	let objectData = JSON.parse(object)
	let elements = ''
	objectData.map(elem => {
		elements += `<tr>
            <td>${elem.name}</td>
            <td>${elem.role}</td>
            <td>
                <button class='edit' onclick={edit(${elem.id})}>Edit</button>
                <button class='delete' onclick={remove(${elem.id})}>Delete</button>
            </td>
        </tr>`
	})
	dataTable.innerHTML = elements
}

let addDiv = document.querySelector('.add_div')
let createForm = document.querySelector('.create_form')
let updateForm = document.querySelector('.update_form')

function add() {
	addDiv.style.display = 'none'
	updateForm.style.display = 'none'
	createForm.style.display = 'block'
	document.querySelector('.name').value = ''
	document.querySelector('.role').value = ''
}
function create() {
	let name = document.querySelector('.name').value
	let role = document.querySelector('.role').value
	dataIndex++
	let newObj = {
		id: dataIndex,
		name: name,
		role: role
	}
	if (name == '' || role == '') {
		alert('Please fill all fields!')
	}
	else {
		addDiv.style.display = 'block'
		createForm.style.display = 'none'
		data.push(newObj)
		readAll()
	}
}

function edit(id) {
	createForm.style.display = 'none'
	updateForm.style.display = 'block'
	addDiv.style.display = 'none'
	let obj = data.find(e => e.id == id)
	document.querySelector('.id').value = obj.id
	document.querySelector('.uname').value = obj.name
	document.querySelector('.urole').value = obj.role
}

function update() {
	updateForm.style.display = 'none'
	addDiv.style.display = 'block'
	let id = parseInt(document.querySelector('.id').value)
	let name = document.querySelector('.uname').value
	let role = document.querySelector('.urole').value
	let index = data.findIndex(e => e.id == id)
	data[index] = { id, name, role }
	readAll()
}

function remove(id) {
	data = data.filter(e => e.id !== id)
	readAll()
}
