var canvas = document.getElementById('viewport'),
  context = canvas.getContext('2d');
var saturated = false

var w = canvas.width = canvas.clientWidth;
var h = canvas.height = canvas.clientHeight;

function make_base() {
  base_image = new Image();
  base_image.onload = function () {
    context.drawImage(base_image, 0, 0, w, h);
  }
  base_image.src = '/images/case.png'
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

function onResizeFunction() {
  canvas_left = getOffset(canvas).left
  canvas_top = getOffset(canvas).top

  if (motherboard.isInPlace == false) {
    mb_sqr.setHitbox(canvas_left+30, canvas_top, mb_sqr.width, mb_sqr.height)
    motherboard.setPlace(canvas_left+596, canvas_top)
  } else {
    mb_sqr.setHitbox(canvas_left+60, canvas_top+40, mb_sqr.width, mb_sqr.height)
    motherboard.setPlace(canvas_left+60, canvas_top+40)
  }

  if (cpu.isInPlace == false) {
    c_sqr.setHitbox(canvas_left+230, canvas_top+220, c_sqr.width, c_sqr.height)
    cpu.setPlace(canvas_left+1514-615, canvas_top+225)
  } else {
    c_sqr.setHitbox(canvas_left+190, canvas_top+130, c_sqr.width, c_sqr.height)
    cpu.setPlace(canvas_left+190, canvas_top+130)   
  }
  
  if (gpu.isInPlace == false) {
    g_sqr.setHitbox(canvas_left+5, canvas_top+480)
    gpu.setPlace(canvas_left+996-400, canvas_top+350)
  } else {
    g_sqr.setHitbox(canvas_left+10, canvas_top+270)
    gpu.setPlace(canvas_left+10, canvas_top+270)
  }
  
  if (ram.isInPlace == false) {
    r_sqr.setHitbox(canvas_left+456, canvas_top+108)
    ram.setPlace(canvas_left+1514-615, canvas_top)
  } else {
    r_sqr.setHitbox(canvas_left+300, canvas_top+60)
    ram.setPlace(canvas_left+300, canvas_top+60)
  }
  
  if (psu.isInPlace == false) {
    psu_sqr.setHitbox(canvas_left+59, canvas_top+687)
    psu.setPlace(canvas_left+596, canvas_top+455)
  } else {
    psu_sqr.setHitbox(canvas_left+30, canvas_top+400)
    psu.setPlace(canvas_left+30, canvas_top+400)
  }
  
  if (hard_drive.isInPlace == false) {
    hd_sqr.setHitbox(canvas_left+544, canvas_top+595)
    hard_drive.setPlace(canvas_left+596, canvas_top+402)
  } else {
    hd_sqr.setHitbox(canvas_left+350, canvas_top+350)
    hard_drive.setPlace(canvas_left+350, canvas_top+350)
  }
  
  if (cooling.isInPlace == false) {
    co_sqr.setHitbox(canvas_left+194, canvas_top+175)
    cooling.setPlace(canvas_left+1414-560, canvas_top+400)
  } else {
    co_sqr.setHitbox(canvas_left+160, canvas_top+100)
    cooling.setPlace(canvas_left+160, canvas_top+100)
  }
 
}

function move(e) {

  var newX = e.clientX - 15;
  var newY = e.clientY - 15;

  image.style.left = newX + "px";
  image.style.top = newY + "px";

  if (context.isPointInPath(mb_sqr_path, newX, newY) && e.composedPath()[0].className == "m1") {
    motherboard.setPlace(canvas_left+60, canvas_top+40)
    motherboard.isInPlace = true
    return
  }

  if (context.isPointInPath(c_sqr_path, newX, newY) && e.composedPath()[0].className == "c1") {
    cpu.setPlace(canvas_left+190, canvas_top+130)
    cpu.isInPlace = true
    return
  }

  if (context.isPointInPath(g_sqr_path, newX, newY) && e.composedPath()[0].className == "g1") {
    gpu.setPlace(canvas_left+10, canvas_top+270)
    gpu.isInPlace = true
    return
  }

  if (context.isPointInPath(r_sqr_path, newX, newY) && e.composedPath()[0].className == "r1") {
    ram.setPlace(canvas_left+300, canvas_top+60)
    ram.isInPlace = true
    return
  }

  if (context.isPointInPath(psu_sqr_path, newX, newY) && e.composedPath()[0].className == "po1") {
    psu.setPlace(canvas_left+30, canvas_top+400)
    psu.isInPlace = true
    return
  }

  if (context.isPointInPath(hd_sqr_path, newX, newY) && e.composedPath()[0].className == "hd1") {
    hard_drive.setPlace(canvas_left+350, canvas_top+350)
    hard_drive.isInPlace = true
    return
  }

  if (context.isPointInPath(co_sqr_path, newX, newY) && e.composedPath()[0].className == "co1") {
    cooling.setPlace(canvas_left+160, canvas_top+100)
    cooling.isInPlace = true
    return
  }

}

function initialClick(e) {
  var text_area = document.querySelector("#text")
  var movable = find_element(e)
  var desc = get_description(e)
  var element = movable.element
  var img = element.getElementsByTagName('img')[0]
  image = this;

  if (movable.moving == true) {
    if (movable.isInPlace == true) {
      document.removeEventListener("mousemove", move);
      img.style.filter = "saturate(1)"
      saturated = false
      movable.moving = false
      return
    } else {
      document.removeEventListener("mousemove", move);
      img.style.filter = "saturate(1)"
      saturated = false
      movable.moving = false
    }
  }

  if (movable.moving == false && movable.isInPlace == false) {
    document.addEventListener("mousemove", move, false);
    img.style.filter = "saturate(3)"
    text_area.value = desc
    saturated = true
    movable.moving = true
  } else {
    return
  }
}

function find_element(e) {
  switch (e.composedPath()[0].className) {
    case 'm1':
      return motherboard
    case 'c1':
      return cpu
    case 'g1':
      return gpu
    case 'r1':
      return ram
    case 'po1':
      return psu
    case 'hd1':
      return hard_drive
    case 'co1':
      return cooling
    default:
      console.log("Couldn't find element:", e.composedPath())
  }
}

function get_description(e) {
  switch (e.composedPath()[0].className) {
    case 'm1':
      return lang[localStorage.getItem('lang')][':mb_desc']
    case 'c1':
      return lang[localStorage.getItem('lang')][':cpu_desc']
    case 'g1':
      return lang[localStorage.getItem('lang')][':gpu_desc']
    case 'r1':
      return lang[localStorage.getItem('lang')][':ram_desc']
    case 'po1':
      return lang[localStorage.getItem('lang')][':pow_desc']
    case 'hd1':
      return lang[localStorage.getItem('lang')][':hd_desc']
    case 'co1':
      return lang[localStorage.getItem('lang')][':cool_desc']
    default:
      console.log("Something wrong with getting description of:", e.composedPath())
  }
}

window.onload = function () {
  document.getElementById('start_game_button').innerHTML = lang[localStorage.getItem('lang')][':end_game']
  document.getElementById('h1_desc').innerHTML = lang[localStorage.getItem('lang')][':descriptions']
  document.title = lang[localStorage.getItem('lang')][':title']
  motherboard.element.addEventListener("mousedown", initialClick, false);
  cpu.element.addEventListener("mousedown", initialClick, false);
  gpu.element.addEventListener("mousedown", initialClick, false);
  hard_drive.element.addEventListener("mousedown", initialClick, false);
  ram.element.addEventListener("mousedown", initialClick, false);
  psu.element.addEventListener("mousedown", initialClick, false);
  cooling.element.addEventListener("mousedown", initialClick, false);
  window.addEventListener("resize", onResizeFunction);
  make_base()
}
