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

    motherboard.isInPlace=true
    mb_sqr.setHitbox(canvas_left+60, canvas_top+40, mb_sqr.width, mb_sqr.height)
    motherboard.setPlace(canvas_left+60, canvas_top+40)

    cpu.isInPlace=true
    c_sqr.setHitbox(canvas_left+190, canvas_top+130, c_sqr.width, c_sqr.height)
    cpu.setPlace(canvas_left+190, canvas_top+130)

    cooling.isInPlace=true
    co_sqr.setHitbox(canvas_left+160, canvas_top+100)
    cooling.setPlace(canvas_left+160, canvas_top+100)

    if (ram.isInPlace == false) {
      r_sqr.setHitbox(canvas_left+456, canvas_top+108)
      ram.setPlace(canvas_left+1514-615, canvas_top)
    } else {
      r_sqr.setHitbox(canvas_left+300, canvas_top+60)
      ram.setPlace(canvas_left+300, canvas_top+60)
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

    if (context.isPointInPath(r_sqr_path, newX, newY) && e.composedPath()[0].className == "r1") {
      ram.setPlace(canvas_left+300, canvas_top+60)
      ram.isInPlace = true
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
        text_area.value = text_area.value = lang[localStorage.getItem('lang')][movable.name] + " " + lang[localStorage.getItem('lang')][':right_place']
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
    text_area.value = lang[localStorage.getItem('lang')][':not_ram']+desc+lang[localStorage.getItem('lang')][':other_part']
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
    text_area.value = lang[localStorage.getItem('lang')][':step_4']
    document.getElementById('start_game_button').innerHTML = lang[localStorage.getItem('lang')][':end_game']
    document.getElementById('start_game_button_step').innerHTML = lang[localStorage.getItem('lang')][':next_step']
    document.getElementById('h1_desc').innerHTML = lang[localStorage.getItem('lang')][':descriptions']
    document.title = lang[localStorage.getItem('lang')][':title']
    motherboard.element.addEventListener("mousedown", infoClick, false);
    cpu.element.addEventListener("mousedown", infoClick, false);
    gpu.element.addEventListener("mousedown", infoClick, false);
    hard_drive.element.addEventListener("mousedown", infoClick, false);
    ram.element.addEventListener("mousedown", initialClick, false);
    psu.element.addEventListener("mousedown", infoClick, false);
    cooling.element.addEventListener("mousedown", infoClick, false);
    window.addEventListener("resize", onResizeFunction);
    make_base()
    onResizeFunction()
  }