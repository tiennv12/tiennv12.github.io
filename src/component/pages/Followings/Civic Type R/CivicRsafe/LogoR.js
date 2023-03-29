import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './safe.css';

export default function LogoR() {
    return (
        <div className="box_pro_safe">
            <div className="card text-bg-dark">
                <img src="../assets/civic typer/Background.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <div className="card-safecivicr">
                        <h3 className="card-title">Honda LogR</h3>

                        <p className="card-text">
                            Ứng dụng dành riêng cho Honda Civic Type R giúp chủ sở hữu nâng cao kỹ năng cầm lái nhờ hệ <br/>
                            thống máy tính hiện đại liên tục phân tích chi tiết dữ liệu lái và chấm điểm sau mỗi vòng
                            đua.
                        </p>
                    </div>
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
                                        href="../assets/civic typer/hien-thi-moi-truong-xung-quanh.jpg"
                                    >
                                        <img src="../assets/civic typer/hien-thi-moi-truong-xung-quanh.jpg" alt="" />
                                        <figcaption>
                                            <p>
                                                Tùy chỉnh các thông tin hiển thị bao gồm thông tin về xe/môi trường xung
                                                quanh, thời gian thực của chuyển động 3D, đồng hồ G cùng vòng tròn thể
                                                hiện độ ma sát của từng bánh xe.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda civic typer - "
                                        href="../assets/civic typer/kha-nang-cua.jpg"
                                    >
                                        <img src="../assets/civic typer/kha-nang-cua.jpg" alt="" />
                                        <figcaption>
                                            <p>
                                                Tự động chấm điểm về khả năng tăng tốc và vào cua trên những cung đường
                                                hàng ngày, giúp bạn cải thiện kỹ năng lái xe mượt mà và chính xác hơn.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda civic typer - "
                                        href="../assets/civic typer/phan-tich-du-lieu-lai-xe.jpg"
                                    >
                                        <img src="../assets/civic typer/phan-tich-du-lieu-lai-xe.jpg" alt="" />
                                        <figcaption>
                                            <p>
                                                Hệ thống hiện đại, tích hợp nhiều cảm biến sẽ liên tục thu thập và phân
                                                tích dữ liệu lái xe trên từng cung đường đua và hiển thị thông tin cho
                                                người dùng trên ứng dụng Honda LogR.
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
                                        href="../assets//civic typer/logr.jpg"
                                    >
                                        <img src="../assets//civic typer/logr.jpg" alt="" />
                                        <figcaption>
                                            <p>
                                                Dễ dàng theo dõi, phân tích và chia sẻ các thông số lái xe thông qua ứng
                                                dụng LogR hoàn toàn mới trên điện thoại.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
            </div>
        </div>
    );
}
