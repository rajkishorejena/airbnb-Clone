import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { infoCardList } from "../Assets/Other/InfoCardList";
import InfoCard from "../Components/InfoCard";
const Search = () => {
  const { state } = useLocation();
  const { location, noOfGuest, startDate, endDate } = state;
  const formattedStarDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStarDate} - ${formattedEndDate}`;
  const buttonList = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filter",
  ];
  const selectionButton = (text) => {
    return (
      <p
        className="
        px-4 py-2 border rounded-full 
        cursor-pointer hover:shadow-lg
        active:scale-95 active:bg-gray-200
        transition translate duration-100 ease-out
      "
      >
        {text}
      </p>
    );
  };

  // console.log("state", state);

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuest} guest{" "}
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays of {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {buttonList.map((value) => {
              return selectionButton(value);
            })}
          </div>
          {infoCardList &&
            infoCardList.map((item) => {
              return (
                <InfoCard
                  title={item.title}
                  description={item.description}
                  img={item.img}
                  location={item.location}
                  price={item.price}
                  total={item.total}
                  star={item.star}
                  key={item.img}
                />
              );
            })}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
