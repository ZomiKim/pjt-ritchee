import React from "react";
import { Route, Routes } from "react-router-dom";
import EventView from "./EventView";

function Event() {
  return (
    <>
      <div>Event</div>

      <Routes>
        <Route path="eventview/:id" element={<EventView />} />
      </Routes>
    </>
  );
}

export default Event;
