import Lottie from "lottie-react";
import botAnimation from "./bot-wave.json";

export default function ChatBotIcon() {
  return (
    <div className="fixed bottom-6 right-6 w-20 cursor-pointer">
      <Lottie animationData={botAnimation} loop={true} />
    </div>
  );
}
