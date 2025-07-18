import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

/* image */
import Pross1 from '../../images/work/1.jpg'
import Pross2 from '../../images/work/2.jpg'
import Pross3 from '../../images/work/3.jpg'
import Pross4 from '../../images/work/4.jpg'
import Shape from '../../images/work/shape.svg'

const ProcessSection = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-12">
                        <SectionTitle title={'عملية عملنا'} subtitle={'كيف نعمل'}/>
                    </div>
                </div>
                <div className="work_wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <img src={Pross1} alt="" />
                                        <span className="number">01</span>
                                </div>
                                <div className="text">
                                    <h3>حجز موعد</h3>
                                    <p>نقدم خدمة حجز المواعيد بسهولة ويسر لضمان راحتكم وتلبية احتياجاتكم في الوقت المناسب.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <img src={Pross2} alt="" />
                                        <span className="number">02</span>
                                </div>
                                <div className="text">
                                    <h3>استشارة الخبير</h3>
                                    <p>تحصلون على استشارة من خبرائنا المتخصصين الذين يقدمون الحلول المناسبة لاحتياجاتكم.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <img src={Pross3} alt="" />
                                        <span className="number">03</span>
                                </div>
                                <div className="text">
                                    <h3>تلقي العلاج</h3>
                                    <p>نقدم لكم أفضل العلاجات والرعاية بأعلى معايير الجودة والكفاءة.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-12">
                            <div className="work_card">
                                <div className="image">
                                    <img src={Pross4} alt="" />
                                        <span className="number">04</span>
                                </div>
                                <div className="text">
                                    <h3>الحصول على الراحة</h3>
                                    <p>الوصول إلى مرحلة الشفاء والراحة بعد تلقي العلاج والرعاية المثالية.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shape">
                        <img src={Shape} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;