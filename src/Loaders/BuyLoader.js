const BuyLoader = (props) => {
    return ( 
        <div>
            <div className="full-overlay">
                <div className="list-square" style={{height: "180px"}}>
                    <div className='text-center p-1'>
                        {/* <img src={props.listingURI} alt="nftloader" style={{width: "50%"}}/> */}
                        <p className="p-para py-2">Bạn chắc chắn muốn mua không ?</p>
                        
                        
                        <div className="pt-1">
                            <button className="btn-solid-grad" onClick={() => props.buyNow(props.nfAddr)}>Có</button>
                            <button className="btn-solid-grad" onClick={props.closePopupList}>Không</button>
                        </div>
                        <div className="p-para text-danger">{props.errorMsgBuy}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BuyLoader;