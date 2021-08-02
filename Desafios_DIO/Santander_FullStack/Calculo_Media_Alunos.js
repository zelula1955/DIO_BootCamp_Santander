import java.io.IOException;
import java.util.Locale;
import java.util.Scanner;

public class Desafio
{
	public static void main(String[] args)  throws IOException
	{
		Scanner sc = new Scanner(System.in);
		sc.useLocale(Locale.ENGLISH);
		Locale.setDefault(new Locale("en", "US"));

		float n1,n2,n3,n4,Media;
		Double EmExame,EmExameFinal;
		n1 = sc.nextFloat();
		n2 = sc.nextFloat();
		n3 = sc.nextFloat();
		n4 = sc.nextFloat();

		Media = ((n1*2) + (n2*3) + (n3*4) + (n4*1)) / 10;
		System.out.printf("Media: %.1f%n",Media);
		//continue a solucao de acordo com o enunciado
		if ( Media >= 7.0 )
		{
			System.out.println("Aluno aprovado.");
		}
		if (Media < 5.0)
		{
      		System.out.println("Aluno reprovado.");
    	}
		if ( Media >= 5.0  && Media <= 6.9 )
		{
		  	EmExame = sc.nextDouble();
			System.out.println("Aluno em exame.");
			System.out.printf("Nota do exame: %.1f%n", EmExame  );
		  	EmExameFinal = (Media + EmExame) / 2.0 ;
			if( EmExameFinal >= 5.0 )
			  {
				  System.out.println("Aluno aprovado.");
			  }
			else
			  {
			    System.out.println("Aluno reprovado");
			  }
		//	System.out.printf("Aluno reprovado.\n");
		  System.out.printf("Media final: %.1f%n", EmExameFinal );
		}
		sc.close();
	}
}