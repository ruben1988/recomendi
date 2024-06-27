function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const country = data.countries.find(item => item.name.toLowerCase() === input);

            if (country) {
                resultDiv.innerHTML += `<h2>${country.name}</h2>`;

                country.cities.forEach(city => {
                    resultDiv.innerHTML += `<div>`;
                    resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="${city.name}" style="width:200px;height:auto;">`;
                    resultDiv.innerHTML += `<p><strong>City:</strong> ${city.name}</p>`;
                    resultDiv.innerHTML += `<p><strong>Description:</strong> ${city.description}</p>`;
                    resultDiv.innerHTML += `</div>`;
                });
            } else {
                resultDiv.innerHTML = 'Country not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

btnSearch.addEventListener('click', searchCondition);


function clearResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
}

document.getElementById('btnClear').addEventListener('click', clearResult);