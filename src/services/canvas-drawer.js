
export default class CanvasDrawer {
    parentBlock = null;
    pdfCanvas = null;

    canvas = null;
    ctx = null;

    mousedown = false;

    last_mousex = 0;
    last_mousey = 0;

    mousex = 0;
    mousey = 0;

    canvasX = 0;
    canvasY = 0;

    setCoordinates = null;

    constructor(selector, setCoordinates) {
        this.parentBlock = document.querySelector('.pdf-viewer');
        this.pdfCanvas = document.querySelector(selector);

        this.canvas = document.querySelector('.draw-canvas');
        const canvas = this.canvas;

        this.ctx = canvas.getContext('2d');


        canvas.width = this.pdfCanvas.width;
        canvas.height = this.pdfCanvas.height;

        this.setCoordinates = setCoordinates;
    }


    onMouseDown = e => {
        this.canvasX = this.parentBlock.offsetLeft - window.scrollX;
        this.canvasY = this.parentBlock.offsetTop -  window.scrollY;

        this.last_mousex = parseInt(e.clientX-this.canvasX);
        this.last_mousey = parseInt(e.clientY-this.canvasY);
        this.clearReact();
        this.mousedown = true;
    };

    onMouseUp = () => {
        this.mousedown = false;
    };

    onMouseMove = e => {
        this.mousex = parseInt(e.clientX-this.canvasX);
        this.mousey = parseInt(e.clientY-this.canvasY);
        if(this.mousedown) {
            this.draw();
        }
    };

    clearReact = () => {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.setCoordinates(null);
    };

    draw = () => {
        const ctx = this.ctx;
        this.clearReact();
        ctx.beginPath();
        const width = this.mousex-this.last_mousex;
        const height = this.mousey-this.last_mousey;
        ctx.lineWidth = 1;
        ctx.strokeRect(this.last_mousex,this.last_mousey,width,height);
        this.getCoordinates(width, height);
    };

    getCoordinates = (width, height) => {
        const coordinates = [
            {
                point: 'A',
                x: this.last_mousex,
                y: this.last_mousey + height
            },

            {
                point: 'B',
                x: this.last_mousex,
                y: this.last_mousey
            },

            {
                point: 'C',
                x: this.last_mousex + width,
                y: this.last_mousey
            },

            {
                point: 'D',
                x: this.last_mousex + width,
                y: this.last_mousey + height
            },
        ];
        this.setCoordinates(coordinates);
    };


    register = () => {
        const canvas = this.canvas;
        canvas.addEventListener('mousedown', this.onMouseDown);
        canvas.addEventListener('mouseup', this.onMouseUp);
        canvas.addEventListener('mousemove', this.onMouseMove);
    };


    unRegister = () => {
        const canvas = this.canvas;
        canvas.removeEventListener('mousedown', this.onMouseDown);
        canvas.removeEventListener('mouseup', this.onMouseUp);
        canvas.removeEventListener('mousemove', this.onMouseMove);
    }


}