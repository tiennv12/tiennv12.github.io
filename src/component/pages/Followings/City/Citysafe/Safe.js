import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './safe.css';

export default function Safe() {
    return (
        <div className="box_pro_safe" id="antoan">
            <div className="card text-bg-dark">
                <img src="../assets/city/section-8-bg.png" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <div className="card-citysafe">
                        <h2 className="card-title">AN TOÀN</h2>
                        <h2>HỆ THỐNG AN TOÀN TIÊN TIẾN</h2>
                        <p className="card-text">
                            Xếp hạng 5* cao nhất về mức độ an toàn theo đánh giá <br/> của Tổ chức đánh giá xe mới Đông Nam Á
                            <br/>- ASEAN NCAP.
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
                                        href="../assets/city/air-bag.png"
                                    >
                                        <img src="../assets/city/air-bag.png" alt="" />
                                        <figcaption>
                                            <h5>HỆ THỐNG TÚI KHÍ</h5>
                                            <p>
                                                Hệ thống 6 túi khí giúp đảm bảo an toàn tối đa cho người lái và người
                                                đồng hành trong trường hợp xảy ra va chạm (RS).
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/abs.png"
                                    >
                                        <img src="../assets/city/abs.png" alt="" />
                                        <figcaption>
                                            <h5>HỆ THỐNG ABS, EBD & BA</h5>
                                            <p>
                                                Hệ thống chống bó cứng phanh (ABS) , phân bổ lực phanh điện tử (EBD) và
                                                hỗ trợ phanh khẩn cấp (BA) giúp xe an toàn trong những tình huống phanh
                                                khẩn cấp.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/vsa.png"
                                    >
                                        <img src="../assets/city/vsa.png" alt="" />
                                        <figcaption>
                                            <h5>HỆ THỐNG CÂN BẰNG ĐIỆN TỬ (VSA)</h5>
                                            <p>
                                                Hệ thống cân bằng điện tử (VSA) kiểm soát những thay đổi đột ngột, giữ
                                                cho xe luôn trong tầm kiểm soát của người lái.
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
                                        data-caption="Honda city - "
                                        href="../assets//city/hsa.png"
                                    >
                                        <img src="../assets//city/hsa.png" alt="" />
                                        <figcaption>
                                            <h5>CHẾ ĐỘ HỖ TRỢ KHỞI HÀNH NGANG DỐC</h5>
                                            <p>
                                                Chế độ hỗ trợ khởi hành ngang dốc (HSA) giúp người lái an tâm và tự tin
                                                ở những cung đường dốc hoặc nhấp nhô.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>

                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/frame.png"
                                    >
                                        <img src="../assets/city/frame.png" alt="" />
                                        <figcaption>
                                            <h5>KHUNG XE</h5>
                                            <p>
                                                Khung xe sử dụng các tấm thép cường lực cao, giúp hấp thụ lực tác động
                                                của va chạm, giảm nguy cơ chấn thương.
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/isofix.png"
                                    >
                                        <img src="../assets/city/isofix.png" alt="" />
                                        <figcaption>
                                            <h5>ISOFIX</h5>
                                            <p>IsoFix - Móc ghế an toàn cho trẻ em hàng ghế sau.</p>
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
                                        href="../assets/city/reverse-camera.png"
                                    >
                                        <img src="../assets/city/reverse-camera.png" alt="" />
                                        <figcaption>
                                            <h5>CAMERA LÙI</h5>
                                            <p>
                                                Camera lùi 3 góc quay là trợ thủ đắc lực trong các tình huống lùi và đỗ
                                                xe (RS, L).
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
