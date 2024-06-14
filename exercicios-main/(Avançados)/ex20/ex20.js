// Yasmin Siqueira Lobo
document.getElementById('fileInput').addEventListener('change', function(event) {
    const preview = document.getElementById('preview');
    preview.innerHTML = ''; 
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.classList.add('preview-image');
                preview.appendChild(img);
            };
            reader.readAsDataURL(file);
        } else {
            const p = document.createElement('p');
            p.textContent = `Arquivo: ${file.name}`;
            preview.appendChild(p);
        }
    }
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Arquivos enviados com sucesso!');
});
