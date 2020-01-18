import React from 'react';
import { IonModal, IonButton, IonContent, IonBadge } from '@ionic/react';

export const Modal: React.FC<any> = (props) => {

  return (
        <IonContent >
            <IonModal cssClass='modalStyle' isOpen={props.isOpen}>
                <div className='container'>
                  <div className='floatCard'>
                    <div className='imgStyle'>
                      <img src={props.img} alt="pokemon"/>
                    </div>
                    <p><b>Altura: {props.height}</b></p>
                    <p>Peso: {props.weight}</p>
                    <p><b>Tipo</b></p>
                    <div className={props.type.length === 1 ? 'itemWithOne' : 'itemWithTwoOreMore'}>
                      {props.type.map(type =>
                        <IonBadge className='itemFont' key={type} color="warning">{type}</IonBadge>
                        )}
                    </div>
                    <p><b>Fraqueza</b></p>
                    <div className={props.weaknesses.length === 1 ? 'itemWithOne' : 'itemWithTwoOreMore'}>
                      {props.weaknesses.map(weaknesses =>
                        <IonBadge className='itemFont' key={weaknesses} color="danger">{weaknesses}</IonBadge>
                        )}
                    </div>
                    <p><b>Proxima evolução</b></p>
                    {props.next_evolution !== undefined ?  
                      <div className={props.next_evolution.length === 1 ? 'itemWithOne' : 'itemWithTwoOreMore'}>
                        {props.next_evolution.map(next_evolution =>
                          <IonBadge className='itemFont' key={next_evolution.name} color="success">{next_evolution.name}</IonBadge>
                        )}
                      </div>
                      :
                      <div className='itemWithOne'>
                        <IonBadge className='itemFont' color="success">Não ha evolução</IonBadge>
                      </div>
                    }
                  </div>
                </div>
                <IonButton onClick={() => props.setShowModal(false)}>Close Modal</IonButton>
            </IonModal>
        </IonContent>
  );
};

export default Modal