document.addEventListener('DOMContentLoaded', () => {
    const currentProcessList = document.getElementById('currentProcessList');
    const editSection = document.getElementById('edit-section');
    const editProcessForm = document.getElementById('editProcessForm');
    const cancelEdit = document.getElementById('cancelEdit');
    let processes = JSON.parse(localStorage.getItem('processes')) || [];
    let currentEditIndex = null;

    function renderProcesses() {
        currentProcessList.innerHTML = '';
        processes.forEach((process, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${process.processName}</td>
                <td>${process.department}</td>
                <td>${process.steps.join(', ')}</td>
                <td>
                    <button onclick="editProcess(${index})">Edit</button>
                    <button onclick="deleteProcess(${index})">Delete</button>
                </td>
            `;
            currentProcessList.appendChild(row);
        });
    }

    window.editProcess = (index) => {
        currentEditIndex = index;
        const process = processes[index];
        document.getElementById('editProcessName').value = process.processName;
        document.getElementById('editDepartment').value = process.department;
        document.getElementById('editSteps').value = process.steps.join(', ');
        editSection.style.display = 'block';
    };

    window.deleteProcess = (index) => {
        if (confirm('Are you sure you want to delete this process?')) {
            processes.splice(index, 1);
            localStorage.setItem('processes', JSON.stringify(processes));
            renderProcesses();
        }
    };

    editProcessForm.addEventListener('submit', (event) => {
        event.preventDefault();

        processes[currentEditIndex].processName = document.getElementById('editProcessName').value;
        processes[currentEditIndex].department = document.getElementById('editDepartment').value;
        processes[currentEditIndex].steps = document.getElementById('editSteps').value.split(',');

        localStorage.setItem('processes', JSON.stringify(processes));
        renderProcesses();
        editSection.style.display = 'none';
    });

    cancelEdit.addEventListener('click', () => {
        editSection.style.display = 'none';
    });

    renderProcesses();
});
