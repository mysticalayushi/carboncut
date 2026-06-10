# 🧪 CarbonCut Testing Report

## Test Case 1 – Eco Friendly User

### Input

* Transport: Bike
* Distance: 10 km
* AC Usage: 1 hour
* Diet: Vegetarian

### Expected Result

* Eco Rating: 🌟 Eco Friendly
* Low Carbon Score

### Status

✅ Pass

---

## Test Case 2 – Moderate Impact User

### Input

* Transport: Bus
* Distance: 20 km
* AC Usage: 4 hours
* Diet: Mixed

### Expected Result

* Eco Rating: ⚠️ Moderate Impact
* Transportation and AC contribute to score

### Status

✅ Pass

---

## Test Case 3 – High Impact User

### Input

* Transport: Car
* Distance: 30 km
* AC Usage: 8 hours
* Diet: Meat Heavy

### Expected Result

* Eco Rating: 🚨 High Impact
* Top Contributor: Transportation or Electricity Usage
* Multiple recommendations generated

### Status

✅ Pass

---

## Test Case 4 – Goal Achieved

### Input

* Carbon Score: 35
* Goal: 50

### Expected Result

* Goal Progress: 100%
* Message: "🎉 Congratulations! Goal achieved."

### Status

✅ Pass

---

## Test Case 5 – Goal Not Achieved

### Input

* Carbon Score: 75
* Goal: 50

### Expected Result

* Progress displayed
* User receives reduction target message

### Status

✅ Pass

---

## Test Case 6 – History Tracking

### Input

* Perform multiple calculations

### Expected Result

* Scores stored in Local Storage
* Recent History section updates correctly

### Status

✅ Pass

---

## Test Case 7 – Chart Visualization

### Input

* Generate 5+ carbon score entries

### Expected Result

* Carbon Trend Chart displays historical scores
* Chart updates after every calculation

### Status

✅ Pass

---

## Test Case 8 – Negative Value Validation

### Input

* Distance = -10
* AC Usage = -2

### Expected Result

* Validation error displayed
* Calculation prevented

### Status

✅ Pass

---

## Test Case 9 – Large Input Validation

### Input

* Distance = 5000 km

### Expected Result

* User warned about unrealistic values
* Application remains stable

### Status

✅ Pass

---

## Test Case 10 – Responsive Layout

### Input

* Open application on desktop and mobile screen sizes

### Expected Result

* Dashboard remains usable
* Layout adjusts correctly using responsive design

### Status

✅ Pass

---

# Testing Summary

| Area Tested               | Status |
| ------------------------- | ------ |
| Carbon Calculation Logic  | ✅      |
| Eco Rating Classification | ✅      |
| Recommendation Engine     | ✅      |
| Goal Tracking             | ✅      |
| Local Storage             | ✅      |
| Chart Visualization       | ✅      |
| Input Validation          | ✅      |
| Responsive Design         | ✅      |

## Conclusion

All major CarbonCut functionalities were tested successfully. The application correctly calculates carbon footprint scores, generates personalized recommendations, tracks user progress, stores historical data, and visualizes trends through interactive charts while maintaining usability across different screen sizes.
