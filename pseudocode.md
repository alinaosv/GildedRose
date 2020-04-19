1. !AgedBrie && !TAFKAL80ETC
    quality > 0 && !Sulfuras
        quality - 1

2. (AgedBrie || TAFKAL80ETC) && quality < 50
    quality + 1
    TAFKAL80ETC && sellIn < 11 && quality < 50
        quality + 1
    TAFKAL80ETC && sellIn < 6 && quality < 50
        quality + 1

3. !Sulfuras
    sellIn - 1

4. sellIn < 0
    !Aged Brie && !TAFKAL80ETC
        quality > 0 && !Sulfuras
            quality - 1
    !Aged Brie && TAFKAL80ETC
        quality - quality
    Aged Brie && quality < 50
        quality + 1