import React from 'react';
import { Link } from 'react-router-dom';

const DentalHero = () => {
    return (
        <section className="position-relative bg-light" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="pe-lg-4">
                            <div className="text-success mb-3" style={{ color: '#00BFA6 !important' }}>
                                <small style={{ fontSize: '15px', fontWeight: '500' }}>Rates from $7/Hr</small>
                            </div>
                            <h1 className="fw-bold mb-4" style={{ 
                                fontSize: '42px',
                                lineHeight: '1.2',
                                background: 'linear-gradient(90deg, #00BFA6 0%, #0091EA 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Remote Dental VA that Keep Your Charts Current
                            </h1>
                            <p className="lead mb-4">
                                Dependable, HIPAA-aligned dental VAs who work in Dentrix, Open Dental, and Eaglesoft—reducing overhead and keeping your practice running smoothly, so you can stay focused on patient care.
                            </p>
                            <Link 
                                to="/contact" 
                                className="btn btn-success btn-lg" 
                                style={{
                                    background: 'linear-gradient(90deg, #00BFA6 0%, #0091EA 100%)',
                                    border: 'none',
                                    borderRadius: '25px',
                                    padding: '12px 30px',
                                    fontWeight: '600',
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                            >
                                Book a Consult →
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative mt-4 mt-lg-0">
                            <img 
                                src="/assets/images/dental-va-hero.jpg" 
                                alt="Dental Virtual Assistant" 
                                className="img-fluid rounded-3 shadow-lg"
                            />
                            <div className="position-absolute bottom-0 end-0 p-3">
                                <div className="bg-white rounded-circle p-2 shadow-sm d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                                    <span role="img" aria-label="wave" style={{fontSize: '24px'}}>👋</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalHero;
