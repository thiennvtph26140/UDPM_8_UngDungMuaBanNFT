import React, { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import logoDuAn from "./Assets/img/logo_DuAn_dark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Network, ShyftSdk } from "@shyft-to/js";
export function Header() {
  const [walletAddress, setwalletAddress] = useState(null);
  const [data, setData] = useState(null);
  const [netWrk, setNetWork] = useState("devnet");
  const xAPIKey = "4e-q-1lK14tprSuq";

  const solanaConnect = async () => {
    const { solana } = window;
    if (!solana) {
      alert("Bạn chưa tải ví Solana");
    }
    try {
      const network = "devnet";
      const phantom = new PhantomWalletAdapter();
      await phantom.connect();
      const rpcUrl = clusterApiUrl(network);
      const connection = new Connection(rpcUrl, "confirmed");
      const wallet = {
        address: phantom.publicKey.toString(),
      };

      if (wallet.address) {
        //we will get the wallet address here, we can assign it to a state variable
        setwalletAddress(wallet.address);
        const accountInfo = await connection.getAccountInfo(
          new PublicKey(wallet.address),
          "confirmed"
        );
        console.log(wallet.address);
        setwalletAddress(wallet.address);
        localStorage.setItem("walletAddress", JSON.stringify(walletAddress));
        message.success("kết nối ví thành công")
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const shyft = new ShyftSdk({
      apiKey: xAPIKey,
      network: Network.Devnet,
    });

    const fetchData = async () => {
      const token = await shyft.wallet.getAllTokenBalance({
        wallet: walletAddress,
      });
      setData(token);
    };

    if (walletAddress) {
      fetchData();
    }
  }, [walletAddress]);


  return (
    <div
      className="header"
      style={{
        backgroundColor: "#001529",
        display: "flex",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: "10px",
        height: "80px",
      }}
    >
      <div style={{ gridColumn: "span 2" }}>
        <img
          className="logo"
          width="170px"
          src={logoDuAn}
          alt="ảnh logo"
          style={{ alignContent: "center" }}
        />
      </div>
      <div style={{ gridColumn: "span 3" }}></div>
      <div style={{ gridColumn: "span 3", marginTop: "20px" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "20px",
              padding: "20px",
            }}
          >
            Trang chủ
          </span>
        </Link>

        <Link  to="/introduce" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "20px",
              padding: "20px",
            }}
          >
            Giới thiệu
          </span>
        </Link>
      </div>
      <div style={{ gridColumn: "span 4" }}>
        <Button
          type="primary"
          shape="round"
          onClick={solanaConnect}
          style={{ height: "45px", width: "100px", marginTop: "20px" }}
        >
          <span
            style={{ fontWeight: "bold", color: "white", fontSize: "15px" }}
          >
            Kết nối ví
          </span>
        </Button>
        <FontAwesomeIcon
          icon={faShoppingCart}
          style={{ marginLeft: "50px", height: "25px", color: "white" }}
        />
      </div>
    </div>
  );
}
