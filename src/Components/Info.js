import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="At Health Care, we provide 24/7 emergency services with fast, expert care for injuries, illnesses, and life-threatening conditions. Our team is ready to respond quickly and efficiently to ensure the best outcomes for your health. Your safety and well-being are our priority."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heart Disease"
          description="At Health Care, we specialize in the prevention, diagnosis, and treatment of heart disease. Our expert cardiologists provide personalized care to manage conditions like high blood pressure, cholesterol, and heart attacks, helping you lead a healthier life."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dental Care"
          description="At Health Care, we offer comprehensive dental services, from routine check-ups to advanced treatments. Our experienced dentists are dedicated to maintaining your oral health and ensuring a beautiful, confident smile."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
