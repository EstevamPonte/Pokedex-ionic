import React, { useState } from 'react';
import { IonModal, IonButton, IonContent, IonPage } from '@ionic/react';

export const Modal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
      <IonPage>
        <IonContent>
        <IonModal isOpen={showModal}>
            <p>This is modal content</p>
            <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal>
        <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
        </IonContent>
      </IonPage>
  );
};

export default Modal