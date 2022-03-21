import React, { useContext } from "react";
import Button from "../Button";
import { ModalContext } from "../context/ModalContext";

export default function PricingCard({
  name,
  price,
  benefits,
  mostPopular = false,
  packageName,
}) {
  const { handleOpenModal, setTicketPackage, setButtonClicked } = useContext(ModalContext);

  return (
    <div className="h-max flex flex-col lg:w-[30%] mt-8 lg:mt-0">
      <div className="h-[200px] bg-card w-full flex flex-col justify-between items-center py-4 text-center rounded-t-lg">
        <h1 className="text-3xl font-black">{name}</h1>
        <h1 className="text-2xl font-bold">{`$${price}`}</h1>
        <Button
          onClick={() => {
            handleOpenModal();
            setTicketPackage(packageName);
            setButtonClicked(() => ({[packageName]: true}))
          }}
        >
          Book Now
        </Button>
      </div>
      <div className="h-[290px] bg-cardAlt w-full flex flex-col justify-center items-center">
        {mostPopular && (
          <div className="py-4 bg-brand text-2xl text-center font-bold font-logo w-full mb-auto">
            Most Popular
          </div>
        )}
        {benefits.map((i, key) => {
          return (
            <p
              key={key + i}
              className="text-center text-lg my-2 w-11/12 mx-auto mt-auto mb-auto"
            >
              {i}
            </p>
          );
        })}
      </div>
    </div>
  );
}
