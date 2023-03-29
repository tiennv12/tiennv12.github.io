import React from 'react';
import './specifications.scss';

export default function Specifications() {
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h2>THÔNG SỐ KỸ THUẬT</h2>
            </div>
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-bordered table-striped mb-0 ml-2">
                    <thead>
                        <tr class="text-center">
                            <th scope="col-4 " style={{ witdh: '45%' }}>
                                DANH MỤC
                            </th>
                            <th scope="col-4" style={{ witdh: '18.3%' }}>
                                CIVIC E
                            </th>
                            <th scope="col-4" style={{ witdh: '18.3%' }}>
                                CIVIC G
                            </th>
                            <th scope="col-4" style={{ witdh: '18.3%' }}>
                                CIVIC RS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="success-1">
                            <td colspan="4">Động Cơ/Hộp số</td>
                        </tr>

                        <tr>
                            <td>Kiểu động cơ</td>
                            <td class="text-center" colspan="3">
                                1.5L DOHC VTEC TURBO, 4 xi-lanh thẳng hàng, 16 van
                            </td>
                        </tr>
                        <tr>
                            <td>Hộp số</td>
                            <td class="text-center" colspan="3">
                                Vô cấp CVT
                            </td>
                        </tr>
                        <tr>
                            <td>Dung tích xi lanh (cm3)</td>
                            <td class="text-center" colspan="3">
                                1.498
                            </td>
                        </tr>
                        <tr>
                            <td>Công suất cực đại (Hp/rpm)</td>
                            <td class="text-center" colspan="3">
                                176 (131 kW)/6.000
                            </td>
                        </tr>
                        <tr>
                            <td>Mô-men xoắn cực đại (Nm/rpm)</td>
                            <td class="text-center" colspan="3">
                                240/1.700-4.500
                            </td>
                        </tr>
                        <tr>
                            <td>Dung tích thùng nhiên liệu (Lít)</td>
                            <td class="text-center" colspan="3">
                                47
                            </td>
                        </tr>
                        <tr>
                            <td>Hệ thống nhiên liệu</td>
                            <td class="text-center" colspan="3">
                                PGM-FI (Phun xăng trực tiếp)
                            </td>
                        </tr>
                        <tr>
                            <td className="text-b" colspan="4">
                                <span>
                                    <b>Mức tiêu thụ nhiên liệu :</b>
                                </span>
                                <p>
                                    Được thử nghiệm bởi Trung tâm Thử nghiệm khí thải phương tiện cơ giới đường bộ
                                    (NETC), Cục Đăng kiểm Việt Nam theo tiêu chuẩn Phụ lục Q TCVN 6785 : 2015. Được kiểm
                                    tra và cấp giấy chứng nhận bởi Phòng Chứng nhận Chất lượng xe cơ giới (VAQ), Cục
                                    Đăng kiểm Việt Nam. Mức độ tiêu thụ nhiên liệu thực tế có thể thay đổi do điều kiện
                                    sử dụng, kỹ năng lái xe và tình trạng bảo dưỡng kỹ thuật của xe.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Mức tiêu thụ nhiên liệu chu trình tổ hợp (lít/100km)</td>
                            <td class="text-center">6,35</td>
                            <td class="text-center">5,98</td>
                            <td class="text-center">6,52</td>
                        </tr>
                        <tr>
                            <td>Mức tiêu thụ nhiên liệu chu trình đô thị cơ bản (lít/100km)</td>
                            <td class="text-center">8,83</td>
                            <td class="text-center">8,03</td>
                            <td class="text-center">8,72</td>
                        </tr>
                        <tr>
                            <td>Mức tiêu thụ nhiên liệu chu trình đô thị phụ (lít/100km)</td>
                            <td class="text-center">4,9</td>
                            <td class="text-center">4,8</td>
                            <td class="text-center">5,26</td>
                        </tr>

                        <tr class="success-1">
                            <td colspan="4">Kích thước/Trọng lượng</td>
                        </tr>

                        <tr>
                            <td>Số chỗ ngồi</td>
                            <td class="text-center" colspan="3">
                                5
                            </td>
                        </tr>
                        <tr>
                            <td>Dài x Rộng x Cao (mm)</td>
                            <td class="text-center" colspan="3">
                                4.678 x 1.802 x 1.415
                            </td>
                        </tr>
                        <tr>
                            <td>Chiều dài cơ sở (mm)</td>
                            <td class="text-center" colspan="3">
                                2.735
                            </td>
                        </tr>
                        <tr>
                            <td>Chiều rộng cơ sở (trước/sau) (mm)</td>
                            <td class="text-center">1.547/1.575</td>
                            <td class="text-center">1.547/1.575</td>
                            <td class="text-center">1.537/1.565</td>
                        </tr>
                        <tr>
                            <td>Cỡ lốp</td>
                            <td class="text-center">215/55R16</td>
                            <td class="text-center">215/50R17</td>
                            <td class="text-center">235/40ZR18</td>
                        </tr>
                        <tr>
                            <td>La-zăng</td>
                            <td class="text-center">Hợp kim/16 inch</td>
                            <td class="text-center">Hợp kim/17 inch</td>
                            <td class="text-center">Hợp kim/18 inch</td>
                        </tr>
                        <tr>
                            <td>Khoảng sáng gầm xe (mm)</td>
                            <td class="text-center" colspan="3">
                                134
                            </td>
                        </tr>
                        <tr>
                            <td>Bán kính quay vòng tối thiểu (m)</td>
                            <td class="text-center">5,8</td>
                            <td class="text-center">5,8</td>
                            <td class="text-center">6,1</td>
                        </tr>
                        <tr>
                            <td>Khối lượng bản thân (kg)</td>
                            <td class="text-center">1.306</td>
                            <td class="text-center">1.319</td>
                            <td class="text-center">1.338</td>
                        </tr>
                        <tr>
                            <td>Khối lượng toàn tải (kg)</td>
                            <td class="text-center" colspan="3">
                                1.760
                            </td>
                        </tr>

                        <tr class="success-1">
                            <td colspan="4">Hệ thống treo</td>
                        </tr>

                        <tr>
                            <td>Hệ thống treo trước</td>
                            <td class="text-center" colspan="3">
                                Kiểu MacPherson
                            </td>
                        </tr>
                        <tr>
                            <td>Hệ thống treo sau</td>
                            <td class="text-center" colspan="3">
                                Liên kết đa điểm
                            </td>
                        </tr>

                        <tr class="success-1">
                            <td colspan="4">Hệ thống phanh</td>
                        </tr>

                        <tr>
                            <td>Phanh trước</td>
                            <td class="text-center" colspan="3">
                                Đĩa tản nhiệt
                            </td>
                        </tr>
                        <tr>
                            <td>Phanh sau</td>
                            <td class="text-center" colspan="3">
                                Phanh đĩa
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
