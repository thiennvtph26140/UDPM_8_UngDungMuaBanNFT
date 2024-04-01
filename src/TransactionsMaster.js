import { useContext } from "react";
import { WalletContext } from "./Context/WalletContext";
import ConnectWalletCreate from "./ConnectWalletCreate";
import Transactions from "./Transactions";
const TransactionsMaster = () => {
    const { walletId } = useContext(WalletContext);    
    if(!walletId)
        return ( <ConnectWalletCreate heading="Lịch sử giao dịch của bạn" subHeading="Kết nối ví của bạn để nhận thông tin chi tiết về danh sách và giao dịch của bạn" navigateTo="/transactions" /> );
    else
        return ( <Transactions />);
}
 
export default TransactionsMaster;