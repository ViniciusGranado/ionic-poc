import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline, logInOutline } from 'ionicons/icons';
import React, { FormEvent } from 'react';

const Register: React.FC = () => {
  const router = useIonRouter();

  const register = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("register");

    router.goBack();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>

          <IonTitle>Criar conta</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" scrollY={false}>
        <IonCard>
          <IonCardContent>
            <form onSubmit={(event) => register(event)}>
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

              <IonInput
                labelPlacement='floating'
                fill='outline'
                label='Confirme a senha'
                type='password'
                className='ion-margin-bottom'
              ></IonInput>

              <IonButton
                type='submit'
                expand='block'
                className='ion-margin-bottom'
              >
                Criar conta
                <IonIcon icon={checkmarkDoneOutline} slot='end'></IonIcon>
              </IonButton>
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

export default Register;