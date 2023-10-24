function capitalizeFirstLetter(str: string) {
    return str[0].toUpperCase() + str.slice(1);
}

function getFirstYearOfTheDecade(year: number){
    return Math.trunc(year/10) * 10;
}

function getFirstYearOfTheCentury(year: number){
    return Math.trunc(year/100) * 100;
}

function calculateDecade(year: number){
     const firstYear = Math.trunc(year/10) * 10;
     const lastYear = firstYear + 9;

    return `${firstYear} - ${lastYear}`;
}

function calculateCentury(year: number){
    const firstYear = Math.trunc(year/100)*100;
    const lastYear = firstYear + 99;

    return `${firstYear} - ${lastYear}`;
}

export {capitalizeFirstLetter, calculateDecade, getFirstYearOfTheDecade, calculateCentury, getFirstYearOfTheCentury}