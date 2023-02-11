import React, { useEffect, useState } from "react";
import Map from "./Partials/Map";
import { getIssPosition } from "../../data/useIssTracker";
import { Spin } from "antd";

const Iss = () => {
  const [loading, setLoading] = useState(true);
  const [iss, setIss] = useState({});

  const isLoadingCheck = (value) => {
    if (value) {
      setLoading(false);
      return;
    }
  };

  const getData = async () => {
    const data = await getIssPosition();
    setIss({
      latitude: data.data.latitude,
      longitude: data.data.longitude,
    });
    isLoadingCheck(data);
  };
  console.log(loading);

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 3000);
    // return clearInterval();
  }, []);
  return (
    <>
      {iss && (
        <div
          style={{
            minHeight: "100vh",
            minWidth: "100vw",
          }}
        >
          {loading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
              }}
            >
              <Spin spinning={loading}>
                <p></p>
              </Spin>
            </div>
          ) : (
            <Map
              position={{ latitude: iss.latitude, longitude: iss.longitude }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Iss;
