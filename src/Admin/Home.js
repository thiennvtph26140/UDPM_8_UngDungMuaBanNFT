import React, { useState } from "react";
import logoDuAn from "../Assets/img/logo_DuAn_dark.png";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ListNFT from "../ListNFT";
import {
  Network,
  ShyftSdk,
  signAndSendTransactionWithPrivateKeys,
} from "@shyft-to/js";
const { Header, Content, Footer } = Layout;

const Home = () => {
  const storedWallet = localStorage.getItem("wallet");
  const walletAddress = JSON.parse(storedWallet);
  const network = Network.Devnet;
  const apiKey = "4e-q-1lK14tprSuq";
  const privateKey =
    "2BnF9Cp8cNi8fJqaCQvzydRrh9QpTiRYh8yLEHqtKARizvQagJEgJHe39inNz8QyW9DmC5TmfPCTkdEDW9M2mBW8";

  const shyft = new ShyftSdk({ apiKey: apiKey, network: Network.Devnet });

  (async () => {
    const balance = await shyft.wallet.getBalance({ wallet: walletAddress });
    console.log("balance: ", balance);
  })();

  (async () => {
    const marketplaceInfo = await shyft.marketplace.create({
      creatorWallet: walletAddress,
    });
    console.log("market place info", marketplaceInfo);

    // Get using Shyft API

   
  })();

  return (
    <div style={{ backgroundColor: "gray", minHeight: "100vh" }}>
      <span>Trang chủ</span>
      <br></br>
      <span>địa chỉ ví: {walletAddress}</span>
    </div>
  );
};
export default Home;
