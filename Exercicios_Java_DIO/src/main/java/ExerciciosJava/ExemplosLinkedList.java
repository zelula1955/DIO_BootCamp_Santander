package ExerciciosJava;

import java.util.LinkedList;
import java.util.Queue;

public class ExemplosLinkedList {
    public static void main(String[] args) {
        Queue<String> FilaBanco = new LinkedList<>();

        FilaBanco.add("Patricia");
        FilaBanco.add("Roberto");
        FilaBanco.add("Flavia");
        FilaBanco.add("Pamela");
        FilaBanco.add("Anderson");

        System.out.println(FilaBanco);

        String  AtendeCliente  = FilaBanco.poll();
        System.out.println(AtendeCliente);
        System.out.println(FilaBanco);
    }
}
