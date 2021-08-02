package ExerciciosJava;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class ExemplosList {
    public static void main(String[] args) {
        List<String> nomes = new ArrayList<>();
        nomes.add("Carlos");
        nomes.add("Pedro");
        nomes.add("Anderson");
        nomes.add("Juliana");
        nomes.add("Maria");
        nomes.add("Joao");
        System.out.println(nomes);

        nomes.set(3,"Larissa");
        Collections.sort(nomes);
        System.out.println(nomes);

        nomes.remove("Larissa");
        Collections.sort(nomes);
        System.out.println(nomes);

        int tamanho=nomes.size();
        System.out.println("Tamanho --->" +tamanho);

        int posicao = nomes.indexOf("Maria");
        System.out.println("Posição --->" +posicao);

        for(String nomeItem: nomes) {
            System.out.println("Print--->" +nomeItem);
        }

        Iterator<String> iterator=nomes.iterator();
        while (iterator.hasNext()) {
            System.out.println("Lista--->" +iterator.next());
        }

        boolean TemJose = nomes.contains("Jose");
        System.out.println(TemJose);



    }
}
