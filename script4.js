'use strict';

let a;

for (; ;) 
{
	a = prompt('Введите должность', '');
	if (a == 'начальник' || a == 'зам.начальника' || a == 'секретарь') 
	{
		break;
	}
	alert("Данной должности не существует.");
}

let b = prompt('Введите ФИО', '');


if(a != 'секретарь') 
{
	alert("Добрый день, господин начальник");
}
else 
{
	alert("Добрый день, " + b);
}

