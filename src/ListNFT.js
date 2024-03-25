import { Network, ShyftSdk } from "@shyft-to/js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { message } from "antd";
import { Link } from "react-router-dom";

const { useState, useEffect } = require("react");

const ListNFT = () => {
  const [walletAddress, setwalletAddress] = useState(null);
  const [data, setData] = useState(null);
  const [netWrk, setNetWork] = useState("devnet");
  const xAPIKey = "4e-q-1lK14tprSuq"; //Your X-API-KEY here

  // /code for connecting wallet
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
  return(
    <div>
      <div className="container py-3">
        <div className="card border border-primary p-5">
          <h2 className="display-4 text-center">
            List All Your Fungible Tokens using Shyft APIs
          </h2>
          {!walletAddress && (
            <div>
              <h4 className="text-center py-3 text-primary">
                Connect Your Wallet to get started
              </h4>
              <div className="text-center pt-3">
                <button
                  className="btn btn-primary px-4 py-2"
                  onClick={solanaConnect}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="py-3">
          <div className="w-25 mx-auto">
            <select
              name="network"
              className="form-control form-select"
              id=""
              onChange={(e) => setNetWork(e.target.value)}
            >
              <option value="devnet">Devnet</option>
              <option value="testnet">Testnet</option>
              <option value="mainnet-beta">Mainnet Beta</option>
            </select>
          </div>
          <div className="card mt-3 py-3 border-0">
            <table className="table w-75 mx-auto text-center">
              <thead>
                <tr>
                  <td className="w-25 border-2">Token Image</td>
                  <td className="w-50 border-2">Token Details</td>
                  <td className="w-25 border-2">Balance</td>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((tokn) => (
                    <tr key={tokn.address}>
                      <td className="w-25 border-2">
                        <img
                          src={tokn.info.image}
                          className="img-fluid w-75 mx-auto"
                          alt=""
                        />
                      </td>
                      <td className="w-50 border-2">
                        <Link
                          to={`/view-details?token_address=${tokn.address}&network=${netWrk}`}
                          target="_blank"
                        >
                          <h4>{tokn.info.name}</h4>
                          {tokn.address}
                        </Link>
                      </td>
                      <td className="w-25 border-2">
                        {tokn.balance} {tokn.info.symbol}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListNFT;
