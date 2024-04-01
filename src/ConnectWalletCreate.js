import { useContext } from "react";
//import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connectTheWallet } from "./utility/common";
import { ReactSession } from "react-client-session";
//import { DomainContext } from "./Context/DomainContext";
import { WalletContext } from "./Context/WalletContext";
import { Button } from "antd";
//import { NetworkContext } from "./Context/NetworkContext";

const ConnectWalletCreate = (props) => {
    const navigate = useNavigate();
    const { setWalletId } = useContext(WalletContext);
    const solanaConnect = async () => {
        ReactSession.set("connected_wallet", '');
        console.log('clicked solana connect');
        const resp = await connectTheWallet();
        //console.log(resp);
        ReactSession.set("connected_wallet", resp.addr);
        setWalletId(resp.addr);
        navigate(props.navigateTo);
    }
    return (
        <div>
            <div className="right-al-container mb-2">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2 className="section-heading" style={{ marginTop: "60px", marginBottom: "20px" }}>{props.heading}</h2>
                            <p className="p-para-light" style={{ marginTop: "30px", marginBottom: "50px", fontSize: "1.2em" }}>{props.subHeading}</p>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectWalletCreate;