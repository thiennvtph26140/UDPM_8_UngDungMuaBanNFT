import { useContext } from "react";
import ConnectWalletCreate from "./ConnectWalletCreate";
import { WalletContext } from "./Context/WalletContext";
import Transfer from "./Transfer";

const TransferMaster = () => {
    const { walletId } = useContext(WalletContext); 
       
    if(!walletId)
        return (<ConnectWalletCreate heading="Chuyển NFT giữa các ví" subHeading="Kết nối ví của bạn để chuyển một hoặc nhiều NFT" navigateTo="/transfer" /> );
    else
        return (<Transfer />);
}
 
export default TransferMaster;