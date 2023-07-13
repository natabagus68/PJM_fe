import { Dialog } from "@material-tailwind/react";
import { XIcon } from "lucide-react";

export const ModalImage = ({ image, open = false, handleChange = null }) => {
  return (
    <>
      <Dialog open={open} handler={handleChange} onClick={handleChange}>
        <div
          className={`w-full h-[696px] bg-cover bg-cente bg-no-repeat flex justify-end `}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </Dialog>
    </>
  );
};
