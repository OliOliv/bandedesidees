import "moment/locale/fr";
import { Table } from "reactstrap";

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

const HistoryForm = (props) => {
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
        <div className="tableContainer">
          <Table responsive>
            <thead>
              <tr className="raw">
                <th>Nom</th>
                <th>Date</th>
                <th>Description</th>
                <th>Image</th>
                <th>Lieu</th>
                <th>Heure</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr className="raw" key={event.nom}>
                  <td>
                    <div>{event.nom}</div>
                  </td>
                  <td>
                    <div>{Moment(event.date_soiree).format("L")}</div>
                  </td>
                  <td>
                    <div className="bigContainer">{event.description}</div>
                  </td>
                  <td>
                    <div className="bigContainer">{event.image}</div>
                  </td>
                  <td>
                    <div>{event.lieu}</div>
                  </td>
                  <td>
                    <div>{event.heure}</div>
                  </td>

                  <td>
                    <div className="iconsContainer">
                      <img onClick={() => handleUpdate(event)} src={edit}></img>
                      <img
                        onClick={() => handleDelete(event)}
                        src={deleteIcon}
                      ></img>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <style jsx>{`
        th,
        td {
          text-align: left;
          padding: 1rem;
        }

        .iconsContainer img {
          width: 1rem;
          margin: 0 0.5rem;
          cursor: pointer;
        }

        .bigContainer {
          width: 10rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tableContainer {
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          text-align: center;
          display: grid;
          margin-bottom: 3rem;
        }
      `}</style>
    </>
  );
};

export default HistoryForm;
