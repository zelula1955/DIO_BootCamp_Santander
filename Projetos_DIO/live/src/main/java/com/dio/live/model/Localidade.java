package com.dio.live.model;

import lombok.*;

import javax.persistence.ManyToOne;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder

public class Localidade {
    private long Id;
    @ManyToOne
    private NivelAcesso nivelAcesso;
    private String descricao;
}