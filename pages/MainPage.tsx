"use client"

import React from "react";
import Page from "../components/sub/Page";
import "../app/globals.css"
import TransitionEffect from "@/components/sub/TransitionEffect";
const MainPage = () => {
  return (
    <>
    <TransitionEffect/>
    <Page>
      <h1>Home</h1>
    </Page>

    </>
  );
};

export default MainPage;
