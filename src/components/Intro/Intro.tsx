import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Intro1 from '../../assets/intro-1.jpg';
import Intro2 from '../../assets/intro-2.jpg';
import Intro3 from '../../assets/intro-3.jpg';
import { IonButton, IonText } from "@ionic/react";

import 'swiper/css';
import './Intro.css';

type ContainerPropsType = {
  onFinished: () => void;
}

export const Intro = ({ onFinished }: ContainerPropsType) => {
  const SwiperButtonNext = ({ children }: { children: React.ReactNode }) => {
    const swiper = useSwiper();

    return (
      <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>
    )
  }

  return (
    <Swiper>
      <SwiperSlide>
        <img src={Intro1} />

        <IonText>
          <h2>ASTVIA</h2>
        </IonText>

        <SwiperButtonNext>PRÓXIMO</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro2} />

        <IonText>
          <h2>ASTVIA</h2>
        </IonText>

        <SwiperButtonNext>PRÓXIMO</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro3} />

        <IonText>
          <h2>ASTVIA</h2>
        </IonText>

        <IonButton onClick={onFinished}>COMEÇAR</IonButton>
      </SwiperSlide>
    </Swiper>
  );
}