# 🌱 CarbonCut

<div align="center">

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Completed-22C55E?style=for-the-badge)

### A Smart Carbon Footprint Awareness Platform

Helping users understand, track, and reduce their carbon footprint through personalized insights and actionable recommendations.

### 🚀 Live Demo

🌍 https://carboncut.netlify.app/

</div>

---

# 📌 Project Overview

Climate change is one of the most pressing challenges of our time, yet many people are unaware of how their everyday habits contribute to carbon emissions.

**CarbonCut** is a lightweight web application designed to help individuals estimate their carbon footprint based on transportation habits, energy consumption, and dietary choices. The platform analyzes user inputs and provides personalized recommendations that encourage more sustainable lifestyle decisions.

The goal of CarbonCut is to make environmental awareness simple, interactive, and actionable.

---

# 🎯 Chosen Vertical

**Carbon Footprint Awareness Platform**

CarbonCut focuses on helping individuals understand their environmental impact by estimating their carbon footprint through everyday activities.

The platform empowers users to:

- Understand their carbon footprint
- Identify major contributors to emissions
- Receive personalized recommendations
- Make informed sustainability decisions
- Adopt environmentally responsible habits

---

# 📌 Assumptions Made

- Carbon impact values are simplified estimates and are intended for awareness purposes.
- Users provide accurate information regarding transportation, energy usage, and dietary habits.
- Transportation, AC usage, and diet are treated as the primary contributors to an individual's carbon footprint within the scope of this project.
- Recommendations are generated using rule-based logic rather than real-time environmental datasets.
- The application serves as an educational sustainability tool and not as an official carbon accounting system.

---


# 🧠 Approach and Logic

CarbonCut follows a **rule-based decision-making approach**.

The application collects information about:

- Transportation habits
- Daily travel distance
- Air conditioner usage
- Dietary preferences

Each activity is assigned a relative environmental impact score. These scores are combined to estimate the user's carbon footprint.

The system then:

1. Calculates a carbon footprint score.
2. Determines an Eco Rating.
3. Identifies the primary contributor to emissions.
4. Generates personalized recommendations based on the user's lifestyle choices.

The recommendation engine adapts its suggestions according to user inputs, ensuring that different users receive different sustainability advice.

---

# 🚀 Features

## 🌍 Carbon Footprint Estimation

Users provide:

* Daily transportation method
* Travel distance
* Air conditioner usage
* Dietary habits

The system calculates a carbon footprint score based on the provided information.

---

## 📊 Eco Rating System

Based on the calculated score, users are classified into:

* 🌟 Eco Friendly
* ⚠️ Moderate Impact
* 🚨 High Impact

This provides a quick understanding of their environmental impact.

---

## 🤖 Personalized Recommendations

Recommendations are dynamically generated based on user behavior.

Examples include:

* Use public transportation more often
* Reduce AC usage
* Introduce vegetarian meals into your routine
* Consider eco-friendly travel alternatives

---

## 🎯 Top Contributor Analysis

CarbonCut identifies the largest contributor to the user's carbon footprint, helping users focus on the areas where they can make the greatest impact.

---

## 📅 Monthly Carbon Tracking

Every carbon footprint calculation is automatically saved using browser Local Storage.

Users can:

* Track previous carbon scores
* Monitor progress over time
* Review recent sustainability performance

---

## 📈 Carbon Score Trend Dashboard

CarbonCut visualizes historical carbon scores using interactive charts powered by Chart.js.

This helps users:

* Identify trends in their environmental impact
* Monitor improvements over time
* Understand the effectiveness of lifestyle changes

---

## 🎯 Carbon Reduction Goals

Users can set a target carbon score and track progress toward achieving it.

Features include:

* Goal setting
* Goal achievement tracking
* Progress visualization through an animated progress bar

---

## 💾 Local Storage Support

CarbonCut stores user history directly in the browser.

Benefits include:

* Persistent tracking across sessions
* No database required
* Lightweight and privacy-friendly experience

---

# ⚙️ How the Solution Works

### Step 1: User Input

The user enters:

* Transportation method
* Daily travel distance
* AC usage hours
* Diet preference
* Target carbon score (optional)

### Step 2: Carbon Footprint Calculation

The system processes the inputs using predefined environmental impact rules and calculates a carbon footprint score.

### Step 3: Impact Assessment

Based on the calculated score, the user is categorized into one of the following groups:

* 🌟 Eco Friendly
* ⚠️ Moderate Impact
* 🚨 High Impact

### Step 4: Contributor Analysis

The application identifies which factor contributes most to the user's carbon footprint.

### Step 5: Recommendation Generation

Personalized recommendations are generated to help reduce emissions.

### Step 6: Goal Progress Tracking

If a goal is provided, CarbonCut evaluates progress and displays a visual progress bar.

### Step 7: History & Analytics

The carbon score is saved locally and displayed in:

* Recent History Dashboard
* Carbon Trend Chart

### Step 8: Result Display

The user receives:

* Carbon Score
* Eco Rating
* Top Contributor Analysis
* Personalized Recommendations
* Goal Progress
* Historical Tracking Data

---

# 🧪 Testing & Quality Assurance

CarbonCut was thoroughly tested to ensure accuracy, reliability, security, accessibility, and responsiveness across different usage scenarios.

## Functional Testing

The following core functionalities were validated:

* Carbon footprint calculation accuracy
* Eco Rating classification logic
* Personalized recommendation generation
* Top contributor identification
* Goal progress tracking
* Historical data storage and retrieval
* Carbon trend chart rendering and updates

## Input Validation Testing

To improve reliability and prevent invalid calculations, CarbonCut validates user inputs before processing.

Tested scenarios include:

* Negative distance values
* Negative AC usage values
* Non-numeric inputs
* Excessively large travel distances
* AC usage exceeding realistic daily limits
* Invalid goal values

All invalid inputs are rejected with appropriate user feedback.

## Boundary Testing

The application was tested against edge-case values to ensure stable behavior.

| Scenario            | Result |
| ------------------- | ------ |
| Distance = 0 km     | ✅ Pass |
| Distance = 1000 km  | ✅ Pass |
| AC Usage = 0 hours  | ✅ Pass |
| AC Usage = 24 hours | ✅ Pass |
| Goal = 0            | ✅ Pass |

## Data Persistence Testing

CarbonCut uses Local Storage to maintain user history.

Verified functionality:

* Saving carbon score history
* Retrieving previous calculations
* Updating historical records
* Limiting stored entries for performance optimization

Status: ✅ Pass

## Chart & Analytics Testing

The Carbon Score Trend Chart was tested to ensure:

* Correct data plotting
* Dynamic updates after calculations
* Historical trend visualization
* Stable rendering across multiple entries

Status: ✅ Pass

## Accessibility Testing

Accessibility improvements were implemented and verified:

* Proper form labels
* Keyboard navigation support
* Visible focus indicators
* Semantic HTML structure
* Responsive design for different screen sizes
* Improved color contrast for readability

Status: ✅ Pass

## Security Testing

CarbonCut includes basic client-side security measures:

* Input sanitization through validation
* Safe numeric parsing
* Local Storage error handling
* Prevention of invalid calculations
* Controlled data persistence

Status: ✅ Pass

## Responsive Design Testing

The application was tested across multiple viewport sizes:

| Device Type | Status |
| ----------- | ------ |
| Desktop     | ✅ Pass |
| Tablet      | ✅ Pass |
| Mobile      | ✅ Pass |

The dashboard automatically adapts between landscape and stacked layouts for optimal usability.

## Browser Compatibility

Tested on modern browsers:

* Google Chrome ✅
* Microsoft Edge ✅
* Mozilla Firefox ✅

## Testing Summary

| Area                     | Status |
| ------------------------ | ------ |
| Carbon Calculation Logic | ✅      |
| Recommendation Engine    | ✅      |
| Goal Tracking            | ✅      |
| History Tracking         | ✅      |
| Chart Visualization      | ✅      |
| Input Validation         | ✅      |
| Accessibility            | ✅      |
| Security                 | ✅      |
| Responsive Design        | ✅      |
| Browser Compatibility    | ✅      |


### Conclusion

CarbonCut successfully passed functional, validation, security, accessibility, and responsiveness testing. The platform reliably calculates carbon footprint scores, provides personalized sustainability insights, tracks user progress, visualizes trends, and maintains a consistent user experience across devices and browsers.


# 🌍 Real-World Applications

CarbonCut can be used for:

* Environmental awareness campaigns
* Sustainability education programs
* Personal carbon tracking
* Community sustainability initiatives
* Corporate ESG awareness workshops
* Carbon reduction challenges
* Eco-friendly habit tracking

---

# 🎯 Challenge Requirements Covered

| Requirement                    | Status |
| ------------------------------ | ------ |
| Smart Dynamic Assistant        | ✅      |
| Context-Based Decision Making  | ✅      |
| Personalized Insights          | ✅      |
| Carbon Tracking                | ✅      |
| Goal Monitoring                | ✅      |
| Data Visualization             | ✅      |
| Practical Real-World Usability | ✅      |
| Clean & Maintainable Code      | ✅      |

---

# 🔮 Future Improvements

* [ ] AI-powered sustainability coaching
* [ ] Household energy monitoring
* [ ] Weekly and monthly sustainability reports
* [ ] Carbon footprint comparison analytics
* [ ] User accounts and cloud storage
* [ ] Community challenges and leaderboards
* [ ] Advanced emission calculation models
* [ ] Mobile-responsive dashboard enhancements

---

# 👩‍💻 Author

**Ayushi Rai**

GitHub: https://github.com/mysticalayushi

Project Repository: https://github.com/mysticalayushi/carboncut

---

<div align="center">

## 🌱 Small Lifestyle Changes Can Create a Big Environmental Impact

CarbonCut empowers users to make environmentally conscious decisions through awareness, insight, and action.

⭐ If you found this project useful, consider starring the repository.

</div>