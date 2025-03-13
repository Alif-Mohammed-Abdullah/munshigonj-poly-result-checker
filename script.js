function searchResult() {
    const roll = document.getElementById('rollInput').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (!roll) {
        resultDiv.innerHTML = '<p>Please enter a roll number!</p>';
        return;
    }

    const rollNum = parseInt(roll);
    if (rollNum < 651081 || rollNum > 651330) {
        resultDiv.innerHTML = '<p>Roll number must be between 651081 and 651330!</p>';
        return;
    }

    const student = results[roll];
    if (student) {
        let html = `<h3>Result for Roll: ${roll}</h3>`;
        html += `<p>Status: <span class="${student.status}">${student.status.toUpperCase()}</span></p>`;
        html += '<p>Semester-wise GPA:</p><ul>';
        for (let sem in student.gpa) {
            html += `<li>Semester ${sem}: ${student.gpa[sem]}</li>`;
        }
        html += '</ul>';
        if (student.referred_subjects) {
            html += `<p>Referred Subjects: ${student.referred_subjects.join(', ')}</p>`;
        }
        resultDiv.innerHTML = html;
    } else {
        resultDiv.innerHTML = '<p>No result found for this roll number yet! Contact Munshigonj Polytechnic Institute for details.</p>';
    }
}