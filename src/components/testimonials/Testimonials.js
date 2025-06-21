import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'أحمد السعيد',
            location: 'الرياض',
            rating: 5,
            comment: 'تجربة رائعة مع العيادات المتخصصة. الأطباء محترفون والخدمة ممتازة. أنصح الجميع بالتعامل معهم.',
            image: '/images/testimonials/patient1.jpg',
            treatment: 'علاج أمراض القلب'
        },
        {
            id: 2,
            name: 'فاطمة محمد',
            location: 'جدة',
            rating: 5,
            comment: 'الدكتورة فاطمة العلي رائعة جداً. اهتمت بحالتي بشكل مميز وقدمت لي أفضل رعاية طبية.',
            image: '/images/testimonials/patient2.jpg',
            treatment: 'النساء والولادة'
        },
        {
            id: 3,
            name: 'محمد الأحمد',
            location: 'الدمام',
            rating: 5,
            comment: 'عملية جراحة العظام تمت بنجاح تام. الفريق الطبي محترف والمتابعة ممتازة.',
            image: '/images/testimonials/patient3.jpg',
            treatment: 'جراحة العظام'
        },
        {
            id: 4,
            name: 'سارة الزهراني',
            location: 'مكة المكرمة',
            rating: 5,
            comment: 'أطفالي يحبون الدكتورة سارة. تتعامل معهم بحب وصبر وتقدم أفضل رعاية طبية.',
            image: '/images/testimonials/patient4.jpg',
            treatment: 'طب الأطفال'
        }
    ];

    return (
        <section className="testimonials-section section-padding" dir="rtl">
            <div className="container">
                <div className="section-title text-center">
                    <span className="subtitle">آراء المرضى</span>
                    <h2>ماذا يقول مرضانا عنا</h2>
                    <p>نفتخر بثقة مرضانا وآرائهم الإيجابية حول خدماتنا الطبية</p>
                </div>
                <div className="testimonials-slider">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 }
                        }}
                    >
                        {testimonials.map(testimonial => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="testimonial-card">
                                    <div className="testimonial-header">
                                        <div className="patient-info">
                                            <img src={testimonial.image} alt={testimonial.name} />
                                            <div className="info">
                                                <h4>{testimonial.name}</h4>
                                                <span className="location">{testimonial.location}</span>
                                                <span className="treatment">{testimonial.treatment}</span>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <i key={i} className="fas fa-star"></i>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <p>"{testimonial.comment}"</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;