import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbarsp';
import './civicr.css';

import Footers from '../../Footers';
import CivicRvnt from './CivicRnt/CivicRnt';
import CivicRnoi from './CivicRnoi/CivicRnoi';
import Engine from './CivicRvanhanh/Engine';
import Safe from './CivicRsafe/Safe';
import Specifications from './Specifications/Specifications';

export default function CivicR() {
    return (
        <div>
            <Navbar />
            <img className="img" src="../assets/civic typer/honda-civic-banner-1.png" alt="banner" />

            <div className="card text-bg-dark" id="thongdiep">
                <img src="../assets/civic typer/banner-2.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <div className="text-civic-typer" >
                        <h3 className="card-title">THÔNG ĐIỆP</h3>
                        <h4 className="text-card">BỨT TỐC VƯỢT ĐỈNH</h4>

                        <p className="card-text">
                            
                        Dù đã ở đỉnh cao, chủ nhân Honda Civic Type R <br/> vẫn không ngừng tăng tốc để chinh phục đỉnh mới, <br/> vinh quang mới và trở thành phiên bản thành công hơn của chính mình.
                            
                        </p>
                        
                    </div>
                </div>
            </div>
            <div id="giatrinoibat">
            <Carousel >
                <Carousel.Item>
            <div className="card text-bg-dark">
            <img src="../assets/civic typer/banner-4a.png" className="card-img" alt="..."/>
            <div className="card-img-overlay">
              <div className='text-banner4a'>
               
                <h2 className='text-card'>GIẢI THƯỞNG 
                    <br />
                    TOÀN CẦU
                </h2>
              
                <p className="card-text">
                            Từ khi ra mắt, Honda Civic Type R <br/> tự hào nhận được nhiều giải thưởng <br/> danh giá trên toàn cầu, như  Giải <br/> thưởng “Xe của năm” được báo BBC <br/> Top Gear trao tặng năm 2017; Giải <br/> thưởng “Mẫu xe Hatchback nổi bật<br/> của năm 2020” do tạp chí Auto <br/> Express (Anh Quốc) trao tặng, cùng <br/> nhiều các giải thưởng uy tín khác.
                        </p>
                        <p className='text-p'>*Hình ảnh xe có thể có sự khác biệt so với thực tế</p>
                    </div>    
            </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="card text-bg-dark">
            <img src="../assets/civic typer/banner-4b.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay" >
                <div className='text-banner4b'>
                <h3 className="card-title">KỶ LỤC ĐƯỜNG ĐUA</h3>
                <p className="card-text"> 
                            Kế thừa chất đua đầy mạnh mẽ, Honda Civic Type R thế hệ mới thiết lập kỷ lục mới về tốc độ cho mẫu xe dẫn động cầu trước tại đường đua Suzuka Nhật Bản năm 2022. 
                        </p>
                </div> 
                        <p className='text-p4b'>*Hình ảnh xe có thể có sự khác biệt so với thực tế</p>
            </div>
            </div>
            </Carousel.Item>
            </Carousel>
            </div>
            <CivicRvnt/>
            <CivicRnoi/>
            <Engine/>
            <Safe/>
            <Specifications/>
            <Footers/>
        </div>
    );
}
