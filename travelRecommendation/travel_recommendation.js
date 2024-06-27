function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const condition = data.countries.find(item => item.name.toLowerCase() === input);

        if (condition) {
        //   const namecomp = condition.name.join(', ');
        //   const description = condition.description.join(', ');
        //   const treatment = condition.treatment;

          resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imageUrl}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Name:</strong> ${condition.name}</p>`;
          resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${condition.description}</p>`;
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
}

btnSearch.addEventListener('click', searchCondition);