const query = {
  search: "Вася", 
  take: 10
}


function makeQuery(query) {
  let result = "";
  for (let key in query) {
    result += `${key}=${query[key]}&`;
  }
  return result.slice(0, -1);
}

console.log(makeQuery(query));