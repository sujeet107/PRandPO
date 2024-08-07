document.addEventListener('DOMContentLoaded', () => {
    fetchApprovedPRPO();
});

function fetchApprovedPRPO() {
    const approvedPRPOData = [
        { number: 'PR001', companyName: 'Company A', vendorName: 'Vendor X', budgetType: 'Type A', description: 'Description A', budgetNumber: 'B001', documents: ['doc1.pdf', 'doc2.pdf'] },
        { number: 'PO002', companyName: 'Company B', vendorName: 'Vendor Y', budgetType: 'Type B', description: 'Description B', budgetNumber: 'B002', documents: ['doc3.pdf'] }
    ];

    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';

    approvedPRPOData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.number}</td>
            <td>${item.companyName}</td>
            <td>${item.vendorName}</td>
            <td>${item.budgetType}</td>
            <td>${item.description}</td>
            <td>${item.budgetNumber}</td>
            <td>
                <button onclick="approveItem('${item.number}')">Approve</button>
                <button onclick="disapproveItem('${item.number}')">Disapprove</button>
                <button onclick="viewDetails('${item.number}')">View Details</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


function approveItem(prPoNumber) {
    alert(`PR/PO number ${prPoNumber} approved.`);
}

function disapproveItem(prPoNumber) {
    alert(`PR/PO number ${prPoNumber} disapproved.`);
}

function viewDetails(prPoNumber) {
    window.location.href = `cft2-view-details.html?number=${prPoNumber}`;
}
