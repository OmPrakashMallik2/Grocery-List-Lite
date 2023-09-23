// Initialize count
let count = 1;

function addRow() {
    // Get the input values
    let text = document.getElementById("text").value;
    let text2 = document.getElementById("text2").value;

    // Get the table body
    let tableBody = document.querySelector("#table tbody");

    // Create a new row
    let newRow = tableBody.insertRow();

    // Insert cells into the new row
    let cel1 = newRow.insertCell(0);
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);
    let cel4 = newRow.insertCell(3);

    // Populate cells with data
    cel1.textContent = count++;
    cel2.textContent = text;
    cel3.textContent = text2;
    cel4.innerHTML =
        '<button onclick="deleteRow(this)">x</button><button>y</button>';

    // Clear input fields
    document.getElementById("text").value = "";
    document.getElementById("text2").value = "";
}

function deleteRow(button) {
    // Get the row containing the button
    let row = button.parentElement.parentElement;

    // Get the table body
    let tableBody = document.querySelector("#table tbody");

    // Remove the row from the table
    tableBody.removeChild(row);

    // Update the "S. N." column for all remaining rows
    let rows = tableBody.querySelectorAll("tr");
    for (let i = 0; i < rows.length; i++) {
        let snCell = rows[i].cells[0];
        snCell.textContent = i + 1;
    }
}