import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "",
    address: "Meetmestreet 10, 12876 Meetup City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetupsPage = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
};

export default AllMeetupsPage;
