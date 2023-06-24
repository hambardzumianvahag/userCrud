let data = [
	{
		id: 1,
		name: 'Vahag',
		email: 'hambardzumianvahag@gmail.com'
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
            <td>${elem.email}</td>
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

function create() {
	addDiv.style.display = 'none'
	createForm.style.display = 'block'
	document.querySelector('.name').value = ''
	document.querySelector('.email').value = ''
}
function add() {
	let name = document.querySelector('.name').value
	let email = document.querySelector('.email').value
	dataIndex++
	let newObj = {
		id: dataIndex,
		name: name,
		email: email
	}
	addDiv.style.display = 'block'
	createForm.style.display = 'none'
	data.push(newObj)
	readAll()
}

function edit(id) {
	updateForm.style.display = 'block'
	let obj = data.find(e => e.id == id)
	document.querySelector('.id').value = obj.id
	document.querySelector('.uname').value = obj.name
	document.querySelector('.uemail').value = obj.email
}

function update() {
	let id = parseInt(document.querySelector('.id').value)
	let name = document.querySelector('.uname').value
	let email = document.querySelector('.uemail').value

	let index = data.findIndex(e => e.id == id)
	data[index] = { id, name, email }
	readAll()
	updateForm.style.display = 'none'
}

function remove(id) {
	data = data.filter(e => e.id !== id)
	readAll()
}
