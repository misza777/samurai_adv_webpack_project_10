import '../sass/index.scss';

// funkcja strzalkowa
const listBreeds = () => {
    const url = 'https://dog.ceo/api/breeds/list/all';
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        // console.log(data.message);
        data.message;
    })
    .catch(err => console.log(err));
}

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

const imgTag = document.querySelector('img');
// console.log(imgTag);

const getRandomImage = () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    fetch(url)
        .then(resp => resp.json())
        .then(data => {data.message;
            console.log(data.message);
            imgTag.setAttribute('src', data.message);
            // const newImg = document.createElement('img');
            // newImg.setAttribute('src', data.message);
            // document.body.appendChild(newImg);
        })
}

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


const getRandomImageByBreed = (breed) => {
    
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            data => data.message;
            console.log(data.message);
            imgTag.setAttribute('src', data.message);
        })
}

getRandomImageByBreed('bulldog/boston')

    
