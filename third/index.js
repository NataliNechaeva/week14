let year = 2400;

if (year % 4 != 0) console.log('Год не високосный (у него 365 дней)')
else 
    if(year % 100!=0) console.log('Год является високосным (366 дней).')
    else 
        if(year % 400 == 0) console.log('Год является високосным (366 дней).')
        else console.log('Год не високосный (у него 365 дней)');