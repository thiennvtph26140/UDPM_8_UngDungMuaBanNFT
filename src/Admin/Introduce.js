import { Button } from "antd";
import LogoIntroduce from "../Assets/img/anh_introduce.png";
import { Link } from "react-router-dom";
const Introduce = () => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        minHeight: "100vh",
        display: "flex",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: "0px",
      }}
    >
      <div style={{ gridColumn: "span 6" }}>
        <div
          className="title"
          style={{ width: "600px", marginLeft: "90px", marginTop: "40px" }}
        >
          <h1
            style={{
              fontSize: "50px",
              textAlign: "left",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Khám phá, sưu tập và bán sản phẩm NFT
          </h1>
          
          <Button
            type="primary"
            shape="round"
            style={{
              height: "45px",
              width: "100px",
              backgroundColor: "#001529",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <span
                style={{ fontWeight: "bold", color: "white", fontSize: "15px" }}
              >
                Khám phá
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div style={{ gridColumn: "span 6" }}>
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
  );
};
export default Introduce;
