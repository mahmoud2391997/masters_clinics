import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
      <nav className={`navbar ${props.hclass}`} dir="rtl">
          <div className="container">
              <div className="navbar-header">
                  <Link to="/" className="navbar-brand">
                      <img src={props.Logo} alt="شعار العيادات المتخصصة" />
                  </Link>
                  <button 
                      className="navbar-toggler" 
                      onClick={toggleMenu}
                      aria-label="فتح القائمة"
                  >
                      <span></span>
                      <span></span>
                      <span></span>
                  </button>
              </div>
              <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <Link to="/" className="nav-link">الرئيسية</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/about" className="nav-link">من نحن</Link>
                      </li>
                      <li className="nav-item dropdown">
                          <Link to="/services" className="nav-link">خدماتنا</Link>
                          <ul className="dropdown-menu">
                              <li><Link to="/cardiology">أمراض القلب</Link></li>
                              <li><Link to="/orthopedics">العظام</Link></li>
                              <li><Link to="/neurology">الأعصاب</Link></li>
                              <li><Link to="/pediatrics">طب الأطفال</Link></li>
                              <li><Link to="/gynecology">النساء والولادة</Link></li>
                          </ul>
                      </li>
                      <li className="nav-item">
                          <Link to="/doctors" className="nav-link">أطباؤنا</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/portfolio" className="nav-link">معرض الأعمال</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/blog" className="nav-link">المدونة</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/contact" className="nav-link">اتصل بنا</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/faq" className="nav-link">الأسئلة الشائعة</Link>
                      </li>
                  </ul>
                  <div className="navbar-actions">
                      <Link to="/appointment" className="btn-appointment">احجز موعد</Link>
                      <div className="emergency-contact">
                          <span>للطوارئ: ١٢٣-٤٥٦-٧٨٩</span>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
  );
};

export default Navbar;