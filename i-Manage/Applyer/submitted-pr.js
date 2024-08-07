document.addEventListener('DOMContentLoaded', () => {
    displayPRDetails();
});

function displayPRDetails() {
    const data = JSON.parse(localStorage.getItem('poFormData'));
    if (!data) return;

    const submittedDetails = document.getElementById('submitted-details');
    let html = '<h2>Submitted Purchase Request Details</h2>';

    for (const [key, value] of Object.entries(data)) {
        html += `<p><strong>${key.replace(/-/g, ' ')}:</strong> ${value}</p>`;
    }

    submittedDetails.innerHTML = html;
}


function downloadExcel() {
    const prDetails = JSON.parse(localStorage.getItem('prDetails'));
    if (prDetails) {
        const data = [];
        Object.keys(prDetails).forEach(key => {
            data.push([key, prDetails[key]]);
        });
        const worksheet = XLSX.utils.aoa_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Purchase Request");
        XLSX.writeFile(workbook, 'purchase-request.xlsx');
    } else {
        alert('No purchase request details found.');
    }
}
