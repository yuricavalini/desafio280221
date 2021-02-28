import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Input from '../Input';
import { BiPlus, BiX } from 'react-icons/bi';

import { CustomButtom, ClosingButtom, CustomForm, FormTitle } from './styles';

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

Modal.setAppElement('#personModal');

export default function PersonModal() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [areaName, setAreaName] = useState('');

  const [rooms, setRooms] = useState([]);
  const [areas, setAreas] = useState([]);

  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    fetch('http://localhost:8080/areas')
      .then((res) => res.json())
      .then((data) => {
        isSubscribed && setAreas(data.areas);
      });
    fetch('http://localhost:8080/rooms')
      .then((res) => res.json())
      .then((data) => {
        isSubscribed && setRooms(data.rooms);
      });

    return () => (isSubscribed = false);
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    clearForm();
  }

  const createPerson = () => {
    const url = 'http://localhost:8080/person';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        lastName,
        roomName,
        areaName,
      }),
    })
      .then(() => {
        alert('New Person Registered Successfully!');
        clearForm();
      })
      .catch(() => {
        alert('Something went wrong!');
      });
  };

  function clearForm() {
    setName('');
    setLastName('');
    setRoomName('');
    setAreaName('');
  }

  function handleCreatePerson(e) {
    e.preventDefault();

    createPerson();
  }

  return (
    <div>
      <CustomButtom flex="flex" onClick={openModal}>
        <BiPlus /> <span>Add Person</span>
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
        <FormTitle>New Person</FormTitle>

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
            name="lastName"
            label="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />

          <div>
            <label htmlFor="Room">Room</label>
            <select
              onChange={({ target: { value } }) => {
                setRoomName(value);
              }}
            >
              <option value="">Select an option</option>

              {rooms
                ? rooms.map((room) => {
                    return (
                      <option key={room.id} value={room.name}>
                        {room.name}
                      </option>
                    );
                  })
                : null}
            </select>
          </div>

          <div>
            <label htmlFor="Area">Area</label>
            <select
              onChange={({ target: { value } }) => {
                setAreaName(value);
              }}
            >
              <option value="">Select an option</option>

              {areas
                ? areas.map((area) => {
                    return (
                      <option key={area.id} value={area.name}>
                        {area.name}
                      </option>
                    );
                  })
                : null}
            </select>
          </div>
          <CustomButtom type="submit" margin="0.5em" marginTop="1em">
            Submit
          </CustomButtom>
        </CustomForm>
      </Modal>
    </div>
  );
}
