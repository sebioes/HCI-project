// configurator.js
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        let checkboxes = document.querySelectorAll(`input[name="${this.name}"]`);
        checkboxes.forEach((cb) => {
            if (cb !== this) cb.checked = false;
        });
    });
});

function configureBike() {
    let frame = document.querySelector('input[name="frame"]:checked')?.value;
    let bar = document.querySelector('input[name="bar"]:checked')?.value;
    alert(`Frame color: ${frame || "None selected"}, Bar type: ${bar || "None selected"}`);
}
