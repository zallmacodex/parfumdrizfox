// Function to open modal with product details
function openModal(title, description, price) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('productModal').style.display = 'flex';
}

// Function to close modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
