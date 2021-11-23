using System;

    class Program
    {
        static void Main(string[] args)
        {
            int y=0;
            int z=0;
            Random rnd = new Random();
            Console.WriteLine("Ingrese el numero de valores a crear: ");
            z =Int32.Parse(Console.ReadLine());
            Console.WriteLine("Ingrese el rango maximo de numeros: ");
            y = Int32.Parse(Console.ReadLine());
            for(int i = 0; i <= z; i++)
            {
                int ranNum = rnd.Next(1, y);
                Console.WriteLine("Este es el numero: " + ranNum);
            }   
        }
    }