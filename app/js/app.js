import '../sass/index.scss';

class Dog {
    constructor() {
        // czesc adresu wyciagamy do zmennej
        this.apiUrl = "https://dog.ceo/api";
        this.imgEl = document.querySelector('.featured-dog img');
        this.bcgEl = document.querySelector('.featured-dog__background');
        this.tilesEl = document.querySelector('.tiles');
        this.spinnerEl = document.querySelector('.spinner')
        this.init();
    }
//spinner jakby sie ladowalo wolno
    showLoading = () => {
        this.spinnerEl.classList.add('spinner--visible');
    }

    hideLoading = () => {
        this.spinnerEl.classList.remove('spinner--visible');
    }

    listBreeds = () => {
        const url = `${this.apiUrl}/breeds/list/all`;
        // console.log(url);
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                // console.log(data.message);
                data.message;
            })
            .catch(err => console.error('masz kurwa error:', err));
    }

    getRandomImage = () => {
        fetch(`${this.apiUrl}/breeds/image/random`)
            .then(resp => resp.json())
            .then(data => {
                data.message;
                this.imgEl.setAttribute('src', data.message);
                this.bcgEl.style.backgroundImage = `url('${data.message}')`;
            })
            .catch(err => console.log(err))
    }

    getRandomImageByBreed = (breed) => {
        fetch(`${this.apiUrl}/breed/${breed}/images/random`)
            .then(resp => resp.json())
            .then(data => { data.message; 
                this.imgEl.setAttribute('src', data.message);
                this.bcgEl.style.backgroundImage = `url('${data.message}')`;
    });
    };


    //subBreed moze nie istniec!!!
    addBreed = (breed, subBreed) => {
        let name;
        let type;
        if (typeof subBreed === 'undefined') {
            name = breed;
            type = breed;
        } else {
            name = `${breed}/${subBreed}`;
            type = `${breed}/${subBreed}`;
        }
        const tile = document.createElement('div');
        const tileContent = document.createElement('div');
        tile.classList.add('tiles__tile');
        tileContent.classList.add('tiles__tile-content');

        tileContent.innerText = name;
        //albo data-set albo addeventlistener
        tileContent.addEventListener('click', () => {
        //przesuniecie do gory na klik - ale mi sie nie podoba
        window.scrollTo(0,0);
        //spinner jakby sie ladowalo wolno
        this.showLoading();
        this.getRandomImageByBreed(type)
        this.hideLoading();
        });


        tile.appendChild(tileContent);
        this.tilesEl.appendChild(tile);


    };

    showAllBreeds= () => {
        const url = `${this.apiUrl}/breeds/list/all`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                const breeds = data.message;
                for(const breed in breeds) {
                    // console.log(breeds);
                    // console.log(breed, breeds[breed]);
                        if(breeds[breed].length === 0) {
                            this.addBreed(breed);
                        } else {
                            for (const subBreed of breeds[breed]) {
                                this.addBreed(breed, subBreed);
                                // console.log(`${breed}/${subBreed}`);
                            }
                        }
            }})};
    
    
            
    

    init() {
        this.showLoading();
        this.getRandomImage();
        this.hideLoading();
        // this.listBreeds(); 
        // this.getRandomImageByBreed('bulldog');
        // this.showLoading();
        this.showAllBreeds();
        // this.hideLoading();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Dog();
});

// wersja poprzednia - funkcje bez klas const listBreeds = () => {     const url
// = 'https://dog.ceo/api/breeds/list/all';     fetch(url)     .then(resp =>
// resp.json())     .then(data => {         // console.log(data.message);
//  data.message;     })     .catch(err => console.log(err)); } funkcja
// tradycyjna function listBreeds() {     const url =
// 'https://dog.ceo/api/breeds/list/all';     return fetch(url)
// .then(resp => resp.json())         .then(data => {
// console.log(data.message);             return data.message;         }) }
// funkcje trzeba zawsze wywolac listBreeds() const imgTag =
// document.querySelector('img'); console.log(imgTag); const getRandomImage = ()
// => {     const url = 'https://dog.ceo/api/breeds/image/random'     fetch(url)
//         .then(resp => resp.json())         .then(data => {data.message;
//       console.log(data.message);             imgTag.setAttribute('src',
// data.message);             // const newImg = document.createElement('img');
//           // newImg.setAttribute('src', data.message);             //
// document.body.appendChild(newImg);         }) } funkcje trzeba wywolac
// getRandomImage() fukcja tradycyjna function getRandomImage() {     const url
// = 'https://dog.ceo/api/breeds/image/random'     return fetch(url)
// .then(resp => resp.json())         .then(data => data.message)     }
// getRandomImage()     .then(imgSrc => imgTag.setAttribute("src", imgSrc))
// const getRandomImageByBreed = (breed) => {     const url =
// `https://dog.ceo/api/breed/${breed}/images/random`;     fetch(url)
// .then(resp => resp.json())         .then(data => {             data =>
// data.message;             console.log(data.message);
// imgTag.setAttribute('src', data.message);         }) }
// getRandomImageByBreed('bulldog/boston')
