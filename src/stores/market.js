import { decorate, observable, action, computed } from 'mobx';

class MarketStore {
    selectedItems = [];

    constructor(root) {
        this.root = root;
    }

    put = (name, price) => {
        const { number } = this.root.counter;
        const exists = this.selectedItems.find(item => item.name === name);
        if (!exists) {
            //장바구니에 없으면 새로 집어넣는다.
            this.selectedItems.push({
                name,
                price,
                count: number,
            });
            return;
        }
        //장바구니에 있다면 개수를 올린다.
        exists.count++;
    };
    take = name => {
        const itemToTake = this.selectedItems.find(item => item.name === name);
        itemToTake.count--;
        if (itemToTake.count === 0) {
            //개수가 0개라면
            this.selectedItems.remove(itemToTake);
            //장바구니에서 제거
        }
    };

    get total() {
        console.log("총합계산");
        return this.selectedItems.reduce((previous, current) => {
            return previous + current.price * current.count;
        }, 0)
    }

};


decorate(MarketStore, {
    selectedItems: observable,
    put: action,
    take: action,
    total: computed
})

export default MarketStore