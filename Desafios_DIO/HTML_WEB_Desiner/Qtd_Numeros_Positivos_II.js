import java.io.IOException;
import java.util.Scanner;

public class Desafio {
    
    public static void main(String[] args) throws IOException {
        Scanner num = new Scanner(System.in);
        double valor;
        int cont = 0;
        int positivo = 0;

        for(int i = 0; i<6; i++){
          valor = num.nextDouble();
          if (valor > 0){
            positivo ++;
          }
        }
        System.out.println(positivo + " valores positivos"   );
    }
    
}