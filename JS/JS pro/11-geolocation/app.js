function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Геолокация не поддерживается этим браузером"));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position.coords);
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
}

getCurrentLocation()
  .then((coords) => {
    const { latitude, longitude } = coords;
    document.getElementById('coords').textContent = 
      `Широта: ${latitude.toFixed(5)}, Долгота: ${longitude.toFixed(5)}`;
  })
  .catch((error) => {
    document.getElementById('coords').textContent = 
      `Ошибка получения геопозиции: ${error.message}`;
  })
  .finally(() => {
    console.log("Попытка получения геопозиции завершена");
  });
