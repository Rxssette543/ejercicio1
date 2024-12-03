import React from 'react';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
    IonGrid,
    IonButtons,
    IonButton
} from '@ionic/react';
import { FaArrowLeft } from 'react-icons/fa';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';


import './Autor.css';

import Biblioteca from '../pages/biblioteca';

function Autor() {
    return (
        <IonGrid fixed={true} >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <IonButtons>
                            <IonButton href='./Home'>
                                <FaArrowLeft/>
                            </IonButton>
                        </IonButtons>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Ismael Rosete</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCard className='ion-align-items-center ion-text-center'>
                <IonCardHeader>
                    <IonCardTitle>Información</IonCardTitle>
                    <IonCardSubtitle>Aplicación desarrollada por Rosete Ismael, a continuación puedes consultar la información</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonList>
                        <IonItem>
                            <IonThumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                            </IonThumbnail>
                            <IonLabel>Curriculum vitae</IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonThumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                            </IonThumbnail>
                            <IonLabel>Correo: rossetteismael@gmail.com</IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonThumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                            </IonThumbnail>
                            <IonLabel>Twitter: @twitter</IonLabel>
                        </IonItem>

                        <IonItem lines="none">
                            <IonThumbnail slot="start">
                                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
                            </IonThumbnail>
                            <IonLabel>Teléfono: 5580153735</IonLabel>
                        </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>
        </IonGrid>
    );
}
export default Autor;