document.addEventListener('DOMContentLoaded', function() {
    // Crop nutrient requirements data
    const cropData = [
        {
            name: "Apple",
            nitrogen: 20.80,
            phosphorus: 134.22,
            potassium: 199.89
        },
        {
            name: "Banana",
            nitrogen: 100.23,
            phosphorus: 82.01,
            potassium: 50.05
        },
        {
            name: "Coconut",
            nitrogen: 21.98,
            phosphorus: 16.93,
            potassium: 30.59
        },
        {
            name: "Coffee",
            nitrogen: 101.20,
            phosphorus: 28.74,
            potassium: 29.94
        },
        {
            name: "Cotton",
            nitrogen: 117.77,
            phosphorus: 46.24,
            potassium: 19.56
        },
        {
            name: "Grapes",
            nitrogen: 23.18,
            phosphorus: 132.53,
            potassium: 200.11
        },
        {
            name: "Maize",
            nitrogen: 77.76,
            phosphorus: 48.44,
            potassium: 19.79
        },
        {
            name: "Mango",
            nitrogen: 20.07,
            phosphorus: 27.18,
            potassium: 29.92
        },
        {
            name: "Orange",
            nitrogen: 19.58,
            phosphorus: 16.55,
            potassium: 10.01
        },
        {
            name: "Rice",
            nitrogen: 79.89,
            phosphorus: 47.58,
            potassium: 39.87
        }
    ];

    // Get references to DOM elements
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.navbar');
    const fertilizerForm = document.getElementById('fertilizerForm');
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
    function populateNutrientTable() {
        const tableBody = document.querySelector('#nutrient-table tbody');
        tableBody.innerHTML = ''; // Clear existing content
        
        cropData.forEach(crop => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${crop.name}</td>
                <td>${crop.nitrogen}</td>
                <td>${crop.phosphorus}</td>
                <td>${crop.potassium}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Calculate fertilizer requirements
    function calculateFertilizerNeeds(currentLevels, cropType) {
        const crop = cropData.find(c => c.name === cropType);
        if (!crop) return null;

        const requirements = {
            nitrogen: Math.max(0, crop.nitrogen - currentLevels.nitrogen),
            phosphorus: Math.max(0, crop.phosphorus - currentLevels.phosphorus),
            potassium: Math.max(0, crop.potassium - currentLevels.potassium)
        };

        return {
            requirements,
            recommendations: generateRecommendations(requirements)
        };
    }

    // Generate specific fertilizer recommendations
    function generateRecommendations(requirements) {
        const recommendations = [];

        if (requirements.nitrogen > 0) {
            recommendations.push({
                nutrient: 'Nitrogen',
                deficit: requirements.nitrogen.toFixed(2),
                fertilizers: [
                    `Urea (${(requirements.nitrogen * 2.17).toFixed(2)} kg/ha)`,
                    `Ammonium Sulfate (${(requirements.nitrogen * 5).toFixed(2)} kg/ha)`,
                    `Ammonium Nitrate (${(requirements.nitrogen * 2.9).toFixed(2)} kg/ha)`
                ]
            });
        }

        if (requirements.phosphorus > 0) {
            recommendations.push({
                nutrient: 'Phosphorus',
                deficit: requirements.phosphorus.toFixed(2),
                fertilizers: [
                    `Single Superphosphate (${(requirements.phosphorus * 6.25).toFixed(2)} kg/ha)`,
                    `Triple Superphosphate (${(requirements.phosphorus * 2.17).toFixed(2)} kg/ha)`,
                    `Diammonium Phosphate (${(requirements.phosphorus * 5).toFixed(2)} kg/ha)`
                ]
            });
        }

        if (requirements.potassium > 0) {
            recommendations.push({
                nutrient: 'Potassium',
                deficit: requirements.potassium.toFixed(2),
                fertilizers: [
                    `Potassium Chloride (${(requirements.potassium * 1.67).toFixed(2)} kg/ha)`,
                    `Potassium Sulfate (${(requirements.potassium * 2).toFixed(2)} kg/ha)`,
                    `NPK 15-15-15 (${(requirements.potassium * 6.67).toFixed(2)} kg/ha)`
                ]
            });
        }

        return recommendations;
    }

    // Display recommendations
    function displayRecommendations(results) {
        const container = document.getElementById('recommendations');
        container.innerHTML = `
            <div class="recommendations-header">
                <h3>Fertilizer Recommendations</h3>
                <p class="recommendations-subtitle">Based on your soil nutrient levels</p>
            </div>
        `;

        if (results.recommendations.length === 0) {
            container.innerHTML += `
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <p>Soil nutrient levels are adequate for the selected crop.</p>
                </div>
            `;
            return;
        }

        const recommendationsDiv = document.createElement('div');
        recommendationsDiv.className = 'fertilizer-recommendations';

        results.recommendations.forEach(rec => {
            // Determine status class based on deficit
            const deficitLevel = parseFloat(rec.deficit);
            let statusClass = '';
            if (deficitLevel > 100) statusClass = 'high-deficit';
            else if (deficitLevel > 50) statusClass = 'medium-deficit';
            else statusClass = 'low-deficit';

            const recDiv = document.createElement('div');
            recDiv.className = 'fertilizer-recommendation';
            recDiv.innerHTML = `
                <div class="nutrient-header ${statusClass}">
                    <h4>${rec.nutrient}</h4>
                    <div class="deficit-badge">
                        Deficit: ${rec.deficit} kg/ha
                    </div>
                </div>
                
                <div class="fertilizer-options">
                    <h5>Recommended Applications</h5>
                    <div class="options-grid">
                        ${rec.fertilizers.map(fertilizer => `
                            <div class="fertilizer-option">
                                <i class="fas fa-flask"></i>
                                <span>${fertilizer}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="application-notes">
                    <h5>Application Guidelines</h5>
                    <ul>
                        <li>Apply fertilizers in the early morning or late evening</li>
                        <li>Ensure soil is moist before application</li>
                        <li>Incorporate into soil when possible</li>
                    </ul>
                </div>
            `;
            recommendationsDiv.appendChild(recDiv);
        });

        container.appendChild(recommendationsDiv);
    }

    // Handle form submission
    if (fertilizerForm) {
        fertilizerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const currentLevels = {
                nitrogen: parseFloat(document.getElementById('nitrogen').value),
                phosphorus: parseFloat(document.getElementById('phosphorus').value),
                potassium: parseFloat(document.getElementById('potassium').value)
            };

            const cropType = document.getElementById('cropType').value;
            const results = calculateFertilizerNeeds(currentLevels, cropType);
            
            if (results) {
                displayRecommendations(results);
                resultContainer.style.display = 'block';
                resultContainer.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Initialize the reference table
    populateNutrientTable();
}); 