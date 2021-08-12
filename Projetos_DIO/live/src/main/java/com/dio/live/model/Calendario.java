package com.dio.live.model;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder

public class Calendario {
    private long Id;
    private TipoData tipodata;
    private String descricao;
    private LocalDateTime dataEspecial;

}
