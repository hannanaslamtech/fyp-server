import React from 'react';
import "./Dashboard.css";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header/Header";
import backgroundImage from './adminBackground.jpg';
import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react"
import Axios from "axios";

import { useSelector } from "react-redux";

const RadiologistDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = await Axios.get(`/users/getappointment/${user._id}`);
      console.log(list.data.appointmentInfo);
      setData(list.data.appointmentInfo);
    };
  
    fetchData();
  }, [user._id]);
  
  
  
  return (
    <>
      <Header />
      <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '87.8vh',
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${backgroundImage})`,
      }}
      >
        <Container fluid style={{ paddingTop: "5px" }}>
          <Row>
            <Col md={1} sm={12} className={`d-none d-md-block`}>
            </Col>
            <Col md={10}>
              <Container className="mb-5">
                <div
                 style={{ marginTop: "20px",   background: 'linear-gradient( #dfe4e7, #909497)',}}
                class="appointment">
                  <form>
                    <label class="label" >Name: <span class="span">{user.userName}</span></label>
                    <label class="label" >Designation: <span class="span">{user.role}</span></label>
                    <label class="label" >Gmail ID: <span class="span">{user.email}</span></label>
                  </form>
                </div>

                <div style={{ background: 'linear-gradient(#dfe4e7, #01555B)', padding: "5px", borderRadius: "10px", height: "225px", width: "250px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", margin:"20px 0 0 37%" }}>
                  <Typography variant="h5" style={{ marginBottom: "10px", color: "black" }}>
                    Patients to check
                  </Typography>
                  <Typography variant="h3" style={{ color: "#ffcc00" }}>{data.length}</Typography>
                </div>

              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default RadiologistDashboard;