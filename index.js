
var formData = {}; 
var editing = false; 

// Function 
function editData() {
    editing = true;
    // input fields
    document.querySelectorAll('input').forEach(input => {
        input.removeAttribute('readonly');
    });
    // submit button
    document.querySelector('button[type="submit"]').style.display = 'block';
}

// Function 
function showConfirmation() {
    if (editing) {
        // JavaScript confirmation 
        var confirmSave = confirm("Are you sure you want to save this data?");
        if (confirmSave) {
            editing = false;
            // Disable all input
            document.querySelectorAll('input').forEach(input => {
                input.setAttribute('readonly', true);
            });
            // Hide submit button
            document.querySelector('button[type="submit"]').style.display = 'none';

            // Get data
            formData.nama = document.getElementById("nama").value;
            formData.role = document.getElementById("role").value;
            formData.availability = document.getElementById("availability").value;
            formData.usia = document.getElementById("usia").value;
            formData.lokasi = document.getElementById("lokasi").value;
            formData.pengalaman = document.getElementById("pengalaman").value;
            formData.email = document.getElementById("email").value;

            // Display saved data
            var savedDataDiv = document.getElementById("savedData");
            savedDataDiv.innerHTML = `
                <p><strong>Nama:</strong> ${formData.nama}</p>
                <p><strong>Role:</strong> ${formData.role}</p>
                <p><strong>Availability:</strong> ${formData.availability}</p>
                <p><strong>Usia:</strong> ${formData.usia}</p>
                <p><strong>Lokasi:</strong> ${formData.lokasi}</p>
                <p><strong>Years Experience:</strong> ${formData.pengalaman}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
            `;

            // JSON:
            var jsonData = JSON.stringify(formData);
            console.log(jsonData);
        }
    }
}

// event listener 
const profileForm = document.getElementById('profileForm');
profileForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    showConfirmation(); 
});