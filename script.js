function calculateFootprint() {

    const transport =
        document.getElementById("transport").value;

    const distance =
        Number(document.getElementById("distance").value);

    const ac =
        Number(document.getElementById("ac").value);

    const diet =
        document.getElementById("diet").value;

    const goal =
        Number(document.getElementById("goal").value);

    let carbonScore = 0;
    let recommendations = [];

    // Transportation Impact

    let transportImpact = 0;

    if (transport === "car") {

        transportImpact = distance * 2;
        carbonScore += transportImpact;

        recommendations.push(
            "Use public transport or carpool twice a week."
        );

    } else if (transport === "bus") {

        transportImpact = distance * 1;
        carbonScore += transportImpact;

    } else if (transport === "metro") {

        transportImpact = distance * 0.5;
        carbonScore += transportImpact;

    } else {

        transportImpact = 0;
    }

    // AC Impact

    const acImpact = ac * 3;

    carbonScore += acImpact;

    if (ac > 6) {

        recommendations.push(
            "Reduce AC usage by 1-2 hours daily."
        );
    }

    // Diet Impact

    let dietImpact = 0;

    if (diet === "meat") {

        dietImpact = 20;
        carbonScore += dietImpact;

        recommendations.push(
            "Try one vegetarian meal day each week."
        );

    } else if (diet === "mixed") {

        dietImpact = 10;
        carbonScore += dietImpact;
    }

    // Eco Rating

    let rating = "";

    if (carbonScore < 40) {

        rating = "🌟 Eco Friendly";

    } else if (carbonScore < 80) {

        rating = "⚠️ Moderate Impact";

    } else {

        rating = "🚨 High Impact";
    }

    // Top Contributor

    let contributor = "Transportation";
    let highestImpact = transportImpact;

    if (acImpact > highestImpact) {

        contributor = "Electricity Usage";
        highestImpact = acImpact;
    }

    if (dietImpact > highestImpact) {

        contributor = "Diet";
    }

    // Goal Tracking

    let goalMessage = "";
    let progressPercentage = 0;

    if (goal > 0) {

        progressPercentage =
            Math.min((goal / carbonScore) * 100, 100);

        if (carbonScore <= goal) {

            goalMessage =
                "🎉 Congratulations! Goal achieved.";

            progressPercentage = 100;

        } else {

            goalMessage =
                `Reduce ${(carbonScore - goal).toFixed(1)} more points to reach your goal.`;
        }
    }

    // Default Recommendation

    if (recommendations.length === 0) {

        recommendations.push(
            "Great job! Keep maintaining your eco-friendly lifestyle."
        );
    }

    // Save History

    let history =
        JSON.parse(localStorage.getItem("carbonHistory")) || [];

    history.push({
        date: new Date().toLocaleDateString(),
        score: carbonScore
    });

    localStorage.setItem(
        "carbonHistory",
        JSON.stringify(history)
    );

    // Generate History Dashboard

    const historyHTML =
        history
            .slice(-5)
            .reverse()
            .map(item =>
                `<li>${item.date} — ${item.score.toFixed(1)}</li>`
            )
            .join("");

    // Display Results

    document.getElementById("result").innerHTML = `

        <h3>📊 Results</h3>

        <p><strong>Carbon Score:</strong>
        ${carbonScore.toFixed(1)}</p>

        <p><strong>Eco Rating:</strong>
        ${rating}</p>

        <p><strong>Top Contributor:</strong>
        ${contributor}</p>

        ${goal > 0 ? `

        <div class="goal-container">

            <h4>🎯 Goal Progress</h4>

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    style="width:${progressPercentage}%">
                </div>

            </div>

            <p>${goalMessage}</p>

        </div>

        ` : ""}

        <h4>💡 Recommendations</h4>

        <ul>

            ${recommendations
                .map(tip =>
                    `<li>${tip}</li>`
                )
                .join("")}

        </ul>

        <h4>📅 Recent History</h4>

        <ul>

            ${historyHTML}

        </ul>
    `;

    updateChart();
}

// Chart Function

function updateChart() {

    const history =
        JSON.parse(
            localStorage.getItem("carbonHistory")
        ) || [];

    const labels =
        history.map(item => item.date);

    const scores =
        history.map(item => item.score);

    const canvas =
        document.getElementById("carbonChart");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (window.carbonChartInstance) {

        window.carbonChartInstance.destroy();
    }

    window.carbonChartInstance =
        new Chart(ctx, {

            type: "line",

            data: {

                labels: labels,

                datasets: [{

                    label: "Carbon Score Trend",

                    data: scores,

                    borderColor: "#2e7d32",

                    backgroundColor:
                        "rgba(46,125,50,0.2)",

                    fill: true,

                    tension: 0.4
                }]
            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        display: true
                    }
                },

                scales: {

                    y: {

                        beginAtZero: true
                    }
                }
            }
        });
}

// Load Chart on Startup

window.onload = function () {

    updateChart();
};