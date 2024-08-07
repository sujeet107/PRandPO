document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display PRs
    fetchPRs();

    // Fetch and display POs
    fetchPOs();

    // Fetch and display PR/PO statuses
    fetchStatus();
});

function fetchPRs() {
    // Placeholder for fetching PR data (e.g., from an API or database)
    const prData = [
        { prNumber: 'PR001', companyName: 'Company A', vendorName: 'Vendor X', budgetType: 'Type A', description: 'Description A', budgetNumber: 'B001' },
        // Add more PRs as needed
    ];

    const prTableBody = document.querySelector('#approve-pr tbody');
    prData.forEach(pr => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${pr.prNumber}</td>
            <td>${pr.companyName}</td>
            <td>${pr.vendorName}</td>
            <td>${pr.budgetType}</td>
            <td>${pr.description}</td>
            <td>${pr.budgetNumber}</td>
            <td><button onclick="approvePR('${pr.prNumber}')">Approve</button></td>
        `;
        prTableBody.appendChild(row);
    });
}

function fetchPOs() {
    // Placeholder for fetching PO data (e.g., from an API or database)
    const poData = [
        { poNumber: 'PO001', companyName: 'Company A', vendorName: 'Vendor X', budgetType: 'Type A', description: 'Description A', budgetNumber: 'B001' },
        // Add more POs as needed
    ];

    const poTableBody = document.querySelector('#approve-po tbody');
    poData.forEach(po => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${po.poNumber}</td>
            <td>${po.companyName}</td>
            <td>${po.vendorName}</td>
            <td>${po.budgetType}</td>
            <td>${po.description}</td>
            <td>${po.budgetNumber}</td>
            <td><button onclick="approvePO('${po.poNumber}')">Approve</button></td>
        `;
        poTableBody.appendChild(row);
    });
}

function fetchStatus() {
    // Placeholder for fetching PR/PO status data (e.g., from an API or database)
    const statusData = [
        { number: 'PR001', companyName: 'Company A', vendorName: 'Vendor X', budgetType: 'Type A', description: 'Description A', budgetNumber: 'B001', status: 'Pending' },
        // Add more status items as needed
    ];

    const statusTableBody = document.querySelector('#status-page tbody');
    statusData.forEach(status => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${status.number}</td>
            <td>${status.companyName}</td>
            <td>${status.vendorName}</td>
            <td>${status.budgetType}</td>
            <td>${status.description}</td>
            <td>${status.budgetNumber}</td>
            <td>${status.status}</td>
        `;
        statusTableBody.appendChild(row);
    });
}

function approvePR(prNumber) {
    // Placeholder for approving a PR
    alert(`PR ${prNumber} approved!`);
    // Implement actual approval logic here
}

function approvePO(poNumber) {
    // Placeholder for approving a PO
    alert(`PO ${poNumber} approved!`);
    // Implement actual approval logic here
}
