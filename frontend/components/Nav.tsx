import { Button } from "./Button";

export const Nav = () => {
  return (
    <nav className="font-semibold">
      <ul className="grid grid-cols-[1fr,1fr,2fr]">
        <li className="flex justify-center items-center">
          <Button className="transition px-4 border-b-4 border-transparent hover:border-[#5C95FF]">
            Home
          </Button>
        </li>
        <li className="flex justify-center items-center">
          <Button className=" transition px-4 border-b-4 border-transparent hover:border-[#5C95FF]">
            Docs
          </Button>
        </li>
        <li className="flex justify-center items-center ">
          <Button className=" transition px-4 border-b-4 border-transparent hover:border-[#5C95FF]">
            Github
          </Button>
        </li>
      </ul>
    </nav>
  );
};
