import "moment/locale/fr";

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useEffect, useState } from "react";

import Head from "next/head";
import Moment from "moment";
import deleteIcon from "../assets/delete.png";
import edit from "../assets/edit.png";
import path2 from "src/pathToback.js";
import style from "src/components/style";

const HistoryForm = (formType, props) => {
  const [events, setEvents] = useState([]);
  const [modal, setModal] = useState(false);
  const { className } = props;

  const toggle = () => setModal(!modal);
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
    console.log(values);
    // const res = await fetch(path2 + "events/update", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // });

    // if (res.status === 201) {
    // }
    // if (res.status === 401) {
    // }
  };

  const deleteEvent = async (event) => {
    console.log(event);
    const res = await fetch(path2 + `events/deleteevent/${event}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 201) {
      getEvents();
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
              <img onClick={toggle} src={edit}></img>
              <img
                onClick={() => deleteEvent(event.idSoiree)}
                src={deleteIcon}
              ></img>
            </div>
          </div>
        ))}

        <div>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button onClick={toggle}>Do Something</Button>{" "}
              <Button onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>

      <style jsx>{`
        .list {
          display: flex;
        }

        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        border: 1px solid #ddd;
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
