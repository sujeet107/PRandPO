document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'cft2-view-details.html';
        });
    });
});
