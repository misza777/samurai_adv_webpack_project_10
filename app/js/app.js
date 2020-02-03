// 'use strict'

import '../sass/index.scss';

class Dog {
    constructor() {
        // czesc adresu wyciagamy do zmennej
        this.apiUrl = "https://dog.ceo/api";
        // console.log(this.apiUrl);
        // console.log(this);
        this.imgEl = document.querySelector('.featured-dog img');
        this.init();
    }
    
    listBreeds = () => {
        const url = `${this.apiUrl}/breeds/list/all`;
        // console.log(url);
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.message);
            data.message;
        })
        .catch(err => console.error('masz kurwa error:', err));
    }

    getRandomImage = () => {
        fetch(`${this.apiUrl}/breeds/image/random`)
            .then(resp => resp.json())
            .then(data => {data.message;
                const newImg = document.createElement('img');
                newImg.setAttribute('src', data.message);
                document.body.appendChild(newImg);
            })
            .catch(err => { 
                console.log(err);
                })}

    getRandomImageByBreed = (breed) => {
        fetch(`${this.apiUrl}/breed/${breed}/images/random`)
            .then(resp => resp.json())
            .then(data => {
                data => data.message;
                console.log(data.message);
                this.imgEl.setAttribute('src', data.message);
            })
    };

init() {
    this.getRandomImage();
    this.listBreeds();
    this.getRandomImageByBreed('bulldog');
}    
    }


document.addEventListener('DOMContentLoaded', () => {
    new Dog();
});



// wersja poprzednia - funkcje bez klas

// const listBreeds = () => {
//     const url = 'https://dog.ceo/api/breeds/list/all';
//     fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//         // console.log(data.message);
//         data.message;
//     })
//     .catch(err => console.log(err));
// }

// funkcja tradycyjna 
// function listBreeds() {
//     const url = 'https://dog.ceo/api/breeds/list/all';
//     return fetch(url)
//         .then(resp => resp.json())
//         .then(data => {
//             console.log(data.message);
//             return data.message;
//         }) 
// }
//funkcje trzeba zawsze wywolac 
// listBreeds()

// const imgTag = document.querySelector('img');
// console.log(imgTag);

// const getRandomImage = () => {
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     fetch(url)
//         .then(resp => resp.json())
//         .then(data => {data.message;
//             console.log(data.message);
//             imgTag.setAttribute('src', data.message);
//             // const newImg = document.createElement('img');
//             // newImg.setAttribute('src', data.message);
//             // document.body.appendChild(newImg);
//         })
// }

//funkcje trzeba wywolac
// getRandomImage()

//fukcja tradycyjna
// function getRandomImage() {
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     return fetch(url)
//         .then(resp => resp.json())
//         .then(data => data.message)
//     }

// getRandomImage()
//     .then(imgSrc => imgTag.setAttribute("src", imgSrc))


// const getRandomImageByBreed = (breed) => {
    
//     const url = `https://dog.ceo/api/breed/${breed}/images/random`;
//     fetch(url)
//         .then(resp => resp.json())
//         .then(data => {
//             data => data.message;
//             console.log(data.message);
//             imgTag.setAttribute('src', data.message);
//         })
// }

// getRandomImageByBreed('bulldog/boston')

    
