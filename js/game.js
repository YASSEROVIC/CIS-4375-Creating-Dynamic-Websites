/* 
Moving ball code is here 
Source : https://codepen.io/seanfree/pen/LXWvqZ
*/
(function() {
    var $;
    var Draggable;
  
    $ = function(s) {
      return document.querySelector(s);
    };
  
    Draggable = (function() {
      function Draggable(s) {
        this.id = s;
        this.el = $(s);
        this.target = [0, 0];
        this.el.onmousedown = this.mousedown.bind(this);
        return;
      }
  
      Draggable.prototype.setTarget = function(x, y) {
        this.target = [x, y];
      };
  
      Draggable.prototype.mousedown = function(e) {
        var ctrl;
        e.preventDefault();
        ctrl = this;
        ctrl.setTarget(e.clientX, e.clientY);
        document.onmouseup = this.mouseup;
        document.onmousemove = function(e) {
          return ctrl.mousemove.call(ctrl, e);
        };
      };
  
      Draggable.prototype.mousemove = function(e) {
        var clientX, clientY, x, y, _ref;
        e.preventDefault();
        clientX = e.clientX, clientY = e.clientY;
        _ref = this.target, x = _ref[0], y = _ref[1];
        this.setTarget(clientX, clientY);
        this.el.style = "top: " + (this.el.offsetTop - (y - clientY)) + "px; left: " + (this.el.offsetLeft - (x - clientX)) + "px;";
      };
  
      Draggable.prototype.mouseup = function(e) {
        e.preventDefault();
        document.onmouseup = null;
        document.onmousemove = null;
      };
  
      return Draggable;
  
    })();
  
    new Draggable('#coffee');
  
  }).call(this);