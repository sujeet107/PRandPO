document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const prPoNumber = params.get('number');
    fetchDetails(prPoNumber);
});

function fetchDetails(prPoNumber) {
    const approvedPRPOData = [
        { number: 'PR001', companyName: 'Company A', vendorName: 'Vendor X', budgetType: 'Type A', description: 'Description A', budgetNumber: '', documents: ['doc1.pdf', 'doc2.pdf'] },
        { number: 'PO002', companyName: 'Company B', vendorName: 'Vendor Y', budgetType: 'Type B', description: 'Description B', budgetNumber: '', documents: ['doc3.pdf'] }
    ];

    const item = approvedPRPOData.find(prPo => prPo.number === prPoNumber);

    const detailsSection = document.getElementById('details-section');
    detailsSection.innerHTML = `
        <h2>Details for ${item.number}</h2>
        <p><strong>Company Name:</strong> ${item.companyName}</p>
        <p><strong>Vendor Name:</strong> ${item.vendorName}</p>
        <p><strong>Budget Type:</strong> ${item.budgetType}</p>
        <p><strong>Description:</strong> ${item.description}</p>
        <p><strong>Budget Number:</strong> ${item.budgetNumber}</p>
        <p><strong>Documents:</strong></p>
        <ul>
            ${item.documents.map(doc => `<li><a href="${doc}" target="_blank">${doc}</a></li>`).join('')}
        </ul>
    `;
}
