#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <conio.h>

int main(void){

/*int a, x, sum;
float f;
char ch;

scanf("%d %f %c", &a, &f, &ch);
sum = a + f;
printf("sum %lf", sum);

NESTED FOR LOOP
int a, b;
for (a = 0; a <= 5; a++)
{
    for (b = 0; b <= 6; b++){
            printf("*");
    }
    printf("\n");
}

listing of letter a -z
char a;
for (a = 'A'; a <= 'Z'; a++){
    printf("%c\n", a);
}
//FORMATTED OUTPUT FUNCTION IN C SCANF
int a, b, x, sum;
x = scanf("%d %d\n", &a, &b);
sum = ((a+b)*(b + a));
printf("sum is %d\n", sum);

//WHILE NESTED LOOPS
int a = 0;
int b = 0;
while (a <= 5){
    printf("*");
    a++;
}
while (b <= 6){
    printf("\n");
    b++;
}

// FORMATTED OUTPUT FUNCTION IN C PRINTF
int a, b, x, sum;
printf("enter two number\n");
x = scanf("%d %d", &a, &b);
sum = a + b;
printf("the sum is %d\n", sum);

int a = 12345;
printf("%-8d\n", a);


float a = 1324.76;
printf("%10.2E", a);

int a = 1, b = 1;
while (a <= 5) while(b <= 6){
    printf("x");
    a++;
    printf("\n");
    b++;
}
char ch;
ch = getchar();
printf("%d", ch);

char ch;
ch = getch();
printf("ch=%d", ch);

char ch;
ch = getche();
printf("\nch=%c\n", ch);

// to take a complete string use
char ch[10];
gets(ch);
printf("%s", ch);
getch();

// UNFORMATTED OUTPUT FUNCTION IN C

char ch;
printf("the value of the character is");
ch = getch();
putchar(ch);
putchar('\n');
getch();

//int a = (3, 5, 8);
//printf("%d", a);

// Task 1 for the variable task
int n;
int lastn;
lastn = n % 5;
if (lastn > 10)
{
    printf("last digit of %d is %d and is greater than 5\n", n, lastn);
}
else if (lastn == 0){
    printf("last digit of %d is %d and is equal to 0\n", n, lastn);

}
else {
    printf("last digit of %d is less than 6 and not 0\n", n, lastn);
}

//ALx task 2
char a;
for (a = 'a'; a <= 'z'; a++){
    putchar(a);
    putchar('\n');
}

// ALX TASK 3 print small letter a-z and capital letter A-Z
int a;
int b;
for (a = 'a'; a <= 'z'; a++)
    putchar(a);
for (b = 'A'; b <= 'Z'; b++)
    putchar(b);
    putchar('\n');

    // ALX TASK 4 PRINT ALL APHABETH EXCEPT Q AND E

    int a;
    for (a = 'a'; a <= 'z'; a++){
           if (a == 'e' || a == 'q'){
            continue;
           }
           putchar(a);
    }
    putchar('\n');

   // ALX TASK 5 PRINT ALL NUMBER OF BASE 10 STARTING FROM 0
   int a;
   for (a = 0; a < 10; a++){
    printf("%d\n", a);
   }
//ALX TASK 6 PRINT ALL SINGLE DIGIT STARTING FROM 0 - 10 USING PUTCHAR
unsigned char a = '0'
int i;
for (i = 0; i < 10 ; i++){

    putchar(a);
    a++;
    putchar('\n');
}
//ALX TASK 7 PRINT A_Z IN REVERSE ORDER
int a;
for (a = 'z'; a >= 'a'; a--)
    putchar(a);
    putchar('\n');

  //ALX TASK 8 PRINT HEXADECIMAL NUMBER
unsigned char a = '0';
 int i;
 for (i = 0; i < 10; i++){

     putchar(a);
     a++;
 }
 a = '1';
 for (i = 0; i < 6; i++){
    putchar('0' + a);
    a++;
 }
putchar('\n');

 return 0;
  }

  int i;
  for(i =10; i <= 10; i++)
  {

      printf("i=%d\n", i);
  }
  printf("jk");

  //TO PRINT SMALL LETTER A - Z 10 times
  char i;
  char j;
  for (i = 0; i <= 9; i++){
    for (j = 'a'; j <= 'z'; j++){
        putchar(j);
    }
    putchar('\n');
  }
  int c;
   if (c >= 'a' && c <= 'z')
        {
                return (1);
        }else
        int a = -6;
        if(n > 0){
            printf("n");
        }else {
        printf("n * -1");
        }*/
    int i;
    for (i = 10; i < 20; i++)
    {
        putchar((i % 10) + '0');
        if (i != 19)
        {
            putchar(',');
            putchar(' ');
        }
        }
        putchar('\n');


return (0);
}

