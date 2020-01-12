import { IonContent,
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  useIonViewWillEnter
} from '@ionic/react';
import React from 'react';
import axios from 'axios'
import { RouteComponentProps } from 'react-router';
import Test from './Teste'
import { render } from 'react-dom';
// import Modal from './modal'

const Home: React.FC<RouteComponentProps> = (props) => {
  // IonViewWillEnter(() => {
  //   axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json  ')
  //     .then(resp => console.log(resp.data.pokemon))
  // })
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color='danger'>
            <IonTitle>Pokedex</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Test name='Estevam'/>
          <IonCard>
            <IonItem>
              <IonIcon name="pin" slot="start" />
              <IonLabel>ion-item in a card, icon left, button right</IonLabel>
              <IonButton onClick={() => props.history.push('/modal')} fill="outline" slot="end">View</IonButton>
            </IonItem>
  
            <IonCardContent>
              This is content, without any paragraph or header tags,
              within an ion-cardContent element.
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );  
};

export default Home;
