import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonButton, IonIcon } from '@ionic/react';

import './card.css'

function cardAutor() {


    return (
        <IonGrid fixed={true}>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Información del autor!</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>Aplicación desarrollada por</IonCardContent>
                <IonButton shape="round" href='./Autor' mode = 'ios' >Ingresar</IonButton>
            </IonCard>
        </IonGrid>
    );
}

export default cardAutor;