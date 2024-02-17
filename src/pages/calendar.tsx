import Head from "next/head";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import "dotenv";

const EventCalendar = () => {
  return (
    <>
      <Head>
        <title>Calendar</title>
        <meta name="description" content="NRJH Orchestra Booster Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ zIndex: 0 }}>
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          googleCalendarApiKey={process.env.GCAL_API_KEY}
          events={{
            googleCalendarId: process.env.GCAL_ID,
            className: "gcal-event",
          }}
          height={"100vh"}
        />
      </div>
    </>
  );
};

export default EventCalendar;
