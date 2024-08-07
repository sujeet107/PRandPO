document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const number = params.get('number');
    fetchPRPODetails(number);
});

function fetchPRPODetails(number) {
    // Example data - replace with real data source
    const prpoDetailsData = {
        'PR001': {
            number: 'PR001',
            companyName: 'Company A',
            vendorName: 'Vendor X',
            budgetType: 'Type A',
            description: 'Description A',
            budgetNumber: 'BN001',
            documents: ['doc1.pdf', 'doc2.pdf']
        },
        'PO002': {
            number: 'PO002',
            companyName: 'Company B',
            vendorName: 'Vendor Y',
            budgetType: 'Type B',
            description: 'Description B',
            budgetNumber: 'BN002',
            documents: ['doc3.pdf', 'doc4.pdf']
        }
    };

    const details = prpoDetailsData[number];
    if (details) {
        const detailsSection = document.getElementById('details');
        detailsSection.innerHTML = `
            <p><strong>PR/PO Number:</strong> ${details.number}</p>
            <p><strong>Company Name:</strong> ${details.companyName}</p>
            <p><strong>Vendor Name:</strong> ${details.vendorName}</p>
            <p><strong>Budget Type:</strong> ${details.budgetType}</p>
            <p><strong>Description:</strong> ${details.description}</p>
            <p><strong>Budget Number:</strong> ${details.budgetNumber}</p>
        `;

        const documentsList = document.getElementById('documents-list');
        details.documents.forEach(doc => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="path/to/documents/${doc}" target="_blank">${doc}</a>`;
            documentsList.appendChild(listItem);
        });
    } else {
        document.getElementById('details-section').innerHTML = '<p>No details available for this PR/PO.</p>';
    }
}
