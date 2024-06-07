import React from 'react';
import classes from './About.module.css';
import Footer from './Footer';
import s1 from './NN.png';
import s2 from './dusk.jpg';
import logo from "./logo.png";
import pic from './p.jpg';
import p3 from './vision.png';
import p4 from './mission.png';
import p5 from './benefits.png';

const CompanyProfile = () => {
    const taglines = [
        "Our Commitment to excellence provides unmatched product quality, coupled with speed, safety, and superior sales services",
        "We ensure international standard services at very reasonable prices",
        "NN Engineers Leading the PEB industry with innovative solutions",
        "Our Commitment to excellence provides unmatched product quality, coupled with speed, safety, and superior sales services.",
        "We ensure international standard services at very reasonable prices",
        "NN Engineers Leading the PEB industry with innovative solutions",
        "Our Commitment to excellence provides unmatched product quality, coupled with speed, safety, and superior sales services.",
        "We ensure international standard services at very reasonable prices",
        "NN Engineers Leading the PEB industry with innovative solutions"
    ];

    return (
        <div className={classes.companyProfile}>
            <div className={classes.imageSection}>
                <img src={pic} alt="Company Image" className={classes.fullWidthImage} />
                <div className={classes.overlay}>
                    <h1 className={classes.overlayText}>ABOUT US</h1>
                </div>
            </div>
            <div className={classes.aboutSection}>
                <div className={classes.text}>
                    <h2>NN Engineers</h2>
                    <p>We are to introduce as NN Engineers, a leading PEB Manufacturer in Odisha. 
                    In a very short span of time, NN Engineers has achieved great success in the PEB industry.
                    We also deal with Pipeline Fabrication, Hilti Anchoring Services, Industrial Structural Painting, Warehouse Shed Fabrication Services, Rooftop Installation Services, and Hilti Firestop Systems.
                    The company always delivers the best possible prices. 
                    You will get international standard services at very reasonable prices.</p>

                    <div className={classes.visionSection}>
                        <h2><img src={p3} alt="Vision Icon" className={classes.icons} /> Vision</h2>
                        <p>To be recognized as the global leader for the design, manufacture, supply, and erection of pre-engineered steel buildings (PEB) and structures.</p>
                    </div>

                    <div className={classes.missionSection}>
                        <h2><img src={p4} alt="Mission Icon" className={classes.icons} /> Mission</h2>
                        <p>NN Engineers will achieve the vision by consistently delivering high-quality products to our customers, accompanied by personalized service and a commitment to excellence.</p>
                    </div>

                    <div className={classes.valuesSection}>
                        <h2><img src={p5} alt="Values Icon" className={classes.icons} /> Values</h2>
                        <ul>
                            <li><strong>Straight Talking:</strong> We encourage open debate where the best ideas win.</li>
                            <li><strong>Customer Centric:</strong> We put our customers at the center of our focus and initiative with the objective of providing them with unmatched levels of services and products.</li>
                            <li><strong>Team Work:</strong> We actively share information and ideas, enthusiastically working to make those around us better.</li>
                            <li><strong>Diversity and Respect:</strong> The diversity of our workforce is an asset, and we treat everyone with dignity and respect regardless of status, gender, education, ethnicity, or religion.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classes.block4}>
                <div className={classes.overlayText}>
                    NN Engineers Innovation and Excellence in PEB Industry
                </div>
            </div>
            {/* <div className={classes.block2}> 
                <div className={classes.imageSection}>
                    <img src={s1} alt="NN Engineers Project" className={classes.fullWidthImage1} />
                </div>
            </div>
         */}
        
            <Footer /> 
        </div>
    );
}

export default CompanyProfile;
