var canvas_left = getOffset(canvas).left
var canvas_top = getOffset(canvas).top

var motherboard = new Component(canvas_left+596, canvas_top, false, document.getElementById("motherboard"), false, ":mb")
motherboard.setPlace(motherboard.x, motherboard.y)

var cpu = new Component(canvas_left+1514-615, canvas_top+225, false, document.getElementById("cpu"), false, ":cpu")
cpu.setPlace(cpu.x, cpu.y)

var gpu = new Component(canvas_left+996-400, canvas_top+350, false, document.getElementById("gpu"), false, ":gpu")
gpu.setPlace(gpu.x, gpu.y)

var hard_drive = new Component(canvas_left+596, canvas_top+402, false, document.getElementById("hard-drive"), false, ":hdd")
hard_drive.setPlace(hard_drive.x, hard_drive.y)

var ram = new Component(canvas_left+1514-615, canvas_top, false, document.getElementById("ram"), false, ":ram")
ram.setPlace(ram.x, ram.y)

var psu = new Component(canvas_left+596, canvas_top+455, false, document.getElementById("psu"), false, ":psu")
psu.setPlace(psu.x, psu.y)

var cooling = new Component(canvas_left+1414-560, canvas_top+400, false, document.getElementById("cooling"), false, ":cooling")
cooling.setPlace(cooling.x, cooling.y)

var mb_sqr = new Hitbox(canvas_left+30, canvas_top, 300, 348)
var mb_sqr_path = mb_sqr.setBorder()

var c_sqr = new Hitbox(canvas_left+190, canvas_top+130, 72, 72)
var c_sqr_path = c_sqr.setBorder()

var g_sqr = new Hitbox(canvas_left+5, canvas_top+270, 250, 50)
var g_sqr_path = g_sqr.setBorder()

var r_sqr = new Hitbox(canvas_left+300, canvas_top+60, 75, 190)
var r_sqr_path = r_sqr.setBorder()

var psu_sqr = new Hitbox(canvas_left+30, canvas_top+400, 240, 120)
var psu_sqr_path = psu_sqr.setBorder()

var hd_sqr = new Hitbox(canvas_left+350, canvas_top+350, 150, 50)
var hd_sqr_path = hd_sqr.setBorder()

var co_sqr = new Hitbox(canvas_left+160, canvas_top+100, 120, 120)
var co_sqr_path = co_sqr.setBorder()