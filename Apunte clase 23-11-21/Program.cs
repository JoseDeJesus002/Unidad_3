namespace MyApp
{
    class Program
    {
        public static void Main(string[] args)
        {
            // --Se llaman listas 
            // estos son arreglos de tipo string
            int[] elements = {1,2,3,4,5,6,7,8,9,10};
            String [] names = {"Juan","Pedro","Maria","Jose","Luis","Ana","Jorge","Sofia","Sara","Rosa"};
            hello(" Jose " , 18);

            // Esto es parecido a un .push en javascript
            List<int> elementsList = new List<int>();
            elementsList.Add(1);
            elementsList.Add(2);

            //Es para generar una funcion con el void y el nombre de la funcion
            static void hello(string nombre, int edad)
            {
                Console.WriteLine(" Hello World! "+ nombre + " edad " + edad );
            }
        }
    }
}
