document.addEventListener("DOMContentLoaded", function () {
  const cropData = [
    {
      name: "Apple",
      nitrogen: "20.80",
      phosphorus: "134.22",
      potassium: "199.89",
      temperature: "22.63",
      humidity: "92.33",
      pH: "5.93",
      rainfall: "112.65",
    },
    {
      name: "Banana",
      nitrogen: "100.23",
      phosphorus: "82.01",
      potassium: "50.05",
      temperature: "27.38",
      humidity: "80.36",
      pH: "5.98",
      rainfall: "104.63",
    },
    {
      name: "Coconut",
      nitrogen: "21.98",
      phosphorus: "16.93",
      potassium: "30.59",
      temperature: "27.41",
      humidity: "94.84",
      pH: "5.98",
      rainfall: "175.69",
    },
    {
      name: "Coffee",
      nitrogen: "101.20",
      phosphorus: "28.74",
      potassium: "29.94",
      temperature: "25.54",
      humidity: "58.87",
      pH: "6.81",
      rainfall: "158.07",
    },
    {
      name: "Cotton",
      nitrogen: "117.77",
      phosphorus: "46.24",
      potassium: "19.56",
      temperature: "23.99",
      humidity: "79.84",
      pH: "6.92",
      rainfall: "80.09",
    },
    {
      name: "Grapes",
      nitrogen: "23.18",
      phosphorus: "132.53",
      potassium: "200.11",
      temperature: "23.87",
      humidity: "81.87",
      pH: "6.25",
      rainfall: "69.91",
    },
    {
      name: "Maize",
      nitrogen: "77.76",
      phosphorus: "48.44",
      potassium: "19.79",
      temperature: "22.61",
      humidity: "65.92",
      pH: "6.26",
      rainfall: "84.76",
    },
    {
      name: "Mango",
      nitrogen: "20.07",
      phosphorus: "27.18",
      potassium: "29.92",
      temperature: "31.90",
      humidity: "50.05",
      pH: "5.77",
      rainfall: "94.99",
    },
    {
      name: "Orange",
      nitrogen: "19.58",
      phosphorus: "16.55",
      potassium: "10.01",
      temperature: "22.77",
      humidity: "92.50",
      pH: "7.01",
      rainfall: "110.41",
    },
    {
      name: "Rice",
      nitrogen: "79.89",
      phosphorus: "47.58",
      potassium: "39.87",
      temperature: "23.69",
      humidity: "82.27",
      pH: "6.43",
      rainfall: "236.18",
    },
  ];

  const tableBody = document
    .getElementById("crop-table")
    .getElementsByTagName("tbody")[0];
  cropData.forEach((crop) => {
    let row = tableBody.insertRow();
    Object.values(crop).forEach((text) => {
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(text));
    });
  });
});

function toggleDropdown() {
  document.getElementById("dropdownContent").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function showCrop(crop) {
  const cropInfo = document.getElementById("cropInfo");
  let content = "";

  if (crop === "rice") {
    content = `
            <h2>Rice Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Rice: Rice (Oryza sativa) is a staple food crop in many parts of the world. This guide covers the complete process of cultivating rice from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, certified rice seeds.</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, potassium fertilizers.</li>
                <li><strong>Irrigation System:</strong> Flooding or controlled water supply setup.</li>
                <li><strong>Machinery:</strong> Tractors, transplanting machines (optional), sickles for manual harvesting.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides specific to common rice pests and weeds.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Rice grows best in clay or clay-loam soils with good water-holding capacity. The ideal soil pH is 5.5 to 6.5. Apply lime if pH adjustment is needed. Till the soil to break up large clods and smooth the field.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Select high-yielding, pest-resistant seed varieties. Treat seeds with fungicides or insecticides to protect against pests.</p>
            
            <h4>Field Preparation:</h4>
            <p>Level the field to ensure uniform water distribution. Prepare bunds (raised edges) around the field to retain water.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Rice is generally planted at the onset of the rainy season, around May to June, depending on the region.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Transplant seedlings at 20 x 15 cm spacing if using the transplanting method. For direct seeding, sow seeds about 2-3 cm deep.</p>
            
            <h4>Seeding Methods:</h4>
            <ul>
                <li><strong>Direct Seeding:</strong> Broadcasting seeds in the field or in rows.</li>
                <li><strong>Transplanting:</strong> Sow seeds in a nursery bed; transplant seedlings to the main field after 20-30 days.</li>
            </ul>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Maintain 5-10 cm of standing water in the field during most growth stages. Reduce water level during the grain ripening stage.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply basal fertilizer with phosphorus and potassium at planting. Apply nitrogen in split doses: one-third during planting, one-third during tillering, and one-third during panicle initiation.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds with manual weeding, herbicides, or a combination of both. Perform the first weeding about 15-20 days after transplanting, followed by a second weeding after 40 days.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Watch for common pests like stem borers, leafhoppers, and planthoppers. Use appropriate pesticides and integrated pest management (IPM) practices to control pests and diseases like bacterial blight and rice blast.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect seedlings from pests and diseases in the nursery.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Ensure consistent water levels to promote healthy tillering and root development.</p>
            
            <h4>Flowering and Fruiting:</h4>
            <p>Maintain water levels and apply final fertilizer doses for optimal grain filling.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest when grains turn golden-yellow, and about 80-90% of the grains in the panicle are mature.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, manually harvest using sickles. For larger areas, use mechanical harvesters for efficiency.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Allow the rice grains to dry to a moisture content of about 14% to prevent spoilage. Thresh and winnow to separate grains from husks and impurities.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store rice grains in a cool, dry place with good ventilation. Ensure moisture levels are below 14% to prevent mold and spoilage.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Consider milling to remove the husk and bran layer, if required.</p>
            
            <h4>Packaging:</h4>
            <p>Pack rice in air-tight bags to retain freshness and prevent pest infestations.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Adverse weather conditions, pest outbreaks, water scarcity.</p>
            
            <h4>Solutions:</h4>
            <p>Implement IPM for pests, monitor water levels carefully, and diversify crop varieties to withstand climate variations.</p>
        `;
  }

  if (crop === "maize") {
    content = `
            <h2>Maize Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Maize: Maize (Zea mays), also known as corn, is a key cereal crop widely cultivated for its grains. This guide covers the complete process for cultivating maize from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, certified maize seeds (e.g., hybrid or improved open-pollinated varieties).</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, potassium fertilizers.</li>
                <li><strong>Machinery:</strong> Tractor or hand tools for field preparation and planting.</li>
                <li><strong>Pest Control:</strong> Herbicides and insecticides specific to common maize pests and weeds.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or furrow irrigation, if rainwater is insufficient.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Maize thrives in well-drained loam soils with a pH of 5.8 to 7.0. Prepare the soil by tilling to break up clods and improve aeration.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Choose high-yielding, drought-resistant, or pest-resistant seed varieties. Treat seeds with fungicides or insecticides to protect against soil-borne diseases and pests.</p>
            
            <h4>Field Preparation:</h4>
            <p>Level the field for uniform water distribution. Use row spacing and layout that will optimize sunlight exposure for all plants.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Maize is usually planted at the beginning of the rainy season; timing may vary by region but typically falls between April and June.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Plant seeds at 20-25 cm within rows and 60-75 cm between rows. Sow seeds about 2-5 cm deep, depending on soil type.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Direct Seeding: Plant seeds directly in the field, either manually or with seed planters for larger fields.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Maize requires regular watering, especially during the silking and tasseling stages. Use irrigation if rain is insufficient, particularly during dry spells.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply basal fertilizer with phosphorus and potassium at planting. Apply nitrogen in split doses: one-third during planting, one-third during early growth, and one-third at tasseling.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds with manual weeding, hoeing, or pre- and post-emergence herbicides. Conduct the first weeding about 15-20 days after planting, followed by another at 30-40 days.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Watch for common pests like maize borers, armyworms, and aphids. Use pesticides and integrated pest management (IPM) practices to control pests and diseases like leaf blight and rust.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect seedlings from pests and drought.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Apply nitrogen-rich fertilizer to promote leaf growth and vigor.</p>
            
            <h4>Silking and Tasseling Stage:</h4>
            <p>Ensure adequate moisture and provide pest protection as plants reach reproductive stages.</p>
            
            <h4>Grain-Filling Stage:</h4>
            <p>Maintain moisture levels and prevent pest infestations to support healthy kernel development.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest when the maize ears are fully mature and the husks are dry, typically when kernels have a moisture content of 20-25%.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, manually harvest by handpicking ears. For large-scale operations, use combine harvesters for efficiency.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Dry the maize to a moisture content of about 13-14% to prevent spoilage. Shell and clean the grains before storage.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store maize grains in a cool, dry place with good ventilation to avoid mold and insect infestations.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Consider drying and milling processes if further processing is required.</p>
            
            <h4>Packaging:</h4>
            <p>Use airtight bags or containers to maintain quality and prevent pest access.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Weather variability, pest and disease pressures, water scarcity.</p>
            
            <h4>Solutions:</h4>
            <p>Implement IPM practices for pest control, monitor soil moisture, and plant climate-resilient varieties.</p>
        `;
  }

  if (crop === "cotton") {
    content = `
            <h2>Cotton Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Cotton: Cotton is a major fiber crop valued for its soft, fluffy fibers used in textiles. This guide covers the complete process for cultivating cotton from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, certified cotton seeds (e.g., Bt cotton or other pest-resistant varieties).</li>
                <li><strong>Fertilizers:</strong> Nitrogen, phosphorus, potassium, and micronutrient fertilizers.</li>
                <li><strong>Irrigation System:</strong> Drip or furrow irrigation for dry regions.</li>
                <li><strong>Pest Control:</strong> Herbicides and pesticides specific to common cotton pests.</li>
                <li><strong>Tools:</strong> Plows or tractors for field preparation, and sprayers for pest control.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Cotton grows best in well-drained sandy-loam soils with a pH of 6.0 to 7.5. Prepare the field by deep plowing, followed by harrowing to break clods and smooth the surface.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Choose high-yielding, pest-resistant seed varieties. Treat seeds with fungicides or insecticides to protect against soil-borne diseases and early pest infestations.</p>
            
            <h4>Field Preparation:</h4>
            <p>Create furrows or beds for planting, depending on irrigation method. Ensure good drainage to prevent waterlogging, which cotton is sensitive to.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Cotton is typically planted in spring, from March to May, depending on the region and temperature.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Plant seeds 3-5 cm deep, with a spacing of 75-100 cm between rows and 25-30 cm between plants.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Direct Seeding: Plant seeds directly into prepared furrows or beds using seed drills or by hand.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Cotton requires consistent moisture, especially during the flowering and boll formation stages. Use drip or furrow irrigation to maintain adequate soil moisture, particularly during dry spells.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply basal fertilizer with phosphorus and potassium at planting. Apply nitrogen in split doses: one-third at planting, one-third during vegetative growth, and one-third at flowering.</p>
            
            <h4>Weed Control:</h4>
            <p>Use manual weeding, hoeing, or herbicides to control weeds, particularly during early growth stages. Perform weeding about 20-30 days after planting and again if necessary at 45 days.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for common pests like bollworms, aphids, and whiteflies. Use integrated pest management (IPM) practices, including biological controls, to minimize pesticide use.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect seedlings from drought and pests to promote healthy establishment.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Ensure adequate nitrogen for leaf growth and develop a robust root system.</p>
            
            <h4>Flowering and Boll Formation Stage:</h4>
            <p>Monitor closely for pests, maintain moisture, and provide nutrient support to maximize fiber quality and yield.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Harvest cotton when the bolls are fully open and the fibers are fluffy, typically 150-180 days after planting.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>For small farms, harvest manually by picking mature bolls by hand. For large farms, use cotton-picking machines to harvest efficiently.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Allow harvested cotton to dry in a shaded, ventilated area. Clean and gin the cotton to separate seeds from fiber.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store cotton fibers in a dry, well-ventilated place to avoid moisture-related damage and contamination.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Consider ginning for further fiber processing if needed.</p>
            
            <h4>Packaging:</h4>
            <p>Pack cotton in bales for storage and transport to maintain quality.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Issues with pest infestations, water availability, and soil nutrient depletion.</p>
            
            <h4>Solutions:</h4>
            <p>Use drought-resistant varieties, implement efficient irrigation, and follow IPM practices to manage pests.</p>
        `;
  }

  if (crop === "coconut") {
    content = `
            <h2>Coconut Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Coconut: The coconut palm (Cocos nucifera) is widely cultivated for its fruit, which provides oil, milk, and fiber. This guide covers the complete process for cultivating coconuts from seed selection to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Seeds:</strong> High-quality, disease-resistant coconut seedlings (dwarf or tall varieties).</li>
                <li><strong>Fertilizers:</strong> Organic manure, nitrogen, phosphorus, potassium, and micronutrients.</li>
                <li><strong>Irrigation System:</strong> Drip or basin irrigation, especially for dry regions.</li>
                <li><strong>Pest Control:</strong> Pesticides or biocontrol agents specific to common coconut pests.</li>
                <li><strong>Tools:</strong> Hand tools or mechanical equipment for soil preparation, planting, and weeding.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Coconut palms grow best in well-drained sandy loam soils with a pH of 5.5 to 7.5. Ensure proper drainage to prevent waterlogging, which can harm coconut roots. Dig planting pits (1 x 1 x 1 m) and fill with a mixture of soil, compost, and organic manure for better root establishment.</p>
            
            <h4>Seed Selection and Treatment:</h4>
            <p>Select disease-resistant, high-yielding coconut seedlings. Dwarf varieties are preferable for easy harvesting, while tall varieties are generally more drought-resistant.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the field of weeds and debris. Space the pits according to the planting layout and ensure that they are well-drained.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>Coconut is typically planted at the onset of the rainy season to reduce watering needs, though it can be planted year-round in irrigated areas.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>For tall varieties, maintain 7.5 to 9 meters between palms; for dwarf varieties, keep 6.5 to 7 meters. Plant seedlings in prepared pits so that the roots are well covered.</p>
            
            <h4>Seeding Methods:</h4>
            <p>Place the coconut seedling in the center of the pit, ensuring that the collar of the plant is just above ground level.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Water regularly during the first three years of growth, especially in dry seasons. Mature coconut palms are relatively drought-resistant but benefit from regular watering for higher yields.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a balanced fertilizer three times a year (nitrogen, phosphorus, and potassium), along with micronutrients like magnesium and boron. Incorporate organic compost or manure annually to improve soil health.</p>
            
            <h4>Weed Control:</h4>
            <p>Keep the area around the palm weed-free, particularly during the early growth stages. Mulching with organic material helps control weeds and retain soil moisture.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for common pests like rhinoceros beetles, red palm weevils, and scale insects. Use pesticides as needed or biological control methods to minimize pest damage. Diseases such as root wilt and bud rot can be managed with preventive fungicides and by removing affected fronds.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Ensure adequate water and nutrients to promote strong root and leaf development.</p>
            
            <h4>Juvenile Stage:</h4>
            <p>Encourage growth with regular fertilization and weed control.</p>
            
            <h4>Mature Stage:</h4>
            <p>Maintain proper irrigation and pest management to maximize nut yield.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Coconuts reach maturity about 12 months after flowering. Harvest mature nuts when the outer husk turns brown. Harvesting can be done every 45-60 days in high-yield varieties.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Harvest coconuts manually with climbing tools or mechanical lifters for tall trees.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Dehusk the coconuts and dry them if needed, depending on the purpose (e.g., for copra or oil production).</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store coconuts in a dry, well-ventilated area to prevent moisture buildup and mold.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>Copra (dried coconut) can be prepared by drying the coconut flesh in the sun or with mechanical dryers.</p>
            
            <h4>Packaging:</h4>
            <p>Pack dried coconuts in bags or crates for transportation to prevent damage.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Drought, pest infestations, soil nutrient depletion.</p>
            
            <h4>Solutions:</h4>
            <p>Use drip irrigation, implement integrated pest management, and maintain soil fertility with organic amendments.</p>
        `;
  }

  if (crop === "banana") {
    content = `
            <h2>Banana Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Bananas: Bananas (Musa spp.) are tropical fruits renowned for their sweet flavor and nutritional benefits. They thrive in warm, humid climates and are cultivated worldwide for both commercial and home production. This guide outlines the complete process for cultivating bananas, from planting to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Planting Material:</strong> Healthy banana suckers or tissue-cultured plantlets.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers with nitrogen, phosphorus, and potassium; organic matter such as compost.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or sprinkler irrigation systems for adequate moisture management.</li>
                <li><strong>Pest Control:</strong> Insecticides and fungicides to manage pests and diseases.</li>
                <li><strong>Tools:</strong> Hand tools (shovels, pruners) or tractors for planting, maintenance, and harvesting.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Bananas prefer well-drained, rich loamy soils with a pH of 5.5 to 7.0. Prepare the soil by plowing and incorporating organic matter to improve fertility and drainage.</p>
            
            <h4>Sucker/Plantlet Selection and Treatment:</h4>
            <p>Select disease-free suckers from healthy parent plants or obtain tissue-cultured plantlets from a reputable source. If using suckers, cut them from the parent plant with a clean knife to avoid contamination.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the planting site of weeds, stones, and debris to ensure a clean environment for planting.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>The ideal time to plant bananas is at the beginning of the rainy season or during the warmer months.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space plants 8-10 feet apart in rows that are 10-12 feet apart to allow for proper growth and air circulation. Plant suckers or plantlets at the same depth they were growing in the nursery.</p>
            
            <h4>Seeding/Transplanting Methods:</h4>
            <p>Transplanting: Dig a hole large enough to accommodate the roots and backfill gently to avoid air pockets.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Bananas require consistent moisture; irrigate regularly, especially during dry spells. Aim for 1-2 inches of water per week.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a balanced fertilizer in early spring and again mid-season. Add compost or organic mulch to enhance soil fertility.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds using mulching, which also helps retain soil moisture, and manual weeding to reduce competition for nutrients.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as banana weevils and aphids. Manage diseases like Panama disease and leaf spot with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and the use of biological pest control methods.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young plants from extreme weather and pests; consider using shade cloth if necessary.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Regularly check for nutrient deficiencies, especially potassium and magnesium, and address them promptly.</p>
            
            <h4>Flowering and Fruit Development Stage:</h4>
            <p>Ensure adequate water supply during flowering and fruit development to support healthy fruit formation.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Bananas are typically ready for harvest 9-12 months after planting, depending on the variety and growing conditions. Harvest when the fruit is plump, green, and the angle between the fruit and the stalk becomes more pronounced.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Use a sharp knife or machete to cut the entire bunch from the plant. Handle the fruit carefully to avoid bruising.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Remove any excess leaves and handle harvested bananas gently to prevent damage. Store them in a cool, shaded area.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store bananas at room temperature until they ripen. Avoid exposure to direct sunlight or excessive heat.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>If needed, bananas can be processed into products like banana chips or puree.</p>
            
            <h4>Packaging:</h4>
            <p>Pack bananas in breathable boxes to allow for airflow and reduce spoilage during transport.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Common challenges include susceptibility to pests and diseases, environmental stresses, and improper watering.</p>
            
            <h4>Solutions:</h4>
            <p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>
        `;
  }

  if (crop === "mango") {
    content = `
            <h2>Mango Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Mangoes: Mangoes (Mangifera indica) are tropical stone fruits known for their sweet and juicy flavor. They are often referred to as the "king of fruits" and are cultivated in many tropical and subtropical regions worldwide. This guide outlines the complete process for cultivating mangoes, from planting to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Planting Material:</strong> Healthy mango grafts or seedlings from reputable nurseries.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers with nitrogen, phosphorus, and potassium; organic matter such as compost.</li>
                <li><strong>Irrigation Equipment:</strong> Drip or sprinkler irrigation systems to manage soil moisture.</li>
                <li><strong>Pest Control:</strong> Insecticides and fungicides to manage pests and diseases effectively.</li>
                <li><strong>Tools:</strong> Hand tools (shovels, pruners) or tractors for planting, maintenance, and harvesting.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Mangoes prefer well-drained, sandy loam or loamy soils with a pH of 5.5 to 7.5. Prepare the soil by plowing and mixing in organic matter to enhance drainage and fertility.</p>
            
            <h4>Graft/Seedling Selection and Treatment:</h4>
            <p>Select disease-free and high-yielding varieties suitable for your local climate. If using seeds, soak them in water for 24 hours before planting to improve germination rates.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the planting site of weeds, stones, and debris to ensure a clean environment for planting.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>The ideal time to plant mangoes is at the beginning of the rainy season or during the warmer months.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space mango trees 25-30 feet apart to allow for adequate growth and air circulation. Plant grafts or seedlings at the same depth they were growing in the nursery.</p>
            
            <h4>Seeding/Transplanting Methods:</h4>
            <p>Transplanting: Dig a hole larger than the root ball and backfill gently to avoid air pockets.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Mangoes require regular watering during the establishment phase. Once established, they are drought-tolerant but benefit from supplemental irrigation during dry spells, especially during flowering and fruit development.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a balanced fertilizer in early spring and again mid-season. Add compost or organic mulch to enhance soil fertility.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds through mulching and manual weeding to reduce competition for nutrients and moisture.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as mango weevils, aphids, and fruit flies. Manage diseases like anthracnose and powdery mildew with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including the use of natural predators and organic pesticides as necessary.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Seedling Stage:</h4>
            <p>Protect young plants from extreme weather and pests; consider using shade cloth if necessary.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Regularly check for nutrient deficiencies and address them promptly. Prune young trees to encourage a strong structure.</p>
            
            <h4>Flowering and Fruit Development Stage:</h4>
            <p>Ensure consistent moisture during flowering and fruit set to maximize yield and fruit quality.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Mangoes are typically ready for harvest 3-6 months after flowering, depending on the variety. They should be harvested when they are fully colored, firm, and have a sweet aroma.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Use a sharp knife or pruning shears to cut the fruit from the stem, leaving a small portion of the stem attached to the fruit.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Handle harvested mangoes gently to avoid bruising and store them in a cool, shaded area.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store mangoes at room temperature until they ripen. Once ripe, they can be refrigerated to extend shelf life.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>If needed, mangoes can be processed into products like mango puree, jams, or dried fruit.</p>
            
            <h4>Packaging:</h4>
            <p>Pack mangoes in breathable containers to help maintain their quality during storage and transport.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Common challenges include susceptibility to pests and diseases, environmental stresses such as drought, and improper watering practices.</p>
            
            <h4>Solutions:</h4>
            <p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>
        `;
  }

  if (crop === "grapes") {
    content = `
            <h2>Grape Cultivation</h2>
            <h3>1. Introduction</h3>
            <p>Overview of Grapes: Grapes (Vitis vinifera and other species) are versatile fruits used for fresh eating, drying (raisins), and wine production. They thrive in temperate climates and require specific growing conditions to produce high-quality fruit. This guide outlines the complete process for cultivating grapes, from planting to harvesting.</p>
            
            <h3>2. Materials and Resources Required</h3>
            <ul>
                <li><strong>Planting Material:</strong> Quality grapevines, either bare-root or potted, from reputable nurseries.</li>
                <li><strong>Fertilizers:</strong> Balanced fertilizers containing nitrogen, phosphorus, and potassium; organic compost.</li>
                <li><strong>Irrigation Equipment:</strong> Drip irrigation systems for efficient moisture management.</li>
                <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
                <li><strong>Tools:</strong> Hand tools (pruners, shovels) or tractors for planting, maintenance, and harvesting.</li>
            </ul>
            
            <h3>3. Preparation Steps</h3>
            <h4>Soil Preparation:</h4>
            <p>Grapes prefer well-drained, sandy loam or clay loam soils with a pH of 6.0 to 6.8. Prepare the soil by tilling and incorporating organic matter to enhance fertility and drainage.</p>
            
            <h4>Vine Selection and Treatment:</h4>
            <p>Select disease-resistant grape varieties suitable for your climate and purpose (table grapes, wine grapes, etc.). Inspect vines for signs of disease or damage before planting.</p>
            
            <h4>Field Preparation:</h4>
            <p>Clear the planting site of weeds, stones, and debris to ensure a clean environment for planting.</p>
            
            <h3>4. Planting Procedure</h3>
            <h4>Planting Time:</h4>
            <p>The ideal time to plant grapes is in early spring after the last frost or in the fall before the ground freezes.</p>
            
            <h4>Spacing and Depth:</h4>
            <p>Space vines 6-10 feet apart in rows that are 8-10 feet apart to allow for proper air circulation and growth. Plant vines at the same depth they were growing in the nursery.</p>
            
            <h4>Seeding/Transplanting Methods:</h4>
            <p>Transplanting: Dig a hole large enough to accommodate the roots, backfill gently, and water thoroughly after planting.</p>
            
            <h3>5. Growth Stages and Care</h3>
            <h4>Watering Requirements:</h4>
            <p>Grapes require regular watering during the first year to establish roots. Once established, they are drought-tolerant but still benefit from supplemental irrigation during dry spells, especially during fruit development.</p>
            
            <h4>Nutrient Management:</h4>
            <p>Apply a balanced fertilizer in early spring and again mid-season. Use organic compost to improve soil health.</p>
            
            <h4>Weed Control:</h4>
            <p>Control weeds through mulching, hand weeding, or the use of herbicides to reduce competition for nutrients and moisture.</p>
            
            <h4>Pest and Disease Management:</h4>
            <p>Monitor for pests such as grapevine moths, aphids, and spider mites. Manage diseases like powdery mildew and downy mildew with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and natural predators.</p>
            
            <h3>6. Special Care During Growth Stages</h3>
            <h4>Young Vine Stage:</h4>
            <p>Protect young vines from extreme weather and pests; use support stakes or trellises to help young plants grow upward.</p>
            
            <h4>Vegetative Stage:</h4>
            <p>Regularly check for nutrient deficiencies and address them promptly. Prune to encourage a strong structure and air circulation.</p>
            
            <h4>Flowering and Fruit Development Stage:</h4>
            <p>Ensure consistent moisture during flowering and fruit set to maximize yield and fruit quality. Thin clusters if necessary to promote larger fruit size.</p>
            
            <h3>7. Harvesting Process</h3>
            <h4>Optimal Harvest Time:</h4>
            <p>Grapes are typically ready for harvest 4-6 months after flowering, depending on the variety. They should be harvested when fully ripe, showing deep color and sweet flavor.</p>
            
            <h4>Harvesting Techniques:</h4>
            <p>Use sharp pruning shears to cut clusters from the vine. Handle the fruit carefully to avoid bruising.</p>
            
            <h4>Post-Harvest Handling:</h4>
            <p>Remove any damaged or rotten grapes and store them in a cool, shaded area.</p>
            
            <h3>8. Post-Harvest Management and Storage</h3>
            <h4>Storage Conditions:</h4>
            <p>Store grapes in a cool, dry place. Refrigeration can extend their shelf life, but they should be kept in breathable containers.</p>
            
            <h4>Processing (if applicable):</h4>
            <p>If needed, grapes can be processed into products like grape juice, jelly, or wine.</p>
            
            <h4>Packaging:</h4>
            <p>Pack grapes in breathable containers to allow airflow and reduce spoilage during transport.</p>
            
            <h3>9. Challenges and Solutions</h3>
            <h4>Challenges:</h4>
            <p>Common challenges include susceptibility to pests and diseases, climate-related issues, and improper watering practices.</p>
            
            <h4>Solutions:</h4>
            <p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>
        `;
  }

  if (crop === "apple") {
    content = `

    <h2>Apple Cultivation</h2>

<h3>1. Introduction</h3>
<p>Overview of Apples: Apples (Malus domestica) are one of the most popular fruits worldwide, appreciated for their taste, versatility, and nutritional value. They grow best in temperate climates and can be cultivated in various soil types. This guide outlines the complete process for cultivating apples, from planting to harvesting.</p>

<h3>2. Materials and Resources Required</h3>
<ul>
    <li><strong>Planting Material:</strong> Quality apple tree seedlings or grafted varieties from reputable nurseries.</li>
    <li><strong>Fertilizers:</strong> Balanced fertilizers containing nitrogen, phosphorus, and potassium; organic compost.</li>
    <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses for effective moisture management.</li>
    <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
    <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoes) or tractors for planting, maintenance, and harvesting.</li>
</ul>

<h3>3. Preparation Steps</h3>
<h4>Soil Preparation:</h4>
<p>Apples prefer well-drained, loamy soils with a pH of 6.0 to 7.0. Prepare the soil by tilling and incorporating organic matter to improve fertility and drainage.</p>

<h4>Tree Selection and Treatment:</h4>
<p>Choose disease-resistant apple varieties suited to your climate, considering factors such as fruit flavor and harvest time. Inspect seedlings for signs of disease or damage before planting.</p>

<h4>Field Preparation:</h4>
<p>Clear the planting area of weeds, stones, and debris to ensure a clean environment for planting.</p>

<h3>4. Planting Procedure</h3>
<h4>Planting Time:</h4>
<p>The best time to plant apple trees is in the fall or early spring when the trees are dormant.</p>

<h4>Spacing and Depth:</h4>
<p>Space dwarf varieties 4-6 feet apart and standard varieties 10-15 feet apart to allow for proper growth and air circulation. Plant trees at a depth that matches their nursery height, ensuring the graft union is above soil level.</p>

<h4>Seeding/Transplanting Methods:</h4>
<p>Transplanting: Dig a hole large enough to accommodate the roots, place the tree in the hole, backfill gently, and water thoroughly after planting.</p>

<h3>5. Growth Stages and Care</h3>
<h4>Watering Requirements:</h4>
<p>Water young apple trees regularly to establish roots, especially during dry spells. Once established, they are drought-tolerant but benefit from deep watering during fruit development.</p>

<h4>Nutrient Management:</h4>
<p>Apply a balanced fertilizer in early spring and again in mid-season. Use organic compost to enhance soil health.</p>

<h4>Weed Control:</h4>
<p>Control weeds through mulching, which helps retain moisture and suppress weed growth, and manual weeding to reduce competition.</p>

<h4>Pest and Disease Management:</h4>
<p>Monitor for pests such as codling moths, aphids, and spider mites. Manage diseases like apple scab and powdery mildew with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and the use of beneficial insects.</p>

<h3>6. Special Care During Growth Stages</h3>
<h4>Young Tree Stage:</h4>
<p>Protect young trees from extreme weather and pests; consider using tree guards to prevent animal damage.</p>

<h4>Vegetative Stage:</h4>
<p>Regularly check for nutrient deficiencies and address them promptly. Prune to shape trees and encourage a strong structure.</p>

<h4>Flowering and Fruit Development Stage:</h4>
<p>Ensure consistent moisture during flowering and fruit set to maximize yield and fruit quality. Thin fruit if necessary to promote larger apples.</p>

<h3>7. Harvesting Process</h3>
<h4>Optimal Harvest Time:</h4>
<p>Apples are typically ready for harvest 4-6 months after flowering, depending on the variety. Indicators include a change in color, firm texture, and ease of detachment from the tree.</p>

<h4>Harvesting Techniques:</h4>
<p>Use sharp pruning shears to cut apples from the tree, leaving a short stem attached to the fruit.</p>

<h4>Post-Harvest Handling:</h4>
<p>Handle harvested apples gently to avoid bruising. Store them in a cool, shaded area.</p>

<h3>8. Post-Harvest Management and Storage</h3>
<h4>Storage Conditions:</h4>
<p>Store apples in a cool, dark place. They can be refrigerated to extend their shelf life.</p>

<h4>Processing (if applicable):</h4>
<p>If needed, apples can be processed into applesauce, cider, or dried slices.</p>

<h4>Packaging:</h4>
<p>Pack apples in breathable containers to help maintain quality during storage and transport.</p>

<h3>9. Challenges and Solutions</h3>
<h4>Challenges:</h4>
<p>Common challenges include susceptibility to pests and diseases, environmental stresses (such as drought or frost), and improper pruning techniques.</p>

<h4>Solutions:</h4>
<p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>

`;
  }

  if (crop === "orange") {
    content = `
  <h2>Orange Cultivation</h2>

<h3>1. Introduction</h3>
<p>Overview of Oranges: Oranges (Citrus sinensis) are one of the most popular citrus fruits, valued for their sweet, juicy flesh and high vitamin C content. They thrive in warm, subtropical to tropical climates. This guide outlines the complete process for cultivating oranges, from planting to harvesting.</p>

<h3>2. Materials and Resources Required</h3>
<ul>
    <li><strong>Planting Material:</strong> Quality orange tree seedlings or grafted varieties from reputable nurseries.</li>
    <li><strong>Fertilizers:</strong> Citrus-specific fertilizers containing nitrogen, phosphorus, and potassium; organic compost.</li>
    <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses for efficient moisture management.</li>
    <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
    <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoes) or tractors for planting, maintenance, and harvesting.</li>
</ul>

<h3>3. Preparation Steps</h3>
<h4>Soil Preparation:</h4>
<p>Oranges prefer well-drained, sandy loam or clay loam soils with a pH of 6.0 to 7.5. Prepare the soil by tilling and incorporating organic matter to improve fertility and drainage.</p>

<h4>Tree Selection and Treatment:</h4>
<p>Choose disease-resistant varieties suited to your climate, considering factors such as fruit flavor and harvest time. Inspect seedlings for signs of disease or damage before planting.</p>

<h4>Field Preparation:</h4>
<p>Clear the planting area of weeds, stones, and debris to ensure a clean environment for planting.</p>

<h3>4. Planting Procedure</h3>
<h4>Planting Time:</h4>
<p>The best time to plant orange trees is in the spring after the danger of frost has passed.</p>

<h4>Spacing and Depth:</h4>
<p>Space trees 12-25 feet apart, depending on the rootstock and tree variety, to allow for proper growth and air circulation. Plant trees at a depth that matches their nursery height, ensuring the graft union is above soil level.</p>

<h4>Seeding/Transplanting Methods:</h4>
<p>Transplanting: Dig a hole large enough to accommodate the roots, place the tree in the hole, backfill gently, and water thoroughly after planting.</p>

<h3>5. Growth Stages and Care</h3>
<h4>Watering Requirements:</h4>
<p>Water young orange trees regularly to establish roots, especially during dry spells. Mature trees require deep watering during dry periods.</p>

<h4>Nutrient Management:</h4>
<p>Apply a citrus-specific fertilizer in early spring and again in mid-season. Use organic compost to enhance soil health.</p>

<h4>Weed Control:</h4>
<p>Control weeds through mulching, which helps retain moisture and suppress weed growth, and manual weeding to reduce competition.</p>

<h4>Pest and Disease Management:</h4>
<p>Monitor for pests such as aphids, spider mites, and citrus leaf miners. Manage diseases like citrus canker and root rot with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and the use of beneficial insects.</p>

<h3>6. Special Care During Growth Stages</h3>
<h4>Young Tree Stage:</h4>
<p>Protect young trees from extreme weather and pests; consider using tree guards to prevent animal damage.</p>

<h4>Vegetative Stage:</h4>
<p>Regularly check for nutrient deficiencies and address them promptly. Prune to shape trees and encourage a strong structure.</p>

<h4>Flowering and Fruit Development Stage:</h4>
<p>Ensure consistent moisture during flowering and fruit set to maximize yield and fruit quality. Thin fruit if necessary to promote larger oranges.</p>

<h3>7. Harvesting Process</h3>
<h4>Optimal Harvest Time:</h4>
<p>Oranges are typically ready for harvest 7-12 months after flowering, depending on the variety. Indicators include a change in color, firmness, and sweetness.</p>

<h4>Harvesting Techniques:</h4>
<p>Use sharp pruning shears to cut oranges from the tree, leaving a short stem attached to the fruit.</p>

<h4>Post-Harvest Handling:</h4>
<p>Handle harvested oranges gently to avoid bruising. Store them in a cool, shaded area.</p>

<h3>8. Post-Harvest Management and Storage</h3>
<h4>Storage Conditions:</h4>
<p>Store oranges in a cool, dark place. They can be refrigerated to extend their shelf life.</p>

<h4>Processing (if applicable):</h4>
<p>If needed, oranges can be processed into juice, marmalade, or dried slices.</p>

<h4>Packaging:</h4>
<p>Pack oranges in breathable containers to help maintain quality during storage and transport.</p>

<h3>9. Challenges and Solutions</h3>
<h4>Challenges:</h4>
<p>Common challenges include susceptibility to pests and diseases, environmental stresses (such as drought or frost), and improper pruning techniques.</p>

<h4>Solutions:</h4>
<p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>
`;
  }

  if (crop === "coffee") {
    content = `
<h2>Coffee Cultivation</h2>

<h3>1. Introduction</h3>
<p>Overview of Coffee: Coffee (Coffea spp.) is one of the most widely consumed beverages globally, known for its stimulating properties and rich flavor. It thrives in tropical climates, typically at higher altitudes, where conditions are ideal for its growth. This guide outlines the complete process for cultivating coffee, from planting to harvesting.</p>

<h3>2. Materials and Resources Required</h3>
<ul>
    <li><strong>Planting Material:</strong> Quality coffee seedlings or seeds from reputable nurseries.</li>
    <li><strong>Fertilizers:</strong> Balanced fertilizers rich in nitrogen, phosphorus, and potassium; organic compost.</li>
    <li><strong>Irrigation Equipment:</strong> Drip irrigation systems or hoses for effective moisture management.</li>
    <li><strong>Pest Control:</strong> Insecticides, fungicides, and organic pest management solutions.</li>
    <li><strong>Tools:</strong> Hand tools (shovels, pruning shears, hoes) or tractors for planting, maintenance, and harvesting.</li>
</ul>

<h3>3. Preparation Steps</h3>
<h4>Soil Preparation:</h4>
<p>Coffee prefers well-drained, loamy soils with a pH of 6.0 to 6.5. Prepare the soil by tilling and incorporating organic matter to enhance fertility and drainage.</p>

<h4>Seed/Seedling Selection and Treatment:</h4>
<p>Choose disease-resistant coffee varieties suitable for your climate. If using seeds, soak them for 24 hours to improve germination rates.</p>

<h4>Field Preparation:</h4>
<p>Clear the planting area of weeds, stones, and debris to create a clean environment for planting.</p>

<h3>4. Planting Procedure</h3>
<h4>Planting Time:</h4>
<p>The best time to plant coffee is at the beginning of the rainy season.</p>

<h4>Spacing and Depth:</h4>
<p>Space coffee plants 5-8 feet apart to allow for proper growth and air circulation. Plant seedlings at a depth that matches their nursery height, ensuring the root collar is level with the soil surface.</p>

<h4>Seeding/Transplanting Methods:</h4>
<p>Transplanting: Dig a hole large enough to accommodate the roots, place the seedling in the hole, backfill gently, and water thoroughly after planting.</p>

<h3>5. Growth Stages and Care</h3>
<h4>Watering Requirements:</h4>
<p>Water young coffee plants regularly to establish roots, especially during dry spells. Mature plants prefer consistent moisture but should not be waterlogged.</p>

<h4>Nutrient Management:</h4>
<p>Apply a balanced fertilizer every 3-4 months during the growing season. Use organic compost to enhance soil fertility.</p>

<h4>Weed Control:</h4>
<p>Control weeds through mulching, which helps retain moisture and suppress weed growth, and manual weeding to reduce competition.</p>

<h4>Pest and Disease Management:</h4>
<p>Monitor for pests such as coffee borer beetles and leaf rust. Manage diseases like root rot and leaf spot with proper sanitation and resistant varieties. Implement integrated pest management (IPM) strategies, including cultural controls and the use of beneficial insects.</p>

<h3>6. Special Care During Growth Stages</h3>
<h4>Seedling Stage:</h4>
<p>Protect young plants from extreme weather and pests. Use shade cloth if necessary to shield from intense sunlight.</p>

<h4>Vegetative Stage:</h4>
<p>Regularly check for nutrient deficiencies and address them promptly. Prune to shape plants and remove any dead or diseased branches.</p>

<h4>Flowering and Fruit Development Stage:</h4>
<p>Ensure adequate water supply during flowering and fruit set to maximize yield and fruit quality. Monitor for fruit fly infestations and control as necessary.</p>

<h3>7. Harvesting Process</h3>
<h4>Optimal Harvest Time:</h4>
<p>Coffee cherries are typically ready for harvest 7-9 months after flowering, depending on the variety. Indicators include a change in color from green to bright red or yellow.</p>

<h4>Harvesting Techniques:</h4>
<p>Harvest coffee cherries by hand, picking only the ripe ones. Use a selective picking method for quality.</p>

<h4>Post-Harvest Handling:</h4>
<p>Handle harvested cherries gently to avoid bruising. Process them as soon as possible to prevent spoilage.</p>

<h3>8. Post-Harvest Management and Storage</h3>
<h4>Processing Methods:</h4>
<p>Use either the dry method (sun-drying cherries) or the wet method (fermenting and washing cherries) to extract the coffee beans.</p>

<h4>Storage Conditions:</h4>
<p>Store processed coffee beans in a cool, dry place to prevent spoilage and maintain flavor.</p>

<h4>Packaging:</h4>
<p>Pack coffee beans in airtight containers to help preserve freshness during storage and transport.</p>

<h3>9. Challenges and Solutions</h3>
<h4>Challenges:</h4>
<p>Common challenges include susceptibility to pests and diseases, environmental stresses (such as drought or frost), and fluctuating market prices.</p>

<h4>Solutions:</h4>
<p>Choose disease-resistant varieties, implement good cultural practices, and monitor environmental conditions to mitigate these challenges.</p>


    `;
  }

  cropInfo.innerHTML = content;
  cropInfo.style.display = content ? "block" : "none";
}
