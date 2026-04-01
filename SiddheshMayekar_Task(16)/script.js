// Array of student objects
const students = [
    { name: "Rahul Sharma", marks: 85, class: "10th", address: "Mumbai" },
    { name: "Priya Singh", marks: 90, class: "9th", address: "Delhi" },
    { name: "Amit Patel", marks: 78, class: "10th", address: "Ahmedabad" },
    { name: "Sneha Joshi", marks: 88, class: "8th", address: "Pune" },
    { name: "Karan Mehta", marks: 72, class: "9th", address: "Surat" }
];

// Function to display students
function displayStudents(data) {
    const container = document.getElementById("studentContainer");

    let result = data.map(function (student) {
        return `
                    <div class="card">
                        <p><b>Name:</b> ${student.name}</p>
                        <p><b>Marks:</b> ${student.marks}</p>
                        <p><b>Class:</b> ${student.class}</p>
                        <p><b>Address:</b> ${student.address}</p>
                    </div>
                `;
    });

    container.innerHTML = result.join("");
}

// Search function
function searchStudent() {
    const input = document.getElementById("searchBox").value.toLowerCase();

    const filtered = students.filter(function (student) {
        return student.name.toLowerCase().includes(input);
    });

    displayStudents(filtered);
}

// Initial display
displayStudents(students);