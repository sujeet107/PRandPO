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

    if (deliveryDateFrom) {
        deliveryDateFrom.addEventListener('change', validateDeliveryDates);
    }
    if (deliveryDateTo) {
        deliveryDateTo.addEventListener('change', validateDeliveryDates);
    }
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

const locations = {
    IMI: {
        'Location1': {
            address: '123 IMI Street, City, Country',
            telephone: '123-456-7890',
            fax: '123-456-7891',
            cin: 'IMI-CIN-123',
            gstin: 'IMI-GSTIN-123'
        },
        'Location2': {
            address: '456 IMI Avenue, City, Country',
            telephone: '987-654-3210',
            fax: '987-654-3211',
            cin: 'IMI-CIN-456',
            gstin: 'IMI-GSTIN-456'
        }
    },
    IEBCI: {
        'Location1': {
            address: '789 IEBCI Road, City, Country',
            telephone: '234-567-8901',
            fax: '234-567-8902',
            cin: 'IEBCI-CIN-789',
            gstin: 'IEBCI-GSTIN-789'
        },
        'Location2': {
            address: '101 IEBCI Lane, City, Country',
            telephone: '321-654-0987',
            fax: '321-654-0988',
            cin: 'IEBCI-CIN-101',
            gstin: 'IEBCI-GSTIN-101'
        }
    }
};

function fetchBudgetDetails() {
    const budgetCode = document.getElementById('budget-code').value;
    // Here you would typically fetch budget details from an API or database.
    // For this example, we'll simulate it with some static data.
    if (budgetCode === 'B123') {
        document.getElementById('unit-code').value = 'Unit1';
        document.getElementById('division').value = 'Division A';
        document.getElementById('department').value = 'Department X';
    } else if (budgetCode === 'B456') {
        document.getElementById('unit-code').value = 'Unit2';
        document.getElementById('division').value = 'Division B';
        document.getElementById('department').value = 'Department Y';
    } else {
        document.getElementById('unit-code').value = '';
        document.getElementById('division').value = '';
        document.getElementById('department').value = '';
    }
}

function toggleGLFields() {
    const budgetType = document.getElementById('budget-type').value;
    const glFields = document.getElementById('gl-fields');
    if (budgetType === 'Opex') {
        glFields.classList.remove('hidden');
    } else {
        glFields.classList.add('hidden');
    }
}

function updateBillingLocations() {
    const company = document.getElementById('billing-company-name').value;
    const locationSelect = document.getElementById('billing-location');
    locationSelect.innerHTML = '<option value="">Select Location</option>';
    
    if (company && locations[company]) {
        for (const location in locations[company]) {
            const option = document.createElement('option');
            option.value = location;
            option.textContent = location;
            locationSelect.appendChild(option);
        }
    }
}

function updateBillingDetails() {
    const company = document.getElementById('billing-company-name').value;
    const location = document.getElementById('billing-location').value;
    const details = locations[company]?.[location] || {};

    document.getElementById('Billing-Address').value = details.address || '';
    document.getElementById('Billing-Telephone-no').value = details.telephone || '';
    document.getElementById('Billing-Fax-no').value = details.fax || '';
    document.getElementById('Billing-CIN-no').value = details.cin || '';
    document.getElementById('Billing-GSTIN-no').value = details.gstin || '';
}

function updateShippingLocations() {
    const company = document.getElementById('shipping-company-name').value;
    const locationSelect = document.getElementById('shipping-location');
    locationSelect.innerHTML = '<option value="">Select Location</option>';

    if (company && locations[company]) {
        for (const location in locations[company]) {
            const option = document.createElement('option');
            option.value = location;
            option.textContent = location;
            locationSelect.appendChild(option);
        }
    }
}

function updateShippingDetails() {
    const company = document.getElementById('shipping-company-name').value;
    const location = document.getElementById('shipping-location').value;
    const details = locations[company]?.[location] || {};

    document.getElementById('Shipping-Address').value = details.address || '';
    document.getElementById('Shipping-Telephone-no').value = details.telephone || '';
    document.getElementById('Shipping-Fax-no').value = details.fax || '';
    document.getElementById('Shipping-CIN-no').value = details.cin || '';
    document.getElementById('Shipping-GSTIN-no').value = details.gstin || '';
}

function fetchVendorName() {
    const vendorCode = document.getElementById('vendor-code').value;
    // Here you would typically fetch vendor details from an API or database.
    // For this example, we'll just simulate it with some static data.
    if (vendorCode === 'V123') {
        document.getElementById('vendor-name').value = 'Vendor One';
    } else if (vendorCode === 'V456') {
        document.getElementById('vendor-name').value = 'Vendor Two';
    } else {
        document.getElementById('vendor-name').value = '';
    }
}

function calculateTotal(element) {
    const row = element.closest('tr');
    const unitPrice = parseFloat(row.querySelector('[name^="unit-price"]').value) || 0;
    const quantity = parseFloat(row.querySelector('[name^="quantity"]').value) || 0;
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
        <td><button type="button" onclick="removeRow(this)" class="remove-btn">Remove</button></td>
    `;
}

function removeRow(button) {
    const row = button.closest('tr');
    row.remove();
    updateRowNumbers();
    updateTotalAmount();
}

function updateRowNumbers() {
    const rows = document.querySelectorAll('#line-items tbody tr');
    rows.forEach((row, index) => {
        row.cells[0].textContent = index + 1;
    });
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
    const poDateInput = document.getElementById('po-date');
    if (poDateInput) {
        const today = new Date().toISOString().split('T')[0];
        poDateInput.value = today;
    }
    document.getElementById('po-form').addEventListener('submit', function(event) {
        event.preventDefault();
        saveFormData();
        window.location.href = 'submitted-pr.html';
    });
});

function saveFormData() {
    const formData = new FormData(document.getElementById('po-form'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    localStorage.setItem('poFormData', JSON.stringify(data));
}
