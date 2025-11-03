import React from "react";

const BacklogSection = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #f0f0f0",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div className="container">
        <div className="text-start" style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Heading */}
          <h3
            style={{
              color: "#031b4e",
              fontWeight: "700",
              fontSize: "2rem",
              marginBottom: "15px",
            }}
          >
            Clear Backlogs. Lower Denials. Faster Reimbursements.
          </h3>

          {/* Divider (3 dots + line) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#00b2e2",
                marginRight: "4px",
              }}
            ></div>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#00b2e2",
                marginRight: "4px",
              }}
            ></div>
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#00b2e2",
                marginRight: "8px",
              }}
            ></div>
            <div
              style={{
                flex: "1",
                height: "3px",
                backgroundColor: "#00b2e2",
                borderRadius: "2px",
                maxWidth: "100px",
              }}
            ></div>
          </div>

          {/* Paragraph */}
          <p
            style={{
              color: "#4a4a4a",
              fontSize: "1.05rem",
              lineHeight: "1.8",
            }}
          >
            We plug trained Insurance VAs into your workflows to front-load accuracy
            (benefits, COB, attachments) and back-stop payers with disciplined
            follow-ups. You keep clinical staff on patient care while we keep revenue
            in motion.{" "}
            <strong style={{ color: "#031b4e" }}>
              From $7/Hr, month-to-month.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BacklogSection;
