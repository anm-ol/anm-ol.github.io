function renderMarkdown(markdownPath, elementId) {
    fetch(markdownPath)
      .then(response => response.text())
      .then(markdown => {
        // Convert Markdown to HTML using Marked.js
        const htmlContent = marked(markdown);
        // Inject the HTML content into the specified element
        document.getElementById(elementId).innerHTML = htmlContent;
      })
      .catch(error => {
        console.error('Error fetching the Markdown file:', error);
      });
  }
  