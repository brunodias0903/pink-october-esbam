import HowToPreventImage from "../../assets/how-to-prevent.png";
import SignalsImage from "../../assets/signals.png";
import {
  CustomHowToPreventImage,
  CustomSignalsImage,
  HowToPreventContainer,
} from "./styles";

const HowToPrevent = () => {
  return (
    <HowToPreventContainer>
      <CustomHowToPreventImage src={HowToPreventImage} alt="how-to-prevent" />
      <CustomSignalsImage src={SignalsImage} alt="signals" />
    </HowToPreventContainer>
  );
};

export default HowToPrevent;
