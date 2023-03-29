import React from 'react';
import './citynt.css';
import Images from './Slider';

export default function Cityvnt() {
    return (
        <div className="box_pro_ngoai_that" id="ngoaithat">
            <div className="card text-bg-dark">
                <img src="../assets/city/section-5-bg.png" alt="" />

                <div className="card-img-overlay">
                    <div className="card-city">
                        <h3 className="card-title">NGOẠI THẤT</h3>
                        <h2 className="text-card">
                            NỔI BẬT ĐÓN ĐẦU <br /> XU HƯỚNG
                        </h2>

                        <p className="card-text">
                            Honda City kiến tạo chuẩn mực cho mọi xu hướng.
                            <br />
                            Với phong cách thiết kế thể thao, năng động đầy
                            <br />
                            cuốn hút, chiếc xe sẽ luôn là tâm điểm mỗi khi xuất hiện
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
                                        data-caption="Honda city - "
                                        href="../assets/city/car-front.png"
                                    >
                                        <img src="../assets/city/car-front.png" alt="" />
                                        <figcaption>
                                            Mặt trước xe nổi bật với ốp mặt ca-lăng hình đôi cánh vững chãi tạo nên
                                            phong cách thể thao và sang trọng cùng logo RS dập nổi mang đậm tinh thần
                                            thể thao Honda (RS).
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/front-lights.png"
                                    >
                                        <img src="../assets/city/front-lights.png" alt="" />
                                        <figcaption>
                                            Cụm đèn trước thiết kế hiện đại với điểm nhấn là dải đèn LED chạy ban ngày
                                            cuốn hút bao ánh nhìn ngưỡng mộ.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/fog-lights.png"
                                    >
                                        <img src="../assets/city/fog-lights.png" alt="" />
                                        <figcaption>
                                            Đèn sương mù LED được bố trí hài hoà với cản trước, góp phần tôn lên diện
                                            mạo thể thao góc cạnh (RS).
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
                                        data-caption="Honda city - "
                                        href="../assets/city/rearview-mirror.png"
                                    >
                                        <img src="../assets/city/rearview-mirror.png" alt="" />
                                        <figcaption>
                                            Gương chiếu hậu tích hợp đèn báo rẽ LED hiện đại (RS, L).
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/la-zang.png"
                                    >
                                        <img src="../assets/city/la-zang.png" alt="" />
                                        <figcaption>
                                            La-zăng 16 inch đa chấu thiết kế thể thao, tạo nên sự khoẻ khoắn và thời
                                            trang cho chiếc xe (RS).
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                    >
                                        <img src="../assets/city/tail-lights.png" alt="" />
                                        <figcaption>
                                            Cụm đèn hậu LED với thiết kế đa chiều sắc sảo, giúp tăng khả năng nhận diện
                                            trong đêm.
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
                                        data-caption="Honda city  "
                                    >
                                        <img src="../assets/city/wind-spoiler.png" alt="" />
                                        <figcaption>Cánh lướt gió thể thao đầy cá tính (RS).</figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/rear-bumper.png"
                                    >
                                        <img src="../assets/city/rear-bumper.png" alt="" />
                                        <figcaption>Ốp cản sau thiết kế khoẻ khoắn và vững chãi (RS).</figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/antenna.png"
                                    >
                                        <img src="../assets/city/antenna.png" alt="" />
                                        <figcaption>Ăng-ten vây cá mập tạo điểm nhấn độc đáo.</figcaption>
                                    </figure>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
            </div>
            <Images />
        </div>
    );
}
