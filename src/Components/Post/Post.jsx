import React from "react";
import "./Post.css";
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded";
function Post({ data }) {
  return (
    <>
      {data.map((data) => (
        <div key={data.id} className="post_container">
          <div className="post_heading">
            <h1>{data.post_heading}</h1>
            <RecommendRoundedIcon
              className="like"
              style={{
                color: "#EFA310",
                fontSize: "20px",
                cursor: "pointer",
                paddingRight: "5%",
              }}
            />
          </div>
          <p className="post_body">
            {data.post_body.body}
            <br />
            {data.post_body.p1}
            <br />
            {data.post_body.p2}
            <br />
            {data.post_body.p3}
          </p>
          <div className="footer">
            <div className="left">
              <span>{data.footer_left}</span> by anujgosalia
            </div>
            <div className="right">
              <p>
                {data.date} - {data.time} mins Read - {data.view}Views
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
