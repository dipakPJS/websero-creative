"use client"
import * as React from "react";

interface EmailTemplateProps {
  userName: string;
  email: string;
  projectType: string;
  projectBudget: string;
}

export const EmailTemplateComponent: React.FC<EmailTemplateProps> = ({
  userName,
  email,
  projectType,
  projectBudget,
}) => {
  return (
    <div
      className="email-template-component"
      style={{
        textAlign: "left",
        padding: "20px 50px",
        backgroundColor: "white",
        borderRadius: "30px",
        border: "5px groove white",
        fontFamily: "Roboto, sans-serif",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          padding: "20px",
          fontFamily: "Poppins, sans-serif",
          color: "black",
        }}
      >
        You just received a new email from websero agency website!
      </h1>
      <div
        style={{
          fontSize: "25px",
          color: "white",
          fontFamily: "Montserrat, sans-serif"
          ,
        }}
      >
        <p>
          User Name: <span style={{ color: "gray" }}>{userName}</span>
        </p>
        <p>
          Email: <span style={{ color: "gray" }}>{email}</span>
        </p>
        <p>
          Project Type: <span style={{ color: "gray" }}>{projectType}</span>
        </p>
        <p>
          Project Budget:{" "}
          <span style={{ color: "gray" }}>{projectBudget}</span>
        </p>
      </div>
    </div>
  );
};