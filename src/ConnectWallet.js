import { useContext } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connectTheWallet } from "./utility/common";
//import { DomainContext } from "./Context/DomainContext";
import { WalletContext } from "./Context/WalletContext";
//import { NetworkContext } from "./Context/NetworkContext";
import { ReactSession } from "react-client-session";
import { Button } from "antd";
import LogoIntroduce from "../src/resources/images/anh_introduce.png";

const ConnectWallet = () => {
  const navigate = useNavigate();
  const { setWalletId } = useContext(WalletContext);
  const solanaConnect = async () => {
    ReactSession.set("connected_wallet", "");
    console.log("clicked solana connect");
    const resp = await connectTheWallet();
    //console.log(resp);
    ReactSession.set("connected_wallet", resp.addr);
    setWalletId(resp.addr);
    navigate("/wallet/" + resp.addr);
  };
  return (
    <div>
      <div className="right-al-container mb-2">
        <div className="container-lg">
          <div className="row">
            <div className="col-8 col-md-6">
              <h2
                className="section-heading"
                style={{ marginTop: "60px", marginBottom: "20px" }}
              >
                Khám phá, sưu tập và bán sản phẩm NFT
              </h2>
              <p
                className="p-para-light"
                style={{
                  marginTop: "30px",
                  marginBottom: "50px",
                  fontSize: "1.2em",
                }}
              >
                Khám phá những sản phẩm NFTs nổi bật trong mọi chủ đề cuộc sống,
                sáng tạo NFT và bán chúng
              </p>
              <Button
                type="primary"
                shape="round"
                style={{
                  height: "45px",
                  width: "100px",
                  backgroundColor: "#001529",
                }}
                onClick={solanaConnect}
              >
 
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      fontSize: "15px",
                    }}
                  >
                    Khám phá
                  </span>
  
              </Button>
            </div>
            <div className="col-4 col-md-2">
            <div style={{marginTop:"50px"}}>
        <img
            className="LogoIntroduce"
            width="450px"
            src={LogoIntroduce}
            alt="ảnh logo"
            style={{ alignContent: "center" }}
          />
        </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ConnectWallet;
