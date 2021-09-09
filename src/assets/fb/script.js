
var url = "http://localhost:3001/uploads/UP/kiven.pdf";
var canvas = null;
var edit = false;
var pdfjsLib = window['pdfjs-dist/build/pdf'];
var loo=true;
var editModStatic=true;
function startMap(nameDiv,urlPdf,editMod,fun) {

    editModStatic=(editMod==0?true:false);

    // The workerSrc property shall be specified.
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://mozilla.github.io/pdf.js/build/pdf.worker.js';

    // Asynchronous download of PDF
    var loadingTask = pdfjsLib.getDocument(urlPdf);
    loadingTask.promise.then((pdf) => {
        // Fetch the first page
        var pageNumber = 1;
        pdf.getPage(pageNumber).then((page) => {
            var scale = 2;
            var viewport = page.getViewport({ scale: scale });

            // Prepare canvas using PDF page dimensions
            canvas = document.getElementById(nameDiv);
            var context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);
            renderTask.promise.then(() => {
                loadf(fun);
            });
        });
    }, (reason) => {
        // PDF loading error

        console.error(reason);
    });

}
function loadf(fun) {

    var bg = canvas.toDataURL("image/png");
    canvas = new fabric.Canvas("c", {
        selection: false
    });
    canvas.setBackgroundImage(bg, canvas.renderAll.bind(canvas));
    canvas.on('mouse:wheel', (opt) => {
        var delta = opt.e.deltaY;
        var pointer = canvas.getPointer(opt.e);
        var zoom = canvas.getZoom();
        zoom = zoom + delta / 200;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
    });
    canvas.on('object:modified', function (options) {
        let w = options.target.width * options.target.scaleX,
            h = options.target.height * options.target.scaleY
        options.target.kwidth = w;
        options.target.kheight = h;


    });
    oldColor = "";
    canvas.on('mouse:over', (e) => {
        try {
            oldColor = e.target.fill;
            e.target.set('fill', 'green');
        } catch (e) {

        }
        canvas.renderAll();
    });
    canvas.on('mouse:out', (e) => {
        try {
            e.target.set('fill', oldColor);
        } catch (e) {

        }
        canvas.renderAll();
    });
    var panning = false;
    canvas.on('mouse:up', (e) => {
        panning = false;
    });

    canvas.on('mouse:down', (e) => {
        panning = true;
    });
    canvas.on("mouse:move", (e) => {
        if (loo) {
            if (panning && e && e.e) {
                var units = 10;
                var delta = new fabric.Point(e.e.movementX, e.e.movementY);
                canvas.relativePan(delta);
            }
        }
    })
    fabric.RectWithText = fabric.util.createClass(fabric.Polygon, {
        type: 'rectWithText',
        text: null,
        textOffsetLeft: 0,
        textOffsetTop: 0,
        _prevObjectStacking: null,
        _prevAngle: 0,

        recalcTextPosition: function () {
            const sin = Math.sin(fabric.util.degreesToRadians(this.angle))
            const cos = Math.cos(fabric.util.degreesToRadians(this.angle))
            const newTop = sin * this.textOffsetLeft + cos * this.textOffsetTop
            const newLeft = cos * this.textOffsetLeft - sin * this.textOffsetTop
            const rectLeftTop = this.getPointByOrigin('left', 'top')
            this.text.set('left', rectLeftTop.x + newLeft)
            this.text.set('top', rectLeftTop.y + newTop)
        },

        initialize: function (poent, rectOptions, textOptions, text) {
            this.callSuper('initialize', poent, rectOptions)
            this.text = new fabric.Textbox(text, {
                ...textOptions,
                selectable: false,
                evented: false,
            })
            this.textOffsetLeft = this.text.left - this.left
            this.textOffsetTop = this.text.top - this.top
            this.on('moving', () => {
                this.recalcTextPosition()
            })
            this.on('rotating', () => {
                this.text.rotate(this.text.angle + this.angle - this._prevAngle)
                this.recalcTextPosition()
                this._prevAngle = this.angle
            })
            this.on('scaling', (e)=>{
                this.text.set('left', (this.left+(this.left/2)))
                this.text.set('top', (this.top+(this.top/2)))
                this.recalcTextPosition()
            })
            this.on('added', () => {
                this.text.set("left",Math.round(this.left)+(Math.round(this.width)));
                this.text.set("top",Math.round(this.top)+(Math.round(this.height)));
                this.canvas.add(this.text)
            })
            this.on('removed', () => {
                this.canvas.remove(this.text)
            })
            this.on('mousedown:before', () => {
                this._prevObjectStacking = this.canvas.preserveObjectStacking
                this.canvas.preserveObjectStacking = true
            });

            this.on('deselected', () => {
                this.canvas.preserveObjectStacking = this._prevObjectStacking
            })
            this.text.on('editing:exited', () => {
                this.text.selectable = false
                this.text.evented = false
                this.selectable = true
            })

        }
    })
    // create a polygon object

    canvas.loadBlocak=()=>{
        let tempObjects=canvas.getObjects();
        let opject=[];
        tempObjects.forEach(res=>{
            if(res.pieceId){
                opject.push(res);
            }
        });
        return opject;
    }
    fun(canvas);
    // define a function that can locate the controls.

}


// this function will be used both for drawing and for interaction.
function polygonPositionHandler(dim, finalMatrix, fabricObject) {
    var x = (fabricObject.points[this.pointIndex].x - fabricObject.pathOffset.x),
        y = (fabricObject.points[this.pointIndex].y - fabricObject.pathOffset.y);
    return fabric.util.transformPoint(
        { x: x, y: y },
        fabric.util.multiplyTransformMatrices(
            fabricObject.canvas.viewportTransform,
            fabricObject.calcTransformMatrix()
        )
    );
}

function actionHandler(eventData, transform, x, y) {
    var polygon = transform.target,
        currentControl = polygon.controls[polygon.__corner],
        mouseLocalPosition = polygon.toLocalPoint(new fabric.Point(x, y), 'center', 'center'),
        polygonBaseSize = polygon._getNonTransformedDimensions(),
        size = polygon._getTransformedDimensions(0, 0),
        finalPointPosition = {
            x: mouseLocalPosition.x * polygonBaseSize.x / size.x + polygon.pathOffset.x,
            y: mouseLocalPosition.y * polygonBaseSize.y / size.y + polygon.pathOffset.y
        };
    polygon.points[currentControl.pointIndex] = finalPointPosition;
    return true;
}

function anchorWrapper(anchorIndex, fn) {
    return function (eventData, transform, x, y) {
        var fabricObject = transform.target,
            absolutePoint = fabric.util.transformPoint({
                x: (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x),
                y: (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y),
            }, fabricObject.calcTransformMatrix()),
            actionPerformed = fn(eventData, transform, x, y),
            newDim = fabricObject._setPositionDimensions({}),
            polygonBaseSize = fabricObject._getNonTransformedDimensions(),
            newX = (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) / polygonBaseSize.x,
            newY = (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) / polygonBaseSize.y;
        fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
        return actionPerformed;
    }
}

function Edit(event) {
    // clone what are you copying since you
    // may want copy and paste on different moment.
    // and you do not want the changes happened
    // later to reflect on the copy.
    var poly = event.target;
    canvas.setActiveObject(poly);
    poly.edit = !poly.edit;
    edit = poly.edit;
    if (poly.edit) {
        var lastControl = poly.points.length - 1;
        poly.cornerStyle = 'circle';
        poly.cornerColor = 'rgba(0,0,255,0.5)';
        poly.controls = poly.points.reduce(function (acc, point, index) {
            acc['p' + index] = new fabric.Control({
                positionHandler: polygonPositionHandler,
                actionHandler: anchorWrapper(index > 0 ? index - 1 : lastControl, actionHandler),
                actionName: 'modifyPolygon',
                pointIndex: index
            });
            return acc;
        }, {});
    } else {
        poly.cornerColor = 'blue';
        poly.cornerStyle = 'rect';
        poly.controls = fabric.Object.prototype.controls;
    }
    poly.hasBorders = !poly.edit;
    canvas.requestRenderAll();
}
var lefts= 400;
var tops=50;
function addBlock(pieceName, pieceId, peiceSpace,points=null,leftd,topd,color=null,color1=null,fun) {
    if(!points)
    {
        points = [{
            x: 0, y: 100
        }, {
            x: 20, y: 100
        }, {
            x: 20, y: 150
        }, {
            x: 0, y: 150
        }]
    }
    else
    {
        if((typeof points)=="string")
        {
            points=JSON.parse(points);
        }
    }
    canvas.viewportTransform = [0.7, 0, 0, 0.7, -50, 50];
    lefts=lefts+100;
    tops=tops+100;
    if((color==0 || color==null) && (color1==null || color1==0))
    {
        color='#ffffffa3';
    }
    else if(color==1){
        color='#fbb925';
    }
    else if(color1==1)
    {
        color='#dc2233';
    }
    var polygon = new fabric.RectWithText(points, {
        pieceId:pieceId,
        pieceName:pieceName,
        lockScalingY: true,
        lockScalingX: true,
        lockRotation:true,
        peiceSpace:peiceSpace,
        left: Math.round(leftd),
        top: Math.round(topd),
        fill: color,
        strokeWidth: 1,
        stroke: 'green',
        scaleX: 4,
        scaleY: 4,
        objectCaching: false,
        transparentCorners: false,
        cornerColor: 'blue',
        hasRotatingPoint: false,
        lockMovementX : editModStatic,
        lockMovementY : editModStatic
    }, {
        left: Math.round(leftd),
        top: Math.round(topd),
        fontSize: 18,
        objectCaching: false,
        transparentCorners: false,
        cornerColor: 'blue',
    }, pieceName + "\n" + pieceId);
    polygon.on("mousedblclick", (e) => {
        if(!editModStatic)
        {
            Edit(e);
        }
        else{
            fun(e);
        }
    })
    polygon.on('mousedown', (event) => {
        loo = false;
    }); 
    polygon.on('mouseup', (event) => {
        loo = true;
    });
    polygon.on('modified', (event) => {
        event.target.text.set("left",Math.round(event.target.left)+(Math.round(event.target.width)));
        event.target.text.set("top",Math.round(event.target.top)+(Math.round(event.target.height)));
    });
    canvas.add(polygon);

}


