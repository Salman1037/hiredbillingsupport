import logo from '../assets/images/site_logo/logo_black.png';
import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    // Add shadow on scroll
    const handleScroll = () => {
      const header = document.querySelector('.site_header_1');
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set body padding to match header height so the hero/content sits directly below the fixed header
  useEffect(() => {
    const setBodyPadding = () => {
      const headerEl = document.querySelector('.site_header_1');
      if (!headerEl) return;
      // offsetHeight includes top bar and main header
      const h = headerEl.offsetHeight || 0;
      document.body.style.paddingTop = `${h}px`;
    };

    setBodyPadding();
    window.addEventListener('resize', setBodyPadding);

    // Observe header changes (menu open/close, class changes) and update padding
    let observer;
    const headerEl = document.querySelector('.site_header_1');
    if (headerEl && window.MutationObserver) {
      observer = new MutationObserver(setBodyPadding);
      observer.observe(headerEl, { attributes: true, childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener('resize', setBodyPadding);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div>
      <style>{`
        /* Sticky Header Styles */
        .site_header_1 {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 999;
          background: #fff;
          transition: all 0.3s ease;
        }

        /* We'll set body padding dynamically from JS to match the header height. Default 0 so JS controls it. */
        body { padding-top: 0; }

        .site_header_1.scrolled {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        html {
          scroll-behavior: smooth;
        }

        /* Mega menu full-width alignment */
        .mega_menu_wrapper {
          width: 100%;
          left: 0 !important;
          right: 0 !important;
          border-radius: 0;
        }

        .navbar .dropdown-menu {
        margin-top: 0 !important;        /* Removes the gap below nav */
        /* Makes dropdown start exactly below the nav link */
  border-top: none !important;     /* Seamless connection to navbar */

        }

        .btn-primary {
          background: linear-gradient(90deg, #00BFA6 0%, #0091EA 100%);
          border: none;
        }

        .btn-primary:hover {
          opacity: 0.9;
        }

        /* Mobile menu overlay/look */
        .mobile_menu_wrapper {
          background: #fff;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          position: fixed;
          top: 100%; /* overridden when opened via collapse class; we'll rely on Bootstrap collapse which adds show */
          left: 0;
          right: 0;
          z-index: 998;
        }

        /* When mobile menu is shown, ensure it's scrollable and sized correctly */
        .collapse.show .mobile_menu_wrapper {
          max-height: calc(100vh - 70px);
          overflow-y: auto;
          overflow-x: hidden;
          top: 70px;
        }

        /* Mobile menu list styling */
        .mobile_menu_list {
          padding: 0 !important;
        }

        .mobile_menu_list li a {
          color: #333;
          font-weight: 500;
          transition: all 0.3s ease;
          border-bottom: 1px solid #f0f0f0;
        }

        .mobile_menu_list li a:hover {
          color: #00BFA6;
          background-color: #f8f9fa;
        }

        .mobile_menu_list .collapse {
          background-color: #f8f9fa;
        }

        .mobile_menu_list .collapse a {
          color: #666;
          font-size: 0.9rem;
          border-bottom: 1px solid #e8e8e8;
        }

        .mobile_menu_list .collapse a:hover {
          color: #00BFA6;
          background-color: #f0f0f0;
        }

        /* Make logo image responsive */
        .site_logo img { max-width: 100%; height: auto; }
      `}</style>

      {/* Back To Top */}
      <div className="backtotop">
        <a href="#" className="scroll">
          <i className="fa-solid fa-arrow-up" />
        </a>
      </div>

      {/* Header */}
      <header className="site_header site_header_1">
        {/* Top Bar */}
        <div
          className="header_top"
          style={{
            background: 'linear-gradient(90deg, #00BFA6 0%, #0091EA 100%)',
            padding: '12px 0',
            color: 'white',
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12 text-center text-md-start mb-2 mb-md-0">
                <div className="contact_info d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-3">
                  <a
                    href="tel:+13213211740"
                    className="text-white text-decoration-none d-flex align-items-center"
                  >
                    <i className="fa-solid fa-phone me-2"></i>
                    <span className="d-none d-sm-inline">+1 321 321-1740</span>
                  </a>
                  <a
                    href="mailto:info@hiredbillingsupport.com"
                    className="text-white text-decoration-none d-flex align-items-center"
                  >
                    <i className="fa-solid fa-envelope me-2"></i>
                    <span className="d-none d-sm-inline">
                      info@hiredbillingsupport.com
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="social_links d-flex justify-content-center justify-content-md-end gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61560603176734&mibextid=wwXIfr&rdid=oyMBw5xfKzc6gwHp#"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/hiredbillingsupport/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/hiredbillingsupport/?igsh=MW1tMTV4cXIzMGRibg%3D%3D#"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="header_bottom">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-3 col-lg-2 col-6">
                <div className="site_logo">
                  <a className="site_link" href="/">
                    <img
                      src={logo}
                      alt="Hired Billing Support Logo"
                      style={{ maxHeight: '50px' }}
                    />
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                <nav className="main_menu navbar navbar-expand-lg">
                  <div
                    className="main_menu_inner collapse navbar-collapse justify-content-lg-center"
                    id="main_menu_dropdown"
                  >
                    <ul className="main_menu_list unordered_list justify-content-center mb-0">
                      {/* Hire Talent */}
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="hire_talent_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Hire Talent
                          <i
                            className="fa-solid fa-chevron-down ms-1"
                            style={{ fontSize: '12px' }}
                          ></i>
                        </a>
                        <div
                          className="dropdown-menu mega_menu_wrapper p-4"
                          aria-labelledby="hire_talent_submenu"
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="megamenu_pages_wrapper mb-4">
                                  <div className="row g-3">
                                    <div className="col-lg-4 col-md-6">
                                      <a
                                        className="iconbox_block_2 d-block p-3 rounded"
                                        href="/medical-billing-services"
                                      >
                                        <span className="icon_title_wrap d-flex align-items-center mb-2">
                                          <span
                                            className="iconbox_icon me-2"
                                            style={{
                                              width: '40px',
                                              height: '40px',
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              background: '#E3F2FD',
                                              borderRadius: '8px',
                                              color: '#0091EA',
                                            }}
                                          >
                                            <i
                                              className="fa-solid fa-stethoscope"
                                              style={{ fontSize: '20px' }}
                                            ></i>
                                          </span>
                                          <span className="iconbox_title fw-bold">
                                            Medical
                                          </span>
                                        </span>
                                        <span className="description mb-0 text-muted small">
                                          Medical Assistant, Medical Scribe,
                                          Medical Receptionist
                                        </span>
                                      </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                      <a
                                        className="iconbox_block_2 d-block p-3 rounded"
                                        href="/dental-billing-services"
                                      >
                                        <span className="icon_title_wrap d-flex align-items-center mb-2">
                                          <span
                                            className="iconbox_icon me-2"
                                            style={{
                                              width: '40px',
                                              height: '40px',
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              background: '#E3F2FD',
                                              borderRadius: '8px',
                                              color: '#0091EA',
                                            }}
                                          >
                                            <i
                                              className="fa-solid fa-tooth"
                                              style={{ fontSize: '20px' }}
                                            ></i>
                                          </span>
                                          <span className="iconbox_title fw-bold">
                                            Dental
                                          </span>
                                        </span>
                                        <span className="description mb-0 text-muted small">
                                          Dental Assistant, Treatment
                                          Coordinator, Dental Receptionist
                                        </span>
                                      </a>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                      <a
                                        className="iconbox_block_2 d-block p-3 rounded"
                                        href="/insurance-billing-services"
                                      >
                                        <span className="icon_title_wrap d-flex align-items-center mb-2">
                                          <span
                                            className="iconbox_icon me-2"
                                            style={{
                                              width: '40px',
                                              height: '40px',
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              background: '#E3F2FD',
                                              borderRadius: '8px',
                                              color: '#0091EA',
                                            }}
                                          >
                                            <i
                                              className="fa-solid fa-shield-halved"
                                              style={{ fontSize: '20px' }}
                                            ></i>
                                          </span>
                                          <span className="iconbox_title fw-bold">
                                            Insurance
                                          </span>
                                        </span>
                                        <span className="description mb-0 text-muted small">
                                          Insurance CSR, Underwriter, Claims
                                          Processing
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      {/* RCM Management */}
                      <li>
                        <a className="nav-link" href="/rcm-management">
                          RCM Management
                        </a>
                      </li>

                      {/* Specialities Dropdown - updated */}
                      <li className="dropdown">
                        <a
                          className="nav-link"
                          href="#"
                          id="specialities_submenu"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Specialities
                          <i
                            className="fa-solid fa-chevron-down ms-1"
                            style={{ fontSize: '12px' }}
                          ></i>
                        </a>

                        <div className="dropdown-menu mega_menu_wrapper p-4" aria-labelledby="specialities_submenu">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="megamenu_pages_wrapper mb-4">
          <div className="row g-3">
            {/* Neurology Billing */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="/neurology-billing-services" className="iconbox_block_2 d-block p-3 rounded text-center">
                <span className="iconbox_icon mb-2 mx-auto" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E8F5E9', borderRadius: '50%', color: '#00BFA6' }}>
                  <i className="fa-solid fa-brain" style={{ fontSize: '24px' }}></i>
                </span>
                <span className="iconbox_title d-block fw-semibold small">Neurology Billing</span>
              </a>
            </div>

            {/* Cardiology Billing */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="/cardiology-billing-services" className="iconbox_block_2 d-block p-3 rounded text-center">
                <span className="iconbox_icon mb-2 mx-auto" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E3F2FD', borderRadius: '50%', color: '#1976D2' }}>
                  <i className="fa-solid fa-heart-pulse" style={{ fontSize: '24px' }}></i>
                </span>
                <span className="iconbox_title d-block fw-semibold small">Cardiology Billing</span>
              </a>
            </div>

            {/* Endocrinology Billing */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="/endocrinology-billing-services" className="iconbox_block_2 d-block p-3 rounded text-center">
                <span className="iconbox_icon mb-2 mx-auto" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF3E0', borderRadius: '50%', color: '#FB8C00' }}>
                  <i className="fa-solid fa-syringe" style={{ fontSize: '24px' }}></i>
                </span>
                <span className="iconbox_title d-block fw-semibold small">Endocrinology Billing</span>
              </a>
            </div>

            {/* Podiatry Billing */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="/podiatry-billing-services" className="iconbox_block_2 d-block p-3 rounded text-center">
                <span className="iconbox_icon mb-2 mx-auto" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F3E5F5', borderRadius: '50%', color: '#8E24AA' }}>
                  <i className="fa-solid fa-shoe-prints" style={{ fontSize: '24px' }}></i>
                </span>
                <span className="iconbox_title d-block fw-semibold small">Podiatry Billing</span>
              </a>
            </div>

            {/* Orthopedic Billing */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="/orthopedic-billing-services" className="iconbox_block_2 d-block p-3 rounded text-center">
                <span className="iconbox_icon mb-2 mx-auto" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E1F5FE', borderRadius: '50%', color: '#0288D1' }}>
                  <i className="fa-solid fa-bone" style={{ fontSize: '24px' }}></i>
                </span>
                <span className="iconbox_title d-block fw-semibold small">Orthopedic Billing</span>
              </a>
            </div>

            {/* OBGYN Billing */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="/obgyn-billing-services" className="iconbox_block_2 d-block p-3 rounded text-center">
                <span className="iconbox_icon mb-2 mx-auto" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFDE7', borderRadius: '50%', color: '#FBC02D' }}>
                  <i className="fa-solid fa-baby" style={{ fontSize: '24px' }}></i>
                </span>
                <span className="iconbox_title d-block fw-semibold small">OBGYN Billing</span>
              </a>
            </div>

            {/* Psychiatry Billing */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="/psychiatry-billing-services" className="iconbox_block_2 d-block p-3 rounded text-center">
                <span className="iconbox_icon mb-2 mx-auto" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E8EAF6', borderRadius: '50%', color: '#3F51B5' }}>
                  <i className="fa-solid fa-user-injured" style={{ fontSize: '24px' }}></i>
                </span>
                <span className="iconbox_title d-block fw-semibold small">Psychiatry Billing</span>
              </a>
            </div>

            {/* Nephrology Billing */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <a href="/nephrology-billing-services" className="iconbox_block_2 d-block p-3 rounded text-center">
                <span className="iconbox_icon mb-2 mx-auto" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E0F7FA', borderRadius: '50%', color: '#00ACC1', fontSize: '0' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7.5C11.12 7.5 10 8.62 10 10c0 1.38 1.12 2.5 2.5 2.5S15 11.38 15 10c0-1.38-1.12-2.5-2.5-2.5zm-3 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
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

                      {/* Pricing */}
                      <li>
                        <a className="nav-link" href="/pricing">Pricing</a>
                      </li>

                      {/* Company */}
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="company_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Company
                          <i className="fa-solid fa-chevron-down ms-1" style={{ fontSize: '12px' }}></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="company_submenu">
                          <li><a className="dropdown-item" href="/about">About Us</a></li>
                          <li><a className="dropdown-item" href="/case-study">Case Study</a></li>
                          <li><a className="dropdown-item" href="/hbs-marketing">HBS Marketing</a></li>
                          <li><a className="dropdown-item" href="/article-28-facilities">Article 28 Facilities</a></li>
                          <li><a className="dropdown-item" href="/contact">Contact</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* CTA Button */}
              <div className="col-xl-3 col-lg-3 col-6">
                <ul className="header_btns_group unordered_list justify-content-end mb-0">
                  <li className="d-lg-none">
                    <button className="mobile_menu_btn btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <i className="far fa-bars"></i>
                    </button>
                  </li>
                  <li className="d-none d-lg-block">
                    <a className="btn btn-primary" href="/contact" style={{
                      borderRadius: '25px',
                      padding: '10px 25px',
                      fontWeight: '600',
                      whiteSpace: 'nowrap'
                    }}>
                      <span className="btn_label" data-text="Hire Talent">Hire Talent</span>
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
                    <a href="/medical-billing-services" className="d-block py-2 text-decoration-none small">
                      <i className="fa-solid fa-stethoscope me-2"></i> Medical
                    </a>
                    <a href="/dental-billing-services" className="d-block py-2 text-decoration-none small">
                      <i className="fa-solid fa-tooth me-2"></i> Dental
                    </a>
                    <a href="/insurance-billing-services" className="d-block py-2 text-decoration-none small">
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
                    <a href="/neurology-billing" className="d-block py-2 text-decoration-none small">Neurology Billing</a>
                    <a href="/cardiology-billing" className="d-block py-2 text-decoration-none small">Cardiology Billing</a>
                    <a href="/endocrinology-billing" className="d-block py-2 text-decoration-none small">Endocrinology Billing</a>
                    <a href="/podiatry-billing" className="d-block py-2 text-decoration-none small">Podiatry Billing</a>
                    <a href="/orthopedic-billing" className="d-block py-2 text-decoration-none small">Orthopedic Billing</a>
                    <a href="/obgyn-billing" className="d-block py-2 text-decoration-none small">OB/GYN Billing</a>
                    <a href="/psychiatry-billing" className="d-block py-2 text-decoration-none small">Psychiatry Billing</a>
                    <a href="/nephrology-billing" className="d-block py-2 text-decoration-none small">Nephrology Billing</a>
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
                    <a href="/case-study" className="d-block py-2 text-decoration-none small">Case Study</a>
                    <a href="/hbs-marketing" className="d-block py-2 text-decoration-none small">HBS Marketing</a>
                    <a href="/article-28-facilities" className="d-block py-2 text-decoration-none small">Article 28 Facilities</a>
                    <a href="/contact" className="d-block py-2 text-decoration-none small">Contact</a>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <a className="btn btn-primary w-100" href="/contact" style={{
                  borderRadius: '25px',
                  padding: '12px 25px',
                  fontWeight: '600'
                }}>
                  Hire Talent <i className="fa-solid fa-arrow-right ms-2"></i>
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
