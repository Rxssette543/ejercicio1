import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Card from '../components/card';
import CardAutor from '../components/carrdAutor';
import './Home.css';

const Home: React.FC = () => {
  return (
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
        <Card/> 
        <CardAutor/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
