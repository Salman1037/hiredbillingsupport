import React from "react";
import eligibilityIcon from "../../../assets/images/services/eligibility-benefits.png";
import priorAuthIcon from "../../../assets/images/services/prior-authorizations.png";
import claimsFollowUpIcon from "../../../assets/images/services/Clean-Claim-Submission.svg";
const InsuranceFeaturesSection = () => {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#f9fafc",
        borderBottom: "3px solid #00b2e2",
      }}
    >
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-stretch flex-wrap"
          style={{
            gap: "0px",
            borderRadius: "18px",
            backgroundColor: "#fff",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
            overflow: "hidden",
          }}
        >
          {/* Feature 1 */}
          <div
            className="flex-fill d-flex flex-column align-items-center justify-content-center text-center p-4"
            style={{
              minWidth: "300px",
              maxWidth: "33.3%",
              borderRight: "1px solid #e0e0e0",
            }}
          >
            <img
              src={eligibilityIcon}
              alt="Eligibility & Benefits"
              style={{ width: "60px", height: "60px", marginBottom: "15px" }}
            />
            <h5
              className="fw-bold mb-2"
              style={{ color: "#031b4e", fontSize: "1.1rem" }}
            >
              Eligibility & Benefits
            </h5>
            <p
              style={{
                color: "#6c757d",
                fontSize: "0.95rem",
                maxWidth: "300px",
              }}
            >
              Verify coverage, copays, deductibles, visit limits and COB, then
              log everything to the chart before the visit.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="flex-fill d-flex flex-column align-items-center justify-content-center text-center p-4"
            style={{
              minWidth: "300px",
              maxWidth: "33.3%",
              borderRight: "1px solid #e0e0e0",
            }}
          >
            <img
              src={priorAuthIcon}
              alt="Prior Authorizations"
              style={{ width: "60px", height: "60px", marginBottom: "15px" }}
            />
            <h5
              className="fw-bold mb-2"
              style={{ color: "#031b4e", fontSize: "1.1rem" }}
            >
              Prior Authorizations
            </h5>
            <p
              style={{
                color: "#6c757d",
                fontSize: "0.95rem",
                maxWidth: "300px",
              }}
            >
              Gather clinicals, complete forms, submit and chase timelines.
              Proactive follow-ups until approvals land.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="flex-fill d-flex flex-column align-items-center justify-content-center text-center p-4"
            style={{
              minWidth: "300px",
              maxWidth: "33.3%",
            }}
          >
            <img
              src={claimsFollowUpIcon}
              alt="Claims Follow-Up & Denial Prevention"
              style={{ width: "60px", height: "60px", marginBottom: "15px" }}
            />
            <h5
              className="fw-bold mb-2"
              style={{ color: "#031b4e", fontSize: "1.1rem" }}
            >
              Claims Follow-Up & Denial Prevention
            </h5>
            <p
              style={{
                color: "#6c757d",
                fontSize: "0.95rem",
                maxWidth: "300px",
              }}
            >
              Clear holds/edits, correct and resubmit, file timely appeals.
              Fewer denials and faster reimbursements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceFeaturesSection;