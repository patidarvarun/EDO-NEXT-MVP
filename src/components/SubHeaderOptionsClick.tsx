import ModalView from "@/utils/modalView";
import { Fragment } from "react";

interface SubHeaderOptionsClickProps {
  openModal: {
    createLayer: boolean;
    deleteLayer: boolean;
  };
  optionValue: any;
  modalClose: (value: any) => void;
}
const CreateLayer = () => {
  return (
    <div className="px-4  bg-backgroundColor py-4">
      <div className="flex flex-col bg-backgroundColor">
        <label className="text-md text-sidebarFontColor mb-2">Layer name</label>
        <input type="text" className="rounded p-2" placeholder="Untitled" />
      </div>
    </div>
  );
};

const DeleteLayer = () => {
  return (
    <div className="px-4 bg-backgroundColor py-4">
      <div className="flex flex-col bg-backgroundColor">
        <p className="font-bold	w-[30rem] mb-4">
          Any contents on the layer you’re deleting will also be deleted. Make
          sure uou move content to another layer if necessary.
        </p>
        <label
          className="text-md text-sidebarFontColor mb-2"
          htmlFor="delLayer"
        >
          Select layer
        </label>
        <select id="delLayer" className="bg-white p-2 rounded">
          <option value="Embed code">Embed code</option>
        </select>
      </div>
    </div>
  );
};

const SubHeaderOptionsClick = ({
  openModal,
  modalClose,
  optionValue,
}: SubHeaderOptionsClickProps) => {
  const { createLayer, deleteLayer } = openModal;

  const handleModalClose = () => {
    modalClose(optionValue);
  };

  return (
    <Fragment>
      {createLayer && (
        <div className="z-10 fixed top-0 left-0 w-full h-full bg-[#000000cf] flex justify-center items-center">
          <ModalView
            header={{
              title: "Create layer",
              closeButtonFunction: handleModalClose,
            }}
            children={<CreateLayer />}
            footer={{
              isSingleButton: true,
              submitFunction: () => {},
              submitButtonText: "Create",
            }}
          />
        </div>
      )}
      {deleteLayer && (
        <div className="z-10 fixed top-0 left-0 w-full h-full bg-[#000000cf] flex justify-center items-center">
          <ModalView
            header={{
              title: "Delete layer",
              closeButtonFunction: handleModalClose,
            }}
            children={<DeleteLayer />}
            footer={{
              isSingleButton: true,
              submitFunction: () => {},
              submitButtonText: "Delete",
            }}
          />
        </div>
      )}
    </Fragment>
  );
};

export default SubHeaderOptionsClick;
