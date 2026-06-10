// =========================
// Input Validation
// =========================

function validateInputs(distance, ac, goal) {

    if (isNaN(distance) || isNaN(ac)) {
        return "Please enter valid numbers.";
    }

    if (distance < 0 || ac < 0) {
        return "Values cannot be negative.";
    }

    if (distance > 1000) {
        return "Distance must be below 1000 km.";
    }

    if (ac > 24) {
        return "AC usage cannot exceed 24 hours per day.";
    }

    if (goal < 0) {
        return "Goal cannot be negative.";
    }

    return null;
}

// =========================
// Main Calculator
// =========================

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

    // Validation

    const error =
        validateInputs(distance, ac, goal);

    if (error) {

        alert(error);

        return;
    }

    let carbonScore = 0;

    let recommendations = [];

    // =========================
    // Transportation Impact
    // =========================

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

    // =========================
    // AC Impact
    // =========================

    const acImpact = ac * 3;

    carbonScore += acImpact;

    if (ac > 6) {

        recommendations.push(
            "Reduce AC usage by 1-2 hours daily."
        );
    }

    // =========================
    // Diet Impact
    // =========================

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

    // =========================
    // Round Score
    // =========================

    carbonScore =
        Number(carbonScore.toFixed(1));

    // =========================
    // Eco Rating
    // =========================

    let rating = "";

    if (carbonScore < 40) {

        rating = "🌟 Eco Friendly";

    } else if (carbonScore < 80) {

        rating = "⚠️ Moderate Impact";

    } else {

        rating = "🚨 High Impact";
    }

    // =========================
    // Top Contributor
    // =========================

    let contributor = "Transportation";

    let highestImpact = transportImpact;

    if (acImpact > highestImpact) {

        contributor = "Electricity Usage";

        highestImpact = acImpact;
    }

    if (dietImpact > highestImpact) {

        contributor = "Diet";
    }

    // =========================
    // Goal Tracking
    // =========================

    let goalMessage = "";

    let progressPercentage = 0;

    if (goal > 0) {

        progressPercentage =
            Math.min(
                (goal / carbonScore) * 100,
                100
            );

        if (carbonScore <= goal) {

            progressPercentage = 100;

            goalMessage =
                "🎉 Congratulations! Goal achieved.";

        } else {

            goalMessage =
                `Reduce ${(carbonScore - goal).toFixed(1)} more points to reach your goal.`;
        }
    }

    // =========================
    // Default Recommendation
    // =========================

    if (recommendations.length === 0) {

        recommendations.push(
            "Great job! Keep maintaining your eco-friendly lifestyle."
        );
    }

    // =========================
    // Safe Local Storage
    // =========================

    let history = [];

    try {

        history =
            JSON.parse(
                localStorage.getItem("carbonHistory")
            ) || [];

    } catch {

        history = [];
    }

    history.push({

        date:
            new Date().toLocaleDateString(),

        score:
            carbonScore
    });

    // Keep only latest 20 entries

    if (history.length > 20) {

        history.shift();
    }

    localStorage.setItem(
        "carbonHistory",
        JSON.stringify(history)
    );

    // =========================
    // History Dashboard
    // =========================

    const historyHTML =

        history
            .slice(-5)
            .reverse()
            .map(item =>

                `<li>${item.date} — ${item.score}</li>`

            )
            .join("");

    // =========================
    // Display Results
    // =========================

    document.getElementById("result").innerHTML = `

        <h3>📊 Results</h3>

        <p>
            <strong>Carbon Score:</strong>
            ${carbonScore}
        </p>

        <p>
            <strong>Eco Rating:</strong>
            ${rating}
        </p>

        <p>
            <strong>Top Contributor:</strong>
            ${contributor}
        </p>

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

        <div class="history-box">

            <h4>📅 Recent History</h4>

            <ul>

                ${historyHTML}

            </ul>

        </div>
    `;

    updateChart();
}

// =========================
// Chart Function
// =========================

function updateChart() {

    let history = [];

    try {

        history =
            JSON.parse(
                localStorage.getItem("carbonHistory")
            ) || [];

    } catch {

        history = [];
    }

    const canvas =
        document.getElementById("carbonChart");

    if (!canvas) return;

    const ctx =
        canvas.getContext("2d");

    // Destroy previous chart

    if (window.carbonChartInstance) {

        window.carbonChartInstance.destroy();
    }

    // Empty state

    if (history.length === 0) {

        window.carbonChartInstance =
            new Chart(ctx, {

                type: "line",

                data: {

                    labels: ["No Data"],

                    datasets: [

                        {
                            label: "Carbon Score Trend",

                            data: [0],

                            borderColor: "#34D399",

                            backgroundColor:
                                "rgba(52,211,153,0.15)",

                            fill: true,

                            tension: 0.4
                        }
                    ]
                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false
                }
            });

        return;
    }

    const labels =
        history.map(item => item.date);

    const scores =
        history.map(item => item.score);

    window.carbonChartInstance =
        new Chart(ctx, {

            type: "line",

            data: {

                labels: labels,

                datasets: [

                    {

                        label:
                            "Carbon Score Trend",

                        data:
                            scores,

                        borderColor:
                            "#34D399",

                        backgroundColor:
                            "rgba(52,211,153,0.2)",

                        fill: true,

                        tension: 0.4,

                        pointRadius: 5,

                        pointHoverRadius: 7,

                        borderWidth: 3
                    }
                ]
            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                animation: {

                    duration: 1200
                },

                plugins: {

                    legend: {

                        labels: {

                            color: "#FFFFFF"
                        }
                    },

                    tooltip: {

                        enabled: true
                    }
                },

                scales: {

                    x: {

                        ticks: {

                            color: "#B8D8C0"
                        },

                        grid: {

                            color:
                                "rgba(255,255,255,0.08)"
                        }
                    },

                    y: {

                        beginAtZero: true,

                        ticks: {

                            color: "#B8D8C0"
                        },

                        grid: {

                            color:
                                "rgba(255,255,255,0.08)"
                        }
                    }
                }
            }
        });
}
// =========================
// Load Existing History
// =========================

window.onload = function () {

    updateChart();
};