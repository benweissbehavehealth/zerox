document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("upload-form");
  const fileInput = document.getElementById("file-input");
  const resultsSection = document.getElementById("results");

  uploadForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file.");
      }

      const result = await response.json();
      displayResults(result);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading the file.");
    }
  });

  function displayResults(result) {
    resultsSection.innerHTML = "";

    if (result && result.content) {
      const pre = document.createElement("pre");
      pre.textContent = result.content;
      resultsSection.appendChild(pre);
    } else {
      resultsSection.textContent = "No results to display.";
    }
  }
});
