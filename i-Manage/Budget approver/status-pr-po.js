document.addEventListener('DOMContentLoaded', () => {
    fetchPRPOStatus();
});

function fetchPRPOStatus() {
    // Example data - replace with real data source
    const prpoStatusData = [
        {
            number: 'PR001',
            companyName: 'Company A',
            vendorName: 'Vendor X',
            budgetType: 'Type A',
            description: 'Description A',
            budgetNumber: 'BN001',
            budgetApprover: true,
            departmentApprover: true,
            cft1: false,
            cft2: true,
            topManagement: false
        },
        {
            number: 'PO002',
            companyName: 'Company B',
            vendorName: 'Vendor Y',
            budgetType: 'Type B',
            description: 'Description B',
            budgetNumber: 'BN002',
            budgetApprover: true,
            departmentApprover: false,
            cft1: false,
            cft2: false,
            topManagement: false
        }
    ];

    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';

    prpoStatusData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.number}</td>
            <td>${item.companyName}</td>
            <td>${item.vendorName}</td>
            <td>${item.budgetType}</td>
            <td>${item.description}</td>
            <td>${item.budgetNumber}</td>
            <td>${item.budgetApprover ? '✔' : '✘'}</td>
            <td>${item.departmentApprover ? '✔' : '✘'}</td>
            <td>${item.cft1 ? '✔' : '✘'}</td>
            <td>${item.cft2 ? '✔' : '✘'}</td>
            <td>${item.topManagement ? '✔' : '✘'}</td>
        `;
        tableBody.appendChild(row);
    });
}
