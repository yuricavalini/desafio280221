import { useState } from 'react';
import Modal from 'react-modal';
import Input from '../Input';
import { BiPlus, BiX } from 'react-icons/bi';

import {
  CustomButtom,
  ClosingButtom,
  CustomForm,
  FormTitle,
} from '../PersonModal/styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    width: '380px',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    zIndex: '10',
  },
};

Modal.setAppElement('#areaModal');

export default function AreaModal() {
  const [name, setName] = useState('');
  const [occupancy, setOccupancy] = useState('');

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const createArea = () => {
    const url = 'http://localhost:8080/areas';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        occupancy,
      }),
    })
      .then(() => {
        alert('New Area Registered Successfully!');
        clearForm();
      })
      .catch(() => {
        alert('Something went wrong!');
      });
  };

  function clearForm() {
    setName('');
    setOccupancy('');
  }

  function handleCreatePerson(e) {
    e.preventDefault();

    createArea();
  }

  return (
    <div>
      <CustomButtom flex="flex" onClick={openModal}>
        <BiPlus /> <span>Add Area</span>
      </CustomButtom>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ClosingButtom onClick={closeModal}>
          <BiX />
        </ClosingButtom>
        <FormTitle>New Area</FormTitle>

        <CustomForm onSubmit={handleCreatePerson}>
          <Input
            name="name"
            label="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <Input
            name="occupancy"
            label="Occupancy"
            value={occupancy}
            onChange={(e) => {
              setOccupancy(e.target.value);
            }}
          />
          <CustomButtom type="submit" margin="0.5em" marginTop="1em">
            Submit
          </CustomButtom>
        </CustomForm>
      </Modal>
    </div>
  );
}
