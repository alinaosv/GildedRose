const clamp = (range, item) => {
    const [start, end] = range;
    return item < start 
        ? start 
        : item > end  ? end : item;
};

class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

class Shop {
    constructor(items = []) {
        this.items = items;
        this.QUALITY_RANGE = [0, 50];
    }
    updateQuality() { 
        const clampQuality = quality => clamp(this.QUALITY_RANGE, quality);

        this.items = this.items.map(it => {
            if (it.name === 'Aged Brie')
                return {
                    name: it.name,
                    sellIn: it.sellIn - 1,
                    quality: clampQuality(it.quality > 0 ? it.quality + 1 : it.quality + 2),
                }
            if (it.name === 'Backstage passes to a TAFKAL80ETC concert')
                return {
                    name: it.name,
                    sellIn: it.sellIn - 1,
                    quality: clampQuality(it.sellIn > 10 
                        ? it.quality + 1 
                        : it.sellIn > 5
                            ? it.quality + 2
                            : it.sellIn > 0 ? it.quality + 3 : 0)
                }
            if (it.name === 'Sulfuras, Hand of Ragnaros')
                return it;

            if (it.name === 'Conjured')
                return {
                    name: it.name,
                    sellIn: it.sellIn - 1, 
                    quality: clampQuality(it.sellIn > 0 ? it.quality - 2 : it.quality - 4)
                };

            return {
                name: it.name,
                sellIn: it.sellIn - 1,
                quality: clampQuality(it.sellIn > 0 ? it.quality - 1 : it.quality - 2),
            };
        });

        return this.items;
    }
}

module.exports = {
    Item,
    Shop
};
