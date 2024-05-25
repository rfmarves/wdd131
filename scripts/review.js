// Document Object references
const countParragraph = document.querySelector("#submissionCount");

// Gets value from local storage or returns 0 if not present
let submissionCount = Number(window.localStorage.getItem("submissionCount-ls")) || 0;

if(submissionCount !==0) {
    countParragraph.textContent = `There have been ${submissionCount} product form submissions.`;
} else if (submissionCount == 1) {
    countParragraph.textContent = "There has been one product form submission.";
} else {
    countParragraph.textContent = "This was the first product form submission.";
}

submissionCount++;

localStorage.setItem("submissionCount-ls", submissionCount);