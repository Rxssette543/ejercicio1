import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonButton, IonIcon } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


import './Autor.css';

import Biblioteca from '../pages/biblioteca';

function Autor() {
    return (
        <IonGrid fixed={true}>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Ismael Rosete</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Ismael Rosete</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Información</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>¡Biblioteca es una aplicación desarrollada con IONIC que permite gestionar una biblioteca de una centro educativo.</IonCardContent>
                        <IonCardContent>Para acceder a la biblioteca, pulsa en el siguiente botón</IonCardContent>
                        <IonButton shape="round" href='./Biblioteca' mode='ios'>Ingresar</IonButton>
                    </IonCard>

                </IonContent>
            </IonPage>
        </IonGrid>
    );
}
export default Autor;