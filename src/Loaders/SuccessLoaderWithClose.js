import success from '../resources/images/loader/success.gif';
const SuccessLoaderWithClose = (props) => {
    return ( 
    <div>
        <div className="full-overlay">
            <div className="loading-square px-1" style={{width: "250px", height: "220px",}}>
                <div className='text-center pt-4'>
                    <img src={success} alt="successful" style={{width: "40%"}}/>
                <p className="p-para pt-2" style={{lineHeight: "0.1em"}}>Thành công!</p>
                <div className="subtext-msg">Đang chờ xác nhận blockchain...Vui lòng đợi</div>
                <button className="faded-text-closer" onClick={() => props.closer(false)}>Close</button>
                </div>
            </div>
        </div>
    </div> 
    );
    // <i className="fas fa-circle-notch fa-spin"></i>
}
 
export default SuccessLoaderWithClose;