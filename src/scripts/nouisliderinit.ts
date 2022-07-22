import * as noUiSlider from 'nouislider';
import '../styles/nouislider.css';
import '../styles/nouisliderinit.css';
import { currentRender } from './filtering';

export function checkQuantity() {
    let quantityMin, quantityMax;

    if (localStorage.getItem('quantityMin') === null) {
        quantityMin = 0;
    } else {
        quantityMin = Number(localStorage.getItem('quantityMin'));
    }

    if (localStorage.getItem('quantityMax') === null) {
        quantityMax = 20;
    } else {
        quantityMax = Number(localStorage.getItem('quantityMax'));
    }

    return [quantityMin, quantityMax];
}

export function checkYear() {
    let yearMin, yearMax;

    if (localStorage.getItem('yearMin') === null) {
        yearMin = 1900;
    } else {
        yearMin = Number(localStorage.getItem('yearMin'));
    }

    if (localStorage.getItem('yearMax') === null) {
        yearMax = 2022;
    } else {
        yearMax = Number(localStorage.getItem('yearMax'));
    }

    return [yearMin, yearMax];
}

export function rangeInit() {
    const QuantityRange = document.getElementById('quantity-range') as noUiSlider.target;
    let [quantityMin, quantityMax] = checkQuantity();

    QuantityRange.noUiSlider?.set([quantityMin, quantityMax]);

    if (!QuantityRange.noUiSlider) {
        noUiSlider.create(QuantityRange, {
            start: [0, 20],
            tooltips: true,
            connect: true,
            step: 1,
            range: {
                min: 0,
                max: 20,
            },
            format: {
                to: function (value) {
                    return Math.floor(value);
                },
                from: function (value) {
                    return parseInt(value);
                },
            },
        });
    }
    if (QuantityRange.noUiSlider) {
        QuantityRange.noUiSlider.on('change', (values: (string | number)[]) => {
            localStorage.setItem('quantityMin', values[0] as string);
            localStorage.setItem('quantityMax', values[1] as string);
            quantityMin = Number(localStorage.getItem('quantityMin'));
            quantityMax = Number(localStorage.getItem('quantityMax'));
            currentRender();
        });
    }
    QuantityRange.noUiSlider?.set([quantityMin, quantityMax]);

    const YearRange = document.getElementById('year-range') as noUiSlider.target;
    let [yearMin, yearMax] = checkYear();

    YearRange.noUiSlider?.set([yearMin, yearMax]);

    if (!YearRange.noUiSlider) {
        noUiSlider.create(YearRange, {
            start: [1900, 2022],
            tooltips: true,
            connect: true,
            step: 1,
            range: {
                min: 1900,
                max: 2022,
            },
            format: {
                to: function (value) {
                    return Math.floor(value);
                },
                from: function (value) {
                    return parseInt(value);
                },
            },
        });
    }
    if (YearRange.noUiSlider) {
        YearRange.noUiSlider.on('change', (values: (string | number)[]) => {
            localStorage.setItem('yearMin', values[0] as string);
            localStorage.setItem('yearMax', values[1] as string);
            yearMin = Number(localStorage.getItem('yearMin'));
            yearMax = Number(localStorage.getItem('yearMax'));
            currentRender();
        });
    }
    YearRange.noUiSlider?.set([yearMin, yearMax]);
}
