import "./style.css";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import path2 from "src/pathToback.js";

const HistoryBdiPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

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

  return (
    <div className="espacebloc">
      {events.map((event) => (
        <Link
          href={{
            pathname: "/bdi",
            query: { name: event.nom },
          }}
        >
          <div className="bloc">
            <div className="descriptif">
              <p>#{event.nom}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HistoryBdiPage;
