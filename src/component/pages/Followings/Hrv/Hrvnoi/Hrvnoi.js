import React from 'react';
import './hrvnoi.scss';

export default function Hrvnoi() {
    return (
        <div className="box_pro_noi_that" id="noithat">
            <div className="card text-bg-dark">
                <img src="../assets/hrv/bg_interior_desktop_2.png" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <div className="overlay-hrvnoi">
                        <h3 className="card-title">NỘI THẤT</h3>
                        <h1 className="text-card">KHÔNG GIAN RỘNG RÃI, TẬN HƯỞNG BẤT NGỜ</h1>

                        <p className="card-text">
                            Nội thất sang trọng với không gian rộng rãi cùng tầm nhìn <br/> thoáng đãng trải dài giúp bạn tận
                            hưởng thoải mái trải nghiệm gần xa
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
                                        href="../assets/hrv/interior1-1.png"
                                    >
                                        <img src="../assets/hrv/interior1-1.png" alt="" />
                                        <figcaption>
                                            <p>Chế độ vật cao (Tall Mode).</p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda hrv - "
                                        href="../assets/hrv/interior1-2.png"
                                    >
                                        <img src="../assets/hrv/interior1-2.png" alt="" />
                                        <figcaption>
                                            <p>Chế độ đồ vật dài (Long mode)</p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda hrv - "
                                        href="../assets/hrv/interior1-3.png"
                                    >
                                        <img src="../assets/hrv/interior1-3.png" alt="" />
                                        <figcaption>
                                            <p>Chế độ tiện dụng (Utility mode)</p>
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
                                        href="../assets/hrv/interior-1.png"
                                    >
                                        <img src="../assets/hrv/interior-1.png" alt="" />
                                        <figcaption>
                                            <p>
                                                Cụm đồng hồ kết hợp Digital và Analog với màn hình TFT 7 inch hiện thị
                                                màu sắc rõ nét, thuận tiện tầm mắt người lái.{' '}
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda hrv - "
                                        href="../assets/hrv/interior-2.png"
                                    >
                                        <img src="../assets/hrv/interior-2.png" alt="" />
                                        <figcaption>
                                            <p>
                                                Màn hình cảm ứng 8 inch với độ phân giải cao, tích hợp kết nối có dây
                                                với Apple Carplay và Android Auto giúp tận hưởng hành trình một cách
                                                trọn vẹn
                                            </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda hrv - "
                                        href="../assets/hrv/interior-3.png"
                                    >
                                        <img src="../assets/hrv/interior-3.png" alt="" />
                                        <figcaption>
                                            <p>Hệ thống điều hòa 2 vùng tiện lợi</p>
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
