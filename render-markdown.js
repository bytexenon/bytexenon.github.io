async function renderMarkdown(url, elementId) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    const markdownContent = document.getElementById(elementId);
    const htmlContent = marked(text);
    markdownContent.innerHTML = htmlContent;
  } catch (error) {
    console.error("Error loading Markdown content:", error);
  }
}