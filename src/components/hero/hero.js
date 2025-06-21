import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero-section" dir="rtl">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="hero-content">
                            <span className="subtitle">مرحباً بكم في العيادات المتخصصة</span>
                            <h1>نحن نهتم بصحتك <span>وعافيتك</span></h1>
                            <p>نقدم أفضل الخدمات الطبية المتخصصة مع فريق من الأطباء المؤهلين وأحدث التقنيات الطبية. صحتك هي أولويتنا الأولى.</p>
                            <div className="hero-actions">
                                <Link to="/appointment" className="btn btn-primary">احجز موعد</Link>
                                <Link to="/services" className="btn btn-outline">خدماتنا</Link>
                            </div>
                            <div className="hero-features">
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="fas fa-user-md"></i>
                                    </div>
                                    <div className="content">
                                        <h4>أطباء متخصصون</h4>
                                        <p>فريق من أفضل الأطباء</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="content">
                                        <h4>خدمة ٢٤/٧</h4>
                                        <p>متاحون في أي وقت</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="icon">
                                        <i className="fas fa-award"></i>
                                    </div>
                                    <div className="content">
                                        <h4>جودة عالية</h4>
                                        <p>معايير طبية متقدمة</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="hero-image">
                            <img src="/images/hero-doctor.jpg" alt="طبيب متخصص" />
                            <div className="floating-card emergency">
                                <div className="icon">
                                    <i className="fas fa-ambulance"></i>
                                </div>
                                <div className="content">
                                    <h4>خدمة الطوارئ</h4>
                                    <p>متاحة ٢٤ ساعة</p>
                                    <span className="phone">٩٩٧</span>
                                </div>
                            </div>
                            <div className="floating-card appointment">
                                <div className="icon">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <div className="content">
                                    <h4>احجز موعدك</h4>
                                    <p>بسهولة وسرعة</p>
                                    <Link to="/appointment" className="btn-small">احجز الآن</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;