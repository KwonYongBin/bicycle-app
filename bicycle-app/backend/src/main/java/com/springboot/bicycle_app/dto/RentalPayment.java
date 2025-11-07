package com.springboot.bicycle_app.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Builder
public class RentalPayment {
    // DB 기본 키 (Repository에서 저장 후 반환받음)
    private final Long id;

    // 프론트엔드로부터 받은 핵심 정보
    private final int paymentAmount;
    private final String userId;
    private final String stationId;
    private final String stationName;
    private final String paymentMethod;

    // 백엔드에서 관리하는 결제 상태 정보
    private final String paymentStatus;   // 'READY', 'SUCCESS', 'FAIL', 'CANCEL'
    private final String transactionId;   // 외부 결제사에서 부여하는 거래 고유 ID

    // DB 저장 시간
    private final LocalDateTime createdAt;

    /**
     * DTO를 Model로 변환하는 정적 팩토리 메서드 (비즈니스 로직에 사용될 초기 상태를 설정합니다.)
     */
    public static RentalPayment from(RentalPaymentRequest request) {
        return RentalPayment.builder()
                .paymentAmount(request.getPaymentAmount())
                .userId(request.getUserId())
                .stationId(request.getStationId())
                .stationName(request.getStationName())
                .paymentMethod(request.getPaymentMethod())
                .paymentStatus("READY") // 초기 상태는 '준비'
                .createdAt(LocalDateTime.now())
                .build();
    }
}
