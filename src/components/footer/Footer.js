import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
   
    return (
        <footer className={`footer ${props.hclass}`} dir="rtl">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="footer-widget about-widget">
                            <div className="logo">
                                <img src={logo} alt="شعار العيادات المتخصصة" />
                            </div>
                            <p>نحن نقدم أفضل الخدمات الطبية المتخصصة مع فريق من الأطباء المؤهلين وأحدث المعدات الطبية لضمان حصولك على أفضل رعاية صحية.</p>
                            <div className="social-links">
                                <h4>تابعنا على:</h4>
                                <ul>
                                    <li><a href="#" aria-label="فيسبوك"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" aria-label="تويتر"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" aria-label="إنستغرام"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#" aria-label="لينكد إن"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        <div className="footer-widget link-widget">
                            <h3>روابط سريعة</h3>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/">الرئيسية</Link></li>
                                <li><Link onClick={ClickHandler} to="/about">من نحن</Link></li>
                                <li><Link onClick={ClickHandler} to="/services">خدماتنا</Link></li>
                                <li><Link onClick={ClickHandler} to="/doctors">أطباؤنا</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">اتصل بنا</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="footer-widget service-widget">
                            <h3>خدماتنا الطبية</h3>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/cardiology">أمراض القلب والأوعية الدموية</Link></li>
                                <li><Link onClick={ClickHandler} to="/orthopedics">جراحة العظام</Link></li>
                                <li><Link onClick={ClickHandler} to="/neurology">طب الأعصاب</Link></li>
                                <li><Link onClick={ClickHandler} to="/pediatrics">طب الأطفال</Link></li>
                                <li><Link onClick={ClickHandler} to="/gynecology">النساء والولادة</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="footer-widget contact-widget">
                            <h3>معلومات التواصل</h3>
                            <div className="contact-info">
                                <div className="info-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div>
                                        <h4>العنوان:</h4>
                                        <p>شارع الملك فهد، الرياض<br />المملكة العربية السعودية</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="fas fa-phone"></i>
                                    <div>
                                        <h4>الهاتف:</h4>
                                        <p>+٩٦٦ ١١ ٢٣ ٤٥٦٧</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="fas fa-envelope"></i>
                                    <div>
                                        <h4>البريد الإلكتروني:</h4>
                                        <p>info@mastersclinics.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <i className="fas fa-clock"></i>
                                    <div>
                                        <h4>ساعات العمل:</h4>
                                        <p>السبت - الخميس: ٨:٠٠ص - ١٠:٠٠م<br />الجمعة: ٢:٠٠م - ١٠:٠٠م</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <p>&copy; ٢٠٢٤ العيادات المتخصصة. جميع الحقوق محفوظة.</p>
                        </div>
                        <div className="col-lg-6 col-12">
                            <ul className="footer-bottom-links">
                                <li><Link onClick={ClickHandler} to="/privacy">سياسة الخصوصية</Link></li>
                                <li><Link onClick={ClickHandler} to="/terms">الشروط والأحكام</Link></li>
                                <li><Link onClick={ClickHandler} to="/sitemap">خريطة الموقع</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
