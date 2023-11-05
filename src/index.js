
const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');   
    
        console.log(input.value);

        fetch (`http://localhost:3000/movies/${input.value}`)
        .then ((resp) => resp.json())
        .then ((data) => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.innerText = data.title;
            summary.innerText = data.summary;
            }
        );
    });
}


const title = document.querySelector('section#movieDetails h4');
const Summary = document.querySelector('section#movieDetails p');


document.addEventListener('DOMContentLoaded', init);


// is const inputForm = document.querySelector('event.target.children[1].value') the same as 
// const inputForm = document.querySelector('input#searchByID'); ?