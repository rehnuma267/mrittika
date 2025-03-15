import React from "react";
import "./Contact_us.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";


const Contact_us = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
    access_key:"d017cb2c-9243-4c2f-a528-e083acc5fab5",
    email:data.email,
    name:data.name,
    }
    try {
      await axios.post("https://api.web3forms.com/submit",userInfo)
      toast.success("Message sent successfully")
    } catch (error) {
      toast.error("An error occurred")
    }
  };
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write us a message!</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-row">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter a valid email address"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500 font-semibold">
                This field is required
              </span>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="name">Question</label>
            <input
              type="text"
              id="name"
              placeholder="Ask any question"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500 font-semibold">
                This field is required
              </span>
            )}
          </div>
        </div>
        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </form>

      <div className="contact-info-container">
        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-running"></i>{" "}
            {/* Font Awesome Running Icon - you'll need to include Font Awesome */}
          </div>
          <div className="info-section">
            <h2>ABOUT CLUB</h2>
            <p>Running Guide</p>
            <p>Workouts</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-phone"></i> {/* Font Awesome Phone Icon */}
          </div>
          <div className="info-section">
            <h2>PHONE</h2>
            <p>+8801743634867</p>
            <p>+8801473574748</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="fas fa-map-marker-alt"></i>{" "}
            {/* Font Awesome Map Marker Icon */}
          </div>
          <div className="info-section">
            <h2>OUR OFFICE LOCATION</h2>
            <p>The Interior Design Studio Company</p>
            <p>126/C Motijheel, Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_us;
