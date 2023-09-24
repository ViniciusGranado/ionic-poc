import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logInOutline } from "ionicons/icons";
import React, { FormEvent } from 'react';

const Login: React.FC = () => {
  const login = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log("login");
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Ionic Poc</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <form onSubmit={(event) => login(event)}>
              <IonInput
                labelPlacement='floating'
                fill='outline'
                label='E-mail'
                type='email'
                className='ion-margin-bottom'
              ></IonInput>

              <IonInput
                labelPlacement='floating'
                fill='outline'
                label='Senha'
                type='password'
                className='ion-margin-bottom'
              ></IonInput>

              <IonButton
                type='submit'
                expand='block'
                className='ion-margin-bottom'
              >
                Entrar
                <IonIcon icon={logInOutline} slot='end'></IonIcon>
              </IonButton>

              <IonButton
                routerLink='/register'
                type='button'
                expand='block'
                fill="outline"
              >Criar conta</IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonFooter>
        <IonToolbar>Toolbar</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Login;