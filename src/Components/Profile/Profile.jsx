import React from "react";
import "./Profile.css";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DiamondIcon from '@mui/icons-material/Diamond';
function Profile() {
  return (
    <>
      <div className="profile_container">
        <div className="header_image">
          <img
            src="https://images.unsplash.com/photo-1450149632596-3ef25a62011a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJpZGdlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=" please connect the internet to see the pic"
          />
        </div>

        <div className="middle_info">
          <div className="profile_pic">
            <img
              src="https://bl-i.thgim.com/public/news/z029yz/article66743699.ece/alternates/FREE_385/BL1704_Brand_Anuj%20Gosalia%2C%20CEO-%20Terribly%20Tiny%20Tales.jpg"
              alt="profile pic"
            />
          </div>
          <div className="right_profile">
            <div className="profile_name">
              <h3>Anuj Gosalia</h3>
              <DiamondIcon style={{ color: "purple", fontSize:"15px", marginLeft:"10px"}} />
              <CheckCircleRoundedIcon style={{ color: "green" ,fontSize:"15px", marginLeft:"10px"}}/>
            </div>
            <div className="follower_following">
              <div className="left_follow">
                <span className="followers">6482 </span>
                <p>Followers</p>
              </div>
              <div className="right_follow">
                <span className="following">245 </span>
                <p>Followers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info_footer">
          <p className="position">Co-founder & CEO at Terribly Tiny Tales</p>
          <p className="link">http://www.instagram.com/anujgosalia</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
