import React from 'react';
import './pk.css';

export default function Pk() {
    return (
        <div className="box_pro_pk" id="pk">
           <div className="card text-bg-dark">
                <img src="../assets/city/section-9-bg.png" className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <div className="card-citypk">
                        <h3>PHỤ KIỆN</h3>
                        <h1>PHỤ KIỆN TUỲ CHỌN CHÍNH HÃNG</h1>
                        <p>Bạn có thể trang bị thêm những phụ kiện
						tùy chọn chính <br/> hãng, giúp cho mọi hành trình
						trở nên tiện lợi và hữu dụng.</p>
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
                                        href="../assets/city/car-hood.png"
                                    >
                                        <img
                                            src="../assets/city/car-hood.png"
                                            alt=""
                                        />
                                        <figcaption>
                                            <p>BẠT TRÙM XE.</p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/carpet.png"
                                    >
                                        <img src="../assets/city/carpet.png" alt="" />
                                        <figcaption>
                                            <p>THẢM TRẢI SÀN</p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/fenders.png"
                                    >
                                        <img src="../assets/city/fenders.png" alt="" />
                                        <figcaption>
                                            <p>CHẮN BÙN </p>
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
                                        href="../assets/city/foot-braces-lights.png"
                                    >
                                        <img src="../assets/city/foot-braces-lights.png" alt="" />
                                        <figcaption>
                                            <p>NẸP BƯỚC CHÂN CÓ ĐÈN </p>
                                        </figcaption>
                                    </figure>
                                </td>
                                
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/spread-trunk.png"
                                    >
                                        <img src="../assets/city/spread-trunk.png" alt="" />
                                        <figcaption>
                                        <p>TRẢI CỐP </p>
                                        </figcaption>
                                    </figure>
                                </td>
                            
                            
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda city - "
                                        href="../assets/city/rain-cover.png"
                                    >
                                        <img src="../assets/city/rain-cover.png" alt="" />
                                        <figcaption>
                                            <p>VIỀN CHE MƯA </p>
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
