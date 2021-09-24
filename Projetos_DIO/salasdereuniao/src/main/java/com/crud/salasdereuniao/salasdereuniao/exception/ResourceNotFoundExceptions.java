package com.crud.salasdereuniao.salasdereuniao.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundExceptions extends Exception {
    private static final long serialversionUID= 1L;
    public ResourceNotFoundExceptions(String message) {

        super(message);
    }
}
