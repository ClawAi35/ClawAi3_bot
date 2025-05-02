document.addEventListener("DOMContentLoaded", function() {
    const allowedDomains = ['clawai35.github.io'];
    const currentDomain = window.location.hostname;

    if (allowedDomains.includes(currentDomain)) {
        document.getElementById('status').textContent = 'Bot başarıyla çalışıyor!';
    } else {
        document.getElementById('status').textContent = 'Bot domain invalid';
    }
});
