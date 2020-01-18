import React, {useState} from 'react'
import {
    IonCard,
    IonLabel,
    IonCardHeader,
} from '@ionic/react'
import Modal from './modal'

const Card: React.FC<any> = (props) => {
    const [showModal, setShowModal] = useState(false);
    return(
        <div >
            <IonCard onClick={() => setShowModal(true)}>
                <img src={props.img} alt="pokemon"/>
              <IonCardHeader>
                <IonLabel><b>{props.name}</b></IonLabel>
              </IonCardHeader>
            </IonCard>

            <Modal style={{backgroundColor:'red'}} isOpen={showModal}
            pokemonId={props.pokemonId} setShowModal={setShowModal}
            img={props.img} height={props.height}
            weight={props.weight} type={props.type}
            weaknesses={props.weaknesses} next_evolution={props.next_evolution}
            ></Modal>
      
              
        </div>
    )
}
export default Card