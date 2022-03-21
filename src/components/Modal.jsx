import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModalContext } from "./context/ModalContext";
import { anim } from "./utils/Animations";

export default function Modal() {
  const {
    modal,
    setModal,
    ticketPackage,
    setTicketPackage,
    buttonClicked,
    setButtonClicked,
  } = useContext(ModalContext);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [price, setPrice] = useState(87.99);

  const [packageBenefits, setPackageBenefits] = useState([
    "Festival Pass",
    "Ubiquitous Bar Pass",
  ]);

  const styled =
    "!bg-white !text-brand ease-in duration-300 border-b-2 border-b-brand";
  const noStyle = "";

  useEffect(() => {
    handleTicketPrice(ticketPackage, ticketQuantity);
  }, [ticketPackage, ticketQuantity]);

  const handleTicketPrice = (pack, quantity) => {
    if (pack === "regular") {
      setPrice(87.99 * Number(quantity));
      setPackageBenefits(["Festival Pass", "Ubiquitous Bar Pass"]);
    } else if (pack === "vip") {
      setPrice(239.99 * Number(quantity));
      setPackageBenefits([
        "Festival Pass",
        "VIP Ubiquitous Bar Pass",
        "Accomadation Included",
        "Transport Included",
      ]);
    } else {
      setPrice(4600 * Number(quantity));
      setPackageBenefits([
        "VIP Festival Pass",
        "VVIP Ubiquitous Bar Pass",
        "Backstage Pass",
        "Luxury Transport",
        "Luxury Suite at The Four Seasons Hotel",
      ]);
    }
  };

  const handlePackage = (e) => {
    setTicketPackage(e.target.name);
    setButtonClicked(() => ({ [e.target.name]: true }));
    setTicketQuantity(1);
  };

  const decrement = () => {
    setTicketQuantity(ticketQuantity > 1 ? ticketQuantity - 1 : 1);
  };

  const increment = () => {
    setTicketQuantity(ticketQuantity + 1);
  };

  const handleCloseModal = () => setModal(false);

  return (
    <AnimatePresence>
      {modal && (
        <div className="absolute">
          <motion.div
            variants={anim.scaleUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="z-30 w-screen h-screen fixed bg-[rgba(0,0,0,0.7)]"
            onClick={handleCloseModal}
          />
          <motion.div
            variants={anim.scaleUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed z-40 flex flex-col h-max xl:w-[50vw] md:w-[70vw] w-11/12 rounded py-6 px-6 top-0 left-0 right-0 bottom-0 m-auto bg-card"
          >
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h1 className="font-logo logo text-2xl md:text-3xl">
                  Ubiquitous
                </h1>
                <h1
                  className="font-main font-black logo text-2xl xl:text-4xl"
                  onClick={handleCloseModal}
                >
                  X
                </h1>
              </div>

              <div className="w-full flex flex-row justify-between ">
                <div className="flex flex-col w-full md:w-[59%] lg:w-[45%] lg:max-w-[300px]">
                  <div className="flex flex-row mx-auto mb-8">
                    <button
                      name="regular"
                      className={`modal-btn mr-1 lg:!px-6 ${
                        buttonClicked.regular ? styled : noStyle
                      }`}
                      onClick={handlePackage}
                    >
                      Regular
                    </button>
                    <button
                      name="vip"
                      className={`modal-btn mr-1 md:!px-8 ${
                        buttonClicked.vip ? styled : noStyle
                      }`}
                      onClick={handlePackage}
                    >
                      VIP
                    </button>
                    <button
                      name="royalty"
                      className={`modal-btn md:!px-5 ${
                        buttonClicked.royalty ? styled : noStyle
                      }`}
                      onClick={handlePackage}
                    >
                      Royalty
                    </button>
                  </div>

                  <div className="flex flex-col">
                    <input
                      type="text"
                      className="modal-btn w-full"
                      placeholder="Card Holder"
                    />
                    <input
                      type="text"
                      className="modal-btn w-full mt-1"
                      placeholder="Card Number"
                    />
                    <div className="flex flex-row mt-1">
                      <input
                        type="number"
                        className="modal-btn w-8/12 mr-1"
                        placeholder="Expiry Date"
                      />
                      <input
                        type="number"
                        className="modal-btn w-4/12"
                        placeholder="CVC"
                      />
                    </div>
                    <input
                      type="text"
                      className="modal-btn w-full mt-1 xl:mt-8"
                      placeholder="Email"
                    />

                    <div className="flex flex-row text-black text-center mt-4 xl:mt-8 mb-1">
                      <button
                        name="decrement"
                        className="h-8 w-5 cursor-pointer  border-none bg-[#e7e7e7]"
                        onClick={decrement}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="h-8 w-6 bg-white text-center"
                        value={ticketQuantity}
                        onChange={(e) => {
                          setTicketQuantity(e.target.value);
                        }}
                      />
                      <button
                        name="increment"
                        className="h-8 w-5 cursor-pointer border-none bg-[#e7e7e7]"
                        onClick={increment}
                      >
                        +
                      </button>
                    </div>
                    <p className="mb-8 md:mb-4 xl:mb-8">Quantity</p>
                    <p className="text-xl">
                      <span className="font-black">{ticketQuantity}</span>
                      {ticketQuantity > 1 ? " Tickets" : " Ticket"}
                    </p>
                    <h1 className="text-2xl xl:text-4xl font-bold">
                      Total:{" "}
                      <span className="font-black">
                        ${parseFloat(price).toFixed(2)}
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="hidden md:flex flex-col md:w-4/12 lg:w-6/12 text-center items-center">
                  <h1 className="text-2xl xl:text-3xl font-black text-brand md:mb-6 xl:mb-16">
                    {ticketPackage === "vip"
                      ? ticketPackage.toUpperCase()
                      : ticketPackage.charAt(0).toUpperCase() +
                        ticketPackage.slice(1)}{" "}
                    Package
                  </h1>
                  {packageBenefits.map((i, key) => {
                    return (
                      <p key={key + i} className="mb-6 font-bold xl:text-lg">
                        {i}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <button className="mt-4 rounded-lg py-1 font-black bg-brand w-full mx-auto text-white">
              Submit
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
