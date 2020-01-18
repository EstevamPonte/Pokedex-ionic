import { IonContent,
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  useIonViewWillEnter,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar
} from '@ionic/react';
import React, {useState} from 'react';
import axios from 'axios'
import { RouteComponentProps } from 'react-router';
import Card from './card'
// import Modal from './modal'

const Home: React.FC<RouteComponentProps> = (props) => {
  const [pokemons, setPokemon] = useState([])
  const [card, setCard] = useState([])
  

  useIonViewWillEnter(() => {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json  ')
      .then(resp => {
        setPokemon(resp.data.pokemon)

      })
  })
  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    const items = Array.from(document.querySelector('ion-row').children as HTMLCollectionOf<HTMLElement>)

    requestAnimationFrame(() => {
      items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        // console.log(item.style)
        item.style.display = shouldShow ? 'block' : 'none';
        // console.log(pokemon.style.display = shouldShow ? 'block' : 'none')
        // setPokemon()
      })
    })
  }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color='danger'>
            <IonTitle>Pokedex</IonTitle>
          </IonToolbar>
            <IonSearchbar onInput={handleChange} color='danger' placeholder="Procure seu pokemon"/>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              {pokemons.map(pokemon => 
              
                <IonCol size='6' key={pokemon.id}>
                  <Card pokemonId={pokemon.id} name={pokemon.name}
                    img={pokemon.img} height={pokemon.height}
                    weight={pokemon.weight} type={pokemon.type}
                    weaknesses={pokemon.weaknesses} next_evolution={pokemon.next_evolution}/>
                </IonCol>
              )}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );  
};

export default Home;
