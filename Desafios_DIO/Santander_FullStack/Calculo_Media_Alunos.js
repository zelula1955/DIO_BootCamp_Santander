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
		
		float n1,n2,n3,n4,Media,EmExame,EmExameFinal;
		
		n1 = sc.nextFloat();
		n2 = sc.nextFloat();
		n3 = sc.nextFloat();
		n4 = sc.nextFloat();

		Media = ((n1*2) + (n2*3) + (n3*4) + (n4*1)) / 10;
		System.out.printf("Media: %.1f\n",Media);
		//continue a solucao de acordo com o enunciado
		if ( Media >= 7.0 )
		{
			System.out.printf("Aluno aprovado.\n");	
		}
		else 
		if ( Media >= 4.9  && Media <= 6.9 )
		{ 
		  EmExame = sc.nextFloat();
			System.out.printf("Aluno em exame.\n");
			System.out.printf("Nota do exame: %.1f\n", EmExame  );
		  EmExameFinal = (Media + EmExame) / 2 ;
			if( EmExameFinal >= 5.0 )
			  {
				  System.out.println("Aluno aprovado.\n");
		//		System.out.printf("Media final: %.1f\n", EmExameFinal );
			  }
			else
			  {
			    System.out.printf("Aluno reprovado.\n");
		//		System.out.printf("Media final: %.1f\n", EmExameFinal );
			  }
		//	System.out.printf("Aluno reprovado.\n");	
		  System.out.printf("Media final: %.1f\n", EmExameFinal );
		} 
		sc.close();
	}
}