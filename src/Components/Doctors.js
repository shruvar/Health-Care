import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>
        <p className="dt-description">
        Introducing our team of highly skilled specialists, committed to delivering outstanding healthcare services at Health Care. With their expertise and dedication, you can trust them to guide you on your journey to better health and well-being.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Sophia Mitchell"
          title="Cardiologist"
          stars="4.9"
          reviews="800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Ethan Carter"
          title="Orthopedic Surgeon"
          stars="4.8"
          reviews="500"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Olivia Harper"
          title="Ophthalmologist"
          stars="4.7"
          reviews="600"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Lucas Bennett"
          title="Psychiatrist"
          stars="4.8"
          reviews="900"
        />
      </div>
    </div>
  );
}

export default Doctors;
