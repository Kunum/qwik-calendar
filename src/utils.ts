function capitalizeFirstLetter(str: string) {
    return str[0].toUpperCase() + str.slice(1);
}

function getFirstYearOfTheDecade(year: number){
    let currentYear = year;

    while(currentYear % 10 !== 1){
        currentYear--;
    }

    return currentYear;
}

function calculateDecade(year: number){
     const firstYear = getFirstYearOfTheDecade(year);
     const lastYear = firstYear + 9;

    return `${firstYear} - ${lastYear}`;
}

export {capitalizeFirstLetter, calculateDecade, getFirstYearOfTheDecade}