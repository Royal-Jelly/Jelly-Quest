events.listen('jei.hide.items', (event) => {
    itemsToHide.forEach((disabledItem) => {
        if (!item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });

    disabledItems.forEach((disabledItem) => {
        if (!item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });
});
