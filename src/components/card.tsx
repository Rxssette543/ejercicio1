import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonButton, IonIcon } from '@ionic/react';

import './card.css';

import Biblioteca from '../pages/biblioteca';

function Card() {
  return (
    <IonGrid fixed={true}>
      <IonCard className='ion-align-items-center ion-text-center'>
        <IonCardHeader>
          <IonCardTitle>Bienvenido a ¡Biblioteca!</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>¡Biblioteca es una aplicación desarrollada con IONIC que permite gestionar una biblioteca de una centro educativo.</IonCardContent>
        <IonCardContent>Para acceder a la biblioteca, pulsa en el siguiente botón</IonCardContent>
        <IonButton shape="round" href='./Biblioteca' mode='ios'>Ingresar</IonButton>
      </IonCard>
    </IonGrid>
  );
}
export default Card;  