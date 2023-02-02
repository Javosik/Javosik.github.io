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
   
  }

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
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
        text_area.value = "Emaplaat on õigel kohal, võib edasi liikuda."
        document.getElementById('start_game_button_step').classList.remove("d-none")
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

  function infoClick(e) {
    var text_area = document.querySelector("#text")
    var desc = get_description(e)
    image = this;
    text_area.value = lang[localStorage.getItem('lang')][':not_mb']+desc+lang[localStorage.getItem('lang')][':other_part']
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
    var text_area = document.querySelector("#text")
    text_area.value = lang[localStorage.getItem('lang')][':step_1']
    document.getElementById('start_game_button').innerHTML = lang[localStorage.getItem('lang')][':end_game']
    document.getElementById('start_game_button_step').innerHTML = lang[localStorage.getItem('lang')][':next_step']
    document.getElementById('h1_desc').innerHTML = lang[localStorage.getItem('lang')][':descriptions']
    document.title = lang[localStorage.getItem('lang')][':title']
    motherboard.element.addEventListener("mousedown", initialClick, false);
    cpu.element.addEventListener("mousedown", infoClick, false);
    gpu.element.addEventListener("mousedown", infoClick, false);
    hard_drive.element.addEventListener("mousedown", infoClick, false);
    ram.element.addEventListener("mousedown", infoClick, false);
    psu.element.addEventListener("mousedown", infoClick, false);
    cooling.element.addEventListener("mousedown", infoClick, false);
    window.addEventListener("resize", onResizeFunction);
    make_base()
  }