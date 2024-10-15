import {useState} from "react";
import CreateCabinForm from "./CreateCabinForm.jsx";
import Button from "../../ui/Button.jsx";
import Modal from "../../ui/Modal.jsx"

function AddCabin() {
  return <Modal>
    <Modal.Open opens='cabin-form'>
      <Button>Add new Cabin</Button>
    </Modal.Open>
    <Modal.Window name="cabin-form">
      <CreateCabinForm />
    </Modal.Window>

    {/*<Modal.Open opens="table">*/}
    {/*  <Button>Show table</Button>*/}
    {/*</Modal.Open>*/}
    {/*<Modal.Window name="table">*/}
    {/*  <CreateCabinForm />*/}
    {/*</Modal.Window>*/}
  </Modal>
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//
//   return (
//   <div>
//     <Button onClick={() => setIsOpenModal((isOpen) => !isOpen)}>
//       Add new cabin
//     </Button>
//
//     {isOpenModal &&
//       <Modal onClose={() => setIsOpenModal(false)}>
//         <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//       </Modal>
//     }
//   </div>
//   );
// }

export default AddCabin;
