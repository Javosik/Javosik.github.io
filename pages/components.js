var motherboard = new Component(996, 19, false, document.getElementById("motherboard"), false)
motherboard.setPlace(motherboard.x, motherboard.y)

var cpu = new Component(1508, 434, false, document.getElementById("cpu"), false)
cpu.setPlace(cpu.x, cpu.y)

var gpu = new Component(996, 605, false, document.getElementById("gpu"), false)
gpu.setPlace(gpu.x, gpu.y)

var hard_drive = new Component(1007, 948, false, document.getElementById("hard-drive"), false)
hard_drive.setPlace(hard_drive.x, hard_drive.y)

var ram = new Component(1514, 36, false, document.getElementById("ram"), false)
ram.setPlace(ram.x, ram.y)

var psu = new Component(1010, 719, false, document.getElementById("psu"), false)
psu.setPlace(psu.x, psu.y)

var cooling = new Component(1414, 719, false, document.getElementById("cooling"), false)
cooling.setPlace(cooling.x, cooling.y)

var mb_sqr = new Hitbox(30, 70, 500, 580)
var mb_sqr_path = mb_sqr.setBorder()

var c_sqr = new Hitbox(225, 210, 120, 120)
var c_sqr_path = c_sqr.setBorder()

var g_sqr = new Hitbox(5, 480, 500, 70)
var g_sqr_path = g_sqr.setBorder()

var r_sqr = new Hitbox(456, 108, 70, 300)
var r_sqr_path = r_sqr.setBorder()

var psu_sqr = new Hitbox(59, 687, 350, 200)
var psu_sqr_path = psu_sqr.setBorder()

var hd_sqr = new Hitbox(544, 595, 300, 70)
var hd_sqr_path = hd_sqr.setBorder()

var co_sqr = new Hitbox(185, 168, 200, 200)
var co_sqr_path = co_sqr.setBorder()