events.listen('item.registry', function (event) {
    const items = [
        'mold_blank',
        'mold_ingot',
        'mold_block',
        'mold_hopper',
        'powder_ash',
        'powder_ash',
        'powder_chalk',
        'rubber',
        'rubber_mix',
        'vulcanizing_agents'
    ];

    items.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });
});
