function togglePDF(filename) {
    const repoURL = "https://Vaishali-Pandey-11.github.io/sample/"; // Replace with your GitHub Pages base URL
    const pdfViewer = document.getElementById('pdfViewer');

    if (pdfViewer.style.display === 'block') {
        if (pdfViewer.src.endsWith(filename)) {
            // If the same PDF is already displayed, hide it
            pdfViewer.style.display = 'none';
        } else {
            // If a different PDF is clicked, update the src
            pdfViewer.src = repoURL + filename;
        }
    } else {
        // Show the iframe with the new PDF
        pdfViewer.src = repoURL + filename;
        pdfViewer.style.display = 'block';
    }
}

// Attach event listeners to buttons
document.querySelectorAll('button[data-pdf]').forEach(button => {
    button.addEventListener('click', function () {
        const filename = this.getAttribute('data-pdf');
        togglePDF(filename);
    });
});
