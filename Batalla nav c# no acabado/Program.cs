public class Program
{
    public static void Main(string[] args)
    {
    int [] tablero ={0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0};
    int [] tablero1 ={0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0};
    juego();
    static void juego()
    {
        Console.WriteLine("Bienvenido a Battle worship comencemos");
        nombres();
        Console.WriteLine("Hola de nuevo te doy las intrucciones: solo tienes disponibles 3 barcos y la regla mayor es que gane el mejor" );
        tableros();
        //jugar();
    }
     void nombres()
    {
        String j1 = Console.ReadLine();
        String j2 = Console.ReadLine();
        Console.WriteLine("Hola " + j1 + " y " + j2 + " comencemos");
    }
    static void tableros()
    {
        for(int e = 0; e < 2; e++)
        {
            if(e == 0)
            {
                Console.WriteLine("vea el oceano " + j1);
                for(int i = 0; i < 3; i++)
                {
                    Console.WriteLine("En que posicion desea su barco" + j1 +(i+1) + tablero[i]);
                    tablero[(barco-1)] = "1";
                    }
                    console.WriteLine("vea el oceano " + j2 + tablero);
                }else{
                    Console.WriteLine("vea el oceano " + j2);
                    for(int i = 0; i < 3; i++)
                    {
                        Console.WriteLine("En que posicion desea su barco" + j2 +(i+1) + tablero1[i]);
                        tablero1[(barco-1)] = "1";
                    }
                    Console.WriteLine("vea el oceano " + j2 + tablero1);
                }
            }
        }
        console.WriteLine("Listo capitan"+ j1 + " y " + j2 + " comencemos");
    }
}
