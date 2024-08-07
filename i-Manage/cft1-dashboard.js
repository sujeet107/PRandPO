document.addEventListener('DOMContentLoaded', () => {
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Redirect to the details page
            window.location.href = 'details-page.html';
        });
    });
    
    // Add functionality for approve and disapprove buttons
    const approveButtons = document.querySelectorAll('.approve');
    const disapproveButtons = document.querySelectorAll('.disapprove');
    
    approveButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Implement approve logic here
            alert('Approved');
        });
    });
    
    disapproveButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Implement disapprove logic here
            alert('Disapproved');
        });
    });
});
