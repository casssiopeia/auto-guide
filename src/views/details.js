import React from "react";
import { Header } from "../components/header";
import { Details } from "../components/details";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCarByModel } from "../store/selectors";

export const DetailsPage = () => {
  const { model } = useParams();
  const car = useSelector((state) => getCarByModel(state, model));

  return (
    <>
      <Header />
      {car ? <Details {...car} /> : <div>CAR NOT FOUND</div>}
    </>
  );
};
