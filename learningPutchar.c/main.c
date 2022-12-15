#include <stdio.h>
#include <stdlib.h>

int main()
{
    /*int i, j;
    int tens, unit, product, hundred;
    for (i = 0; i < 9; i++){
        for (j = 0; j <= 14; j++){
                product = i * j;
                tens = product / 10;
                unit = product % 10;
                hundred = product % 100;
                putchar(tens + '0');
                putchar(unit + '0');
                putchar (hundred + '0');
                putchar(' ');

        }
            putchar('\n');
    }*/
    int i;
    int j;

    for (i = 0; i <= 23; i++)
        {

        for (j = 0; j <= 59; j++)
            {

            putchar(i / 10 + '0');
            putchar(i % 10 + 'o');
            putchar(':');
            putchar(j / 10 + '0');
            putchar(j % 10 + '0');
            putchar('\n');
        }

    }

}
