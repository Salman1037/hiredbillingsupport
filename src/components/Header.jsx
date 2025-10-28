// Logo Import
import logo from '../assets/images/site_logo/logo_black.png';

function Header() {
  return (
    <div>
      {/* Back To Top - Start */}
      <div className="backtotop">
        <a href="#" className="scroll">
          <i className="fa-solid fa-arrow-up" />
        </a>
      </div>
      {/* Back To Top - End */}
      
      {/* Site Header - Start */}
      <header className="site_header site_header_1">
        {/* Header Top Bar */}
        <div className="header_top" style={{
          background: 'linear-gradient(90deg, #00BFA6 0%, #0091EA 100%)',
          padding: '12px 0',
          color: 'white'
        }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12 text-center text-md-start mb-2 mb-md-0">
                <div className="contact_info d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-3">
                  <a href="tel:+13213211740" className="text-white text-decoration-none d-flex align-items-center">
                    <i className="fa-solid fa-phone me-2"></i>
                    <span className="d-none d-sm-inline">+1 321 321-1740</span>
                  </a>
                  <a href="mailto:info@hiredbillingsupport.com" className="text-white text-decoration-none d-flex align-items-center">
                    <i className="fa-solid fa-envelope me-2"></i>
                    <span className="d-none d-sm-inline">info@hiredbillingsupport.com</span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="social_links d-flex justify-content-center justify-content-md-end gap-3">
                  <a href="#" className="text-white" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-white" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-white" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="header_bottom stricky">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo Section */}
              <div className="col-xl-3 col-lg-2 col-6">
                <div className="site_logo">
                  <a className="site_link" href="/">
                    <img src={logo} alt="Hired Billing Support Logo" style={{ maxHeight: '50px' }} />
                  </a>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                <nav className="main_menu navbar navbar-expand-lg">
                  <div className="main_menu_inner collapse navbar-collapse justify-content-lg-center" id="main_menu_dropdown">
                    <ul className="main_menu_list unordered_list justify-content-center mb-0">
                      
                      {/* Hire Talent Dropdown */}
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="hire_talent_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Hire Talent
                        </a>
                        <div className="dropdown-menu mega_menu_wrapper p-4" aria-labelledby="hire_talent_submenu">
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="megamenu_pages_wrapper mb-4">
                                  <div className="row g-3">
                                    <div className="col-lg-4 col-md-6">
                                      <a className="iconbox_block_2 d-block p-3 rounded" href="/medical">
                                        <span className="icon_title_wrap d-flex align-items-center mb-2">
                                          <span className="iconbox_icon me-2" style={{ 
                                            width: '40px', 
                                            height: '40px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            background: '#E3F2FD',
                                            borderRadius: '8px',
                                            color: '#0091EA'
                                          }}>
                                            <i className="fa-solid fa-stethoscope" style={{ fontSize: '20px' }}></i>
                                          </span>
                                          <span className="iconbox_title fw-bold">Medical</span>
                                        </span>
                                        <span className="description mb-0 text-muted small">
                                          Medical Assistant, Medical Scribe, Medical Receptionist
                                        </span>
                                      </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                      <a className="iconbox_block_2 d-block p-3 rounded" href="/dental">
                                        <span className="icon_title_wrap d-flex align-items-center mb-2">
                                          <span className="iconbox_icon me-2" style={{ 
                                            width: '40px', 
                                            height: '40px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            background: '#E3F2FD',
                                            borderRadius: '8px',
                                            color: '#0091EA'
                                          }}>
                                            <i className="fa-solid fa-tooth" style={{ fontSize: '20px' }}></i>
                                          </span>
                                          <span className="iconbox_title fw-bold">Dental</span>
                                        </span>
                                        <span className="description mb-0 text-muted small">
                                          Dental Assistant, Treatment Coordinator, Dental Receptionist
                                        </span>
                                      </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                      <a className="iconbox_block_2 d-block p-3 rounded" href="/insurance">
                                        <span className="icon_title_wrap d-flex align-items-center mb-2">
                                          <span className="iconbox_icon me-2" style={{ 
                                            width: '40px', 
                                            height: '40px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            background: '#E3F2FD',
                                            borderRadius: '8px',
                                            color: '#0091EA'
                                          }}>
                                            <i className="fa-solid fa-shield-halved" style={{ fontSize: '20px' }}></i>
                                          </span>
                                          <span className="iconbox_title fw-bold">Insurance</span>
                                        </span>
                                        <span className="description mb-0 text-muted small">
                                          Insurance CSR, Underwriter, Claims Processing
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <ul className="btns_group p-0 unordered_list justify-content-start mb-0">
                                  <li>
                                    <a className="btn btn-primary" href="/hire-talent">
                                      <span className="btn_label" data-text="View All">View All</span>
                                      <span className="btn_icon ms-2">
                                        <i className="fa-solid fa-arrow-up-right" />
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {/* RCM Management Link */}
                      <li>
                        <a className="nav-link" href="/rcm-management">
                          RCM Management
                        </a>
                      </li>

                      {/* Specialities Dropdown */}
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="specialities_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Specialities
                        </a>
                        <div className="dropdown-menu mega_menu_wrapper p-4" aria-labelledby="specialities_submenu" style={{ minWidth: '800px' }}>
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="megamenu_pages_wrapper">
                                  <div className="row g-3">
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                      <a className="iconbox_block_2 d-block p-3 rounded text-center" href="/neurology-billing">
                                        <span className="iconbox_icon mb-2 mx-auto" style={{ 
                                          width: '50px', 
                                          height: '50px', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center',
                                          background: '#E8F5E9',
                                          borderRadius: '50%',
                                          color: '#00BFA6',
                                          margin: '0 auto'
                                        }}>
                                          <i className="fa-solid fa-brain" style={{ fontSize: '24px' }}></i>
                                        </span>
                                        <span className="iconbox_title d-block fw-semibold small">Neurology Billing</span>
                                      </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                      <a className="iconbox_block_2 d-block p-3 rounded text-center" href="cardiology-billing.php">
                                        <span className="iconbox_icon mb-2 mx-auto" style={{ 
                                          width: '50px', 
                                          height: '50px', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center',
                                          background: '#FCE4EC',
                                          borderRadius: '50%',
                                          color: '#E91E63',
                                          margin: '0 auto'
                                        }}>
                                          <i className="fa-solid fa-heart-pulse" style={{ fontSize: '24px' }}></i>
                                        </span>
                                        <span className="iconbox_title d-block fw-semibold small">Cardiology Billing</span>
                                      </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                      <a className="iconbox_block_2 d-block p-3 rounded text-center" href="endocrinology-billing.php">
                                        <span className="iconbox_icon mb-2 mx-auto" style={{ 
                                          width: '50px', 
                                          height: '50px', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center',
                                          background: '#FFF3E0',
                                          borderRadius: '50%',
                                          color: '#FF9800',
                                          margin: '0 auto'
                                        }}>
                                          <i className="fa-solid fa-syringe" style={{ fontSize: '24px' }}></i>
                                        </span>
                                        <span className="iconbox_title d-block fw-semibold small">Endocrinology Billing</span>
                                      </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                      <a className="iconbox_block_2 d-block p-3 rounded text-center" href="podiatry-billing.php">
                                        <span className="iconbox_icon mb-2 mx-auto" style={{ 
                                          width: '50px', 
                                          height: '50px', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center',
                                          background: '#F3E5F5',
                                          borderRadius: '50%',
                                          color: '#9C27B0',
                                          margin: '0 auto'
                                        }}>
                                          <i className="fa-solid fa-shoe-prints" style={{ fontSize: '24px' }}></i>
                                        </span>
                                        <span className="iconbox_title d-block fw-semibold small">Podiatry Billing</span>
                                      </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                      <a className="iconbox_block_2 d-block p-3 rounded text-center" href="orthopedic-billing.php">
                                        <span className="iconbox_icon mb-2 mx-auto" style={{ 
                                          width: '50px', 
                                          height: '50px', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center',
                                          background: '#E0F2F1',
                                          borderRadius: '50%',
                                          color: '#009688',
                                          margin: '0 auto'
                                        }}>
                                          <i className="fa-solid fa-bone" style={{ fontSize: '24px' }}></i>
                                        </span>
                                        <span className="iconbox_title d-block fw-semibold small">Orthopedic Billing</span>
                                      </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                      <a className="iconbox_block_2 d-block p-3 rounded text-center" href="obgyn-billing.php">
                                        <span className="iconbox_icon mb-2 mx-auto" style={{ 
                                          width: '50px', 
                                          height: '50px', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center',
                                          background: '#FFF9C4',
                                          borderRadius: '50%',
                                          color: '#FBC02D',
                                          margin: '0 auto'
                                        }}>
                                          <i className="fa-solid fa-baby" style={{ fontSize: '24px' }}></i>
                                        </span>
                                        <span className="iconbox_title d-block fw-semibold small">OB/GYN Billing</span>
                                      </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                      <a className="iconbox_block_2 d-block p-3 rounded text-center" href="psychiatry-billing.php">
                                        <span className="iconbox_icon mb-2 mx-auto" style={{ 
                                          width: '50px', 
                                          height: '50px', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center',
                                          background: '#E1F5FE',
                                          borderRadius: '50%',
                                          color: '#0288D1',
                                          margin: '0 auto'
                                        }}>
                                          <i className="fa-solid fa-user-md" style={{ fontSize: '24px' }}></i>
                                        </span>
                                        <span className="iconbox_title d-block fw-semibold small">Psychiatry Billing</span>
                                      </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                      <a className="iconbox_block_2 d-block p-3 rounded text-center" href="nephrology-billing.php">
                                        <span className="iconbox_icon mb-2 mx-auto" style={{ 
                                          width: '50px', 
                                          height: '50px', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center',
                                          background: '#FFEBEE',
                                          borderRadius: '50%',
                                          color: '#D32F2F',
                                          margin: '0 auto'
                                        }}>
                                          <i className="fa-solid fa-lungs" style={{ fontSize: '24px' }}></i>
                                        </span>
                                        <span className="iconbox_title d-block fw-semibold small">Nephrology Billing</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {/* Pricing Link */}
                      <li>
                        <a className="nav-link" href="/pricing">
                          Pricing
                        </a>
                      </li>

                      {/* Company Dropdown */}
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Company
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="company_submenu">
                          <li><a className="dropdown-item" href="/about">About Us</a></li>
                          <li><a className="dropdown-item" href="/blog">Blog</a></li>
                          <li><a className="dropdown-item" href="/contact">Contact</a></li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                </nav>
              </div>

              {/* CTA Button & Mobile Menu */}
              <div className="col-xl-3 col-lg-3 col-6">
                <ul className="header_btns_group unordered_list justify-content-end mb-0">
                  <li className="d-lg-none">
                    <button className="mobile_menu_btn btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <i className="far fa-bars"></i>
                    </button>
                  </li>
                  <li className="d-none d-lg-block">
                    <a className="btn btn-primary" href="contact.php" style={{
                      background: 'linear-gradient(90deg, #00BFA6 0%, #0091EA 100%)',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '10px 25px',
                      fontWeight: '600',
                      whiteSpace: 'nowrap'
                    }}>
                      <span className="btn_label" data-text="FREE RCM DEMO">FREE RCM DEMO</span>
                      <span className="btn_icon ms-2">
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="collapse d-lg-none" id="main_menu_dropdown">
          <div className="mobile_menu_wrapper p-3">
            <ul className="mobile_menu_list list-unstyled">
              <li className="mb-2">
                <a className="d-block py-2 text-decoration-none" data-bs-toggle="collapse" href="#mobileHireTalent" role="button" aria-expanded="false">
                  Hire Talent <i className="fa-solid fa-chevron-down float-end"></i>
                </a>
                <div className="collapse" id="mobileHireTalent">
                  <div className="ps-3">
                    <a href="/medical" className="d-block py-2 text-decoration-none small">
                      <i className="fa-solid fa-stethoscope me-2"></i> Medical
                    </a>
                    <a href="/dental" className="d-block py-2 text-decoration-none small">
                      <i className="fa-solid fa-tooth me-2"></i> Dental
                    </a>
                    <a href="/insurance" className="d-block py-2 text-decoration-none small">
                      <i className="fa-solid fa-shield-halved me-2"></i> Insurance
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <a href="/rcm-management" className="d-block py-2 text-decoration-none">RCM Management</a>
              </li>
              <li className="mb-2">
                <a className="d-block py-2 text-decoration-none" data-bs-toggle="collapse" href="#mobileSpecialities" role="button" aria-expanded="false">
                  Specialities <i className="fa-solid fa-chevron-down float-end"></i>
                </a>
                <div className="collapse" id="mobileSpecialities">
                  <div className="ps-3">
                    <a href="/neurology-billing" className="d-block py-2 text-decoration-none small">Neurology</a>
                    <a href="/cardiology-billing" className="d-block py-2 text-decoration-none small">Cardiology</a>
                    <a href="/endocrinology-billing" className="d-block py-2 text-decoration-none small">Endocrinology</a>
                    <a href="/podiatry-billing" className="d-block py-2 text-decoration-none small">Podiatry</a>
                    <a href="/orthopedic-billing" className="d-block py-2 text-decoration-none small">Orthopedic</a>
                    <a href="/obgyn-billing" className="d-block py-2 text-decoration-none small">OB/GYN</a>
                    <a href="/psychiatry-billing" className="d-block py-2 text-decoration-none small">Psychiatry</a>
                    <a href="/nephrology-billing" className="d-block py-2 text-decoration-none small">Nephrology</a>
                  </div>
                </div>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="d-block py-2 text-decoration-none">Pricing</a>
              </li>
              <li className="mb-2">
                <a className="d-block py-2 text-decoration-none" data-bs-toggle="collapse" href="#mobileCompany" role="button" aria-expanded="false">
                  Company <i className="fa-solid fa-chevron-down float-end"></i>
                </a>
                <div className="collapse" id="mobileCompany">
                  <div className="ps-3">
                    <a href="/about" className="d-block py-2 text-decoration-none small">About Us</a>
                    <a href="/blog" className="d-block py-2 text-decoration-none small">Blog</a>
                    <a href="/contact" className="d-block py-2 text-decoration-none small">Contact</a>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <a className="btn btn-primary w-100" href="contact.php" style={{
                  background: 'linear-gradient(90deg, #00BFA6 0%, #0091EA 100%)',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '12px 25px',
                  fontWeight: '600'
                }}>
                  FREE RCM DEMO <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;