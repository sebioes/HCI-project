document.querySelectorAll('.option-group').forEach(group => {
    group.addEventListener('click', function (event) {
        if (event.target.type === 'checkbox') {
            let checkboxes = this.querySelectorAll(`input[name="${event.target.name}"]`);
            checkboxes.forEach((cb) => {
                if (cb !== event.target) cb.checked = false;
            });
        }
    });
});

function configureBike() {
    let frame = document.querySelector('input[name="frame"]:checked')?.value;
    let bar = document.querySelector('input[name="bar"]:checked')?.value;
    let saddle = document.querySelector('input[name="saddle"]:checked')?.value;
    let arModelDisplay = document.getElementById('arModelDisplay');

    if (frame && bar && saddle) {
        let modelPath = `../assets/velos/${frame}-${bar}-${saddle}.usdz`;
        arModelDisplay.innerHTML = `
                <a rel="ar" href="${modelPath}">
                    <button>View Velo</button>
                </a>
                <a href="../test-ride/test-ride.html">
                    <button>Test ride</button>
                </a>
            `;
    } else {
        showAlert();
    }
    function showAlert() {
        alert('Please select a frame color, handlebar type, and saddle color to view the AR model');
      }

}