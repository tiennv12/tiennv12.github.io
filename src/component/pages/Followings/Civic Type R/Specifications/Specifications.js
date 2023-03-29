import React from 'react';
import './specifications.scss';

export default function Specifications() {
    return (
        <div >
            <div style={{ textAlign: 'center' }}>
                <h2>THÔNG SỐ KỸ THUẬT</h2>
            </div>
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-bordered table-striped mb-0 ml-2">
                    <thead>
                        <tr class="text-center" >
                            <th scope="col-2 " style={{ witdh: '50%' }}>
                                DANH MỤC
                            </th>
                            <th scope="col-2" style={{ witdh: '50%' }}>
                                CIVIC TYPE R
                           
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr class="success-1" >
                            <td colspan="2">Động Cơ/Hộp số</td>
                        </tr>

                        <tr>
                            <td>Kiểu động cơ</td>
                            <td class="text-center" >
                            2.0L DOHC VTEC Turbo, 4 xi lanh thẳng hàng, 16 van
                            </td>
                        </tr>
                        <tr>
                            <td>Hộp số</td>
                            <td class="text-center">
                            6MT
                            </td>
                        </tr>
                        <tr>
                            <td>Dung tích xi lanh (cm3)</td>
                            <td class="text-center">
                            1.996
                            </td>
                        </tr>
                        <tr>
                            <td>Công suất cực đại (Hp/rpm)</td>
                            <td class="text-center" >
                            315 (320Ps)/6.500
                            </td>
                        </tr>
                        <tr>
                            <td>Mô-men xoắn cực đại (Nm/rpm)</td>
                            <td class="text-center" >
                            420/2.600 - 4.000
                            </td>
                        </tr>
                        <tr>
                            <td>Tốc độ tối đa (km/h)</td>
                            <td class="text-center" >
                            272
                            </td>
                        </tr>
                        <tr>
                            <td>Dung tích thùng nhiên liệu (lít)</td>
                            <td class="text-center" >
                            47
                            </td>
                        </tr>
                        <tr>
                            <td>Hệ thống bơm nhiên liệu</td>
                            <td class="text-center" >
                            PGM-FI
                            </td>
                        </tr>
                        <tr>
                            <td className="text-b" colspan="2">
                                <span>
                                    <b>MỨC TIÊU THỤ NHIÊN LIỆU :</b>
                                </span>
                                <p>
                                Được thử nghiệm bởi Trung tâm Thử nghiệm khí thải phương tiện cơ giới đường bộ (NETC), Cục Đăng kiểm Việt Nam theo tiêu chuẩn Phụ lục Q TCVN 6785 : 2015.
Được kiểm tra và cấp giấy chứng nhận bởi Phòng Chứng nhận Chất lượng xe cơ giới (VAQ), Cục Đăng kiểm Việt Nam. Mức độ tiêu thụ nhiên liệu thực tế có thể thay đổi do điều kiện sử dụng, kỹ năng lái xe và tình trạng bảo dưỡng kỹ thuật của xe
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>Mức tiêu thụ nhiên liệu chu trình tổ hợp (lít/100km)</td>
                            <td class="text-center">8,6</td>
                            
                        </tr>
                        <tr>
                            <td>Mức tiêu thụ nhiên liệu chu trình đô thị cơ bản (lít/100km)</td>
                            <td class="text-center">11,6</td>
                           
                        </tr>
                        <tr>
                            <td>Mức tiêu thụ nhiên liệu chu trình đô thị phụ (lít/100km)</td>
                            <td class="text-center">6,8</td>
                            
                        </tr>

                        <tr class="success-1">
                            <td colspan="2">Kích thước/Trọng lượng</td>
                        </tr>

                        <tr>
                            <td>Số chỗ ngồi</td>
                            <td class="text-center" colspan="2">
                                4
                            </td>
                        </tr>
                        <tr>
                            <td>Dài x Rộng x Cao (mm)</td>
                            <td class="text-center" colspan="3">
                            4.593 x 1.890 x 1.407
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
                            <td class="text-center">1.626/1.614</td>
                           
                        </tr>
                        <tr>
                            <td>Cỡ lốp</td>
                            <td class="text-center">265/30ZR19</td>
                           
                        </tr>
                        <tr>
                            <td>La-zăng</td>
                            <td class="text-center">Hợp kim/19 inch</td>
                            
                        </tr>
                        <tr>
                            <td>Khoảng sáng gầm xe (mm)</td>
                            <td class="text-center" >
                                123
                            </td>
                        </tr>
                        
                        <tr>
                            <td>Khối lượng không tải (kg)</td>
                            <td class="text-center">1.424</td>
                            
                        </tr>
                        <tr>
                            <td>Khối lượng toàn tải (kg)</td>
                            <td class="text-center" >
                            1.800
                            </td>
                        </tr>

                        <tr class="success-1">
                            <td colspan="4">Hệ thống treo</td>
                        </tr>

                        <tr>
                            <td>Hệ thống treo trước</td>
                            <td class="text-center" >
                                Kiểu MacPherson (Dual axis MacPherson)
                            </td>
                        </tr>
                        <tr>
                            <td>Hệ thống treo sau</td>
                            <td class="text-center" >
                            Đa liên kết
                            </td>
                        </tr>

                        <tr class="success-1">
                            <td colspan="4">Hệ thống phanh</td>
                        </tr>

                        <tr>
                            <td>Phanh trước</td>
                            <td class="text-center" colspan="3">
                            Đĩa tản nhiệt Brembo
                            </td>
                        </tr>
                        <tr>
                            <td>Phanh sau</td>
                            <td class="text-center" colspan="3">
                            Đĩa
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
