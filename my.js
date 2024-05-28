document.addEventListener("DOMContentLoaded", function() {
    const skillInputs = document.querySelectorAll('input[type="range"]');

    skillInputs.forEach(input => {
        input.addEventListener('input', function() {
            const value = this.value;
            const label = this.previousElementSibling;
            label.textContent = `${label.textContent.split(':')[0]}: ${value}%`;
        });
    });
});
