function calculateFootprint() {

    const transport =
        document.getElementById("transport").value;

    const distance =
        Number(document.getElementById("distance").value);

    const ac =
        Number(document.getElementById("ac").value);

    const diet =
        document.getElementById("diet").value;

    let carbonScore = 0;
    let recommendations = [];

    // Transport Impact

    if (transport === "car") {
        carbonScore += distance * 2;
        recommendations.push(
            "Use public transport or carpool twice a week."
        );
    }

    else if (transport === "bus") {
        carbonScore += distance * 1;
    }

    else if (transport === "metro") {
        carbonScore += distance * 0.5;
    }

    else {
        carbonScore += 0;
    }

    // AC Impact

    carbonScore += ac * 3;

    if (ac > 6) {
        recommendations.push(
            "Reduce AC usage by 1-2 hours daily."
        );
    }

    // Diet Impact

    if (diet === "meat") {
        carbonScore += 20;

        recommendations.push(
            "Try one vegetarian meal day each week."
        );
    }

    else if (diet === "mixed") {
        carbonScore += 10;
    }

    // Eco Rating

    let rating = "";

    if (carbonScore < 40) {
        rating = "🌟 Eco Friendly";
    }

    else if (carbonScore < 80) {
        rating = "⚠ Moderate Impact";
    }

    else {
        rating = "🚨 High Impact";
    }

    // Biggest Contributor

    let contributor = "";

    if (transport === "car") {
        contributor = "Transportation";
    }
    else if (ac > 6) {
        contributor = "Electricity Usage";
    }
    else {
        contributor = "Diet";
    }

    document.getElementById("result").innerHTML = `
        <h3>Results</h3>

        <p><strong>Carbon Score:</strong> ${carbonScore.toFixed(1)}</p>

        <p><strong>Eco Rating:</strong> ${rating}</p>

        <p><strong>Top Contributor:</strong> ${contributor}</p>

        <h4>Recommendations</h4>

        <ul>
            ${recommendations
                .map(tip => `<li>${tip}</li>`)
                .join("")}
        </ul>
    `;
}