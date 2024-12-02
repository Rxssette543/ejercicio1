import React from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
    IonBackButton,
} from '@ionic/react';
import { FaArrowLeft } from 'react-icons/fa';

import { pin, share, trash } from 'ionicons/icons';

const Biblioteca: React.FC = () => {
    const items = [
        {
            id: 1,
            name: 'No acabarán mis flores, no cesarán mis cantos',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/nezahualcoyotl_isbn_internet.jpg',
            description: 'La poesía es la voz del alma y las almas son universales.',
        },
        {
            id: 2,
            name: 'Aquí yace un soñador Ricardo Flores Magón',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/Aqui_yace_un_sonador_Ricardo_Flores_Magon.png',
            description: 'Un espíritu lleno de inquietud ocupaba su cuerpo y desde muy joven se enfrentó a la tiranía de su paisano Porfirio Díaz.',
        },
        {
            id: 3,
            name: 'Rebozo de cuentos: Pascuala Corona',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/Rebozo_de_Cuentos_Pascuala_Corona.png',
            description: 'Como sabrás, todas las historias tienen un origen.',
        },
        {
            id: 4,
            name: 'Cuentos para jugar y disfrutar la fantasía: Gianni Rodari para niños',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/giannirodari.jpg',
            description: 'En algunos momentos, la desesperación porque leas será tan grande que tus papás o maestros te obligarán a hacerlo.'
        },
        {
            id: 5,
            name: 'Amado Nervo para niñas y niños',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/Amado_Nervo_para_ninos.png',
            description: 'Pudiendo ser rico preferí ser poeta, dijo alguna vez Amado Nervo, el que siendo niño encontró en la naturaleza'

        },
        {
            id: 6,
            name: 'Historias de ensueño: Leonora Carrington para niños',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/LeonoraCarrington.jpg',
            description: 'A lo largo de su infancia Leonora escuchó los cuentos de hadas, leyendas e historias de criaturas del folclor de los pueblos celtas. '

        },
        {
            id: 7,
            name: 'Las aventuras maravillosas de Alicia: Lewis Carrol',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/LewisCarroll.jpg',
            description: 'La celebración de los 150 años de la publicación de Alicia en el país de las maravillas'

        },
    ];

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButton>
                        <FaArrowLeft />
                        Regresar
                    </IonButton>
                    <IonTitle>Tabla de Biblioteca</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light">
                <IonGrid fixed={true}>
                    <IonRow className="ion-text-start">
                        <IonCol size="2"><strong>Avatar</strong></IonCol>
                        <IonCol size="6"><strong>Nombre</strong></IonCol>
                        <IonCol size="4"><strong>Descripción</strong></IonCol>
                    </IonRow>

                    {items.map((item) => (
                        <IonRow key={item.id} className="ion-align-items-start ion-text-start">
                            <IonCol size="2">
                                <img
                                    alt={`Avatar of ${item.name}`}
                                    src={item.avatar}
                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                />
                            </IonCol>
                            <IonCol size="6">{item.name}</IonCol>
                            <IonCol size="4">
                                {item.description}
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>
            </IonContent>
        </>
    );
};

export default Biblioteca;
