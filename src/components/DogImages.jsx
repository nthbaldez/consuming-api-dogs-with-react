import { useState } from 'react';

const url = 'https://dog.ceo/api/breeds/image/random';

export function DogImages() {

    const [src, setSrc] = useState('');

    function newDogImage() {
        fetch(url)
        .then(response => response.json())
        .then(data => setSrc(data.message))
        
    }

    return (
        
        <section>
            <h1>Olha que doguinho maneiro</h1>
            <img src={src} alt="Imagem do dog" />
            <div>
                <button type="button" onClick={newDogImage}>Descubra um novo Doguinho</button>
            </div>
        </section>
        
        
    )

    
}