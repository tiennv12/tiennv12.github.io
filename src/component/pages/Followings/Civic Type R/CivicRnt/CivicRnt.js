import React from 'react';
import './civicrnt.css';


export default function CivicRvnt() {
    return (
        <div className="box_pro_ngoai_that" id="ngoaithat">
            <div className="card text-bg-dark">
                <img src="../assets/civic typer/banner-5a.jpg" alt="" />

                <div className="card-img-overlay">
                    <div className="cardcivicrnt">
                    <img src="../assets/civic typer/logo-type-r-full-black.png" alt="" />
                        <h2 className="text-card">DẤU ẤN ĐẬM CHẤT THỂ THAO</h2>

                        <p className="card-text">
                            Là tuyên ngôn đầy cá tính và mạnh mẽ <br /> của nhà vô địch đường đua, Honda Civic <br />{' '}
                            Type R sở hữu diện mạo thể thao đầy
                            <br /> mãn nhãn và cuốn hút.
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
                                        data-caption="Honda Civic Type R - "
                                        href="../assets/civic typer/section6a.jpg"
                                    >
                                        <img src="../assets/civic typer/section6a.jpg" alt="" />
                                        <figcaption>
                                            Cụm ba ống xả đầy mạnh mẽ với những âm thanh uy lực. Mặt trước xe nổi bật
                                            với lưới tản nhiệt tổ ong cùng logo chữ H trên nền đỏ cá tính, đặc trưng ghi
                                            dấu tinh thần Type R.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Civic Type R - "
                                        href="../assets/civic typer/section6b.jpg"
                                    >
                                        <img src="../assets/civic typer/section6b.jpg" alt="" />
                                        <figcaption>
                                            La-zăng 19 inch phối màu đỏ-đen cùng hệ thống phanh Brembo nổi tiếng, thu
                                            hút mọi ánh nhìn dù là trên đường đua hay nơi thành thị.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Civic Type R - "
                                        href="../assets/civic typer/section6c.jpg"
                                    >
                                        <img src="../assets/civic typer/section6c.jpg" alt="" />
                                        <figcaption>Cụm ba ống xả đầy mạnh mẽ với những âm thanh uy lực.</figcaption>
                                    </figure>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
                <div className="box_content_pro">
                    <figure className="table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <figure
                                            className="image"
                                            data-fancybox="gallery_content"
                                            data-caption="Honda Civic Type R - "
                                            href="../assets/civic typer/section6d.png"
                                        >
                                            <img src="../assets/civic typer/section6d.png" alt="" />
                                            <figcaption>
                                            Cụm ba ống xả đầy mạnh mẽ với những âm thanh uy lực.
                                            </figcaption>
                                        </figure>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>
                </div>
            </div>
            
        </div>
    );
}
