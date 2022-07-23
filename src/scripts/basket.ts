function fullbasket() {
    const modal = document.getElementById('modal') as HTMLDivElement;
    modal?.classList.add('open');
    if (modal?.classList.contains('open')) {
        modal.addEventListener('click', () => {
            modal.classList.remove('open');
        });
    }
}

export function basket() {
    const Books = document.querySelector('.books__list') as HTMLUListElement;
    const Basket = document.getElementById('basket') as HTMLLinkElement;

    let basketCount: number;
    if (localStorage.getItem('basketCount') === null) {
        basketCount = 0;
    } else {
        basketCount = Number(localStorage.getItem('basketCount'));
    }
    Basket.dataset.after = String(basketCount);

    let basketArray: string[];
    if (localStorage.getItem('basketArray') === null) {
        basketArray = [];
    } else {
        basketArray = JSON.parse(localStorage.getItem('basketArray') || '[]');
    }

    Books.addEventListener('click', (event) => {
        const Target = event.target as HTMLButtonElement;
        if (Target.tagName !== 'BUTTON') {
            return;
        }
        if (Target.classList.contains('active')) {
            Target.classList.remove('active');
            const CurrentTitle = Target.parentElement?.querySelector('.books__item_title') as HTMLHeadElement;
            if (CurrentTitle !== undefined && CurrentTitle !== null) {
                if (basketArray) {
                    for (let i = 0; i < basketArray.length; i++) {
                        if (basketArray[i] === CurrentTitle.innerHTML) {
                            basketArray.splice(i, 1);
                        }
                    }
                }
            }
            basketCount--;
        } else if (basketCount < 20) {
            Target.classList.add('active');
            const CurrentTitle = Target.parentElement?.querySelector('.books__item_title') as HTMLHeadElement;
            if (CurrentTitle !== undefined && CurrentTitle !== null) {
                basketArray.push(CurrentTitle.innerHTML);
            }
            basketCount++;
        } else {
            fullbasket();
        }

        localStorage.setItem('basketArray', JSON.stringify(basketArray));
        Basket.dataset.after = String(basketCount);
        localStorage.setItem('basketCount', String(basketCount));
    });
}

export function activeBasket() {
    const Titles = document.querySelectorAll('.books__item_title') as NodeListOf<Element>;
    let currentBasketArray: string[];
    if (localStorage.getItem('basketArray') === null) {
        currentBasketArray = [];
    } else {
        currentBasketArray = JSON.parse(JSON.stringify(localStorage.getItem('basketArray')));
    }
    for (const Title of Titles) {
        if (currentBasketArray.includes(Title.innerHTML)) {
            const Parent = Title.parentElement as HTMLLIElement;
            const Button = Parent?.querySelector('.books__item_button') as HTMLButtonElement;
            Button?.classList.add('active');
        }
    }
}
