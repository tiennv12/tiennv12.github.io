import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './safe.css';

export default function Safe() {
    return (
        <div className="box_pro_safe" id="antoan">
            <Carousel>
                <Carousel.Item>
                    <div className="card text-bg-dark">
                        <img src="../assets/crv/active-safety.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <div className="card-safe">
                                <h3 className="card-title">AN TOÀN</h3>
                                <h2 className="text-card">
                                    CÔNG NGHỆ AN TOÀN
                                    <br />
                                    Honda SENSING
                                </h2>

                                <p className="card-text">
                                    Hệ thống công nghệ hỗ trợ lái xe an toàn tiên tiến Honda SENSING hỗ trợ và bảo vệ
                                    bạn tối đa trong từng khoảnh khắc, <br /> để bạn an tâm vững tay lái trên mọi cung
                                    đường.
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="card text-bg-dark">
                        <img src="../assets/crv/secure-one.jpg" className="card-img" alt="..." />
                        <div className="card-img-overlay">
                            <div className="card-safe">
                                <h3 className="card-title">AN TOÀN</h3>
                                <h2 className="text-card">TRANG BỊ AN TOÀN KHÁC</h2>
                                <p className="card-text">
                                    Với các công nghệ an toàn chủ động và bị động tiên tiến, <br /> Honda CR-V đảm bảo
                                    sự thư thái của bạn trên mọi thử thách.
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="box_content_pro">
                <figure className="table">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/brake-system.jpg"
                                    >
                                        <img src="../assets/crv/brake-system.jpg" alt="" />
                                        <figcaption>
                                            <h5>Hệ thống phanh giảm thiểu va chạm CMBS</h5>
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
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/lane-keep-assist.jpg"
                                    >
                                        <img src="../assets/crv/lane-keep-assist.jpg" alt="" />
                                        <figcaption>
                                            <h5>Hệ thống hỗ trợ giữ làn đường LKAS</h5>
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
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/minimize-lane-departure.jpg"
                                    >
                                        <img src="../assets/crv/minimize-lane-departure.jpg" alt="" />
                                        <figcaption>
                                            <h5>Hệ thống giảm thiểu lệch làn đường RDM</h5>
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
                                        data-caption="Honda Crv - "
                                        href="../assets//crv/spotlight.png"
                                    >
                                        <img src="../assets//crv/spotlight.png" alt="" />
                                        <figcaption>
                                            <h5>Hệ thống đèn pha thích ứng tự động AHB</h5>
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
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/cruise-control.jpg"
                                    >
                                        <img src="../assets/crv/cruise-control.jpg" alt="" />
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
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/miror_screen.jpg"
                                    >
                                        <img src="../assets/crv/miror_screen.jpg" alt="" />
                                        <figcaption>
                                            Chế độ quan sát làn đường (LaneWatch) qua hệ thống camera đặt ở gương chiếu
                                            hậu giúp quan sát và cảnh báo khoảng cách an toàn với phương tiện gần nhất
                                            (L/G).
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/hand-brake.jpg"
                                    >
                                        <img src="../assets/crv/hand-brake.jpg" alt="" />
                                        <figcaption>
                                            Phanh tay điện tử giúp việc đỗ xe hay dừng xe trên đường dốc trở nên dễ dàng
                                            chỉ với thao tác đơn giản trên nút bấm (P).
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/anti-sleepy.png"
                                    >
                                        <img src="../assets/crv/anti-sleepy.png" alt="" />
                                        <figcaption>
                                            Hệ thống cảnh báo chống buồn ngủ (Driver Attention Monitor) phát hiện tình
                                            trạng mất tập trung của người lái khi điều khiển xe, đồng thời phát ra tín
                                            hiệu cảnh báo với các cấp độ thông qua hình ảnh, âm thanh và rung vô lăng để
                                            nhắc nhở lái xe nghỉ ngơi khi cần thiết.
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
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/reversing-camera.jpg"
                                    >
                                        <img src="../assets/crv/reversing-camera.jpg" alt="" />
                                        <figcaption>
                                            Camera lùi 3 góc quay giúp người lái dễ dàng quan sát hơn trong các tình
                                            huống lùi và dừng/đỗ xe.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/active-steering.png"
                                    >
                                        <img src="../assets/crv/active-steering.png" alt="" />
                                        <figcaption>
                                            Hệ thống hỗ trợ đánh lái chủ động AHA kiểm soát lực phanh trên từng bánh xe
                                            tương ứng với gia tốc và mức đánh lái, hỗ trợ người lái bám cua chính xác và
                                            tự tin.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/departing-across-slope.png"
                                    >
                                        <img src="../assets/crv/departing-across-slope.png" alt="" />
                                        <figcaption>
                                            Chế độ khởi hành ngang dốc HSA giúp người lái an tâm và tự tin hơn trên
                                            những cung đường dốc.
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
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/balance.png"
                                    >
                                        <img src="../assets/crv/balance.png" alt="" />
                                        <figcaption>
                                            Hệ thống cân bằng điện tử VSA kiểm soát những thay đổi đột ngột, giữ cho xe
                                            luôn trong tầm kiểm soát của người lái.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/rain-sensor.jpg"
                                    >
                                        <img src="../assets/crv/rain-sensor.jpg" alt="" />
                                        <figcaption>
                                            Cảm biến gạt mưa tự động kích hoạt khi trời mưa và điều chỉnh mức gạt phù
                                            hợp, mang đến tầm nhìn tối đa cho người lái (L).
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/emergency-brake-lights.jpg"
                                    >
                                        <img src="../assets/crv/emergency-brake-lights.jpg" alt="" />
                                        <figcaption>
                                            Đèn báo phanh khẩn cấp tự động kích hoạt khi xe dừng đột ngột, hạn chế va
                                            chạm với các xe phía sau.
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
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/automatic-door-lock.png"
                                    >
                                        <img src="../assets/crv/automatic-door-lock.png" alt="" />
                                        <figcaption>
                                            Chức năng khoá cửa tự động khi bạn rời khỏi xe và mang theo chìa khoá ra
                                            khỏi vùng cảm biến.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/keep-automatically.jpg"
                                    >
                                        <img src="../assets/crv/keep-automatically.jpg" alt="" />
                                        <figcaption>
                                            Chế độ giữ phanh tạm thời: Hệ thống sẽ tự động hãm phanh khi xe dừng tại các
                                            điểm dừng đèn giao thông hoặc tắc đường, giúp bạn nhàn hơn vì không phải giữ
                                            chân phanh trong khoảng thời gian dài.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>
                                    <figure
                                        className="image"
                                        data-fancybox="gallery_content"
                                        data-caption="Honda Crv - "
                                        href="../assets/crv/sensor-back.jpg"
                                    >
                                        <img src="../assets/crv/sensor-back.jpg" alt="" />
                                        <figcaption>Cảm biến lùi cảnh báo bằng âm thanh và hình ảnh (L).</figcaption>
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
