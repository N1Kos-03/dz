function customPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      Promise.resolve(p)
        .then(resolve)
        .catch(reject);
    }
  });
}

const fast = new Promise(resolve => setTimeout(() => resolve('Быстрый ответ'), 100));
const medium = new Promise(resolve => setTimeout(() => resolve('Средний ответ'), 500));
const slow = new Promise(resolve => setTimeout(() => resolve('Медленный ответ'), 1000));
const error = new Promise((_, reject) => setTimeout(() => reject('Ошибка'), 5000));

customPromiseRace([slow, medium, fast, error])
  .then(result => console.log('Результат:', result))
  .catch(error => console.error('Ошибка:', error));





