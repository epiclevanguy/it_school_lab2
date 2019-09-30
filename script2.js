'use strict';


let d = new Date(prompt('Введите дату в формате YYYY-MM-DD', ''));


let current_date = d.getDate();
let current_month = d.getMonth();
let current_year = d.getFullYear();

alert("day - "+current_date+" ; month - " +current_month + " ; year - "+ current_year);




if (current_year >= 1601 && current_year < 1701) 
{
	alert('На дворе 17 век!');
}
else if (current_year >= 1701 && current_year < 1801) 
{
	alert('На дворе 18 век!');
}
else if (current_year >= 1801 && current_year < 1901) 
{
	alert('На дворе 19 век!');
}
else if (current_year >= 1901 && current_year < 2001) 
{
	alert('На дворе 20 век!');
}
else if (current_year >= 2001 && current_year < 2101) 
{
	alert('На дворе 21 век!');
}
else
{
	alert('Век науке не известен!');
}

