import React, { useState } from 'react';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonButtons,
    IonModal,
    IonText,
} from '@ionic/react';
import { FaArrowLeft } from 'react-icons/fa';
import Autor from './Autor';

const Biblioteca: React.FC = () => {
    const [selectedBook, setSelectedBook] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const items = [
        {
            id: 1,
            name: 'No acabarán mis flores, no cesarán mis cantos',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/nezahualcoyotl_isbn_internet.jpg',
            description: 'La poesía es la voz del alma y las almas son universales.',
            autor: 'COLECCIÓN BIBLIOTECA INFANTIL',
            isbn: 'ISBN: 978-607-631-259-9'
        },
        {
            id: 2,
            name: 'Aquí yace un soñador Ricardo Flores Magón',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/Aqui_yace_un_sonador_Ricardo_Flores_Magon.png',
            description: 'Un espíritu lleno de inquietud ocupaba su cuerpo y desde muy joven se enfrentó a la tiranía de su paisano Porfirio Díaz.',
            autor: 'COLECCIÓN BIBLIOTECA INFANTIL',
            isbn: 'ISBN: 978-607-631-194-3'
        },
        {
            id: 3,
            name: 'Rebozo de cuentos: Pascuala Corona',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/Rebozo_de_Cuentos_Pascuala_Corona.png',
            description: 'Como sabrás, todas las historias tienen un origen.',
            autor: 'COLECCIÓN BIBLIOTECA INFANTIL',
            isbn: 'ISBN: 9978-607-631-114-1'
        },
        {
            id: 4,
            name: 'Cuentos para jugar y disfrutar la fantasía: Gianni Rodari para niños',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/giannirodari.jpg',
            description: 'En algunos momentos, la desesperación porque leas será tan grande que tus papás o maestros te obligarán a hacerlo.',
            autor: 'COLECCIÓN BIBLIOTECA INFANTIL',
            isbn: 'ISBN: 978-607-631-101-1'
        },
        {
            id: 5,
            name: 'Amado Nervo para niñas y niños',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/Amado_Nervo_para_ninos.png',
            description: 'Pudiendo ser rico preferí ser poeta, dijo alguna vez Amado Nervo, el que siendo niño encontró en la naturaleza.',
            autor: 'COLECCIÓN BIBLIOTECA INFANTIL',
            isbn: 'ISBN: 978-607-631-045-8'
        },
        {
            id: 6,
            name: 'Historias de ensueño: Leonora Carrington para niños',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/LeonoraCarrington.jpg',
            description: 'A lo largo de su infancia Leonora escuchó los cuentos de hadas, leyendas e historias de criaturas del folclor de los pueblos celtas.',
            autor: 'COLECCIÓN BIBLIOTECA INFANTIL',
            isbn: 'ISBN: 978-607-745-703-9'
        },
        {
            id: 7,
            name: 'Las aventuras maravillosas de Alicia: Lewis Carrol',
            avatar: 'https://dgb.cultura.gob.mx/Documentos/PublicacionesDGB/BibliotecaInfantil/LewisCarroll.jpg',
            description: 'La celebración de los 150 años de la publicación de Alicia en el país de las maravillas.',
            autor: 'COLECCIÓN BIBLIOTECA INFANTIL',
            isbn: 'ISBN: 978-607-745-316-1'
        },
    ];

    const handleShowMore = (item: any) => {
        setSelectedBook(item);
        setIsModalOpen(true);
    };

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonButton href='./Home'>
                            <FaArrowLeft />
                        </IonButton>
                    </IonButtons>
                    <IonTitle className='ion-align-items-start ion-text-center'>Tabla de Biblioteca</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="light">
                <IonGrid fixed={true}>
                    <IonRow className="ion-text-start">
                        <IonCol size="2"><strong>Avatar</strong></IonCol>
                        <IonCol size="5"><strong>Nombre</strong></IonCol>
                        <IonCol size="3"><strong>Descripción</strong></IonCol>
                        <IonCol size="2"><strong>Acciones</strong></IonCol>
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
                            <IonCol size="5">{item.name}</IonCol>
                            <IonCol size="3">{item.description}</IonCol>
                            <IonCol size="2">
                                <IonButton onClick={() => handleShowMore(item)} expand="block" size="small">
                                    Más Info
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>

                <IonModal isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)} className='ion-slign-items-center ion-text-center'>
                    <IonHeader >
                        <IonToolbar>
                            <IonTitle>Detalles del Libro</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent className="ion-padding">
                        {selectedBook && (
                            <>
                                <IonText >
                                    <h2>{selectedBook.name}</h2>
                                </IonText>
                                <img
                                    alt={`Avatar of ${selectedBook.name}`}
                                    src={selectedBook.avatar}
                                    style={{ width: '100%', maxWidth: '300px', margin: '0 auto', display: 'block', borderRadius: '10px' }}
                                />
                                <p style={{ marginTop: '20px' }}>{selectedBook.description}</p>
                                <p style={{ marginTop: '20px' }}>{selectedBook.autor}</p>
                                <p style={{ marginTop: '20px' }}>{selectedBook.isbn}</p>
                            </>
                        )}
                        <IonButton expand="block" onClick={() => setIsModalOpen(false)}>Cerrar</IonButton>
                    </IonContent>
                </IonModal>
            </IonContent>
        </>
    );
};

export default Biblioteca;
