// const {Shop, Item} = require('./index');
const {Shop, Item} = require('./refactor');

describe('Aged Brie should: ', () => {
    const itemName = 'Aged Brie';

    test('increase quality', () => {
        const shop = new Shop([new Item(itemName, 3, 25)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: 2, quality: 26}];

        expect(items).toEqual(res);
    });

    test('have quality <= 50', () => {
        const shop = new Shop([new Item(itemName, 3, 50)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: 2, quality: 50}];

        expect(items).toEqual(res);
    });

    test('inc quality twice if sellIn passed', () => {
        const shop = new Shop([new Item(itemName, 0, 0)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: -1, quality: 2}];

        expect(items).toEqual(res);
    });

    test('inc quality twice if sellIn passed but stay <= 50', () => {
        const shop = new Shop([new Item(itemName, 0, 50)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: -1, quality: 50}];

        expect(items).toEqual(res);
    });
});

describe('TAFKAL80ETC should: ', () => {
    const itemName = 'Backstage passes to a TAFKAL80ETC concert';

    test('have quality 0 if sellIn is 0', () => {
        const shop = new Shop([new Item(itemName, 0, 10)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: -1, quality: 0}];

        expect(items).toEqual(res);
    });

    test('inc quality +2 if sellIn is < 11', () => {
        const shop = new Shop([new Item(itemName, 10, 10)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: 9, quality: 12}];

        expect(items).toEqual(res);
    });

    test('inc quality +3 if sellIn is < 6', () => {
        const shop = new Shop([new Item(itemName, 5, 10)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: 4, quality: 13}];

        expect(items).toEqual(res);
    });

    test('have quality <= 50', () => {
        const shop = new Shop([new Item(itemName, 5, 50)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: 4, quality: 50}];

        expect(items).toEqual(res);
    });
});

describe('Sulfuras should: ', () => {
    const itemName = 'Sulfuras, Hand of Ragnaros';

    test('not change sellIn or quality props', () => {
        const shop = new Shop([new Item(itemName, 0, 10)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: 0, quality: 10}];

        expect(items).toEqual(res);
    });
});

describe('Conjured should: ', () => {
    const itemName = 'Conjured';

    test('decrease quality twice as fast as normal', () => {
        const shop = new Shop([new Item(itemName, 3, 10)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: 2, quality: 8}];

        expect(items).toEqual(res);
    });

    test('decrease quality twice as fast as normal when sellIn < 0', () => {
        const shop = new Shop([new Item(itemName, 0, 4)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: -1, quality: 0}];

        expect(items).toEqual(res);
    });

    test('have quality >= 0', () => {
        const shop = new Shop([new Item(itemName, 1, 0)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: 0, quality: 0}];

        expect(items).toEqual(res);
    });
});

describe('Simple items should: ', () => {
    const itemName = 'eggs';

    test('decrease quality', () => {
        const shop = new Shop([new Item(itemName, 3, 10)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: 2, quality: 9}];

        expect(items).toEqual(res);
    });

    test('decrease quality twice when sellIn < 0', () => {
        const shop = new Shop([new Item(itemName, 0, 5)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: -1, quality: 3}];

        expect(items).toEqual(res);
    });

    test('have quality >= 0', () => {
        const shop = new Shop([new Item(itemName, 1, 0)]);
        const items = shop.updateQuality();
        const res = [{name: itemName, sellIn: 0, quality: 0}];

        expect(items).toEqual(res);
    });
});
