function fullbasket() {
    const modal = document.getElementById('modal');
    modal?.classList.add('open');
    if (modal?.classList.contains('open')) {
        modal.addEventListener('click', () => {
            modal.classList.remove('open');
        });
    }
}

export function basket() {
    const Books = document.querySelector('.books__list') as HTMLUListElement;
    const Basket = document.getElementById('basket') as HTMLElement;

    let basketCount: number;
    if (localStorage.getItem('basketCount') === null) {
        basketCount = 0;
    } else {
        basketCount = Number(localStorage.getItem('basketCount'));
    }
    Basket.dataset.after = String(basketCount);

    let BasketArray: string[];
    if (localStorage.getItem('BasketArray') === null) {
        BasketArray = [];
    } else {
        BasketArray = JSON.parse(localStorage.getItem('BasketArray') || '[]');
    }

    Books.addEventListener('click', (event) => {
        const Target = event.target as HTMLButtonElement;
        if (Target.tagName !== 'BUTTON') {
            return;
        }
        if (Target.classList.contains('active')) {
            Target.classList.remove('active');
            const CurrentTitle = Target.parentElement?.querySelector('.books__item_title');
            if (CurrentTitle !== undefined && CurrentTitle !== null) {
                if (BasketArray) {
                    for (let i = 0; i < BasketArray.length; i++) {
                        if (BasketArray[i] === CurrentTitle.innerHTML) {
                            BasketArray.splice(i, 1);
                        }
                    }
                }
            }
            basketCount--;
        } else if (basketCount < 20) {
            Target.classList.add('active');
            const CurrentTitle = Target.parentElement?.querySelector('.books__item_title');
            if (CurrentTitle !== undefined && CurrentTitle !== null) {
                BasketArray.push(CurrentTitle.innerHTML);
            }
            basketCount++;
        } else {
            fullbasket();
        }

        localStorage.setItem('BasketArray', JSON.stringify(BasketArray));
        Basket.dataset.after = String(basketCount);
        localStorage.setItem('basketCount', String(basketCount));
    });
}

export function activeBasket() {
    const Title = document.querySelectorAll('.books__item_title');
    let currentBasketArray: string[];
    if (localStorage.getItem('BasketArray') === null) {
        currentBasketArray = [];
    } else {
        currentBasketArray = JSON.parse(localStorage.getItem('BasketArray') || '[]');
    }
    for (let i = 0; i < Title.length; i++) {
        if (currentBasketArray.includes(Title[i].innerHTML)) {
            const Parent = Title[i].parentElement;
            const Button = Parent?.querySelector('.books__item_button');
            Button?.classList.add('active');
        }
    }
}
