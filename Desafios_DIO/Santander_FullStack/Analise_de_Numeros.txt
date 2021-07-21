import java.io.IOException;
import java.util.Scanner;

public class minhaClasse {
	
    public static void main(String[] args) throws IOException {
        Scanner num = new Scanner(System.in);
//declare suas variaveis corretamente
        int pares = 0;
        int impar = 0;
        int positivo = 0;
        int negativo = 0;
        double valor;

//continue a solução
        for(int i = 0; i<5; i++)
        {
          valor = num.nextDouble();
          if (valor > 0)
            { positivo ++;
            } if ((valor % 2) == 0)
              { pares ++;
              } if (valor < 0)
                { negativo ++;
                } if ((valor % 2) != 0)
                    { impar ++; }
        }
//insira suas variaveis corretamente
        System.out.println( pares + " valor(es) par(es)");
        System.out.println( impar + " valor(es) impar(es)");
        System.out.println( positivo + " valor(es) positivo(s)");
        System.out.println( negativo + " valor(es) negativo(s)");
    }
}