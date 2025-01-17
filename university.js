const courseData = {
    bsc: {
        1: [
            { name: "B.Sc Semester 1 - Course PDF", url: "https://Vaishali-Pandey-11.github.io/pdfs/bsc-1-sem-3-sem-art-of-being-happy-2024.pdf" },
            { name: "B.Sc Semester 1 - Syllabus", url: "https://github.com/yourusername/yourrepo/raw/main/bsc-sem1-syllabus.pdf" }
        ],
        2: [
            { name: "B.Sc Semester 2 - Course PDF", url: "https://github.com/yourusername/yourrepo/raw/main/bsc-sem2.pdf" }
        ]
    },
    ba: {
        1: [
            { name: "B.A Semester 1 - Course PDF", url: "https://github.com/yourusername/yourrepo/raw/main/ba-sem1.pdf" },
            { name: "B.A Semester 1 - Syllabus", url: "https://github.com/yourusername/yourrepo/raw/main/ba-sem1-syllabus.pdf" }
        ]
    },
    bcom: {
        1: [
            { name: "B.Com Semester 1 - Course PDF", url: "https://github.com/yourusername/yourrepo/raw/main/bcom-sem1.pdf" }
        ]
    }
};

function populateSemesters(course) {
    const semesterSelect = document.getElementById("semester");
    const semesterContainer = document.getElementById("semester-container");
    const pdfContainer = document.getElementById("pdf-container");
    const pdfViewer = document.getElementById("pdfViewer");
    const message = document.getElementById("message");
    const closeBtn = document.getElementById("closeBtn");

    semesterSelect.innerHTML = "<option value=''>-- Select Semester --</option>";
    pdfContainer.style.display = "none";
    pdfViewer.style.display = "none";
    closeBtn.style.display = "none";
    message.style.display = "none";

    if (course && courseData[course]) {
        semesterContainer.style.display = "block";
        for (const semester in courseData[course]) {
            const option = document.createElement("option");
            option.value = semester;
            option.textContent = `Semester ${semester}`;
            semesterSelect.appendChild(option);
        }
    } else {
        semesterContainer.style.display = "none";
    }
}

function populatePDFs(semester) {
    const courseSelect = document.getElementById("course");
    const pdfSelect = document.getElementById("pdfs");
    const pdfContainer = document.getElementById("pdf-container");
    const pdfViewer = document.getElementById("pdfViewer");
    const message = document.getElementById("message");
    const closeBtn = document.getElementById("closeBtn");

    pdfSelect.innerHTML = "<option value=''>-- Select PDF --</option>";
    pdfViewer.style.display = "none";
    closeBtn.style.display = "none";
    message.style.display = "none";

    if (courseSelect.value && semester && courseData[courseSelect.value][semester]) {
        pdfContainer.style.display = "block";
        const pdfs = courseData[courseSelect.value][semester];
        pdfs.forEach(pdf => {
            const option = document.createElement("option");
            option.value = pdf.url;
            option.textContent = pdf.name;
            pdfSelect.appendChild(option);
        });
    } else {
        pdfContainer.style.display = "none";
        message.style.display = "block";
    }
}

function showPDF() {
    const pdfSelect = document.getElementById("pdfs");
    const pdfViewer = document.getElementById("pdfViewer");
    const closeBtn = document.getElementById("closeBtn");

    const pdfUrl = pdfSelect.value;
    if (pdfUrl) {
        pdfViewer.innerHTML = `<embed src="${pdfUrl}" width="100%" height="600px" />`;
        pdfViewer.style.display = "block";
        closeBtn.style.display = "inline-block";
    }
}

function closePDF() {
    const pdfViewer = document.getElementById("pdfViewer");
    const closeBtn = document.getElementById("closeBtn");
    const pdfSelect = document.getElementById("pdfs");

    pdfViewer.style.display = "none";
    closeBtn.style.display = "none";
    pdfSelect.value = "";
}
