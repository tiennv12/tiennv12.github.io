import React from 'react';
import './hrvnt.css';
import Images from './Slider';

export default function Hrvnt() {
    return (
        <div className="box_pro_ngoai_that" id="ngoaithat">
            <div className="card text-bg-dark">
                
                 <img src="../assets/hrv/bg_exterior_1366.png" alt="" className='hrvnt'/>   
                
                <div className="card-img-overlay">
                    <div className="card-civic">
                        <h3 className="card-title">NGOẠI THẤT</h3>
                        <h2 className="text-card">THIẾT KẾ THỜI THƯỢNG CHO MỌI CUNG ĐƯỜNG</h2>

                        <p className="card-text">
                        Là tuyên ngôn cho lối sống hoàn mỹ, Honda HR-V để
                    lại dấu  ấn khó <br/> phai trên từng cây số. Thiết kế xe đầy năng động, mạnh mẽ mà vẫn sang trọng, <br/> nổi bật
                    mang đến sự mãn nhãn từ vẻ ngoài và sự thỏa mãn nhờ công năng
                
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
                                        data-caption="Honda hrv - "
                                        href="../assets/hrv/exterior-1.png"
                                    >
                                        <img src="../assets/hrv/exterior-1.png" alt="" />
                                        <figcaption>
                                        Mặt trước xe nổi bật với ốp ca lăng mạ chrome tạo hình kim cương
                                                        bạc xây nên một diện mạo đầy táo bạo và liều lĩnh (RS).
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda hrv - "
                                        href="../assets/hrv/exterior-2.png"
                                    >
                                        <img src="../assets/hrv/exterior-2.png" alt="" />
                                        <figcaption>
                                        Cụm đèn trước LED thiết kế hiện đại với điểm nhấn là dãi đèn xi nhan chạy đuổi (RS)
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda hrv - "
                                        href="../assets/hrv/exterior-3.png"
                                    >
                                        <img src="../assets/hrv/exterior-3.png" alt="" />
                                        <figcaption>
                                        Gương chiếu hậu gập tích hợp đèn báo rẽ LED hiện đại
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
                                        data-caption="Honda hrv - "
                                        href="../assets/hrv/exterior-4.png"
                                    >
                                        <img src="../assets/hrv/exterior-4.png" alt="" />
                                        <figcaption>
                                        La-zăng 18 inch đa chấu tạo sự mạnh mẽ và thời trang cho chiếc xe (RS)
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda hrv - "
                                        href="../assets/hrv/exterior-8.png"
                                    >
                                        <img src="../assets/hrv/exterior-8.png" alt="" />
                                        <figcaption>
                                        Cụm đèn hậu với dải đèn LED ngang mang đến vẻ ngoài thanh lịch và hiện đại
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda hrv - "
                                    >
                                        <img src="../assets/hrv/exterior-5.png" alt="" />
                                        <figcaption>
                                        Đèn sương mù LED được bố trí hài hòa với cản trước, góp phần tôn lên diện mạo sang trọng
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
                                        data-caption="Honda hrv - "
                                    >
                                        <img src="../assets/hrv/exterior-6.png" alt="" />
                                        <figcaption>Tay nắm cửa phía trước mở bằng cảm biến tiện lợi</figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda hrv - "
                                        href="../assets/hrv/exterior-7.png"
                                    >
                                        <img src="../assets/hrv/exterior-7.png" alt="" />
                                        <figcaption>
                                        Ăng-ten vây cá mập tạo điểm nhấn độc đáo
                                        </figcaption>
                                    </figure>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
            </div>
            <Images/>
        </div>
    );
}
