import React from 'react';
import './civicnoi.scss';

export default function Civicnoi() {
    return (
        <div className="box_pro_noi_that" id="noithat">
            <div className="card text-bg-dark">
                <img src="../assets/civic/bg_1.jpg" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <div className="overlay-civicnoi">
                        <h3 className="card-title">NỘI THẤT</h3>
                        <h1 className="text-card">TOẢ SÁNG KHÔNG GIAN TIỆN NGHI</h1>

                        <p className="card-text">
                            Rộng rãi, tiện nghi cùng các trang bị hiện đại, Honda Civic <br/> cho bạn và gia đình tận hưởng sự
                            thư thái vượt xa mong <br/> đợi trên mọi hành trình.
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
                                        href="../assets/civic/connect_phone.png"
                                    >
                                        <img src="../assets/civic/connect_phone.png" alt="" />
                                        <figcaption>
                                            Màn hình cảm ứng 9 inch độ phân giải cao cho hình ảnh hiển thị mượt mà và
                                            sắc nét. Hệ thống hỗ trợ kết nối không dây với điện thoại giúp bạn dễ dàng
                                            nghe nhạc, nhắn tin, xem bản đồ,… và tận hưởng hành trình một cách trọn vẹn
                                            (RS).
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Civic - "
                                        href="../assets/civic/cum_dong_ho.png"
                                    >
                                        <img src="../assets/civic/cum_dong_ho.png" alt="" />
                                        <figcaption>
                                            Cụm đồng hồ thông số điện tử 10.2 inch hiển thị màu sắc nét và được bố trí
                                            thuận tiện với tầm mắt người lái (RS). Bảng đồng hồ trung tâm có thể tùy
                                            chọn hiển thị thông tin bài nhạc, tình trạng cửa, thông số hành trình,… qua
                                            nút bấm trên vô-lăng, đảm bảo sự tiện lợi mà vẫn giữ được sự tập trung tối
                                            đa khi cầm lái.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Civic - "
                                        href="../assets/civic/vo_lang.png"
                                    >
                                        <img src="../assets/civic/vo_lang.png" alt="" />
                                        <figcaption>
                                            Vô-lăng tích hợp nút điều khiển đa thông tin, âm thanh, đàm thoại rảnh tay
                                            và ra lệnh bằng giọng nói.
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
                                        href="../assets/civic/he_thong_loa.png"
                                    >
                                        <img src="../assets/civic/he_thong_loa.png" alt="" />
                                        <figcaption>
                                            Hệ thống 12 loa cao cấp BOSE với công nghệ âm thanh vòm mang lại trải nghiệm
                                            âm thanh đa chiều sống động và chân thật, để bạn đắm chìm với những bản nhạc
                                            tuyệt hảo trên mọi chuyến hành trình (RS).
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Civic - "
                                        href="../assets/civic/dieu_hoa.png"
                                    >
                                        <img src="../assets/civic/dieu_hoa.png" alt="" />
                                        <figcaption>Hệ thống điều hòa tự động 2 vùng tiện lợi (RS).</figcaption>
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
