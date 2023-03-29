import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbarsp';
import './civic.css';
import Civicvnt from './Civicnt/Civicnt';
import Civicnoi from './Civicnoi/Civicnoi';
import Engine from './Civicvanhanh/Engine';
import Safe from './Civicsafe/Safe';
import Pk from './CivicPK/Pk';
import Specifications from './Specifications/Specifications';
import Footers from '../../Footers';

export default function Civic() {
    return (
        <div>
            <Navbar />
            <img className="img" src="../assets/civic/honda-civic-banner-m4okjgrk.png" alt="banner" />

            <div className="card text-bg-dark" id="thongdiep">
                <img src="../assets/civic/bg.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <div className="text-civic">
                        <h3 className="card-title">THÔNG ĐIỆP</h3>
                        <h4 className="text-card">KIẾN TẠO CHUẨN MỰC HOÀN HẢO</h4>

                        <p className="card-text">
                            Tách mình khỏi những chuẩn mực cố định, Honda Civic chuyển mình để bứt phá trong từng đường
                            nét <br />
                            thiết kế và tính năng, kiến tạo nên những thành công mới cho chủ sở hữu
                        </p>
                    </div>
                </div>
            </div>

            <Civicvnt />
            <Civicnoi />
            <Engine />
            <Safe />
            <Pk/>
            <Specifications/>
            <Footers/>
        </div>
    );
}
