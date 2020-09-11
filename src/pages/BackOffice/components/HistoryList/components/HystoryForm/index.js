import React, { useEffect, useState } from "react";

import Head from "next/head";
import Input from "src/components/Input";
import path2 from "src/pathToback.js";
import style from "src/components/style";

const HistoryForm = (formType) => {
  const [events, setEvents] = useState([]);

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

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <Head>
        <meta content="noindex, nofollow" />
      </Head>
      <div className="formContainer">
        {events.map((event) => (
          <>
            <div className="groupInput">
              <Input value={event.nom}></Input>
              <Input value={event.date} type="date"></Input>
              <Input value={event.description}></Input>
              <Input value={event.image}></Input>
              <Input value={event.lieu}></Input>
              <Input value={event.heure}></Input>
            </div>
          </>
        ))}
      </div>
      <style jsx>{`
        .groupInput {
          display: flex;
        }
        .formContainer {
          display: flex;
          flex-direction: column;
          margin-bottom: ${style.large}
        }
        }
      `}</style>
    </>
  );
};

export default HistoryForm;
