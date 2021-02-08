events.listen('jei.information', (event) => {
    var data = {
        items: []
    };

    data.items.forEach(function (item) {
        event.add(item.item, item.description);
    });

    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled, if you managed to obtain it please report it on Jelly Quest's issue tracker: https://github.com/Royal-Jelly/Jelly-Quest/issues"
        );
    });
});
