package com.crud.salasdereuniao.salasdereuniao.repository;

import com.crud.salasdereuniao.salasdereuniao.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long> {

}
