// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')


events.listen('block.registry', function (event) {
  //event.create('test_block').material('water').hardness(0.5).displayName('Test Block')
})

events.listen('item.registry', function (event) {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('powder_ash').displayName('Ash Powder')
  event.create('powder_chalk').displayName('Ash Powder')
  event.create('rubber').displayName('Ash Powder')
  event.create('rubber_mix').displayName('Rubber Powder')
  event.create('vulcanizing_agents').displayName('Vulcanizing Agents')
})
