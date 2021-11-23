using System;
    namespace c_sharp
    {
        class Program
        {
            static void Main(string[] args)
            {
            int valor1 = 0;
            int valor2 = 0;

            Console.WriteLine("Seleccione la operacion a realizar"); 
            String texto = Console.ReadLine();
            Console.WriteLine("Valor 1");
            valor1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Valor 2");
            valor2 = Convert.ToInt32(Console.ReadLine());            
            
            switch(texto)
            {
                case "suma":
                Console.WriteLine("El resultado es: " + (valor1 + valor2));
                break;
                case "resta":
                Console.WriteLine("El resultado es: " + (valor1 - valor2));
                break;
                case "division":
                Console.WriteLine("El resultado es: " + (valor1 / valor2));
                break;
                case "multiplicacion":
                Console.WriteLine("El resultado es: " + (valor1 * valor2));
                break;
                default:
                Console.WriteLine("El texto introducido no es correcto");
                break;
            };

            }
        }
    }
