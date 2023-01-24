var canvas = document.getElementById('viewport'),
  context = canvas.getContext('2d');
var saturated = false

function make_base() {
  base_image = new Image();
  base_image.onload = function () {
    context.drawImage(base_image, 0, 0, 1000, 1000);

    //emaplaadi ruut
    context.stroke(window.mb_sqr_path);

    //cpu ruut
    context.stroke(window.c_sqr_path);

    //gpu ruut
    context.stroke(window.g_sqr_path)

    //ram ruut
    context.stroke(window.r_sqr_path)

    //psu ruut
    context.stroke(window.psu_sqr_path)

    //hard drive ruut
    context.stroke(window.hd_sqr_path)

    //cooler ruut
    context.stroke(window.co_sqr_path)
  }
  base_image.src = 'https://i.ibb.co/gm7S0Lc/Png-Item-3125635.png'
}

function move(e) {

  var newX = e.clientX - 15;
  var newY = e.clientY - 15;

  image.style.left = newX + "px";
  image.style.top = newY + "px";

  if (context.isPointInPath(mb_sqr_path, newX, newY) && e.composedPath()[0].className == "m1") {
    motherboard.setPlace(30, 75+30)
    motherboard.isInPlace = true
    return
  }

  if (context.isPointInPath(c_sqr_path, newX, newY) && e.composedPath()[0].className == "c1") {
    cpu.setPlace(230, 220+30)
    cpu.isInPlace = true
    return
  }

  if (context.isPointInPath(g_sqr_path, newX, newY) && e.composedPath()[0].className == "g1") {
    gpu.setPlace(5, 480+30)
    gpu.isInPlace = true
    return
  }

  if (context.isPointInPath(r_sqr_path, newX, newY) && e.composedPath()[0].className == "r1") {
    ram.setPlace(456, 108+30)
    ram.isInPlace = true
    return
  }

  if (context.isPointInPath(psu_sqr_path, newX, newY) && e.composedPath()[0].className == "po1") {
    psu.setPlace(59, 687+30)
    psu.isInPlace = true
    return
  }

  if (context.isPointInPath(hd_sqr_path, newX, newY) && e.composedPath()[0].className == "hd1") {
    hard_drive.setPlace(544, 595+30)
    hard_drive.isInPlace = true
    return
  }

  if (context.isPointInPath(co_sqr_path, newX, newY) && e.composedPath()[0].className == "co1") {
    cooling.setPlace(194, 175+30)
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

window.onload = async function () {
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
  make_base()
}
