interface ItemConstructor {
    new (id: string): IItem
}

interface IItem {
   id: string;
}

class Item implements IItem {
    constructor(public id: string) {
    }
}

interface ItemIdToItemMap {
    [id: string]: IItem
}

class ItemsCache {
    itemsCache: ItemIdToItemMap;
    constructor(private itemsConstructor: ItemConstructor) {
        this.itemsCache = {};
    }

    public createItem(id: string): IItem {
        if(!!this.itemsCache[id]) {
            return this.itemsCache[id];
        }

        const item: IItem = new this.itemsConstructor(id);
        // const item: IItem = { id: '1'};
        this.itemsCache[id] = item;
        return item;
    }
}

const cache = new ItemsCache(Item);
const item1 = cache.createItem('a');
const item2 = cache.createItem('b');
const item3 = cache.createItem('c');
const item4 = cache.createItem('a');

console.log('item1:', item1);
console.log('item2:', item2);
console.log('item3:', item3);
console.log('item1 and item2:', item1 === item2);
console.log('item1 and item3:', item1 === item3);
