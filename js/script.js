// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm')
let table = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0
let empCount = document.getElementById('empCount')
empCount.textContent = `(${count})`

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeId = document.getElementById('id').value
    let employeeName = document.getElementById('name').value
    let employeeExtension = document.getElementById('extension').value
    let employeeEmail = document.getElementById('email').value
    let employeeDepartment = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let tr = table.insertRow()
    
    

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = tr.insertCell(0)
    let cellName = tr.insertCell(1)
    let cellExtension = tr.insertCell(2)
    let cellEmail = tr.insertCell(3)
    let cellDepartment = tr.insertCell(4)

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    cellId.appendChild(document.createTextNode(employeeId))
    cellName.appendChild(document.createTextNode(employeeName))
    cellExtension.appendChild(document.createTextNode(employeeExtension))
    cellEmail.appendChild(document.createTextNode(employeeEmail))
    cellDepartment.appendChild(document.createTextNode(employeeDepartment))

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm delete'
    let deleteTxt = document.createTextNode('X')
    deleteBtn.appendChild(deleteTxt)
    tr.insertCell(5).appendChild(deleteBtn)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.textContent = `(${count})`

})

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')){
        if (confirm('Are you sure you want to delete this employee?')){
            let tr = e.target.closest('tr');
            table.deleteRow(tr.rowIndex); 
            count--
            document.getElementById('empCount').textContent = `(${count})`
        }
    }

})