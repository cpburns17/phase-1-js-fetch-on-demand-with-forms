
// const init = () => {
//     const inputForm = document.querySelector("form");

//     inputForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const input = document.querySelector('input#searchByID');   
    
//         console.log(input.value);

//         fetch (`http://localhost:3000/movies/${input.value}`)
//         .then ((resp) => resp.json())
//         .then ((data) => {
//             const title = document.querySelector('section#movieDetails h4');
//             const summary = document.querySelector('section#movieDetails p');
//             title.innerText = data.title;
//             summary.innerText = data.summary;
//             }
//         );
//     });
// }


// const title = document.querySelector('section#movieDetails h4');
// const Summary = document.querySelector('section#movieDetails p');


// document.addEventListener('DOMContentLoaded', init);

// SEPERATE 

// is const inputForm = document.querySelector('event.target.children[1].value') the same as 
// const inputForm = document.querySelector('input#searchByID'); ?


// 
// function adoptPugs(pugsObject) {
//     // console.log(JSON.stringify(pugsObjext)
//     fetch (`https://website`, {
//         method: "POST" //indicates what we're doing AND has to be all caps
//         headers: {
//         "content-type" : "application/json"
//     }
//     body.JSON.stringify(pugsObject)
//     }
//     .then ((resp) => resp.json)
//     .then ((data) => console.log(data))
//     )}

//     function updateDonations(pugObject) {
//         fetch (`https://website'/${pugsObject.id}`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body.JSON.stringify(pugObject)
//         }
//         .then ((resp) => resp.json)
//         .then ((data) => console.log(data))

//         )
//     }


// NEW CODE

const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID")
    // console.log(event);

    fetch (`http://localhost:3000/movies/${input.value}`)
        .then ((resp) => resp.json())
        .then ((data) => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.innerText = data.title;
            summary.innerText = data.summary;
        // console.log(data);
        }); 
    });
};  


document.addEventListener("DOMContentLoaded", init);    