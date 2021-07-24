import java.util.Scanner;

public class Desafio {

	public static void main(String[] args) {
		Scanner leitor = new Scanner(System.in);
		//grupo = Integer.parseInt(br.readLine());
		// ninja=0;
	//	var Num="0";
	  int Num = Integer.parseInt(leitor.nextLine());
	 // int N = Integer.valueOf(Num);
		String resultado="";	
		
		for (int i = 0; i < Num; i++) 
		{
		  StringBuilder cadeia = new StringBuilder();
		  String[] letras = leitor.nextLine().split(" ");
		  int limite = Math.max(letras[0].length(),letras[1].length());
		  
			  for (int j=0; j < limite; j++) 
			    { 
			      if ( j < letras[0].length() ) 
              { 
                cadeia.append(letras[0].charAt(j));
              }
			      if ( j < letras[1].length() ) 
              { 
                cadeia.append(letras[1].charAt(j));
              }
			    }
			System.out.println( cadeia.toString());
		}
	}
}