fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка при получении данных о покемоне');
    }
    return response.json();
  })
  .then(pokemonData => {
    console.log('Данные о покемоне Ditto:', pokemonData);
    const abilityUrl = pokemonData.abilities[0]?.ability?.url;
    console.log('URL способности:', abilityUrl);
    if (!abilityUrl) {
      throw new Error('URL способности не найден');
    }
    return fetch(abilityUrl);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Ошибка при получении данных о способности');
    }
    return response.json();
  })
  .then(abilityData => {
    console.log('Данные о способности:', abilityData);

    const englishEntry = abilityData.effect_entries.find(
      entry => entry.language.name === 'en'
    );
    console.log('Описание на английском:', englishEntry.effect);
  })
  .catch(error => {
    console.error('Произошла ошибка:', error.message);
  });


