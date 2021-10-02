import { Button } from "../components/Button";
import { Page } from "../components/Page";
import Image from "next/image";
export default function Home() {
  return (
    <Page>
      {/* Headline */}
      <div className="grid grid-rows-2 grid-cols-1 font-black text-4xl justify-center">
        <h1 className="justify-self-center">Dynamic Boilerplate</h1>
        <h1 className="justify-self-center">
          in <span className="text-[#5C95FF]">seconds.</span>
        </h1>
      </div>

      {/* SubHeadline */}
      <div className="flex justify-center my-5 text-xl font-semibold">
        <h4>Create a React project in seconds</h4>
      </div>
      {/* Call to ACtion */}
      <div className="flex justify-center ">
        <Button className="bg-[#5C95FF] px-6 py-2 rounded-md font-medium text-[#feffea] hover:bg-blue-500 transition ease-out">
          Get Started
        </Button>
      </div>

      {/* Decorative Photo */}
      <div className="absolute bottom-0 left-2 right-2 h-80 overflow-hidden">
        <Image
          className="absolute left-0 top-0"
          src="/assets/editor.png"
          layout="fill"
          objectFit="contain"></Image>
      </div>
    </Page>
  );
}
