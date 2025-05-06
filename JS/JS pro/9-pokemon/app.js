const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.onload = function () {
  const data = JSON.parse(request.responseText);
  console.log('Данные о покемоне Ditto:', data);

  const abilityUrl = data.abilities[0].ability.url;
  console.log('URL способности:', abilityUrl);

  const abilityRequest = new XMLHttpRequest();
  abilityRequest.open('GET', abilityUrl);
  abilityRequest.onload = function () {
    const abilityData = JSON.parse(abilityRequest.responseText);
    console.log('Данные о способности:', abilityData);

    const englishEntry = abilityData.effect_entries.find(
      entry => entry.language.name === 'en'
    );
    console.log('Описание на английском:', englishEntry.effect);
  };
  abilityRequest.send(); 
};
request.send();

