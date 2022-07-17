const APIfem = 'https://rickandmortyapi.com/api/character/?gender=female'
const APImale = `https://rickandmortyapi.com/api/character/?gender=Male`
const APIaliens = 'https://rickandmortyapi.com/api/character/?species=alien'
const API = 'https://rickandmortyapi.com/api/character'
const APIep = 'https://rickandmortyapi.com/api/episode';
const APItabla = 'https://rickandmortyapi.com/api/character/?species'


const getData = (apiurl) =>{
	return fetch(apiurl)
		.then(response => response.json())
		.then( json => { 
			console.log(json),
			printData(json),
			printPagination(json.info)
		 })

		.catch( error => {console.error('Error: ', error)})

}

const gettabla = (apiurl) => {
	return fetch(apiurl)
		.then(response => response.json())
		.then( json => { 
			printTablaEspecies(json)
		 })

		.catch( error => {console.error('Error: ', error)})
}

const printData = (data) => {

	let titulo = `
	<h3 class="text-primary">PERSONAJES</h3>
	`
	document.getElementById('titulo').innerHTML = titulo

	let html = '';
	data.results.forEach(c => {
		html += `
		<div class="col" >
			<div class="card mt-5" style="width: 13rem;">
			<img src="${c.image}" class="card-img-top" alt="...">
			<div class="card-body">
			   <h5 class="card-title">${c.name}</h5>
			   <p class="card-text">Genero: ${c.gender}</p>
			   <p class="card-text">Especie: ${c.species}</p>
			</div>
			</div>
		</div>
		`
	});
	document.getElementById('infoCharecters').innerHTML = html

}

const printPagination = (info) => {

	let preDisable = info.prev == null ? 'disable' : '';
	let nextDisable = info.next == null ? 'disable' : ''; 

	let html = `
	    <li class="page-item ${preDisable}">
			<a class="page-link" onclick="getData('${info.prev}')">Previous</a>
		</li>
		<li class="page-item ${preDisable}">
			<a class="page-link" onclick="getData('${info.next}')">Next</a>
	    </li>
	`
	document.getElementById('pagination').innerHTML = html;
}


const printTablaEspecies = (data) => {
	let html = ''
	data.results.forEach(c => {
        html += `
        <tr>
		    <td scope="row" class="text-center"><b>${c.id}</b></td>
		    <td class="text-center">${c.name}</td>
		    <td class="text-center">${c.species}</td>
		    <td class="text-center">${c.origin.name}</td>
		    <td class="text-center">${c.status}</td>
		</tr>
        `
	});

	document.querySelector('#data-personajes>tbody').innerHTML = html 
}


let fem = document.querySelector('#fem')
fem.addEventListener('click', () =>{
	getData(APIfem);

})

let male = document.querySelector('#male')
male.addEventListener('click', () =>{
	getData(APImale);
})

let todos = document.querySelector('#todos')
todos.addEventListener('click', () =>{
	getData(API);
})

let aliens = document.querySelector('#aliens')
aliens.addEventListener('click', () =>{
	getData(APIaliens);
})

gettabla(API)







