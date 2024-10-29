import CloseButton from "@/assets/imgs/XBtn.svg";
import MaximizeButton from "@/assets/imgs/maximizebtn.svg";
import MinimizeButton from "@/assets/imgs/minimizebtn.svg";

export default function WindowButton() {
  return (
    <div id="button-containers">
      <ul className="flex flex-row items-center justify-center">
        <li>
          <button className="block hover:bg-ms-blue rounded-md active:bg-ms-dark-blue pt-[0.165rem]">
            <MinimizeButton />
          </button>
        </li>
        <li>
          <button className="block hover:bg-ms-blue rounded-md active:bg-ms-dark-blue pt-[0.165rem]">
            <MaximizeButton />
          </button>
        </li>
        <li>
          <button className="block hover:bg-ms-blue rounded-md active:bg-ms-dark-blue pt-[0.165rem]">
            <CloseButton />
          </button>
        </li>
      </ul>
    </div>
  );
}
