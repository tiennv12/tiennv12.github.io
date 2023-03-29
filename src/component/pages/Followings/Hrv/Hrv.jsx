import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbarsp';
import './hrv.css';
import Hrvnt from './Hrvnt/Hrvnt';
import Hrvnoi from './Hrvnoi/Hrvnoi';
import Engine from './Hrvvanhanh/Engine';
import Safe from './Hrvsafe/Safe';
import Pk from './HrvPK/Pk';
import Specifications from './Specifications/Specifications';
import Footers from '../../Footers';

export default function Hrv() {
    return (
        <div>
            <Navbar />
            <div className="card text-bg-dark" id="thongdiep">
                <img src="../assets/hrv/bg_intro_1366.png" className="card-hrv" alt="..." />
                <div className="card-img-overlay">
                    <img className="hrv-text" src="../assets/hrv/bg-text1.png" alt="" />
                </div>
            </div>

            <div className="card text-bg-dark" id="thongdiep">
                <img src="../assets/hrv/bg_message_1366.png" className="hrv-card" alt="..." />
                <div className="card-img-overlay">
                    <div className="text-hrv">
                        <h3 className="card-title">THÔNG ĐIỆP</h3>
                        <h4 className="text-card">LỰA CHỌN HOÀN HẢO CHO CUỘC SỐNG ĐA NHIỆM</h4>

                        <p className="card-text">
                            Tạo tác bởi sự hoàn hảo, Honda HR-V sẽ đồng hành với bạn qua mọi cung bậc cảm xúc,  từ chuyến
                            đi ấm áp với gia đình đến những trải nghiệm đầy hứng khởi cùng bè bạn. Đáp ứng mọi nhu cầu,
                            Honda HR-V khắc họa cuộc sống đầy bản lĩnh của chủ nhân
                        </p>
                    </div>
                </div>
            </div>
            <Hrvnt />
            <Hrvnoi />
            <Engine />
            <Safe/>
            <Pk/>
            <Specifications/>
            <Footers/>
        </div>
    );
}
