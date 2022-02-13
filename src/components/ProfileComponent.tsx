import React from "react";
import { Place } from "react-tooltip";
import Tooltip from "./Tooltip";

interface Profile {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  position: string;
  description: string;
}

interface Props {
  data: Profile;
  direction: Array<Place>;
  active: string;
  handleMouse: (val: string) => void;
}

const ProfileComponent = ({ data, direction, handleMouse, active }: Props) => {
  const { id, name, imageUrl, email, position, description } = data;
  const [refElement, setRefElement] = React.useState<HTMLDivElement | null>(
    null
  );
  return (
    <div
      className={`flex flex-col items-center px-2 py-2 text-gray-600 ${
        id === active ? "group z-10 transition-all" : ""
      }`}
      ref={setRefElement}
      data-tip
      data-for={`${name}-tp`}
      onMouseEnter={() => handleMouse(id)}
      onMouseLeave={() => handleMouse("")}
    >
      <img
        src={imageUrl}
        className="rounded-full h-28 mb-1 border-red-600 group-focus:border-2 group-hover:border-2 z-0 shadow-md shadow-gray-800"
      />
      {/* group-hover:opacity-100 group-hover:border-2 */}
      <p className="mt-1 text-xl text-center font-semibold group-hover:text-gray-800 transition-all">
        {name}
      </p>
      <p className="font-normal group-hover:text-gray-700 transition-all">
        {position}
      </p>
      <Tooltip profile={{ name, email, description }} direction={direction} />
    </div>
  );
};

export default ProfileComponent;
