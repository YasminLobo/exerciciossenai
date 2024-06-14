// Yasmin Siqueira Lobo}
document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value.trim();
    const wordCount = text === '' ? 0 : text.split(/\s+/).length;
    document.getElementById('wordCount').textContent = `Palavras: ${wordCount}`;
});
