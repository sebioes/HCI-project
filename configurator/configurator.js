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
    let saddle = document.querySelector('input[name="saddle"]:checked')?.value;

    // Update the AR model display
    if (frame && bar && saddle) {
        let modelPath = `/assets/velos/${frame}-${bar}-${saddle}.usdz`;
        let buttonPath = `/assets/velos/${frame}-${bar}-thumbnail.jpg`;
        let arModelHtml = `
            <a rel="ar" href="${modelPath}">
                <button>View rad velo</button>
            </a>
            <a href="/test-ride/test-ride.html">
                <button>Test ride</button>
            </a>
            
        `;
        document.getElementById('arModelDisplay').innerHTML = arModelHtml;
    } else {
        document.getElementById('arModelDisplay').innerHTML = 'Please select both a frame color and a bar type to view the AR model.';
    }
}
