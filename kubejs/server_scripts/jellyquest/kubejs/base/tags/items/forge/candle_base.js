events.listen('item.tags', (event) => {
    event.add('buzzier_bees:candle_base', ['resourcefulbees:wax']);
    event.remove('buzzier_bees:candle_base', ['minecraft:honeycomb']);
});
