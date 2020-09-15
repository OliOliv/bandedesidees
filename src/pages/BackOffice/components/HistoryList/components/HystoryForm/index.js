import "moment/locale/fr";

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useEffect, useState } from "react";

import Head from "next/head";
import Moment from "moment";
import deleteIcon from "../assets/delete.png";
import edit from "../assets/edit.png";
import path2 from "src/pathToback.js";
import style from "src/components/style";
import DeleteModal from "./components/DeleteModal";
import UpdateModal from "./components/UpdateModal";

const HistoryForm = (formType, props) => {
  const [events, setEvents] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const [chosenEvent, setChosenEvent] = useState(null);

  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

  const toggleUpdateModal = () => {
    setUpdateModal(!updateModal);
  };

  const getEvents = async function () {
    const res = await fetch(path2 + `events/getevents`);
    if (res.status === 201) {
      const data = await res.json();
      const events = data.allEvents;
      setEvents(events);
    }
    if (res.status !== 201) {
      Router.push("/404");
    }
  };

  const updateEvent = async (values) => {
    console.log("les valeurs qu'on envoie là", values);
    const res = await fetch(path2 + "events/updateevent", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.status === 201) {
      getEvents();
      toggleUpdateModal(false);
    }
    if (res.status === 401) {
    }
  };

  const handleUpdate = (event) => {
    setChosenEvent(event);
    toggleUpdateModal(true);
  };

  const handleDelete = (event) => {
    setChosenEvent(event);
    toggleDeleteModal(true);
  };

  const deleteEvent = async (event) => {
    const res = await fetch(path2 + `events/deleteevent/${event}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 201) {
      getEvents();
      toggleDeleteModal(false);
    }
    if (res.status === 401) {
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  console.log(chosenEvent);
  return (
    <>
      <Head>
        <meta content="noindex, nofollow" />
      </Head>
      <div className="listContainer">
        <DeleteModal
          chosenEvent={chosenEvent}
          toggleDeleteModal={toggleDeleteModal}
          deleteModal={deleteModal}
          deleteEvent={deleteEvent}
        />
        <UpdateModal
          chosenEvent={chosenEvent}
          toggleUpdateModal={toggleUpdateModal}
          updateModal={updateModal}
          updateEvent={updateEvent}
        />
        <h3>Soirées</h3>
        {events.map((event) => (
          <div className="raw" key={event.nom}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="defaultContainer">{event.nom}</div>
                  </td>
                  <td>
                    <div className="defaultContainer">
                      {Moment(event.date_soiree).format("L")}
                    </div>
                  </td>
                  <td>
                    <div className="bigContainer">{event.description}</div>
                  </td>
                  <td>
                    <div className="bigContainer">{event.image}</div>
                  </td>
                  <td>
                    <div className="bigContainer">{event.lieu}</div>
                  </td>
                  <td>
                    <div className="bigContainer">{event.heure}</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="iconsContainer">
              <img onClick={() => handleUpdate(event)} src={edit}></img>
              <img onClick={() => handleDelete(event)} src={deleteIcon}></img>
            </div>
          </div>
        ))}

        <div></div>
      </div>

      <style jsx>{`
        .list {
          display: flex;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
          border: 1px solid #ddd;
        }

        .listContainer {
          margin-bottom: 4rem;
        }

        .iconsContainer {
          margin-left: 3rem;
          display: flex;
        }

        .iconsContainer img {
          margin-right: 1rem;
          width: 1rem;
        }

        .raw {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .raw tr {
          display: flex;
          width: 100%;
        }

        .bigContainer {
          width: 10rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-left: 1rem;
        }

        .defaultContainer {
          min-width: 2rem;
          max-width: 6rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
};

export default HistoryForm;
