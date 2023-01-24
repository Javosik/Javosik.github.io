class Hitbox {
    constructor(x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    }
  
    setBorder() {
      var border = new Path2D
      border.rect(this.x, this.y, this.width, this.height)
      return border
    }
  }

  class Component {
    constructor(x, y, isInPlace, element, moving) {
      this.x = x
      this.y = y
      this.isInPlace = isInPlace
      this.element = element
      this.moving = moving
    }
  
    setPlace(x, y) {
      this.x = x
      this.y = y
      this.element.style.left = this.x + 'px',
        this.element.style.top = this.y + 'px'
    }
  
    getStatus() {
      return this.Status();
    }
  
    Status() {
      return this.isInPlace
    }
  
    setStatus() {
      this.isInPlace = !this.isInPlace
      return this.isInPlace
    }
  
    setFlag() {
      this.flag = !this.flag
      return this.flag
    }
  }