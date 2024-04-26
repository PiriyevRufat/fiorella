// const url = 'https://garden-api.p.rapidapi.com/plants';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '05a866f49bmsh756fbaf0bb755bcp187d85jsn9545907c0d73',
// 		'X-RapidAPI-Host': 'garden-api.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.error(error);

// } catch (error) {
// }
// console.log(result);

const API_KEY = '05a866f49bmsh756fbaf0bb755bcp187d85jsn9545907c0d73';

fetch(`https://garden-api.p.rapidapi.com/plants?key=${API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));