import React from 'react';
import './civicnt.css';
import Images from './Slider';

export default function Civicvnt() {
    return (
        <div className="box_pro_ngoai_that" id="ngoaithat">
            <div className="card text-bg-dark">
                
                 <img src="../assets/civic/gb.jpg" alt=""/>   
                
                <div className="card-img-overlay">
                    <div className="card-civic">
                        <h3 className="card-title">NGOẠI THẤT</h3>
                        <h2 className="text-card">DẤU ẤN VƯỢT TRỘI TẠO NÊN CHUẨN MỰC MỚI</h2>

                        <p className="card-text">
                            Thể thao, thời thượng nhưng không kém phần sang trọng, thiết kế mới của Honda Civic là tổng
                            hòa của nhiều chi tiết tinh tế để kiến tạo nên  một diện mạo mới mẻ đầy cuốn hút, phản
                            ánh trọn vẹn cá tính chủ sở hữu dám thách thức định kiến để tạo dựng vị thế riêng.
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
                                        data-caption="Honda Civic - "
                                        href="../assets/civic/mat_truoc_xe.png"
                                    >
                                        <img src="../assets/civic/mat_truoc_xe.png" alt="" />
                                        <figcaption>
                                            Mặt trước xe nổi bật với lưới tản nhiệt tối màu tạo nên phong cách mạnh mẽ
                                            đầy khí chất.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Civic - "
                                        href="../assets/civic/cum_den_truoc.png"
                                    >
                                        <img src="../assets/civic/cum_den_truoc.png" alt="" />
                                        <figcaption>
                                            Cụm đèn trước LED thiết kế hiện đại với điểm nhấn là dải đèn LED chạy ban
                                            ngày cuốn hút bao ánh nhìn ngưỡng mộ (RS,G)
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Civic - "
                                        href="../assets/civic/den_suong_mu.png"
                                    >
                                        <img src="../assets/civic/den_suong_mu.png" alt="" />
                                        <figcaption>
                                            Đèn sương mù LED được bố trí hài hòa với cản trước, góp phần tôn lên diện
                                            mạo sang trọng cá tính (RS, G)
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
                                        data-caption="Honda Civic - "
                                        href="../assets/civic/la_zang.png"
                                    >
                                        <img src="../assets/civic/la_zang.png" alt="" />
                                        <figcaption>
                                            La-zăng 18” đa chấu thiết kế thể thao, tạo nên sự khoẻ khoắn và thời trang
                                            cho chiếc xe (RS)
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Civic - "
                                        href="../assets/civic/guong_chieu_hau.png"
                                    >
                                        <img src="../assets/civic/guong_chieu_hau.png" alt="" />
                                        <figcaption>
                                            Gương chiếu hậu tự động gập tích hợp đèn báo rẽ LED hiện đại (RS,G)
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Civic - "
                                    >
                                        <img src="../assets/civic/tay_nam_cua.png" alt="" />
                                        <figcaption>
                                            Tay nắm cửa phía trước đóng/mở bằng cảm biến tiện lợi (RS,G)
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
                                        data-caption="Honda Civic - "
                                    >
                                        <img src="../assets/civic/ang_ten.png" alt="" />
                                        <figcaption>Ăng tên vây cá mập tạo điểm nhấn độc đáo</figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Civic - "
                                        href="../assets/civic/cum_den_hau.png"
                                    >
                                        <img src="../assets/civic/cum_den_hau.png" alt="" />
                                        <figcaption>
                                            Cụm đèn hậu LED với thiết kế đa chiều sắc sảo giúp tăng khả năng nhận diện
                                            trong đêm
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
