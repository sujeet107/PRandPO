document.addEventListener('DOMContentLoaded', () => {
    const processForm = document.getElementById('processForm');
    const processList = document.getElementById('processList');
    const editSection = document.getElementById('edit-section');
    const editProcessForm = document.getElementById('editProcessForm');
    const cancelEdit = document.getElementById('cancelEdit');
    let processes = [];
    let editingIndex = null;

    processForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(processForm);
        const process = {};
        formData.forEach((value, key) => {
            process[key] = value;
        });
        processes.push(process);
        renderProcesses();
        processForm.reset();
    });

    function renderProcesses() {
        processList.innerHTML = '';
        processes.forEach((process, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${process.processName}</td>
                <td>${process.department}</td>
                <td>${process.steps}</td>
                <td>
                    <button onclick="editProcess(${index})">Edit</button>
                    <button onclick="deleteProcess(${index})">Delete</button>
                </td>
            `;
            processList.appendChild(row);
        });
    }

    window.editProcess = function(index) {
        editingIndex = index;
        const process = processes[index];
        editSection.style.display = 'block';
        editProcessForm.editProcessName.value = process.processName;
        editProcessForm.editDepartment.value = process.department;
        editProcessForm.editSteps.value = process.steps;
    }

    window.deleteProcess = function(index) {
        processes.splice(index, 1);
        renderProcesses();
    }

    editProcessForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(editProcessForm);
        const process = {};
        formData.forEach((value, key) => {
            process[key] = value;
        });
        processes[editingIndex] = process;
        renderProcesses();
        editSection.style.display = 'none';
    });

    cancelEdit.addEventListener('click', () => {
        editSection.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const processForm = document.getElementById('processForm');
    let processes = JSON.parse(localStorage.getItem('processes')) || [];

    processForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const processName = document.getElementById('processName').value;
        const department = document.getElementById('department').value;
        const steps = document.getElementById('steps').value.split(',');

        const newProcess = {
            processName,
            department,
            steps
        };

        processes.push(newProcess);
        localStorage.setItem('processes', JSON.stringify(processes));
        alert('Process created successfully!');
        processForm.reset();
    });
});
