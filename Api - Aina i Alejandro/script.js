document.getElementById("button").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
             document.getElementById("resultat").innerHTML = ""
            pintarPokemon(response);
        }
    });

    const nom1 = document.getElementById("nom1").value;
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/` + nom1);
    xhr.send();
})

function pintarPokemon(pokemon) {

    let nom = document.createElement("h1")
    let imatge = document.createElement("img")
   
    let nomCap = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)


    nom.innerHTML = nomCap;
    imatge.src = pokemon.sprites.front_default;

    
  
    document.getElementById("resultat").append(nom)
    document.getElementById("resultat").append(imatge)
}




document.getElementById("tots").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
             document.getElementById("resultat").innerHTML = ""
            for (let i = 0; i < response.results.length; i++) {

                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        console.log(response)
                        pintarPokemon(response);
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
})



document.getElementById("hola").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
             document.getElementById("resultat").innerHTML = ""
            for (let i = 0; i < response.results.length; i++) {

                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        console.log(response)
                        if(response.types[0].type.name=="fire"){
                            pintarPokemon(response);
                        }
                        
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
})



document.getElementById("volador").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
             document.getElementById("resultat").innerHTML = ""
            for (let i = 0; i < response.results.length; i++) {

                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        console.log(response)
                        if(response.types[0].type.name=="ground"){
                            pintarPokemon(response);
                        }
                        
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
})

document.getElementById("a").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
             document.getElementById("resultat").innerHTML = ""
            for (let i = 0; i < response.results.length; i++) {

                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        console.log(response)
                        if(response.types[0].type.name=="water"){
                            pintarPokemon(response);
                        }
                        
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
})


document.getElementById("air").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
             document.getElementById("resultat").innerHTML = ""
            for (let i = 0; i < response.results.length; i++) {

                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        console.log(response)
                        if(response.types[0].type.name=="electric"){
                            pintarPokemon(response);
                        }
                        
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
})






document.getElementById("lu2").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    let moviment = document.getElementById("move").value;
    console.log(moviment)

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
             document.getElementById("resultat").innerHTML = ""
            for (let i = 0; i < response.results.length; i++) {

                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        
                        if(response.moves[0].move.name==moviment){
                            console.log(response)
                            pintarPokemon(response);
                        }
                        
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
})


