import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import LogoR from './LogoR';
import './safe.css';

export default function Safe() {
    return (
        <div className="box_pro_safe" id="antoan">
            <div className="card text-bg-dark">
                <img src="../assets/civic typer/banner-11.jpg" className="card-img" style={{filter:"brightness(75%)"}} alt="..." />
                <div className="card-img-overlay">
                    <div className="card-civicrsafe">
                        <img src="../assets/civic typer/logo-type-r-full-black.png" alt="" />
                        <h3 className="card-title">Honda SENSING</h3>

                        <p className="card-text">
                            Hệ thống công nghệ hỗ trợ  lái xe an toàn tiên tiến <br/> Honda SENSING  hỗ trợ và bảo vệ bạn tối đa
                            trong <br/> từng khoảnh khắc, để bạn an tâm vững tay lái trên <br/> mọi cung đường.
                        </p>
                    </div>
                    <p className="civicrnt-p">*Hình ảnh xe có thể có sự khác biệt so với thực tế</p>
                </div>
            </div>

            <div className="box_content_pro">
                <figure className="table">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda civic typer - "
                                        href="../assets/civic typer/1.png"
                                    >
                                        <img src="../assets/civic typer/1.png" alt="" />
                                        <figcaption>
                                            <h5>Hệ thống phanh giảm thiểu va chạm (CMBS)</h5>
                                            <p>
                                                Cảnh báo người lái khi phát hiện vật cản phía trước. Ngoài ra, trong
                                                trường hợp người lái không thể tránh khỏi va chạm, hệ thống sẽ tự động
                                                phanh để giảm thiểu thiệt hại.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda civic typer - "
                                        href="../assets/civic typer/2.png"
                                    >
                                        <img src="../assets/civic typer/2.png" alt="" />
                                        <figcaption>
                                            <h5>Hệ thống đèn pha thích ứng tự động (AHB)</h5>
                                            <p>
                                                Trong điều kiện lái xe vào ban đêm, hệ thống tự động chuyển đổi giữa đèn
                                                chiếu gần và đèn chiếu xa tùy thuộc vào tình trạng giao thông.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda civic typer - "
                                        href="../assets/civic typer/3.png"
                                    >
                                        <img src="../assets/civic typer/3.png" alt="" />
                                        <figcaption>
                                            <h5>Hệ thống giảm thiểu chệch làn đường (RDM)</h5>
                                            <p>
                                                Cảnh báo và hỗ trợ người lái đi đúng làn đường khi hệ thống phát hiện xe
                                                di chuyển quá gần hoặc đè lên vạch kẻ phân cách các làn đường.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
                <figure className="table">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda civic typer - "
                                        href="../assets//civic typer/4.png"
                                    >
                                        <img src="../assets//civic typer/4.png" alt="" />
                                        <figcaption>
                                            <h5>
                                                Hệ thống kiểm soát hành trình thích ứng bao gồm dải tốc độ thấp (ACC
                                                with LSF)
                                            </h5>
                                            <p>
                                                Hỗ trợ duy trì khoảng cách với phương tiện phía trước khi lái xe trên
                                                đường cao tốc. Hệ thống sẽ tự động tăng tốc và giảm tốc giúp việc lái xe
                                                thoải mái hơn.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>

                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda civic typer - "
                                        href="../assets/civic typer/5.png"
                                    >
                                        <img src="../assets/civic typer/5.png" alt="" />
                                        <figcaption>
                                            <h5>Hệ thống hỗ trợ giữ làn đường (LKAS)</h5>
                                            <p>
                                                Hỗ trợ đánh lái để giữ cho xe luôn đi ở giữa làn đường, đồng thời hiển
                                                thị cảnh báo trong trường hợp xe đi chệch khỏi làn đường.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda civic typer - "
                                        href="../assets/civic typer/6.png"
                                    >
                                        <img src="../assets/civic typer/6.png" alt="" />
                                        <figcaption>
                                            <h5>Hệ thống thông báo xe phía trước khởi hành (LCDN)</h5>
                                            <p>
                                                {' '}
                                                Phát hiện và thông báo cho người lái trong trường hợp xe phía trước đã
                                                bắt đầu di chuyển sau khi dừng đỗ thông qua các cảnh báo bằng hình ảnh
                                                và âm thanh. Tính năng này đặc biệt hữu dụng trong các trường hợp dừng
                                                đỗ đèn đỏ.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
            </div>
            <LogoR/>
        </div>
        
           
       
    );
}
