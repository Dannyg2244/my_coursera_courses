#include <stdio.h>
#include <stdlib.h>

int main()
{
   /* int age = 45;
    int plcaecode = 12;
    if(age > 18)
    {
    printf("you are eligible to drive\n");
    }
    else if (age < 18)
    {
        printf("you are not eligible to drive\n");
    }
    else
    {
        printf("you are to small to drive\n");
    }*//*

    int b = 6;
    int c = 7;
    int a = c == b? 3 : 7;
    printf("the value of a is %d\n", a);*/


    //switch key

/*int age = 27;
switch (age)
{
case 24:
    printf("you are 24\n");
    break;
case 25:
    printf("you are 25\n");
    break;
case 26:
    printf("you are 26\n");
    break;
case 27:
    printf("you are 27\n");
    break;
case 28:
    printf("you are 28\n");
    break;
    default:
    printf("none value comply with your age\n");
    break;
}
printf("the value of your age is %d\n", age);*/

// Question 1
/*int a = 10;
if (a == 11)
{
    printf("i am eleven\n");
}
else
{
    printf("i am not eleven\n");
}*/
/*int marks1, marks2, marks3;
printf("enter marks 1: \n");
scanf("%d", &marks1);
printf("enter marks 2: \n");
scanf("%d", &marks2);
printf("enter marks 3: \n");
scanf("%d", &marks3);
float total = (marks1 + marks2 + marks3)/3;
if (total >= 40)
{
    if(marks1 < 33 || marks2 < 33 || marks3 < 33)
        printf("sorry you failed\n");
    else
    {
        printf("congratulation on your success");
    }
}
else
{
    printf("you failed, try again later because your mark is not up to 40%\n");
}
*/

// question 3 of chapter 3
 /*int income;
float tax;
printf("enter your income:\n");
scanf("%d", &income);
if (income < 25000)
{
    printf("your income is below 25000 so there is no tax for you\n");
}
else if (income >= 25000 && income <= 50000)
{
    printf("your income is between 25000 and 50000 so your tax is 5%\n");
    tax =0.05 * income;
}
else if (income >= 50000 && income <= 100000)
{
    printf("your income is between 50000 and 100000 so your tax is 20%\n");
    tax =0.2 * income;
}
else
{
    printf("your income is above 100000 and your tax is 30%\n");
    tax =0.3 * income;
}
printf("total tax to be paid is %f\n", tax);*/

//question 4 chapter 3
/*int year;
printf("enter the year:\n");
scanf("%d", &year);
if (year % 4 != 0)
{
    printf("it is a common year\n");
}
else if (year % 100 != 0)
{
    printf("it is a common year\n");
}
else if (year % 400 != 0)
{
    printf("it is a common year\n");
}
else
{
    printf("it is a leap year\n");
}*/
// question 5 chapter 5
/*char character;
printf("enter your character:\n");
scanf("%c", &character);
if (character >= 97 && character <= 122)
{
    printf("it is a lowercase character\n");
}
else
{
    printf("it is a uppercase character\n");
}*/

// question 6 chapter 3
int a,b,c,d;
printf("enter value for a, b, c, d\n");
scanf("%d %d %d %d", &a, &b, &c, &d);
if (a > b && a > c && a > d)
{
    printf("a is the biggest num\n");
}
else if (b > a && b > c && b > d)
{
    printf("b is he biggest num\n");
}
else if (c > a && c > b && c > d)
{
    printf("c is the biggest\n");
}
else if (d > a && d > b && d > c)
{
    printf("d is the biggest\n");
}
    return 0;
}
