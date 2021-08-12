package com.dio.live.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder

public class NivelAcesso {
    private long Id;
    private String descricao;
}