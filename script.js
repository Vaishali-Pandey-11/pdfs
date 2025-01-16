function togglePDF(filename) {
    const repoURL = "https://Vaishali-Pandey-11.github.io/sample/"; // Replace with your GitHub Pages base URL
    const pdfViewer = document.getElementById('pdfViewer');

    // Check if the PDF is already loaded
    if (pdfViewer.src === repoURL + filename) {
        // If loaded, hide/reset the iframe
        pdfViewer.src = ""; // Clear iframe content
        pdfViewer.style.display = 'none'; // Hide the iframe
    } else {
        // Otherwise, load the PDF and display it
        pdfViewer.src = repoURL + filename;
        pdfViewer.style.display = 'block'; // Show the iframe
    }
}

// Attach event listeners to all buttons with the "data-pdf" attribute
document.querySelectorAll('button[data-pdf]').forEach(button => {
    button.addEventListener('click', function () {
        const filename = this.getAttribute('data-pdf'); // Get filename from the button's data attribute
        togglePDF(filename);
    });
});
