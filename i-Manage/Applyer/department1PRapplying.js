document.addEventListener('DOMContentLoaded', () => {
    const poDateInput = document.getElementById('po-date');
    if (poDateInput) {
        const today = new Date().toISOString().split('T')[0];
        poDateInput.value = today;
    }

    if (window.location.pathname.includes('D1-PR-Status.html')) {
        displayPRDetails();
    }

    const deliveryDateFrom = document.getElementById('delivery-date-from');
    const deliveryDateTo = document.getElementById('delivery-date-to');

    deliveryDateFrom.addEventListener('change', validateDeliveryDates);
    deliveryDateTo.addEventListener('change', validateDeliveryDates);
});

function validateDeliveryDates() {
    const fromDate = document.getElementById('delivery-date-from').value;
    const toDate = document.getElementById('delivery-date-to').value;

    if (fromDate && toDate && new Date(fromDate) > new Date(toDate)) {
        alert('The "To" date must be later than the "From" date.');
        document.getElementById('delivery-date-to').value = ''; // Clear the invalid "To" date
    }
}

document.getElementById('po-form').addEventListener('submit', function(event) {
    const paymentTerms = document.getElementById('payment-terms').value;
    
    if (!paymentTerms.trim()) {
        alert('Payment Terms cannot be empty.');
        event.preventDefault(); // Prevent form submission
    }
});

const data = {
    IMI: {
        locations: { 
            location1: {
                address: "123 IMI Street, City, Country",
                telephone: "1234567890",
                fax: "0987654321",
                cin: "CIN123456",
                gstin: "GSTIN123456"
            },
            location2: {
                address: "456 IMI Avenue, City, Country",
                telephone: "2345678901",
                fax: "1987654320",
                cin: "CIN234567",
                gstin: "GSTIN234567"
            }
            // Add more locations as needed
        }
    },
    IEBCI: {
        locations: {
            location3: {
                address: "789 IEBCI Blvd, City, Country",
                telephone: "3456789012",
                fax: "2987654310",
                cin: "CIN345678",
                gstin: "GSTIN345678"
            },
            location4: {
                address: "101 IEBCI Lane, City, Country",
                telephone: "4567890123",
                fax: "3987654321",
                cin: "CIN456789",
                gstin: "GSTIN456789"
            }
            // Add more locations as needed
        }
    }
};

const budgetDatabase = {
    'BUD001': { unitCode: 'U001', division: 'Division A', department: 'Dept 1' },
    'BUD002': { unitCode: 'U002', division: 'Division B', department: 'Dept 2' },
    'BUD003': { unitCode: 'U003', division: 'Division C', department: 'Dept 3' }
};

function fetchBudgetDetails() {
    const budgetCode = document.getElementById('budget-code').value;
    const unitCodeInput = document.getElementById('unit-code');
    const divisionInput = document.getElementById('division');
    const departmentInput = document.getElementById('department');

    // Clear previous details
    unitCodeInput.value = '';
    divisionInput.value = '';
    departmentInput.value = '';

    if (budgetCode && budgetDatabase[budgetCode]) {
        const details = budgetDatabase[budgetCode];
        unitCodeInput.value = details.unitCode;
        divisionInput.value = details.division;
        departmentInput.value = details.department;
    }
}

function toggleGLFields() {
    const budgetType = document.getElementById("budget-type").value;
    const glFields = document.getElementById("gl-fields");

    if (budgetType === "Opex") {
        glFields.classList.remove("hidden");
    } else {
        glFields.classList.add("hidden");
    }
}

function updateBillingLocations() {
    const companyName = document.getElementById("billing-company-name").value;
    const locationSelect = document.getElementById("billing-location");

    // Clear previous options
    locationSelect.innerHTML = '<option value="">Select Location</option>';

    if (companyName) {
        const locations = data[companyName].locations;
        for (const location in locations) {
            const option = document.createElement("option");
            option.value = location;
            option.textContent = location;
            locationSelect.appendChild(option);
        }
    }
}

function updateBillingDetails() {
    const companyName = document.getElementById("billing-company-name").value;
    const location = document.getElementById("billing-location").value;

    if (companyName && location) {
        const details = data[companyName].locations[location];
        document.getElementById("Billing-Address").value = details.address;
        document.getElementById("Billing-Telephone-no").value = details.telephone;
        document.getElementById("Billing-Fax-no").value = details.fax;
        document.getElementById("Billing-CIN-no").value = details.cin;
        document.getElementById("Billing-GSTIN-no").value = details.gstin;
    }
}

function updateShippingLocations() {
    const companyName = document.getElementById("shipping-company-name").value;
    const locationSelect = document.getElementById("shipping-location");

    // Clear previous options
    locationSelect.innerHTML = '<option value="">Select Location</option>';

    if (companyName) {
        const locations = data[companyName].locations;
        for (const location in locations) {
            const option = document.createElement("option");
            option.value = location;
            option.textContent = location;
            locationSelect.appendChild(option);
        }
    }
}

function updateShippingDetails() {
    const companyName = document.getElementById("shipping-company-name").value;
    const location = document.getElementById("shipping-location").value;

    if (companyName && location) {
        const details = data[companyName].locations[location];
        document.getElementById("Shipping-Address").value = details.address;
        document.getElementById("Shipping-Telephone-no").value = details.telephone;
        document.getElementById("Shipping-Fax-no").value = details.fax;
        document.getElementById("Shipping-CIN-no").value = details.cin;
        document.getElementById("Shipping-GSTIN-no").value = details.gstin;
    }
}

function fetchVendorName() {
    const vendorCode = document.getElementById('vendor-code').value;
    const vendorNameInput = document.getElementById('vendor-name');
    
    // Dummy logic to fetch vendor name by vendor code
    const vendors = {
        '123': 'Vendor A',
        '456': 'Vendor B',
        '789': 'Vendor C'
    };

    vendorNameInput.value = vendors[vendorCode] || 'Unknown Vendor';
}

function calculateTotal(element) {
    const row = element.closest('tr');
    const unitPrice = row.querySelector('[name^="unit-price"]').value;
    const quantity = row.querySelector('[name^="quantity"]').value;
    const totalInput = row.querySelector('[name^="total"]');

    totalInput.value = (unitPrice * quantity).toFixed(2);
    updateTotalAmount();
}

function addItem() {
    const table = document.getElementById('line-items').getElementsByTagName('tbody')[0];
    const rowCount = table.rows.length;
    const row = table.insertRow(rowCount);

    row.innerHTML = `
        <td>${rowCount + 1}</td>
        <td><input type="text" name="description${rowCount + 1}"></td>
        <td><input type="number" name="unit-price${rowCount + 1}" oninput="calculateTotal(this)"></td>
        <td><input type="number" name="quantity${rowCount + 1}" oninput="calculateTotal(this)"></td>
        <td><input type="text" name="total${rowCount + 1}" readonly></td>
    `;
}

function updateTotalAmount() {
    let totalAmount = 0;
    const totalInputs = document.querySelectorAll('[name^="total"]');
    
    totalInputs.forEach(input => {
        totalAmount += parseFloat(input.value) || 0;
    });

    document.getElementById('total-amount').value = totalAmount.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('submitted.html')) {
        displayPRDetails();
    }
});

document.getElementById('po-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    saveFormData();
    window.location.href = 'submitted-pr.html';
});

function saveFormData() {
    const formData = new FormData(document.getElementById('po-form'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const items = [];
    document.querySelectorAll('#line-items tbody tr').forEach(row => {
        const item = {
            description: row.querySelector('[name^="description"]').value,
            unitPrice: row.querySelector('[name^="unit-price"]').value,
            quantity: row.querySelector('[name^="quantity"]').value,
            total: row.querySelector('[name^="total"]').value
        };
        items.push(item);
    });
    data.items = items;

    console.log(data); // Debug: Check the saved data
    localStorage.setItem('prData', JSON.stringify(data));
}

function displayPRDetails() {
    const prDetails = document.getElementById('pr-details');
    const data = JSON.parse(localStorage.getItem('prData'));

    if (!data) {
        prDetails.innerHTML = '<p>No PR data found.</p>';
        return;
    }

    let html = '<table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody>';
    for (const key in data) {
        if (key === 'items') continue;
        html += `<tr><td>${key.replace(/-/g, ' ')}</td><td>${data[key]}</td></tr>`;
    }
    html += '</tbody></table>';

    html += '<h2>Line Items</h2><table><thead><tr><th>S.No.</th><th>Description</th><th>Unit Price</th><th>Quantity</th><th>Total</th></tr></thead><tbody>';
    data.items.forEach((item, index) => {
        html += `<tr><td>${index + 1}</td><td>${item.description}</td><td>${item.unitPrice}</td><td>${item.quantity}</td><td>${item.total}</td></tr>`;
    });
    html += '</tbody></table>';

    prDetails.innerHTML = html;
}

document.getElementById('download-pdf')?.addEventListener('click', function() {
    const data = JSON.parse(localStorage.getItem('prData'));

    if (!data) {
        alert('No PR data found.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("PR Details", 10, 10);
    
    let y = 20;
    for (const key in data) {
        if (key === 'items') continue;
        doc.text(`${key.replace(/-/g, ' ')}: ${data[key]}`, 10, y);
        y += 10;
    }

    doc.text("Line Items", 10, y);
    y += 10;

    data.items.forEach((item, index) => {
        doc.text(`Item ${index + 1}`, 10, y);
        y += 10;
        doc.text(`Description: ${item.description}`, 20, y);
        y += 10;
        doc.text(`Unit Price: ${item.unitPrice}`, 20, y);
        y += 10;
        doc.text(`Quantity: ${item.quantity}`, 20, y);
        y += 10;
        doc.text(`Total: ${item.total}`, 20, y);
        y += 10;
    });

    doc.save('PR_Details.pdf');
});

function addLineItem() {
    const tableBody = document.getElementById('line-items-body');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text" name="item-code[]"></td>
        <td><input type="text" name="description[]"></td>
        <td><input type="number" name="quantity[]" step="0.01"></td>
        <td><input type="number" name="unit-price[]" step="0.01"></td>
        <td><input type="number" name="total-price[]" step="0.01" readonly></td>
        <td><button type="button" onclick="removeLineItem(this)">Remove</button></td>
    `;
    tableBody.appendChild(newRow);
}

function removeLineItem(button) {
    const row = button.closest('tr');
    row.remove();
}

function toggleGLFields() {
    const budgetType = document.getElementById('budget-type').value;
    document.getElementById('gl-fields').style.display = budgetType === 'Opex' ? 'block' : 'none';
}