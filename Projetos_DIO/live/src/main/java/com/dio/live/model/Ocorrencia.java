package com.dio.live.model;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Builder

public class Ocorrencia {
    private long Id;
    private String nome;
    private String descricao;
}