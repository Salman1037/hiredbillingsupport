
import { useState } from "react";
// import { Users } from "lucide-react";

const HbsSavingsCalculator = () => {
  const [patients, setPatients] = useState(30);
  const [adminTime, setAdminTime] = useState(10);
  const [doctorAdmin, setDoctorAdmin] = useState(15);
  const [staffRate, setStaffRate] = useState(36);

  // --- Calculations ---
  const beforeAdminTime = patients * adminTime + doctorAdmin; // min/day
  const beforeStaffCost = Math.round(((patients * adminTime + doctorAdmin) / 60) * staffRate * 22);

  const afterAdminTime = Math.max(Math.round(beforeAdminTime * 0.25), 1); // HBS reduces admin time 75%
  const afterStaffCost = Math.max(Math.round(beforeStaffCost * 0.25), 0); // HBS reduces staff cost 75%

  const additionalPatients = Math.round((beforeAdminTime - afterAdminTime) / adminTime); // extra patients served

  // --- Patient impact data ---
  // const patientsBefore = 550;
  // const patientsNotSeen = 176;

  // --- Render patient icons dynamically ---
  // const renderPatientIcons = (served, notServed) => {
  //   const icons = [];
  //   for (let i = 0; i < served; i++) {
  //     icons.push(<Users key={`served-${i}`} className="text-success me-1" size={20} />);
  //   }
  //   for (let i = 0; i < notServed; i++) {
  //     icons.push(<Users key={`missed-${i}`} className="text-secondary me-1" size={20} />);
  //   }
  //   return icons;
  // };

  return (
    <div className="min-vh-100 py-5">
      <div className="container">

        {/* Three Column Layout */}
        <div className="row g-4 mb-5">

          {/* Left Column - Inputs */}
          <div className="col-lg-4">
            <div className="card shadow-sm rounded-4 border-0 h-100">
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-semibold mb-4">Practice Information</h5>

                  <div className="mb-4">
                    <label className="form-label d-flex justify-content-between">
                      <span>Patients per day</span>
                      <span>{patients}</span>
                    </label>
                    <input type="range" className="form-range" min="5" max="100" value={patients} onChange={(e) => setPatients(Number(e.target.value))} />
                  </div>

                  <div className="mb-4">
                    <label className="form-label d-flex justify-content-between">
                      <span>Admin time per patient</span>
                      <span>{adminTime} min</span>
                    </label>
                    <input type="range" className="form-range" min="2" max="30" value={adminTime} onChange={(e) => setAdminTime(Number(e.target.value))} />
                  </div>

                  <div className="mb-4">
                    <label className="form-label d-flex justify-content-between">
                      <span>Doctor admin time</span>
                      <span>{doctorAdmin} min/day</span>
                    </label>
                    <input type="range" className="form-range" min="15" max="120" value={doctorAdmin} onChange={(e) => setDoctorAdmin(Number(e.target.value))} />
                  </div>

                  <div className="mb-4">
                    <label className="form-label d-flex justify-content-between">
                      <span>Staff hourly rate</span>
                      <span>${staffRate}</span>
                    </label>
                    <input type="range" className="form-range" min="15" max="50" value={staffRate} onChange={(e) => setStaffRate(Number(e.target.value))} />
                  </div>
                </div>

                <div className="mt-3">
                  <button className="btn  w-100 py-3 rounded-3">Calculate Savings</button>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Before HBS */}
          <div className="col-lg-4">
            <div className="card shadow-sm rounded-4 border-0 h-100">
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <h5 className="fw-semibold mb-4">Before HBS</h5>

                <div className="mb-3 bg-light rounded-3 p-4 text-center">
                  <div className="small text-muted mb-2">Admin Time</div>
                  <div className="fs-2 fw-bold">{beforeAdminTime} min/day</div>
                </div>

                <div className="mb-3 bg-light rounded-3 p-4 text-center">
                  <div className="small text-muted mb-2">Staff Cost</div>
                  <div className="fs-2 fw-bold">${beforeStaffCost}/month</div>
                </div>

                <div className="bg-light rounded-3 p-4 text-center">
                  <div className="small text-muted mb-2">Lost Opportunity</div>
                  <div className="fs-2 fw-bold">Limited</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - With HBS */}
          <div className="col-lg-4">
            <div className="card shadow-sm rounded-4 border-0 h-100">
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <h5 className="fw-semibold mb-4">With HBS</h5>

                <div className="mb-3 bg-success bg-opacity-10 border border-success rounded-3 p-4 text-center">
                  <div className="small text-muted mb-2">Admin Time</div>
                  <div className="fs-2 fw-bold">{afterAdminTime} min/day</div>
                  <div className="small text-success mt-2">
                    Save {beforeAdminTime - afterAdminTime} min/day
                  </div>
                </div>

                <div className="mb-3 bg-success bg-opacity-10 border border-success rounded-3 p-4 text-center">
                  <div className="small text-muted mb-2">Staff Cost</div>
                  <div className="fs-2 fw-bold">${afterStaffCost}/month</div>
                  <div className="small text-success mt-2">
                    Save ${beforeStaffCost - afterStaffCost} monthly
                  </div>
                </div>

                <div className="bg-success bg-opacity-10 border border-success rounded-3 p-4 text-center">
                  <div className="small text-muted mb-2">Expanded Care</div>
                  <div className="fs-2 fw-bold">Enhanced</div>
                  <div className="small text-success mt-2">
                    Care for {additionalPatients} more patients
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Patient Care Impact Section */}
    

      </div>
    </div>
  );
};

export default HbsSavingsCalculator;
