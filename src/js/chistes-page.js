
const body = document.body;


const createChisteHtml = () =>{
    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>
 
    <button id="btnOtro" class="btn btn-primary">Otro chiste....</button>
 
    <ol class="mt-2 list-group">
        <li class="list-group-item">.......</li>
    </ol>`;

    const divChistes = document.createElement('div');
    divChistes.classList = 'container';

    divChistes.innerHTML = html;
    body.append(divChistes);
}
const btnOtro = "",olList = "" ;
const eventos = () =>{
    
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');
    btnOtro.addEventListener('click', () =>{
        console.log('Hooooo');
        console.log(olList);
    });
}

export const init = () =>{
    createChisteHtml();
    eventos();
}
