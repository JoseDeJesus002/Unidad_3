using System;

    class Program
    {
        static void Main(string[] args)
        {
            String [] caracteres ={"_","-","/","|","?","!","~","@","#","$","%","^","&","*","(",")","+","=","{","}",";",":","<",">","."," "};
            String [] namesList = new String[1];
            Random rnd = new Random();
            for(int x = 0; x < 1; x++)
            {
                Console.WriteLine("INGRESE SU NOMBRE: ");
                namesList[x] = (Console.ReadLine());
            }
            for(int i = 0; i <= 5; i++)
            {
                String name = namesList[i];
                //String name2 = name.ToLower();
                //String name3 = name2.ToUpper();
                int ranNum = rnd.Next(1, 10000);
                String caracter = caracteres[rnd.Next(0, caracteres.Length)];
                Console.WriteLine("ESTE ES SU USERNAME: "+name+caracter+ranNum+caracter);
                Console.WriteLine("¡¡¡GRAACIAS POR SU PREFRENCIA!!!!");
            }   
        }
    }