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
                                CITY G
                            </th>
                            <th scope="col-4" style={{ witdh: '18.3%' }}>
                                CITY L
                            </th>
                            <th scope="col-4" style={{ witdh: '18.3%' }}>
                                CITY RS
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
                                119 (89kW)/6.600
                            </td>
                        </tr>
                        <tr>
                            <td>Mô-men xoắn cực đại (Nm/rpm)</td>
                            <td class="text-center" colspan="3">
                                145/4.300
                            </td>
                        </tr>
                        <tr>
                            <td>Dung tích thùng nhiên liệu (Lít)</td>
                            <td class="text-center" colspan="3">
                                40
                            </td>
                        </tr>
                        <tr>
                            <td>Hệ thống nhiên liệu</td>
                            <td class="text-center" colspan="3">
                                Phun xăng điện tử/PGM-FI
                            </td>
                        </tr>
                        <tr>
                            <td className="text-b" colspan="4">
                                <span>
                                    <b>Mức tiêu thụ nhiên liệu :</b>
                                </span>
                                <p>Được thử nghiệm và công bố bởi Honda Motor theo tiêu chuẩn UN ECE R 101 (00).</p>
                                <p>
                                    Được kiểm tra và phê duyệt bởi Phòng Chất lượng xe cơ giới (VAQ), Cục Đăng kiểm Việt
                                    Nam.
                                </p>
                                <p>
                                    Mức tiêu thụ nhiên liệu thực tế có thể thay đổi do điều kiện sử dụng, kỹ năng lái xe
                                    và tình trạng bảo dưỡng kỹ thuật của xe.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Mức tiêu thụ nhiên liệu chu trình tổ hợp (lít/100km)</td>
                            <td class="text-center" colspan="3">
                                5,68
                            </td>
                        </tr>
                        <tr>
                            <td>Mức tiêu thụ nhiên liệu đô thị cơ bản (lít/100km)</td>
                            <td class="text-center" colspan="3">
                                7,29
                            </td>
                        </tr>
                        <tr>
                            <td>Mức tiêu thụ nhiên liệu chu trình đô thị phụ (lít/100km)</td>
                            <td class="text-center" colspan="3">
                                4,73
                            </td>
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
                                4.553 x 1.748 x 1.467
                            </td>
                        </tr>
                        <tr>
                            <td>Chiều dài cơ sở (mm)</td>
                            <td class="text-center" colspan="3">
                                2.600
                            </td>
                        </tr>
                        <tr>
                            <td>Chiều rộng cơ sở (trước/sau) (mm)</td>
                            <td class="text-center" colspan="3">
                                1.495/1.483
                            </td>
                        </tr>
                        <tr>
                            <td>Cỡ lốp</td>
                            <td class="text-center">185/60R15</td>
                            <td class="text-center" colspan="2">
                                185/55R16
                            </td>
                        </tr>
                        <tr>
                            <td>La-zăng</td>
                            <td class="text-center">Hợp kim/15 inch</td>
                            <td class="text-center" colspan="2">
                                Hợp kim/16 inch
                            </td>
                        </tr>
                        <tr>
                            <td>Khoảng sáng gầm xe (mm)</td>
                            <td class="text-center" colspan="3">
                                134
                            </td>
                        </tr>
                        <tr>
                            <td>Bán kính quay vòng tối thiểu (toàn thân) (m)</td>
                            <td class="text-center" colspan="3">
                                5
                            </td>
                        </tr>
                        <tr>
                            <td>Trọng lượng không tải (kg)</td>
                            <td class="text-center">1.117</td>
                            <td class="text-center">1.124</td>
                            <td class="text-center">1.134</td>
                        </tr>
                        <tr>
                            <td>Khối lượng toàn tải (kg)</td>
                            <td class="text-center" colspan="3">
                                1.580
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
                                Giằng xoắn
                            </td>
                        </tr>

                        <tr class="success-1">
                            <td colspan="4">Hệ thống phanh</td>
                        </tr>

                        <tr>
                            <td>Phanh trước</td>
                            <td class="text-center" colspan="3">
                                Phanh đĩa
                            </td>
                        </tr>
                        <tr>
                            <td>Phanh sau</td>
                            <td class="text-center" colspan="3">
                                Phanh tang trống
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
