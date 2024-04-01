import { useContext } from "react";
import { WalletContext } from "./Context/WalletContext";
import ConnectWalletCreate from "./ConnectWalletCreate";
import ListedNFTs from "./ListedNfts";
const MyListingsMaster = () => {
    const { walletId } = useContext(WalletContext); 
    if(!walletId)
        return ( <ConnectWalletCreate heading="Bộ sưu tập NFT" subHeading="Kết nối ví của bạn để xem tất cả danh sách của bạn trên thị trường" navigateTo="/my-listings" /> );
    else
        return ( <ListedNFTs />);
}
 
export default MyListingsMaster;