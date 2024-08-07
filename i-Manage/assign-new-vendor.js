document.addEventListener('DOMContentLoaded', () => {
    const assignVendorForm = document.getElementById('assignVendorForm');

    assignVendorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Collect form data
        const formData = new FormData(assignVendorForm);
        const vendorData = {};
        formData.forEach((value, key) => {
            vendorData[key] = value;
        });

        // Here you can handle the form submission
        // For example, send the data to your server using fetch or XMLHttpRequest
        console.log(vendorData);

        // Example: Show a success message
        alert('Vendor assigned successfully!');
    });
});
