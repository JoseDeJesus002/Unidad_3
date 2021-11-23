using System;

    class Program
    {
        static void Main(string[] args)
        {
            //int x=0;
            int y=0;
            int z=0;
            Random rnd = new Random();
            Console.WriteLine("Ingrese el numero de valores a crear: ");
            z =Int32.Parse(Console.ReadLine());
            //Console.WriteLine("Ingrese el valor de x min");
            //x = Int32.Parse(Console.ReadLine());
            Console.WriteLine("Ingrese el valor de y max");
            y = Int32.Parse(Console.ReadLine());
           
            //Console.WriteLine("The Random Number is: "+ranNum);
            for(int i = 0; i <= z; i++)
            {
                int ranNum = rnd.Next(1, y);
                Console.WriteLine("Este es su numero: " + ranNum);
            }
            
    }
}