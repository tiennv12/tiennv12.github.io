
import React from 'react';
import './specifications.scss';


export default function Specifications() {
    return (
        <div>
                <div style={{textAlign:"center"}}>
                    
                <h2>THÔNG SỐ KỸ THUẬT</h2>
                </div>
            <div className='table-wrapper-scroll-y my-custom-scrollbar'>
                <table className='table table-bordered table-striped mb-0'>
                   <thead>
                        <tr  class="text-center" >
                           
                            <th scope="col-4 "style={{witdh:"45%"}}>DANH MỤC</th>
                            <th scope="col-4"style={{witdh:"18.3%"}}>CR-V E</th>
                            <th scope="col-4"style={{witdh:"18.3%"}}>CR-V G</th>
                            <th scope="col-4"style={{witdh:"18.3%"}}>CR-V L/LSE</th>
                           
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
                                <td class="text-center" colspan="3">1.498</td>
                            </tr>
                            <tr>
                                <td>Công suất cực đại (Hp/rpm)</td>
                                <td class="text-center" colspan="3">188 (140 kW)/5.600</td>
                            </tr>
                            <tr>
                                <td>Mô-men xoắn cực đại (Nm/rpm)</td>
                                <td class="text-center" colspan="3">240/2.000-5.000</td>
                            </tr>
                            <tr>
                                <td>Dung tích thùng nhiên liệu (Lít)</td>
                                <td class="text-center" colspan="3">57</td>
                            </tr>
                            <tr>
                                <td>Hệ thống nhiên liệu</td>
                                <td class="text-center" colspan="3">Phun xăng điện tử/PGM-FI</td>
                            </tr>
                            <tr>
                                <td className='text-b' colspan="4">
                                    <span><b>Mức tiêu thụ nhiên liệu :</b></span>
                                    <p>
                                        Được thử nghiệm và công bố bởi Honda Motor theo tiêu chuẩn
                                        UN ECE R 101 (00).
                                        Được kiểm tra và phê duyệt bởi Phòng Chất lượng xe cơ giới
                                        (VAQ), Cục Đăng kiểm Việt Nam.
                                        Mức tiêu thụ nhiên liệu thực tế có thể thay đổi do điều kiện
                                        sử dụng, kỹ năng lái xe và tình trạng bảo dưỡng kỹ thuật của
                                        xe.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>Mức tiêu thụ nhiên liệu chu trình tổ hợp (lít/100km)</td>
                                <td class="text-center" colspan="3">7</td>
                            </tr>
                            <tr>
                                <td>Mức tiêu thụ nhiên liệu chu trình đô thị cơ bản (lít/100km)</td>
                                <td class="text-center" colspan="3">9,1</td>
                            </tr>
                            <tr>
                                <td>Mức tiêu thụ nhiên liệu chu trình đô thị phụ (lít/100km)</td>
                                <td class="text-center" colspan="3">5,8</td>
                            </tr>
                       
                       
                            <tr class="success-1">
                                <td colspan="4">Kích thước/Trọng lượng</td>
                            </tr>
                      
                            
                      
                            <tr>
                                <td>Số chỗ ngồi</td>
                                <td class="text-center" colspan="3">7</td>
                            </tr>
                            <tr>
                                <td>Dài x Rộng x Cao (mm)</td>
                                <td class="text-center" colspan="3">4.623 x 1.855 x 1.679</td>
                            </tr>
                            <tr>
                                <td>Chiều dài cơ sở (mm)</td>
                                <td class="text-center" colspan="3">2.660</td>
                            </tr>
                            <tr>
                                <td>Chiều rộng cơ sở (trước/sau) (mm)</td>
                                <td class="text-center" colspan="3">1.601/1.617</td>
                            </tr>
                            <tr>
                                <td>Cỡ lốp</td>
                                <td class="text-center" colspan="3">235/60R18</td>
                            </tr>
                            <tr>
                                <td>La-zăng</td>
                                <td class="text-center" colspan="3">Hợp kim/18 inch</td>
                            </tr>
                            <tr>
                                <td>Khoảng sáng gầm xe (mm)</td>
                                <td class="text-center" colspan="3">198</td>
                            </tr>
                            <tr>
                                <td>Bán kính quay vòng tối thiểu (m)</td>
                                <td class="text-center" colspan="3">5,9</td>
                            </tr>
                            <tr>
                                <td>Khối lượng bản thân (kg)</td>
                                <td class="text-center">1.610</td>
                                <td class="text-center">1.613</td>
                                <td class="text-center">1.649</td>
                            </tr>
                            <tr>
                                <td>Khối lượng toàn tải (kg)</td>
                                <td class="text-center" colspan="3">2.300</td>
                            </tr>
                       
                            <tr class="success-1">
                                <td colspan="4">Hệ thống treo</td>
                            </tr>
                       
                            <tr>
                                <td>Hệ thống treo trước</td>
                                <td class="text-center" colspan="3">Kiểu MacPherson</td>
                            </tr>
                            <tr>
                                <td>Hệ thống treo sau</td>
                                <td class="text-center" colspan="3">Liên kết đa điểm</td>
                            </tr>
                    
                       
                            <tr class="success-1">
                                <td colspan="4">Hệ thống phanh</td>
                            </tr>
                     
                            <tr>
                                <td>Phanh trước</td>
                                <td class="text-center" colspan="3">Đĩa tản nhiệt</td>
                            </tr>
                            <tr>
                                <td>Phanh sau</td>
                                <td class="text-center" colspan="3">Phanh đĩa</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
