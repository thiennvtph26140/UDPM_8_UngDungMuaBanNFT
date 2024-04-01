import { useContext } from "react";
import { WalletContext } from "./Context/WalletContext";
import ConnectWalletCreate from "./ConnectWalletCreate";
import Statistics from "./Statistics";
const StatsMaster = () => {
    const { walletId } = useContext(WalletContext);    
    if(!walletId)
        return (<ConnectWalletCreate heading="Thống kê thị trường" subHeading="Kết nối ví của bạn để lấy số liệu thống kê thị trường" navigateTo="/statistics" /> );
    else
        return (<Statistics />);
}
 
export default StatsMaster;