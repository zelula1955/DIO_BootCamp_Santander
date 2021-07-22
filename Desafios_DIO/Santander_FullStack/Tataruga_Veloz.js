import java.io.*;

public class Desafio 
{
    public static void main(String args[]) throws IOException 
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
           //continue a solucao de acordo com o solicitado
		    int donnie=0;
		    int grupo;
		    int i=0;
		  do 
		  {
			grupo = Integer.parseInt(br.readLine());
			String str = br.readLine();
			String tarta[] = str.split(" ",10);
          for ( i=0; i<tarta.length; i++)
          { 
            int ninja = Integer.parseInt(tarta[i]); 

		        if ( ninja < 10 )
	      	    { 
	      	    donnie = 1; 
	      	    }
            else 
              if ( ninja >= 10 && ninja < 20 )
                {
                donnie= 2;
                }
		          else 
		          { donnie = 3; }
          } 
			System.out.println(donnie);
	    }while (br.ready());
    }
}