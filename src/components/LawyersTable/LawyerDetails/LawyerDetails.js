import React from "react";
// import '.../Header/logo.png'
import './LawyerDetails.css'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {Button, ButtonGroup, Typography, Rating} from '@mui/material';


function LawyerDetails()
{
    const {name} = useParams();
    const lawyerDetales = useSelector((state)=> state.changeTheValue[0].lawyers).filter((lawyer)=> lawyer.name===name ?  lawyer:"")[0];

    console.log(lawyerDetales.img)
    return (
        <div className="lawyerDetailsContainer" style={{color:"black",padding:"80px 20px"}}>
            <div className="image">
                <img src={lawyerDetales.img} className="mainImage"/>
                
            </div>
            <div className="personalDetails">
                <h2 className="name">{lawyerDetales.name}</h2>
                <p className="subDetails">Started from 1994</p>
                <p className="subDetails">{lawyerDetales.address}</p>
                <p className="subDetails">{lawyerDetales.speciality}</p>
                <p className="subDetails">English, Tamil</p>
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} />
            </div>
            <div className="appointmentSection">
                <div className="phoneConsultation"><p className="para">Phone Consultation</p> <div className="price">Rs.600.00/0 mins</div></div>
                <div className="directConsultation"><p className="para">Direct Consultation</p><div className="price">Rs.1000.00/0 mins</div></div>
                <div className="dateAndBookAppointment">
                    <div className="appoDate able notAble"><input type="date"/></div>
                    <div className="appoTime able notAble">
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        {
                            lawyerDetales.availableMeetingTime.map((time,i)=><Button className="time" key={i}>{time}</Button>)
                        }
                        </ButtonGroup>
                    </div>
                </div>
                <Button variant="contained" className="appoBookingBtn">Appointment Booking</Button>
            </div>

        </div>
    )
}

export default LawyerDetails;