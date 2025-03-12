document.addEventListener('DOMContentLoaded', function() {
    // Crop data with optimal growing conditions
    const cropData = [
        {
            name: "Apple",
            nitrogen: 20.80,
            phosphorus: 134.22,
            potassium: 199.89,
            temperature: 22.63,
            humidity: 92.33,
            pH: 5.93,
            rainfall: 112.65
        },
        {
            name: "Banana",
            nitrogen: 100.23,
            phosphorus: 82.01,
            potassium: 50.05,
            temperature: 27.38,
            humidity: 80.36,
            pH: 5.98,
            rainfall: 104.63
        },
        {
            name: "Coconut",
            nitrogen: 21.98,
            phosphorus: 16.93,
            potassium: 30.59,
            temperature: 27.41,
            humidity: 94.84,
            pH: 5.98,
            rainfall: 175.69
        },
        {
            name: "Coffee",
            nitrogen: 101.20,
            phosphorus: 28.74,
            potassium: 29.94,
            temperature: 25.54,
            humidity: 58.87,
            pH: 6.81,
            rainfall: 158.07
        },
        {
            name: "Cotton",
            nitrogen: 117.77,
            phosphorus: 46.24,
            potassium: 19.56,
            temperature: 23.99,
            humidity: 79.84,
            pH: 6.92,
            rainfall: 80.09
        },
        {
            name: "Grapes",
            nitrogen: 23.18,
            phosphorus: 132.53,
            potassium: 200.11,
            temperature: 23.87,
            humidity: 81.87,
            pH: 6.25,
            rainfall: 69.91
        },
        {
            name: "Maize",
            nitrogen: 77.76,
            phosphorus: 48.44,
            potassium: 19.79,
            temperature: 22.61,
            humidity: 65.92,
            pH: 6.26,
            rainfall: 84.76
        },
        {
            name: "Mango",
            nitrogen: 20.07,
            phosphorus: 27.18,
            potassium: 29.92,
            temperature: 31.90,
            humidity: 50.05,
            pH: 5.77,
            rainfall: 94.99
        },
        {
            name: "Orange",
            nitrogen: 19.58,
            phosphorus: 16.55,
            potassium: 10.01,
            temperature: 22.77,
            humidity: 92.50,
            pH: 7.01,
            rainfall: 110.41
        },
        {
            name: "Rice",
            nitrogen: 79.89,
            phosphorus: 47.58,
            potassium: 39.87,
            temperature: 23.69,
            humidity: 82.27,
            pH: 6.43,
            rainfall: 236.18
        }
    ];

    // Get references to DOM elements
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');
    const cropForm = document.getElementById('cropForm');
    const resultContainer = document.getElementById('result-container');
    
    // Mobile menu toggle
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            menuBtn.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        });
    }
    
    // Hide mobile menu on scroll
    window.addEventListener('scroll', function() {
        if (menuBtn) {
            menuBtn.classList.remove('fa-times');
            navbar.classList.remove('active');
        }
    });

    // Populate the reference table
    function populateReferenceTable() {
        const tableBody = document.querySelector('#crop-table tbody');
        tableBody.innerHTML = ''; // Clear existing content
        
        cropData.forEach(crop => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${crop.name}</td>
                <td>${crop.nitrogen}</td>
                <td>${crop.phosphorus}</td>
                <td>${crop.potassium}</td>
                <td>${crop.temperature}</td>
                <td>${crop.humidity}</td>
                <td>${crop.pH}</td>
                <td>${crop.rainfall}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Calculate similarity score between input values and crop requirements
    function calculateSimilarity(input, crop) {
        const weights = {
            nitrogen: 0.15,
            phosphorus: 0.15,
            potassium: 0.15,
            temperature: 0.15,
            humidity: 0.15,
            pH: 0.15,
            rainfall: 0.1
        };

        // Define maximum differences for normalization
        const maxDiff = {
            nitrogen: 140,
            phosphorus: 140,
            potassium: 200,
            temperature: 40,
            humidity: 100,
            pH: 14,
            rainfall: 300
        };

        let similarity = 0;
        let totalWeight = 0;

        for (const [key, weight] of Object.entries(weights)) {
            // Validate input values
            if (isNaN(input[key]) || isNaN(crop[key.toLowerCase()])) {
                continue;
            }

            const diff = Math.abs(input[key] - crop[key.toLowerCase()]);
            // Ensure the difference is not greater than the max difference
            const normalizedDiff = Math.min(1, Math.max(0, 1 - (diff / maxDiff[key])));
            similarity += normalizedDiff * weight;
            totalWeight += weight;
        }

        // If no valid comparisons were made, return 0
        if (totalWeight === 0) {
            return 0;
        }

        // Normalize the final similarity score
        return similarity / totalWeight;
    }

    // Get crop recommendations based on input values
    function getCropRecommendations(input) {
        const similarities = cropData.map(crop => ({
            ...crop,
            similarity: calculateSimilarity(input, crop)
        }));

        return similarities
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, 3);
    }

    // Display recommendations
    function displayRecommendations(recommendations) {
        const container = document.getElementById('recommendations');
        container.innerHTML = `
            <div class="recommendations-header">
                <h3>Recommended Crops</h3>
                <p class="recommendations-subtitle">Based on your soil parameters and environmental conditions</p>
            </div>
        `;

        recommendations.forEach((rec, index) => {
            const recDiv = document.createElement('div');
            recDiv.className = 'crop-recommendation';
            
            // Calculate the color based on suitability score
            const score = rec.similarity * 100;
            let scoreClass = '';
            if (score >= 80) scoreClass = 'excellent-score';
            else if (score >= 60) scoreClass = 'good-score';
            else if (score >= 40) scoreClass = 'moderate-score';
            else scoreClass = 'poor-score';

            recDiv.innerHTML = `
                <div class="recommendation-header">
                    <div class="crop-rank">#${index + 1}</div>
                    <h4 class="crop-name">${rec.name}</h4>
                    <div class="suitability-score ${scoreClass}">
                        ${score.toFixed(1)}% Suitable
                    </div>
                </div>
                
                <div class="recommendation-details">
                    <div class="optimal-conditions">
                        <h5>Optimal Growing Conditions</h5>
                        <div class="conditions-grid">
                            <div class="condition-item">
                                <span class="condition-label">Nitrogen:</span>
                                <span class="condition-value">${rec.nitrogen} kg/ha</span>
                            </div>
                            <div class="condition-item">
                                <span class="condition-label">Phosphorus:</span>
                                <span class="condition-value">${rec.phosphorus} kg/ha</span>
                            </div>
                            <div class="condition-item">
                                <span class="condition-label">Potassium:</span>
                                <span class="condition-value">${rec.potassium} kg/ha</span>
                            </div>
                            <div class="condition-item">
                                <span class="condition-label">Temperature:</span>
                                <span class="condition-value">${rec.temperature}°C</span>
                            </div>
                            <div class="condition-item">
                                <span class="condition-label">Humidity:</span>
                                <span class="condition-value">${rec.humidity}%</span>
                            </div>
                            <div class="condition-item">
                                <span class="condition-label">pH Level:</span>
                                <span class="condition-value">${rec.pH}</span>
                            </div>
                            <div class="condition-item">
                                <span class="condition-label">Rainfall:</span>
                                <span class="condition-value">${rec.rainfall} mm</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(recDiv);
        });

        resultContainer.style.display = 'block';
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // Handle form submission
    if (cropForm) {
        cropForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const input = {
                nitrogen: parseFloat(document.getElementById('nitrogen').value),
                phosphorus: parseFloat(document.getElementById('phosphorus').value),
                potassium: parseFloat(document.getElementById('potassium').value),
                temperature: parseFloat(document.getElementById('temperature').value),
                humidity: parseFloat(document.getElementById('humidity').value),
                pH: parseFloat(document.getElementById('ph').value),
                rainfall: parseFloat(document.getElementById('rainfall').value)
            };
            
            const recommendations = getCropRecommendations(input);
            displayRecommendations(recommendations);
        });
    }

    // Initialize the reference table
    populateReferenceTable();
}); 