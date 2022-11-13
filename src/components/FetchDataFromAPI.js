import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchDataFromAPI = ({ cat }) => {
  const [Data, setData] = useState("");

  useEffect(() => {
    const FetchData = async () => {
      await axios
        .get(
          cat
            ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=54ed27d0cc844bbdb9a83d10ded8c2fa`
            : "https://newsapi.org/v2/top-headlines?country=in&apiKey=54ed27d0cc844bbdb9a83d10ded8c2fa"
        )
        .then((res) => setData(res.data.articles));
    };
    FetchData();
  }, [cat]);

  return (
    <div className="container my-4">
      <h3>
        <u>TOP HEADLINES</u>
      </h3>
      <div
        className="container d-flex justify-content-center align-items-center flex-column my-3"
        style={{ minHeight: "100vh" }}
      >
        {Data
          ? Data.map((item) => (
              <div
                className="container m-3 p-3"
                style={{ width: "600px", boxShadow: "2px 2px 10px silver" }}
              >
                <h5 className="m-1">{item.title}</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={item.urlToImage}
                    alt="not found in server"
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      background: "grey",
                    }}
                  />
                </div>

                <p className="m-1">{item.description}</p>
                <a href={item.url} target="blank">
                  View More
                </a>
              </div>
            ))
          : "loading....."}
      </div>
    </div>
  );
};

export default FetchDataFromAPI;
