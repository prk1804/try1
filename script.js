document.getElementById('tracker-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const cycleLength = parseInt(document.getElementById('cycle-length').value);
    const lastPeriodDate = new Date(document.getElementById('last-period-date').value);

    if (!cycleLength || isNaN(lastPeriodDate.getTime())) {
        alert("Please fill in both fields with valid information.");
        return;
    }

    // Calculate the next period date
    let nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(lastPeriodDate.getDate() + cycleLength);

    // Format the next period date to display
    const nextPeriodFormatted = nextPeriodDate.toLocaleDateString();

    // Display next period date
    document.getElementById('next-period').textContent = `Your next period will start on: ${nextPeriodFormatted}`;
});
