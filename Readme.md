
## Description:
- All items have a SellIn value which denotes the number of days we have to sell the item
- All items have a Quality value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item

## How things work:
- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is [0, 50];
- “Aged Brie” actually increases in Quality the older it gets
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; 
Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

## ToDo:
- “Conjured” items degrade in Quality twice as fast as normal items

## Limitations:
- do not alter the Item class or Items property

