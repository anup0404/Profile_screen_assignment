import React from "react";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import "./Icon.css";
function Icon() {
  return (
    <div className="icon">
      <StarsRoundedIcon
        className="icon1"
        style={{ color: "#6FC2D1", fontSize: "15px" }}
      />
      <p>125</p>
      <RecommendRoundedIcon
        className="icon1"
        style={{ color: "#EFA310", fontSize: "15px" }}
      />
      <p>12</p>
      <RemoveRedEyeIcon
        className="icon1"
        style={{ color: "#848484", fontSize: "15px" }}
      />
      <p>57.8K</p>
      <FavoriteIcon
        className="icon1"
        style={{ color: "#BB2857", fontSize: "15px" }}
      />
      <p>26.0K</p>
    </div>
  );
}

export default Icon;
