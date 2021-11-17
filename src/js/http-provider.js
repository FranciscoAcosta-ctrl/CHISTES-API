const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async() =>{
   
    try {
        const resp = await fetch(jokeUrl);
        if(!resp.ok) return alert('No se pudo realizar la peticion');
        const {id, value, icon_url} = await resp.json();
        return {id, value, icon_url};

    } catch (err) {
        throw err;
    }
}

export {
    obtenerChiste
}