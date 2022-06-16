import { HiBell } from "react-icons/hi";
import { BsFillChatLeftFill } from "react-icons/bs";

const BotonesFlotantes = () => {
  return (
    <div className="fixed bottom-5 right-5">
      <div className="flex gap-4">
        <button
          className="rounded-full text-2xl p-3 shadow-lg bg-white text-primary hover:scale-110 transition-all delay-75 duration-500 ease-in-out"
          type="button"
        >
          <HiBell />
        </button>
        <button
          className="rounded-full text-xl p-3 shadow-lg bg-white text-green-400 hover:scale-110 transition-all delay-75 duration-500 ease-in-out"
          type="button"
        >
          <BsFillChatLeftFill />
        </button>
      </div>
    </div>
  );
};

export default BotonesFlotantes;
