import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { logInOutline } from "ionicons/icons";
import React, { FormEvent, useState } from "react";
import { Intro } from "../../components/Intro/Intro";

const Login: React.FC = () => {
  const [introSeen, setIntroSeen] = useState(false);

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("login");
  };

  const finishIntro = () => {
    console.log('FINISH INTRO');

    setIntroSeen(true);
  }

  return (
    <>
      {!introSeen ? (
        <Intro onFinished={finishIntro}/>
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={"primary"}>
              <IonTitle>Ionic Poc</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding" scrollY={false}>
            <div className="ion-text-center ion-padding ion-">
              <h1>ASTVIA</h1>
            </div>

            <IonCard>
              <IonCardContent>
                <form onSubmit={(event) => login(event)}>
                  <IonInput
                    labelPlacement="floating"
                    fill="outline"
                    label="E-mail"
                    type="email"
                    className="ion-margin-bottom"
                  ></IonInput>

                  <IonInput
                    labelPlacement="floating"
                    fill="outline"
                    label="Senha"
                    type="password"
                    className="ion-margin-bottom"
                  ></IonInput>

                  <IonButton
                    type="submit"
                    expand="block"
                    className="ion-margin-bottom"
                  >
                    Entrar
                    <IonIcon icon={logInOutline} slot="end"></IonIcon>
                  </IonButton>

                  <IonButton
                    routerLink="/register"
                    type="button"
                    expand="block"
                    fill="outline"
                  >
                    Criar conta
                  </IonButton>
                </form>
              </IonCardContent>
            </IonCard>
          </IonContent>

          <IonFooter>
            <IonToolbar>Toolbar</IonToolbar>
          </IonFooter>
        </IonPage>
      )}
    </>
  );
};

export default Login;
