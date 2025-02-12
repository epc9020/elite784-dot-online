/**
 * Wireframe Gridlines, version 2.1.0
 * Kallistero Â© 2023
 * kallistero.neocities.org
 * Lines 15 and 52 modified by elite784
 * Original version at https://kallistero.neocities.org/things/i/made/scripts/wireframe_gridlines.js
 * 
 * 
 */

let presetWireframeGridlinesParent = document.getElementsByTagName('body')[0];

// sets the ID of THIS EFFECT, not the ID of the parent container
const presetWireframeGridlinesEffectId = '';
const presetWireframeGridlinesEffectPositionType = 'fixed';

// parameters for determining the size of the whole effect,
// not meant to affect individual stars
const presetWireframeGridlinesViewWidth = 100;
const presetWireframeGridlinesViewHeight = 100;
const presetWireframeGridlinesViewUnits = '%'; // this effect binds to the top left of its container
const presetWireframeGridlinesOverflow = 'hidden';

// color of the grid lines
const presetWireframeGridlinesColor = 'lightgrey';
const presetWireframeGridlinesLineThicknessPx = 1;

// number of lines along each axis of the grid room
const presetWireframeGridlinesXDensity = 4;
const presetWireframeGridlinesYDensity = 3;
const presetWireframeGridlinesZDensity = 5;

const presetWireframeGridlinesBackWallPositionFromLeft = 25;
const presetWireframeGridlinesBackWallPositionFromTop = 25;
const presetWireframeGridlinesBackWallPositionUnits = '%';

const presetWireframeGridlinesBackWallWidth = 50;
const presetWireframeGridlinesBackWallHeight = 50;
const presetWireframeGridlinesBackWallSizeUnits = '%';

const presetWireframeGridlinesBackWallGridLinesOn = true; // lines on the back wall
const presetWireframeGridlinesRadialGridLinesOn = true; // lines that come out of the back wall
const presetWireframeGridlinesConcentricGridLinesOn = true; // lines that are parellel to the back wall

const presetWireframeGridlinesGlowColor = 'lightgrey';
const presetWireframeGridlinesGlowBlur = 5;
const presetWireframeGridlinesGlowSpread = 0;

// whether the concentric gridlines are moving
const presetWireframeGridlinesZFlowOn = false;
const presetWireframeGridlinesZFlowSpeed = 2;
const presetWireframeGridlinesZFlowFramerate = 29;

// forces the 4 corners of the room to connect to the 4 corners of the effect 
// container
const presetWireframeGridlinesForcedPerspectiveOn = false;

// This has no effect unless forced perspective is false
// Makes the vanishing point always appear directly behind the back wall 
// from the perspective of the viewer
const presetWireframeGridlinesNaturalVanishingPointOn = true;

// These have no effect unless forced perspective AND natural vanishing point 
// are false; these freely select the vanishing point position
const presetWireframeGridlinesVanishingPointPositionFromTop = 50;
const presetWireframeGridlinesVanishingPointPositionFromLeft = 50;
const presetWireframeGridlinesVanishingPointPositionUnits = '%';

// pointer-events control
const presetWireframeGridlinesPointerEventsProperty = 'none';

// z-index control
const presetWireframeGridlinesZIndex = -2;

const WireframeGridlinesConfig = class {
    constructor(
        parent, id, positionType, viewWidth, viewHeight, viewUnits, overflow, 
        color, lineThicknessPx, xDensity, yDensity, zDensity, 
        backWallPositionFromLeft, backWallPositionFromTop, 
        backWallPositionUnits, backWallWidth, backWallHeight, 
        backWallSizeUnits, backWallGridLinesOn, radialGridLinesOn, 
        concentricGridLinesOn, glowColor, glowBlur, glowSpread, 
        zFlowOn, zFlowSpeed, zFlowFramerate, 
        forcedPerspectiveOn, naturalVanishingPointOn, 
        vanishingPointPositionFromLeft, vanishingPointPositionFromTop, 
        vanishingPointPositionUnits, pointerEventsProperty, zIndex
    ) {
        // data validation
        if(presetWireframeGridlinesParent == undefined)
            presetWireframeGridlinesParent = document.getElementsByTagName('body')[0]
        ;
        if(viewWidth < 0) viewWidth = 0;
        if(viewHeight < 0) viewHeight = 0;
        if(lineThicknessPx < 0) lineThicknessPx = 0; // can still have glow
        if(xDensity < 0) xDensity = 0;
        if(yDensity < 0) yDensity = 0;
        if(zDensity < 0) zDensity = 0;
        if(backWallWidth < 0) backWallWidth = 0;
        if(backWallHeight < 0) backWallHeight = 0;
        if(glowBlur < 0) glowBlur = 0;
        if(glowSpread < 0) glowSpread = 0;
    
        // data assignment
        this.wireParent = parent !== undefined ? parent : presetWireframeGridlinesParent;
        this.wireId = id !== undefined ? id : presetWireframeGridlinesEffectId;
        this.wirePositionType = positionType !== undefined ? positionType : presetWireframeGridlinesEffectPositionType;
        this.wireViewWidth = viewWidth !== undefined ? viewWidth : presetWireframeGridlinesViewWidth;
        this.wireViewHeight = viewHeight !== undefined ? viewHeight : presetWireframeGridlinesViewHeight;
        this.wireViewUnits = viewUnits !== undefined ? viewUnits : presetWireframeGridlinesViewUnits;
        this.wireOverflow = overflow !== undefined ? overflow : presetWireframeGridlinesOverflow;
        this.wireColor = color !== undefined ? color : presetWireframeGridlinesColor;
        this.wireLineThicknessPx = lineThicknessPx !== undefined ? lineThicknessPx : presetWireframeGridlinesLineThicknessPx;
        this.wireXDensity = xDensity !== undefined ? Math.floor(xDensity) : presetWireframeGridlinesXDensity;
        this.wireYDensity = yDensity !== undefined ? Math.floor(yDensity) : presetWireframeGridlinesYDensity;
        this.wireZDensity = zDensity !== undefined ? zDensity : presetWireframeGridlinesZDensity;
        this.wireBackWallPositionFromLeft = backWallPositionFromLeft !== undefined ? backWallPositionFromLeft : presetWireframeGridlinesBackWallPositionFromLeft;
        this.wireBackWallPositionFromTop = backWallPositionFromTop !== undefined ? backWallPositionFromTop : presetWireframeGridlinesBackWallPositionFromTop;
        this.wireBackWallPositionUnits = backWallPositionUnits !== undefined ? backWallPositionUnits : presetWireframeGridlinesBackWallPositionUnits;
        this.wireBackWallWidth = backWallWidth !== undefined ? backWallWidth : presetWireframeGridlinesBackWallWidth;
        this.wireBackWallHeight = backWallHeight !== undefined ? backWallHeight : presetWireframeGridlinesBackWallHeight;
        this.wireBackWallSizeUnits = backWallSizeUnits !== undefined ? backWallSizeUnits : presetWireframeGridlinesBackWallSizeUnits;
        this.wireBackWallGridLinesOn = backWallGridLinesOn !== undefined ? backWallGridLinesOn : presetWireframeGridlinesBackWallGridLinesOn;
        this.wireRadialGridLinesOn = radialGridLinesOn !== undefined ? radialGridLinesOn : presetWireframeGridlinesRadialGridLinesOn;
        this.wireConcentricGridLinesOn = concentricGridLinesOn !== undefined ? concentricGridLinesOn : presetWireframeGridlinesConcentricGridLinesOn;
        this.wireGlowColor = glowColor !== undefined ? glowColor : presetWireframeGridlinesGlowColor;
        this.wireGlowBlur = glowBlur !== undefined ? glowBlur : presetWireframeGridlinesGlowBlur;
        this.wireGlowSpread = glowSpread !== undefined ? glowSpread : presetWireframeGridlinesGlowSpread;
        
        // animation properties
        this.wireZFlowOn = zFlowOn !== undefined ? zFlowOn : presetWireframeGridlinesZFlowOn;
        this.wireZFlowSpeed = zFlowSpeed !== undefined ? zFlowSpeed : presetWireframeGridlinesZFlowSpeed;
        this.wireZFlowFramerate = zFlowFramerate !== undefined ? Math.min(zFlowFramerate, 250) : presetWireframeGridlinesZFlowFramerate;

        this.wireForcedPerspectiveOn = forcedPerspectiveOn !== undefined ? forcedPerspectiveOn : presetWireframeGridlinesForcedPerspectiveOn;
        this.wireNaturalVanishingPointOn = naturalVanishingPointOn !== undefined ? naturalVanishingPointOn : presetWireframeGridlinesNaturalVanishingPointOn;
        this.wireVanishingPointPositionFromLeft = vanishingPointPositionFromLeft !== undefined ? vanishingPointPositionFromLeft : presetWireframeGridlinesVanishingPointPositionFromLeft;
        this.wireVanishingPointPositionFromTop = vanishingPointPositionFromTop !== undefined ? vanishingPointPositionFromTop : presetWireframeGridlinesVanishingPointPositionFromTop;
        this.wireVanishingPointPositionUnits = vanishingPointPositionUnits !== undefined ? vanishingPointPositionUnits : presetWireframeGridlinesVanishingPointPositionUnits;
        this.wirePointerEventsProperty = pointerEventsProperty !== undefined ? pointerEventsProperty : presetWireframeGridlinesPointerEventsProperty;
        this.wireZIndex = zIndex !== undefined ? Math.round(zIndex) : presetWireframeGridlinesZIndex;
        
        // auto-set variables
        this.wireInstance = null;
        this.wireBackWall = null;
        this.wireVerticalLines = new Array(this.wireXDensity);
        this.wireHorizontalLines = new Array(this.wireYDensity);
        this.wireRadialLines = new Array();
        this.wireConcentricLines = new Array(); // not simple divs; these can be animated
        this.wireIsOn = true;
        this.wireNaturalVanishingPointLeftPx = 0;
        this.wireNaturalVanishingPointTopPx = 0;

        this.wireBackWallLeft = 0;
        this.wireBackWallTop = 0;
        this.wireBackWallWidthPx = 0;
        this.wireBackWallHeightPx = 0;

        this.wireTerminalLeft = 0;
        this.wireTerminalTop = 0;
        this.wireTerminalWidth = 0;
        this.wireTerminalHeight = 0;

        this.wireInstanceWidth = 0;
        this.wireInstanceHeight = 0;

        this.vanishingPointLeftPx = 0;
        this.vanishingPointTopPx = 0;

        // animation auto-sets
        this.wireZFlowMillisPerFrame = Math.max(Math.round(1000 / this.wireZFlowFramerate), 4);
        this.wireZFlowAnimationIntervalElements = new Array();
        this.wireHasFlowed = false;

        // effect creation
        this.wireInstance = document.createElement('div');
            this.wireParent.appendChild(this.wireInstance);
            this.wireInstance.id = this.wireId;
            this.wireInstance.className = 'wireframe-gridlines';
            this.wireInstance.style.position = this.wirePositionType;
            this.wireInstance.style.bottom = 0;
            this.wireInstance.style.left = 0;
            this.wireInstance.style.background = 'transparent';
            this.wireInstance.style.width = this.wireViewWidth 
                + this.wireViewUnits
            ;
            this.wireInstance.style.height = this.wireViewHeight 
                + this.wireViewUnits
            ;
            this.wireInstance.style.overflow = this.wireOverflow;
            this.wireInstance.style.pointerEvents = 
                this.wirePointerEventsProperty
            ;
            this.wireInstance.style.zIndex = this.wireZIndex
        ;

        // static effect initialization

        // the back wall
        this.wireBackWall = document.createElement('div');
            this.wireInstance.appendChild(this.wireBackWall);
            this.wireBackWall.style.background = 'transparent';
            this.wireBackWall.style.position = 'absolute';
            this.wireBackWall.style.left = this.wireBackWallPositionFromLeft 
                + this.wireBackWallPositionUnits
            ;
            this.wireBackWall.style.top = this.wireBackWallPositionFromTop 
                + this.wireBackWallPositionUnits
            ;
            this.wireBackWall.style.width = this.wireBackWallWidth 
                + this.wireBackWallSizeUnits
            ;
            this.wireBackWall.style.height = this.wireBackWallHeight 
                + this.wireBackWallSizeUnits
            ;
            this.wireBackWall.style.overflow = 'visible';
            this.wireBackWall.style.border = this.wireLineThicknessPx 
                + 'px solid ' + this.wireColor
            ;
            this.wireBackWall.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                + 'px ' + this.wireGlowColor + ' inset';
            this.wireBackWall.className = 'wireframe-gridlines-back-wall';
        ;

        this.wireBackWallLeft = parseFloat(getComputedStyle(this.wireBackWall).left);
        this.wireBackWallTop = parseFloat(getComputedStyle(this.wireBackWall).top);
        this.wireBackWallWidthPx = parseFloat(getComputedStyle(this.wireBackWall).width);
        this.wireBackWallHeightPx = parseFloat(getComputedStyle(this.wireBackWall).height);

        this.wireInstanceWidth = parseFloat(getComputedStyle(this.wireInstance).width);
        this.wireInstanceHeight = parseFloat(getComputedStyle(this.wireInstance).height);

        // setting the back wall in pixels so it zooms with the rest of the effect
        this.wireBackWall.style.left = this.wireBackWallLeft + 'px';
        this.wireBackWall.style.top = this.wireBackWallTop + 'px';
        this.wireBackWall.style.width = this.wireBackWallWidthPx + 'px';
        this.wireBackWall.style.height = this.wireBackWallHeightPx + 'px';
        
        // finding the natural vanishing point behind the back wall
        this.wireNaturalVanishingPointLeftPx = 
            (this.wireBackWallLeft * this.wireInstanceWidth)
            / (this.wireInstanceWidth - this.wireBackWallWidthPx)
        ;
        this.wireNaturalVanishingPointTopPx = 
            (this.wireBackWallTop * this.wireInstanceHeight) 
            / (this.wireInstanceHeight - this.wireBackWallHeightPx)
        ;

        // setting the vanishing point to be used in calculations
        if(this.wireNaturalVanishingPointOn) { // with a natural vanishing point
            this.vanishingPointLeftPx = this.wireNaturalVanishingPointLeftPx;
            this.vanishingPointTopPx = this.wireNaturalVanishingPointTopPx;
        } else { // with a user-selected vanishing point
            let measurer = document.createElement('div');
            this.wireInstance.appendChild(measurer);
            measurer.style.position = 'absolute';
            
            measurer.style.left = this.wireVanishingPointPositionFromLeft + this.wireVanishingPointPositionUnits;
            measurer.style.top = this.wireVanishingPointPositionFromTop + this.wireVanishingPointPositionUnits;
            this.vanishingPointLeftPx = parseFloat(getComputedStyle(measurer).left);
            this.vanishingPointTopPx = parseFloat(getComputedStyle(measurer).top);

            measurer.remove();
        }

        // horizontal & vertical grid lines
        if(this.wireBackWallGridLinesOn) {

            for(let i = 0; i < this.wireXDensity; i++) {
                this.wireVerticalLines[i] = document.createElement('div');
                this.wireBackWall.appendChild(this.wireVerticalLines[i]);

                this.wireVerticalLines[i].style.background = this.wireColor;
                this.wireVerticalLines[i].style.position = 'absolute';
                this.wireVerticalLines[i].style.left = 'calc(' 
                    + ((i + 1) * 100 / (this.wireXDensity + 1)) + '% - ' 
                    + (this.wireLineThicknessPx / 2) + 'px)'
                ;
                this.wireVerticalLines[i].style.top = 0;
                this.wireVerticalLines[i].style.width = this.wireLineThicknessPx 
                    + 'px'
                ;
                this.wireVerticalLines[i].style.height = '100%';
                this.wireVerticalLines[i].style.boxShadow = '0 0 ' 
                    + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                    + this.wireGlowColor
                ;

                this.wireVerticalLines[i].className =
                    'wireframe-gridlines-vertical-line wireframe-gridlines-back-wall-gridline'
                ;
            }

            for(let i = 0; i < this.wireYDensity; i++) {
                this.wireHorizontalLines[i] = document.createElement('div');
                this.wireBackWall.appendChild(this.wireHorizontalLines[i]);

                this.wireHorizontalLines[i].style.background = this.wireColor;
                this.wireHorizontalLines[i].style.position = 'absolute';
                this.wireHorizontalLines[i].style.left = 0;
                this.wireHorizontalLines[i].style.top = 'calc(' 
                    + ((i + 1) * 100 / (this.wireYDensity + 1)) + '% - ' 
                    + (this.wireLineThicknessPx / 2) + 'px)'
                ;
                this.wireHorizontalLines[i].style.width = '100%';
                this.wireHorizontalLines[i].style.height = this.wireLineThicknessPx 
                    + 'px'
                ;
                this.wireHorizontalLines[i].style.boxShadow = '0 0 ' 
                    + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                    + this.wireGlowColor
                ;

                this.wireHorizontalLines[i].className = 
                    'wireframe-gridlines-horizontal-line wireframe-gridlines-back-wall-gridline'
                ;
            }
        }

        // radial grid lines
        if(this.wireRadialGridLinesOn) {
            let maxLineDimension = this.wireInstanceWidth + this.wireInstanceHeight;

            // forced-perspective radial grid lines
            if(this.wireForcedPerspectiveOn) {
                let topRadialLines = new Array(this.wireXDensity + 1);

                for(let i = 0; i <= this.wireXDensity; i++) {
                    topRadialLines[i] = document.createElement('div');
                    this.wireBackWall.appendChild(topRadialLines[i]);
                    
                    topRadialLines[i].style.background = this.wireColor;
                    topRadialLines[i].style.position = 'absolute';
                    topRadialLines[i].style.width = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    topRadialLines[i].style.height = maxLineDimension + 'px';
                    topRadialLines[i].style.left = 'calc('
                        + (i * 100 / (this.wireXDensity + 1)) + '% - ' 
                        + (this.wireLineThicknessPx / 2) + 'px)'
                    ;
                    topRadialLines[i].style.top = -maxLineDimension + 'px';
                    topRadialLines[i].style.transformOrigin = 'bottom center';
                    topRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // we just do a very simple math calculation
                            (i * (this.wireInstanceWidth 
                            - this.wireBackWallWidthPx) 
                            - this.wireBackWallLeft 
                            * (this.wireXDensity + 1))
                            / ((this.wireXDensity + 1) 
                            * this.wireBackWallTop)) 
                            * 180 / Math.PI)
                        + 'deg)'
                    ;
                    topRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    topRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                let rightRadialLines = new Array(this.wireYDensity + 1);

                for(let i = 0; i <= this.wireYDensity; i++) {
                    rightRadialLines[i] = document.createElement('div');
                    this.wireBackWall.appendChild(rightRadialLines[i]);
                    
                    rightRadialLines[i].style.background = this.wireColor;
                    rightRadialLines[i].style.position = 'absolute';
                    rightRadialLines[i].style.width = maxLineDimension + 'px';
                    rightRadialLines[i].style.height = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    rightRadialLines[i].style.right = -maxLineDimension + 'px';
                    rightRadialLines[i].style.top = 'calc('
                        + (i * 100 / (this.wireYDensity + 1)) + '% - ' 
                        + (this.wireLineThicknessPx / 2) + 'px)'
                    ;
                    rightRadialLines[i].style.transformOrigin = 'center left';
                    rightRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // we do some more simple math
                            (this.wireBackWallTop * (this.wireYDensity + 1) 
                            - i * (this.wireInstanceHeight 
                            - this.wireBackWallHeightPx)) 
                            / ((this.wireYDensity + 1) 
                            * (this.wireInstanceWidth 
                            - this.wireBackWallLeft 
                            - this.wireBackWallWidthPx))) 
                            * -180 / Math.PI)
                        + 'deg)'
                    ;
                    rightRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    rightRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                let bottomRadialLines = new Array(this.wireXDensity + 1);

                for(let i = 0; i <= this.wireXDensity; i++) {
                    bottomRadialLines[i] = document.createElement('div');
                    this.wireBackWall.appendChild(bottomRadialLines[i]);
                    
                    bottomRadialLines[i].style.background = this.wireColor;
                    bottomRadialLines[i].style.position = 'absolute';
                    bottomRadialLines[i].style.width = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    bottomRadialLines[i].style.height = maxLineDimension + 'px';
                    bottomRadialLines[i].style.right = 'calc('
                        + (i * 100 / (this.wireXDensity + 1)) + '% - ' 
                        + (this.wireLineThicknessPx / 2) + 'px)'
                    ;
                    bottomRadialLines[i].style.bottom = -maxLineDimension + 'px';
                    bottomRadialLines[i].style.transformOrigin = 'top center';
                    bottomRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // we just do a little more extremely easy math
                            ((this.wireXDensity + 1 - i)
                            * (this.wireInstanceWidth 
                            - this.wireBackWallWidthPx)
                            - this.wireBackWallLeft
                            * (this.wireXDensity + 1))
                            / ((this.wireXDensity + 1) 
                            * (this.wireInstanceHeight
                            - this.wireBackWallTop 
                            - this.wireBackWallHeightPx)))
                            * -180 / Math.PI)
                        + 'deg)'
                    ;
                    bottomRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    bottomRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                let leftRadialLines = new Array(this.wireYDensity + 1);

                for(let i = 0; i <= this.wireYDensity; i++) {
                    leftRadialLines[i] = document.createElement('div');
                    this.wireBackWall.appendChild(leftRadialLines[i]);
                    
                    leftRadialLines[i].style.background = this.wireColor;
                    leftRadialLines[i].style.position = 'absolute';
                    leftRadialLines[i].style.width = maxLineDimension + 'px';
                    leftRadialLines[i].style.height = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    leftRadialLines[i].style.left = -maxLineDimension + 'px';
                    leftRadialLines[i].style.bottom = 'calc('
                        + (i * 100 / (this.wireYDensity + 1)) + '% - ' 
                        + (this.wireLineThicknessPx / 2) + 'px)'
                    ;
                    leftRadialLines[i].style.transformOrigin = 'center right';
                    leftRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // just a bit more counting on one's fingers
                            ((this.wireYDensity + 1 - i) 
                            * (this.wireInstanceHeight 
                            - this.wireBackWallHeightPx)
                            - this.wireBackWallTop 
                            * (this.wireYDensity + 1))
                            / ((this.wireYDensity + 1)
                            * this.wireBackWallLeft))
                            * -180 / Math.PI)
                        + 'deg)'
                    ;
                    leftRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    leftRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                this.wireRadialLines.push(...topRadialLines);
                this.wireRadialLines.push(...rightRadialLines);
                this.wireRadialLines.push(...bottomRadialLines);
                this.wireRadialLines.push(...leftRadialLines)
            } else { // natural-perspective radial grid lines

                // all the points to radiate from
                let backWallGridBoundaryPoints = new Array();

                // top-left corner point
                backWallGridBoundaryPoints[0] = [this.wireBackWallLeft, this.wireBackWallTop];

                let accumulatedPoints = backWallGridBoundaryPoints.length;
                // top wall & top-right corner
                for(let i = 0; i <= this.wireXDensity; i++) {
                    backWallGridBoundaryPoints[i + accumulatedPoints] = 
                        [
                            backWallGridBoundaryPoints[i][0] 
                            + this.wireBackWallWidthPx 
                            / (this.wireXDensity + 1), 
                            backWallGridBoundaryPoints[i][1]
                        ]
                    ;
                }

                // right wall & bottom-right corner
                accumulatedPoints = backWallGridBoundaryPoints.length;
                for(let i = 0; i <= this.wireYDensity; i++) {
                    backWallGridBoundaryPoints[i + accumulatedPoints] = 
                        [
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][0], 
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][1] 
                            + this.wireBackWallHeightPx 
                            / (this.wireYDensity + 1)
                        ]
                    ;
                }

                // bottom wall & bottom-left corner
                accumulatedPoints = backWallGridBoundaryPoints.length;
                for(let i = 0; i <= this.wireXDensity; i++) {
                    backWallGridBoundaryPoints[i + accumulatedPoints] = 
                        [
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][0] 
                            - this.wireBackWallWidthPx 
                            / (this.wireXDensity + 1), 
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][1]
                        ]
                    ;
                }

                // left wall
                accumulatedPoints = backWallGridBoundaryPoints.length;
                for(let i = 0; i < this.wireYDensity; i++) {
                    backWallGridBoundaryPoints[i + accumulatedPoints] = 
                        [
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][0], 
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][1] 
                            - this.wireBackWallHeightPx 
                            / (this.wireYDensity + 1)
                        ]
                    ;
                
                } // all backwallgridboundarypoints are now known
                
                // these are the points right & left of the vanishing point
                let rightPoints = new Array();
                let leftPoints = new Array();
                for(let i = 0; i < backWallGridBoundaryPoints.length; i++) {
                    if(backWallGridBoundaryPoints[i][0] > this.vanishingPointLeftPx 
                        || backWallGridBoundaryPoints[i][0] == this.vanishingPointLeftPx)
                    {
                        rightPoints.push(backWallGridBoundaryPoints[i]);
                    } else {
                        leftPoints.push(backWallGridBoundaryPoints[i]);
                    }
                }

                // all right-side lines initially point right
                let rightRadialLines = new Array();
                for(let i = 0; i < rightPoints.length; i++) {
                    rightRadialLines[i] = document.createElement('div');
                    this.wireInstance.appendChild(rightRadialLines[i]);
                    
                    rightRadialLines[i].style.background = this.wireColor;
                    rightRadialLines[i].style.position = 'absolute';
                    rightRadialLines[i].style.width = maxLineDimension + 'px';
                    rightRadialLines[i].style.height = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    rightRadialLines[i].style.left = rightPoints[i][0] + (this.wireLineThicknessPx) + 'px';
                    rightRadialLines[i].style.top = rightPoints[i][1] 
                        + (this.wireLineThicknessPx / 2) 
                        + 'px'
                    ;
                    rightRadialLines[i].style.transformOrigin = 'center left';
                    rightRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // a very complex and advanced formula
                            (this.vanishingPointTopPx - rightPoints[i][1])
                            / (rightPoints[i][0] - this.vanishingPointLeftPx)) 
                            * -180 / Math.PI)
                        + 'deg)'
                    ;
                    rightRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    rightRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                // all left-side lines initially point left
                let leftRadialLines = new Array();
                for(let i = 0; i < leftPoints.length; i++) {
                    leftRadialLines[i] = document.createElement('div');
                    this.wireInstance.appendChild(leftRadialLines[i]);
                    
                    leftRadialLines[i].style.background = this.wireColor;
                    leftRadialLines[i].style.position = 'absolute';
                    leftRadialLines[i].style.width = maxLineDimension + 'px';
                    leftRadialLines[i].style.height = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    leftRadialLines[i].style.left = (leftPoints[i][0] - maxLineDimension) 
                        + (this.wireLineThicknessPx) + 'px';
                    leftRadialLines[i].style.top = leftPoints[i][1] 
                        + (this.wireLineThicknessPx / 2) + 'px'
                    ;
                    leftRadialLines[i].style.transformOrigin = 'center right';
                    leftRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // arcane mathematical symbols
                        (this.vanishingPointTopPx - leftPoints[i][1])
                        / (leftPoints[i][0] - this.vanishingPointLeftPx))
                            * -180 / Math.PI)
                        + 'deg)'
                    ;
                    leftRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    leftRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                this.wireRadialLines.push(...rightRadialLines);
                this.wireRadialLines.push(...leftRadialLines)
            }
        }

        // concentric grid lines
        if(this.wireConcentricGridLinesOn) {

            // forced-perspective concentric grid lines
            if(this.wireForcedPerspectiveOn) {
                [this.wireTerminalLeft, this.wireTerminalTop, this.wireTerminalWidth, this.wireTerminalHeight] = [0, 0, this.wireInstanceWidth, this.wireInstanceHeight];

                let leftDecrement = this.wireBackWallLeft / (this.wireZDensity + 1);
                let topDecrement = this.wireBackWallTop / (this.wireZDensity + 1);
                let widthIncrement = (this.wireInstanceWidth - this.wireBackWallWidthPx)
                    / (this.wireZDensity + 1)
                ;
                let heightIncrement = (this.wireInstanceHeight - this.wireBackWallHeightPx)
                    / (this.wireZDensity + 1)
                ;
                for(let i = 0; i < this.wireZDensity; i++) {
                    let concentricGridLine = document.createElement('div');
                    this.wireInstance.appendChild(concentricGridLine);

                    concentricGridLine.style.background = 'transparent';
                    concentricGridLine.style.position = 'absolute';
                    
                    concentricGridLine.style.left = (this.wireBackWallLeft - (i + 1) 
                        * leftDecrement) + 'px'
                    ;
                    concentricGridLine.style.top = (this.wireBackWallTop - (i + 1) 
                        * topDecrement) + 'px'
                    ;

                    concentricGridLine.style.width = (this.wireBackWallWidthPx + (i + 1) 
                        * widthIncrement) + 'px'
                    ;
                    concentricGridLine.style.height = (this.wireBackWallHeightPx 
                        + (i + 1) * heightIncrement) + 'px'
                    ;

                    concentricGridLine.style.overflow = 'visible';
                    concentricGridLine.style.border = this.wireLineThicknessPx 
                        + 'px solid ' + this.wireColor
                    ;
                    concentricGridLine.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                        + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                        + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                        + 'px ' + this.wireGlowColor + ' inset'
                    ;

                    concentricGridLine.className = 
                        'wireframe-gridlines-concentric-line'
                    ;

                    let gridlineStyle = getComputedStyle(concentricGridLine);

                    this.wireConcentricLines.push(
                        new WireframeConcentricGridline(concentricGridLine,
                            parseFloat(gridlineStyle.left), parseFloat(gridlineStyle.top), 
                            parseFloat(gridlineStyle.width), parseFloat(gridlineStyle.height), 
                            0, 0, this.wireInstanceWidth, this.wireInstanceHeight, 
                            this.wireBackWallLeft, this.wireBackWallTop, this.wireBackWallWidthPx, this.wireBackWallHeightPx, 
                            this.wireInstanceWidth, this.wireInstanceHeight, 
                            this.vanishingPointLeftPx, this.vanishingPointTopPx, 
                            true
                        )
                    );
                }
            } else { // natural-perspective concentric grid lines
                let [instanceWidth, vanishingPointTopPx, vanishingPointLeftPx] = 
                    [this.wireInstanceWidth, this.vanishingPointTopPx, 
                    this.vanishingPointLeftPx]
                ;

                // generalized formula for finding the next concentric lines
                // for any back-wall height, width, or position, along with 
                // any vanishing-point position

                // took several pages of math to find these,
                // yet they're so simple in their final forms here...
                // the most magical part of this entire effect
                let findNextCoords = function(left, top, width, height, zDensity) {
                    let densityAdjustedWidth = width / (zDensity + 1);

                    let dividend = instanceWidth - densityAdjustedWidth 
                        - vanishingPointLeftPx
                    ;
                    
                    let nextLeft = (instanceWidth * left 
                        - vanishingPointLeftPx * densityAdjustedWidth 
                        - vanishingPointLeftPx * left) / dividend
                    ;

                    let nextTop = (instanceWidth * top - vanishingPointTopPx
                        * densityAdjustedWidth - vanishingPointLeftPx * top) 
                        / dividend
                    ;

                    let nextWidth = (width * (instanceWidth 
                        - vanishingPointLeftPx)) / dividend
                    ;

                    let nextHeight = (height * (instanceWidth 
                        - vanishingPointLeftPx)) / dividend
                    ;

                    return [nextLeft, nextTop, nextWidth, nextHeight];
                }

                let concentricGridLine = document.createElement('div');

                concentricGridLine.style.background = 'transparent';
                concentricGridLine.style.position = 'absolute';

                let [lastLeft, lastTop, lastWidth, lastHeight] = 
                        [this.wireBackWallLeft, this.wireBackWallTop, 
                        this.wireBackWallWidthPx, this.wireBackWallHeightPx
                ];

                let [left, top, width, height] = findNextCoords(
                    lastLeft, lastTop, 
                    lastWidth, lastHeight, 
                    this.wireZDensity
                );

                concentricGridLine.style.left = left + 'px';
                concentricGridLine.style.top = top + 'px';
                concentricGridLine.style.width = width + 'px';
                concentricGridLine.style.height = height + 'px';

                concentricGridLine.style.overflow = 'visible';
                concentricGridLine.style.border = this.wireLineThicknessPx 
                    + 'px solid ' + this.wireColor
                ;
                concentricGridLine.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                    + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                    + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                    + 'px ' + this.wireGlowColor + ' inset'
                ;

                concentricGridLine.className = 
                    'wireframe-gridlines-concentric-line'
                ;

                if(left > -Infinity && left < Infinity 
                    && top > -Infinity && top < Infinity
                    && width > -Infinity && width < Infinity
                    && height > -Infinity && height < Infinity
                    && width > this.wireBackWallWidthPx
                    && height > this.wireBackWallHeightPx
                    && !(left < 0
                    && top < 0
                    && left + width > this.wireInstanceWidth
                    && top + height > this.wireInstanceHeight))
                {
                    this.wireInstance.appendChild(concentricGridLine);

                    let gridlineStyle = getComputedStyle(concentricGridLine);

                    this.wireConcentricLines.push(
                        new WireframeConcentricGridline(concentricGridLine,
                            parseFloat(gridlineStyle.left), parseFloat(gridlineStyle.top), 
                            parseFloat(gridlineStyle.width), parseFloat(gridlineStyle.height), 
                            0, 0, 0, 0, // won't know the terminal values until the end of the loop
                            this.wireBackWallLeft, this.wireBackWallTop, this.wireBackWallWidthPx, this.wireBackWallHeightPx, 
                            this.wireInstanceWidth, this.wireInstanceHeight, 
                            this.vanishingPointLeftPx, this.vanishingPointTopPx, 
                            false
                        )
                    );

                    [lastLeft, lastTop, lastWidth, lastHeight] = 
                        [left, top, width, height]
                    ;
                }

                // infinities can happen depending on selection of position, 
                // size, and vanishing point; for instance, when the vanishing 
                // point's distance from the left and the width of the back 
                // wall are both half the viewport for zDensity = 0
                while(left > -Infinity && left < Infinity 
                    && top > -Infinity && top < Infinity
                    && width > -Infinity && width < Infinity
                    && height > -Infinity && height < Infinity
                    && width > this.wireBackWallWidthPx
                    && height > this.wireBackWallHeightPx
                    && !(left < 0
                    && top < 0
                    && left + width > this.wireInstanceWidth
                    && top + height > this.wireInstanceHeight))
                {

                    [left, top, width, height] = findNextCoords(
                        left, top, width, height, this.wireZDensity
                    );

                    if(!(left > -Infinity && left < Infinity 
                        && top > -Infinity && top < Infinity
                        && width > -Infinity && width < Infinity
                        && height > -Infinity && height < Infinity)
                        || width < this.wireBackWallWidthPx
                        || height < this.wireBackWallHeightPx)
                    {
                        break;
                    }
                    [lastLeft, lastTop, lastWidth, lastHeight] = 
                        [left, top, width, height]
                    ;

                    concentricGridLine = document.createElement('div');
                    this.wireInstance.appendChild(concentricGridLine);

                    concentricGridLine.style.background = 'transparent';
                    concentricGridLine.style.position = 'absolute';

                    concentricGridLine.style.left = left + 'px';
                    concentricGridLine.style.top = top + 'px';
                    concentricGridLine.style.width = width + 'px';
                    concentricGridLine.style.height = height + 'px';

                    concentricGridLine.style.overflow = 'visible';
                    concentricGridLine.style.border = this.wireLineThicknessPx 
                        + 'px solid ' + this.wireColor
                    ;
                    concentricGridLine.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                        + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                        + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                        + 'px ' + this.wireGlowColor + ' inset'
                    ;

                    concentricGridLine.className = 
                        'wireframe-gridlines-concentric-line'
                    ;

                    let gridlineStyle = getComputedStyle(concentricGridLine);

                    this.wireConcentricLines.push(
                        new WireframeConcentricGridline(concentricGridLine,
                            parseFloat(gridlineStyle.left), parseFloat(gridlineStyle.top), 
                            parseFloat(gridlineStyle.width), parseFloat(gridlineStyle.height), 
                            0, 0, 0, 0, // won't know the terminal values until the end of the loop
                            this.wireBackWallLeft, this.wireBackWallTop, this.wireBackWallWidthPx, this.wireBackWallHeightPx, 
                            this.wireInstanceWidth, this.wireInstanceHeight, 
                            this.vanishingPointLeftPx, this.vanishingPointTopPx, 
                            false
                        )
                    );
                }

                [this.wireTerminalLeft, this.wireTerminalTop, this.wireTerminalWidth, this.wireTerminalHeight] = 
                    [lastLeft, lastTop, lastWidth, lastHeight]
                ;

                // now that I know where the concentric lines terminate,
                for (const concentricLineObject of this.wireConcentricLines) {
                    concentricLineObject.updateTerminal(lastLeft, lastTop, lastWidth, lastHeight);
                }

                /*
                // the old algorithm
                let findSizeIncrementFactor = function(lastBoxWidth) {
                    let viewDensityTerm = gridRoom.offsetWidth * (config.density + 1);
                    
                    // console.log('viewport width: ' + gridRoom.offsetWidth);
                    // console.log('density: ' + config.density);
                    // console.log('item width: ' + lastBoxWidth);
                    // console.log('view density term ' + viewDensityTerm);
                    // console.log('size increment factor: ' + (viewDensityTerm 
                    //     / (viewDensityTerm - 2 * lastBoxWidth)));

                    // finding this involved performing lots of math atop what 
                    // was meant to be an art tutorial on perspective, which 
                    // probably wasn't necessary, but it doesn't need to be :)
                    return viewDensityTerm 
                        / (viewDensityTerm - 2 * lastBoxWidth);
                }

                let lastConcentricGridLine = backWall;
                let width = backWall.offsetWidth;
                let height = backWall.offsetHeight;
                let centerFromTop = backWall.offsetTop + height / 2;
                let centerFromLeft = gridRoom.offsetWidth / 2;

                let sizeIncrementFactor = findSizeIncrementFactor(width);
                let maxSize = docBody.offsetHeight > docBody.offsetWidth 
                    ? docBody.offsetHeight : docBody.offsetWidth
                ;

                width *= sizeIncrementFactor;
                height *= sizeIncrementFactor;

                let left = centerFromLeft - width / 2;
                let top = centerFromTop - height / 2;

                let currentConcentricGridLine = null;
                let n = 0;
                while(maxSize > width && maxSize > height) {
                    currentConcentricGridLine = document.createElement('div');
                    currentConcentricGridLine.style = 'background: transparent; ' 
                        + 'position: absolute; width: ' + width + 'px; '
                        + 'height: ' + height + 'px; top: ' + top 
                        + 'px; left: ' + left + 'px; border: ' 
                        + config.lineThickness + 'px solid ' + config.color 
                        + '; box-shadow: 0 0 ' + config.glowBlur + 'px ' 
                        + config.glowSpread + 'px ' + config.color + ', 0 0 ' 
                        + config.glowBlur + 'px ' + config.glowSpread + 'px ' 
                        + config.color + ' inset;'
                    ;
                    gridRoom.appendChild(currentConcentricGridLine);

                    lastWidth = width;
                    lastHeight = height;

                    sizeIncrementFactor = findSizeIncrementFactor(width);

                    width *= sizeIncrementFactor;
                    height *= sizeIncrementFactor;
                    left = centerFromLeft - width / 2;
                    top = centerFromTop - height / 2;
                }
                */
            }

            if(this.wireZFlowOn) {
                if(this.forcedPerspectiveOn) {
                    let concentricGridLine = document.createElement('div');
                    this.wireInstance.appendChild(concentricGridLine);

                    concentricGridLine.style.background = 'transparent';
                    concentricGridLine.style.position = 'absolute';

                    concentricGridLine.style.left = this.wireBackWallLeft + 'px';
                    concentricGridLine.style.top = this.wireBackWallTop + 'px';
                    concentricGridLine.style.width = this.wireBackWallWidthPx + 'px';
                    concentricGridLine.style.height = this.wireBackWallHeightPx + 'px';

                    concentricGridLine.style.overflow = 'visible';
                    concentricGridLine.style.border = this.wireLineThicknessPx 
                        + 'px solid ' + this.wireColor
                    ;
                    concentricGridLine.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                        + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                        + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                        + 'px ' + this.wireGlowColor + ' inset'
                    ;

                    concentricGridLine.className = 
                        'wireframe-gridlines-concentric-line'
                    ;

                    this.wireConcentricLines.push(
                        new WireframeConcentricGridline(concentricGridLine, 
                            this.wireBackWallLeft, this.wireBackWallTop, this.wireBackWallWidthPx, this.wireBackWallHeightPx, 
                            this.wireTerminalLeft, this.wireTerminalTop, this.wireTerminalWidth, this.wireTerminalHeight, 
                            this.wireBackWallLeft, this.wireBackWallTop, this.wireBackWallWidthPx, this.wireBackWallHeightPx, 
                            this.wireInstanceWidth, this.wireInstanceHeight, 
                            this.vanishingPointLeftPx, this.vanishingPointTopPx, 
                            this.wireForcedPerspectiveOn
                        )
                    );
                }

                for (const concentricLineObject of this.wireConcentricLines) {
                    this.wireZFlowAnimationIntervalElements.push(
                        setInterval(
                            () => {
                                concentricLineObject.zFlow(this.wireZFlowSpeed * this.wireZFlowMillisPerFrame);
                            }
                        , this.wireZFlowMillisPerFrame)
                    );
                }

                this.wireHasFlowed = true;
            }
        }
    }
    


    // ********** ALL CONFIGURABLE PARAMETERS FOR WIREFRAME GRIDLINES **********



    /**
     * parent container for this instance of the effect
     * 
     * type: HTMLBodyElement (like what you get when you call document.getElementById)
     */
    get parent () { return this.wireParent; }
    /**
     * parent container for this instance of the effect
     * 
     * type: HTMLBodyElement (like what you get when you call document.getElementById)
     */
    set parent (parent) {
        if(!parent) {
            this.wireParent.removeChild(this.wireInstance);
        } else if(parent instanceof Node && this.wireInstance) {
            parent.appendChild(this.wireInstance);
        }

        this.wireParent = parent;

        this.refresh();
    }

    /**
     * id attribute for this instance of the effect
     * 
     * type: string
     */
    get id () { return this.wireId; }
    /**
     * id attribute for this instance of the effect
     * 
     * type: string
     */
    set id (id) {
        if(this.wireInstance) {
            if(id)
                this.wireInstance.id = id;
            else
                this.wireInstance.id = presetWireframeGridlinesEffectId;
        }

        this.wireId = id;
    }

    /**
     * "position" style property for this instance of the effect
     * 
     * type: string
     */
    get positionType () { return this.wirePositionType; }
    /**
     * "position" style property for this instance of the effect
     * 
     * type: string
     */
    get position () { return this.wirePositionType; }
    /**
     * "position" style property for this instance of the effect
     * 
     * type: string
     */
    set positionType (positionType) {
        if(this.wireInstance) {
            this.wireInstance.style.position = positionType;
        }

        this.wirePositionType = positionType;
    }
    /**
     * "position" style property for this instance of the effect
     * 
     * type: string
     */
    set position (positionType) {
        if(this.wireInstance) {
            this.wireInstance.style.position = positionType;
        }

        this.wirePositionType = positionType;
    }

    /**
     * width number of this instance of the effect
     * 
     * this effect binds to the bottom left of its container
     * 
     * type: number
     */
    get viewWidth () { return this.wireViewWidth; }
    /**
     * width number of this instance of the effect
     * 
     * this effect binds to the bottom left of its container
     * 
     * type: number
     */
    set viewWidth (viewWidth) {
        if(viewWidth < 0) viewWidth = 0;

        if(this.wireInstance) {
            this.wireInstance.style.width = viewWidth + this.wireViewUnits;
        }

        this.wireViewWidth = viewWidth;
    }

    /**
     * height number of this instance of the effect
     * 
     * this effect binds to the bottom left of its container
     * 
     * type: number
     */
    get viewHeight () { return this.wireViewHeight; }
    /**
     * height number of this instance of the effect
     * 
     * this effect binds to the bottom left of its container
     * 
     * type: number
     */
    set viewHeight (viewHeight) {
        if(viewHeight < 0) viewHeight = 0;

        if(this.wireInstance) {
            this.wireInstance.style.height = viewHeight + this.wireViewUnits;
        }

        this.wireViewHeight = viewHeight;
    }

    /**
     * size units for the "height" and "width" numbers (e.g., 'px', '%', 'em')
     * 
     * this effect binds to the bottom left of its container
     * 
     * type: string
     */
    get viewUnits () { return this.wireViewUnits; }
    /**
     * size units for the "height" and "width" numbers (e.g., 'px', '%', 'em')
     * 
     * this effect binds to the bottom left of its container
     * 
     * type: string
     */
    set viewUnits (viewUnits) {
        if(this.wireInstance) {
            this.wireInstance.style.width = this.wireViewWidth + viewUnits;
            this.wireInstance.style.height = this.wireViewHeight + viewUnits;
        }
        
        this.wireViewUnits = viewUnits;
    }

    /**
     * "overflow" style property for this effect
     * 
     * type: string
     */
    get overflow () { return this.wireOverflow; }
    /**
     * "overflow" style property for this effect
     * 
     * type: string
     */
    set overflow (overflow) {
        if(this.wireInstance) {
            this.wireInstance.style.overflow = overflow;
        }

        this.wireOverflow = overflow;
    }

    /**
     * each line's color (like 'aqua' or 'var(--my-css-variable)')
     * 
     * type: string
     */
    get color() { return this.wireColor; }
    /**
     * each line's color (like 'aqua' or 'var(--my-css-variable)')
     * 
     * type: string
     */
    get background() { return this.wireColor; }
    /**
     * each line's color (like 'aqua' or 'var(--my-css-variable)')
     * 
     * type: string
     */
    set color(color) {
        this.wireColor = color;

        if(this.wireConcentricLines[0])
        for (const box of this.wireConcentricLines) { 
            box.element.style.border = this.wireLineThicknessPx 
                + 'px solid ' + this.wireColor
            ;
        }

        if(this.wireRadialLines[0])
        for(const line of this.wireRadialLines) {
            line.style.background = this.wireColor;
        }

        if(this.wireHorizontalLines[0])
        for(const line of this.wireHorizontalLines) {
            line.style.background = this.wireColor;
        }

        if(this.wireVerticalLines[0])
        for(const line of this.wireVerticalLines) {
            line.style.background = this.wireColor;
        }

        this.wireBackWall.style.border = this.wireLineThicknessPx 
            + 'px solid ' + this.wireColor
        ;
    }
    /**
     * each line's color (like 'aqua' or 'var(--my-css-variable)')
     * 
     * type: string
     */
    set background(color) { this.color = color; }

    /**
     * each line's thickness in px
     * 
     * type: number
     */
    get lineThicknessPx() { return this.wireLineThicknessPx; }
    get lineThickness() { return this.lineThicknessPx; }
    /**
     * each line's thickness in px
     * 
     * type: number
     */
    set lineThicknessPx(lineThicknessPx) {
        if(lineThicknessPx < 0) lineThicknessPx = 0;

        this.wireLineThicknessPx = lineThicknessPx;

        this.refresh();
    }
    set lineThickness(lineThicknessPx) { this.lineThicknessPx = lineThicknessPx; }

    /**
     * the number of vertical lines along the back wall
     * 
     * type: number
     */
    get xDensity() { return this.wireXDensity; }
    /**
     * the number of vertical lines along the back wall
     * 
     * type: number
     */
    set xDensity(xDensity) {
        if(xDensity < 0) xDensity = 0;

        this.wireXDensity = Math.floor(xDensity);

        this.refreshVerticalLines();
        this.refreshRadialLines();
    }

    /**
     * the number of horizontal lines along the back wall
     * 
     * type: number
     */
    get yDensity() { return this.wireYDensity; }
    /**
     * the number of horizontal lines along the back wall
     * 
     * type: number
     */
    set yDensity(yDensity) {
        if(yDensity < 0) yDensity = 0;

        this.wireYDensity = Math.floor(yDensity);

        this.refreshHorizontalLines();
        this.refreshRadialLines();
    }

    /**
     * the amount of concentric lines wrapping around the walls & ceilings; 
     * will behave differently depending on whether forced perspective is on
     * 
     * type: number
     */
    get zDensity() { return this.wireZDensity; }
    /**
     * the amount of concentric lines wrapping around the walls & ceilings; 
     * will behave differently depending on whether forced perspective is on
     * 
     * type: number
     */
    set zDensity(zDensity) {
        if(zDensity < 0) zDensity = 0;

        this.wireZDensity = zDensity;

        this.refreshConcentricLines();
    }

    /**
     * the distance from the left side of the effect to the left side of the 
     * back wall, measured in units you can define by using 
     * backWallPositionUnits 
     * 
     * supports negative values
     * 
     * type: number
     */
    get backWallPositionFromLeft() { return this.wireBackWallPositionFromLeft; }
    /**
     * the distance from the left side of the effect to the left side of the 
     * back wall, measured in units you can define by using 
     * backWallPositionUnits 
     * 
     * supports negative values
     * 
     * type: number
     */
    get backWallLeft() { return this.backWallPositionFromLeft; }
    /**
     * the distance from the left side of the effect to the left side of the 
     * back wall, measured in units you can define by using 
     * backWallPositionUnits 
     * 
     * supports negative values
     * 
     * type: number
     */
    set backWallPositionFromLeft(backWallPositionFromLeft) { 
        this.wireBackWallPositionFromLeft = backWallPositionFromLeft;

        this.refresh();
    }
    /**
     * the distance from the left side of the effect to the left side of the 
     * back wall, measured in units you can define by using 
     * backWallPositionUnits 
     * 
     * supports negative values
     * 
     * type: number
     */
    set backWallLeft(backWallPositionFromLeft) { this.backWallPositionFromLeft = backWallPositionFromLeft }

    /**
     * the distance from the top of the effect to the top side of the 
     * back wall, measured in units you can define by using 
     * backWallPositionUnits 
     * 
     * supports negative values
     * 
     * type: number
     */
    get backWallPositionFromTop() { return this.wireBackWallPositionFromTop; }
    /**
     * the distance from the top of the effect to the top side of the 
     * back wall, measured in units you can define by using 
     * backWallPositionUnits 
     * 
     * supports negative values
     * 
     * type: number
     */
    get backWallTop() { return this.backWallPositionFromTop; }
    /**
     * the distance from the top of the effect to the top side of the 
     * back wall, measured in units you can define by using 
     * backWallPositionUnits 
     * 
     * supports negative values
     * 
     * type: number
     */
    set backWallPositionFromTop(backWallPositionFromTop) { 
        this.wireBackWallPositionFromTop = backWallPositionFromTop;

        this.refresh();
    }
    /**
     * the distance from the top of the effect to the top side of the 
     * back wall, measured in units you can define by using 
     * backWallPositionUnits 
     * 
     * supports negative values
     * 
     * type: number
     */
    set backWallTop(backWallPositionFromTop) { this.backWallPositionFromTop = backWallPositionFromTop }

    /**
     * the units that the back wall's position is measured in
     * 
     * type: string
     */
    get backWallPositionUnits() { return this.wireBackWallPositionUnits; }
    /**
     * the units that the back wall's position is measured in
     * 
     * type: string
     */
    set backWallPositionUnits(backWallPositionUnits) {
        this.wireBackWallPositionUnits = backWallPositionUnits;
        
        this.refresh();
    }

    /**
     * width of the back wall
     * 
     * units can be chosen by using backWallSizeUnits
     * 
     * type: number
     */
    get backWallWidth() { return this.wireBackWallWidth; }
    /**
     * width of the back wall
     * 
     * units can be chosen by using backWallSizeUnits
     * 
     * type: number
     */
    set backWallWidth(backWallWidth) {
        if(backWallWidth < 0) backWallWidth = 0;

        this.wireBackWallWidth = backWallWidth;

        this.refresh();
    }

    /**
     * height of the back wall
     * 
     * units can be chosen by using backWallSizeUnits
     * 
     * type: number
     */
    get backWallHeight() { return this.wireBackWallHeight; }
    /**
     * height of the back wall
     * 
     * units can be chosen by using backWallSizeUnits
     * 
     * type: number
     */
    set backWallHeight(backWallHeight) {
        if(backWallHeight < 0) backWallHeight = 0;

        this.wireBackWallHeight = backWallHeight;

        this.refresh();
    }

    /**
     * units of width & height for the back wall
     * 
     * type: string
     */
    get backWallSizeUnits() { return this.wireBackWallSizeUnits; }
    /**
     * units of width & height for the back wall
     * 
     * type: string
     */
    set backWallSizeUnits(backWallSizeUnits) {
        this.wireBackWallSizeUnits = backWallSizeUnits;

        this.refresh();
    }

    /**
     * whether to display grid lines on the back wall
     * 
     * type: boolean
     */
    get backWallGridLinesOn() { return this.wireBackWallGridLinesOn; }
    /**
     * whether to display grid lines on the back wall
     * 
     * type: boolean
     */
    set backWallGridLinesOn(backWallGridLinesOn) {
        this.wireBackWallGridLinesOn = backWallGridLinesOn;

        this.refreshBackWallLines();
    }

    /**
     * whether to display grid lines radiating from the back wall
     * 
     * type: boolean
     */
    get radialGridLinesOn() { return this.wireRadialGridLinesOn; }
    /**
     * whether to display grid lines radiating from the back wall
     * 
     * type: boolean
     */
    set radialGridLinesOn(radialGridLinesOn) {
        this.wireRadialGridLinesOn = radialGridLinesOn;

        this.refreshRadialLines();
    }

    /**
     * whether to display grid lines parallel to the back wall
     * 
     * type: boolean
     */
    get concentricGridLinesOn() { return this.wireConcentricGridLinesOn; }
    /**
     * whether to display grid lines parallel to the back wall
     * 
     * type: boolean
     */
    set concentricGridLinesOn(concentricGridLinesOn) {
        this.wireConcentricGridLinesOn = concentricGridLinesOn;

        this.refreshConcentricLines();
    }

    /**
     * the glow color for the lines
     * 
     * type: string
     */
    get glowColor() { return this.wireGlowColor; }
    /**
     * the glow color for the lines
     * 
     * type: string
     */
    set glowColor(glowColor) {
        this.wireGlowColor = glowColor;

        if(this.wireConcentricLines[0])
        for (const box of this.wireConcentricLines) { 
            box.element.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                + 'px ' + this.wireGlowColor + ' inset'
            ;
        }

        if(this.wireRadialLines[0])
        for(const line of this.wireRadialLines) {
            line.style.boxShadow = '0 0 ' 
                + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                + this.wireGlowColor
            ;
        }

        if(this.wireHorizontalLines[0])
        for(const line of this.wireHorizontalLines) {
            line.style.boxShadow = '0 0 ' 
                + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                + this.wireGlowColor
            ;
        }

        if(this.wireVerticalLines[0])
        for(const line of this.wireVerticalLines) {
            line.style.boxShadow = '0 0 ' 
                + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                + this.wireGlowColor
            ;
        }

        this.wireBackWall.style.boxShadow = '0 0 ' + this.wireGlowBlur 
            + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
            + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
            + 'px ' + this.wireGlowColor + ' inset'
        ;
    }

    /**
     * the blur amount for the lines' glow
     * 
     * type: number
     */
    get glowBlur() { return this.wireGlowBlur; }
    /**
     * the blur amount for the lines' glow
     * 
     * type: number
     */
    set glowBlur(glowBlur) {
        this.wireGlowBlur = glowBlur;

        if(this.wireConcentricLines[0])
        for (const box of this.wireConcentricLines) { 
            box.element.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                + 'px ' + this.wireGlowColor + ' inset'
            ;
        }

        if(this.wireRadialLines[0])
        for(const line of this.wireRadialLines) {
            line.style.boxShadow = '0 0 ' 
                + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                + this.wireGlowColor
            ;
        }

        if(this.wireHorizontalLines[0])
        for(const line of this.wireHorizontalLines) {
            line.style.boxShadow = '0 0 ' 
                + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                + this.wireGlowColor
            ;
        }

        if(this.wireVerticalLines[0])
        for(const line of this.wireVerticalLines) {
            line.style.boxShadow = '0 0 ' 
                + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                + this.wireGlowColor
            ;
        }

        this.wireBackWall.style.boxShadow = '0 0 ' + this.wireGlowBlur 
            + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
            + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
            + 'px ' + this.wireGlowColor + ' inset'
        ;
    }

    /**
     * the spread amount for the lines' glow
     * 
     * type: number
     */
    get glowSpread() { return this.wireGlowSpread; }
    /**
     * the spread amount for the lines' glow
     * 
     * type: number
     */
    set glowSpread(glowSpread) {
        this.wireGlowSpread = glowSpread;

        if(this.wireConcentricLines[0])
        for (const box of this.wireConcentricLines) { 
            box.element.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                + 'px ' + this.wireGlowColor + ' inset'
            ;
        }

        if(this.wireRadialLines[0])
        for(const line of this.wireRadialLines) {
            line.style.boxShadow = '0 0 ' 
                + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                + this.wireGlowColor
            ;
        }

        if(this.wireHorizontalLines[0])
        for(const line of this.wireHorizontalLines) {
            line.style.boxShadow = '0 0 ' 
                + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                + this.wireGlowColor
            ;
        }

        if(this.wireVerticalLines[0])
        for(const line of this.wireVerticalLines) {
            line.style.boxShadow = '0 0 ' 
                + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                + this.wireGlowColor
            ;
        }

        this.wireBackWall.style.boxShadow = '0 0 ' + this.wireGlowBlur 
            + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
            + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
            + 'px ' + this.wireGlowColor + ' inset'
        ;
    }

    /**
     * Z-FLOW IS AN EXPERIMENTAL FEATURE; YOUR RESULTS MAY VARY
     * 
     * the concentric grid lines will gain a flowing animation
     * 
     * type: boolean
     */
    get zFlowOn() { return this.wireZFlowOn; }
    /**
     * Z-FLOW IS AN EXPERIMENTAL FEATURE; YOUR RESULTS MAY VARY
     * 
     * the concentric grid lines will gain a flowing animation
     * 
     * type: boolean
     */
    set zFlowOn(zFlowOn) {
        this.wireZFlowOn = zFlowOn;
        
        this.refreshZFlow();
    }

    /**
     * Z-FLOW IS AN EXPERIMENTAL FEATURE; YOUR RESULTS MAY VARY
     * 
     * the speed at which concentric grid lines will flow
     * 
     * type: number
     */
    get zFlowSpeed() { return this.wireZFlowSpeed; }
    /**
     * Z-FLOW IS AN EXPERIMENTAL FEATURE; YOUR RESULTS MAY VARY
     * 
     * the speed at which concentric grid lines will flow
     * 
     * type: number
     */
    set zFlowSpeed(zFlowSpeed) {
        this.wireZFlowSpeed = zFlowSpeed;

        this.refreshZFlow();
    }

    /**
     * the frame rate for the z-flow animation
     * 
     * type: number
     */
    get zFlowFramerate() { return this.wireZFlowFramerate; }
    /**
     * the frame rate for the z-flow animation
     * 
     * type: number
     */
    get frameRate() { return this.wireZFlowFramerate; }
    /**
     * the frame rate for the z-flow animation
     * 
     * type: number
     */
    get framerate() { return this.wireZFlowFramerate; }
    /**
     * the frame rate for the z-flow animation
     * 
     * type: number
     */
    set zFlowFramerate(zFlowFramerate) {
        if(zFlowFramerate < 0) zFlowFramerate = 0;

        if(this.wireZFlowFramerate == 0 
            && zFlowFramerate > 0) {
                this.wireZFlowFramerate = Math.min(zFlowFramerate, 250);
                this.wireZFlowMillisPerFrame = Math.max(Math.round(1000 / this.wireZFlowFramerate), 4);
        } else {
            this.wireZFlowFramerate = Math.min(zFlowFramerate, 250);

            if(zFlowFramerate != 0)
                this.wireZFlowMillisPerFrame = Math.max(Math.round(1000 / zFlowFramerate), 4);
            else
                this.wireZFlowMillisPerFrame = Infinity;
        }

        this.refreshZFlow();
    }
    /**
     * the frame rate for the z-flow animation
     * 
     * type: number
     */
    set frameRate(frameRate) { this.zFlowFramerate = frameRate; }
    /**
     * the frame rate for the z-flow animation
     * 
     * type: number
     */
    set framerate(framerate) { this.zFlowFramerate = framerate; }


    /**
     * whether or not to use forced perspective
     * 
     * with forced perspective on, the effect will ALWAYS have lines that 
     * connect the corners of the back wall to the corners of the whole effect
     * 
     * type: boolean
     */
    get forcedPerspectiveOn() { return this.wireForcedPerspectiveOn; }
    /**
     * whether or not to use forced perspective
     * 
     * with forced perspective on, the effect will ALWAYS have lines that 
     * connect the corners of the back wall to the corners of the whole effect
     * 
     * type: boolean
     */
    set forcedPerspectiveOn(forcedPerspectiveOn) {
        this.wireForcedPerspectiveOn = forcedPerspectiveOn;

        this.refreshVanishingPoint();
    }

    /**
     * when forced perspective is off, this indicates whether to use a natural 
     * vanishing point
     * 
     * with this on, the vanishing point is always directly behind the back 
     * wall from the perspective of the viewer
     * 
     * type: boolean
     */
    get naturalVanishingPointOn() { return this.wireNaturalVanishingPointOn; }
    /**
     * when forced perspective is off, this indicates whether to use a natural 
     * vanishing point
     * 
     * with this on, the vanishing point is always directly behind the back 
     * wall from the perspective of the viewer
     * 
     * type: boolean
     */
    set naturalVanishingPointOn(naturalVanishingPointOn) {
        this.wireNaturalVanishingPointOn = naturalVanishingPointOn;

        this.refreshVanishingPoint();
    }

    /**
     * when forced perspective and natural vanishing point are both off, this 
     * indicates the distance of the vanishing point from the left side of the 
     * effect
     * 
     * this distance is measured in units set by vanishingPointPositionUnits
     * 
     * type: number
     */
    get vanishingPointPositionFromLeft() { return this.wireVanishingPointPositionFromLeft; }
    /**
     * when forced perspective and natural vanishing point are both off, this 
     * indicates the distance of the vanishing point from the left side of the 
     * effect
     * 
     * this distance is measured in units set by vanishingPointPositionUnits
     * 
     * type: number
     */
    set vanishingPointPositionFromLeft(vanishingPointPositionFromLeft) {
        this.wireVanishingPointPositionFromLeft = vanishingPointPositionFromLeft;

        this.refreshVanishingPoint();
    }

    /**
     * when forced perspective and natural vanishing point are both off, this 
     * indicates the distance of the vanishing point from the top side of the 
     * effect
     * 
     * this distance is measured in units set by vanishingPointPositionUnits
     * 
     * type: number
     */
    get vanishingPointPositionFromTop() { return this.wireVanishingPointPositionFromTop; }
    /**
     * when forced perspective and natural vanishing point are both off, this 
     * indicates the distance of the vanishing point from the top side of the 
     * effect
     * 
     * this distance is measured in units set by vanishingPointPositionUnits
     * 
     * type: number
     */
    set vanishingPointPositionFromTop(vanishingPointPositionFromTop) {
        this.wireVanishingPointPositionFromTop = vanishingPointPositionFromTop;

        this.refreshVanishingPoint();
    }

    /**
     * the units of measurement for the vanishing point position
     * 
     * type: string
     */
    get vanishingPointPositionUnits() { return this.wireVanishingPointPositionUnits; }
    /**
     * the units of measurement for the vanishing point position
     * 
     * type: string
     */
    set vanishingPointPositionUnits(vanishingPointPositionUnits) {
        this.wireVanishingPointPositionUnits = vanishingPointPositionUnits;

        this.refreshVanishingPoint();
    }

    /**
     * "pointer-events" style property of this instance of the effect
     * 
     * type: string
     */
    get pointerEventsProperty () { return this.wirePointerEventsProperty; }
    /**
     * "pointer-events" style property of this instance of the effect
     * 
     * type: string
     */
    set pointerEventsProperty (pointerEventsProperty) {
        if(this.wireInstance) {
            this.wireInstance.style.pointerEvents = pointerEventsProperty;
        }

        this.wirePointerEventsProperty = pointerEventsProperty;
    }

    /**
     * "z-index" style property of this instance of the effect
     * 
     * type: number
     */
    get zIndex() { return this.wireZIndex; }
    /**
     * "z-index" style property of this instance of the effect
     * 
     * type: number
     */
    set zIndex(zIndex) {
        zIndex = Math.round(zIndex);

        if(this.wireInstance) {
            this.wireInstance.style.zIndex = zIndex;
        }
        
        this.wireZIndex = zIndex;
    }



    /**
     * 
     * **************************** AUTO-SET PARAMETERS
     * 
     */



    /**
     * HTML div for the effect made with this config
     * 
     * type: HTMLBodyElement (like what you get when you call document.getElementById)
     */
    get instance() { return this.wireInstance; }

    /**
     * HTML div for the back wall
     * 
     * type: HTMLBodyElement (like what you get when you call document.getElementById)
     */
    get backWall() { return this.wireBackWall; }

    /**
     * Array of HTML divs for all vertical lines on the back wall
     * 
     * type: Array[HTMLBodyElement]
     */
    get verticalLines() { return this.wireVerticalLines; }

    /**
     * Array of HTML divs for all horizontal lines on the back wall
     * 
     * type: Array[HTMLBodyElement]
     */
    get horizontalLines() { return this.wireHorizontalLines; }

    /**
     * Array of HTML divs for all lines radiating from the back wall
     * 
     * type: Array[HTMLBodyElement]
     */
    get radialLines() { return this.wireRadialLines; }

    /**
     * Array of HTML divs for all lines parallel to the back wall
     * 
     * type: Array[HTMLBodyElement]
     */
    get concentricLines() { return this.wireConcentricLines; }

    /**
     * the natural vanishing point's "left" position, calculated from the 
     * position & size of the back wall
     * 
     * type: number
     */
    get naturalVanishingPointLeftPx() { return this.wireNaturalVanishingPointLeftPx; }

    /**
     * the natural vanishing point's "top" position, calculated from the 
     * position & size of the back wall
     * 
     * type: number
     */
    get naturalVanishingPointTopPx() { return this.wireNaturalVanishingPointTopPx; }

    /**
     * whether or not the effect is currently displaying
     * 
     * type: true/false
     */
    get isOn() { return this.wireIsOn; }
    /**
     * whether or not the effect is currently displaying
     * 
     * type: true/false
     */
    get on() { return this.wireIsOn; }
    /**
     * whether or not the effect is currently displaying
     * 
     * type: true/false
     */
    set isOn(isOn) { 
        if(isOn === false && this.wireIsOn) {
            this.wireBackWall.style.display = 'none';

            for (const line of this.wireHorizontalLines) {
                line.style.display = 'none';
            }
            for (const line of this.wireVerticalLines) {
                line.style.display = 'none';
            }
            for (const line of this.wireRadialLines) {
                line.style.display = 'none';
            }
            for(const box of this.wireConcentricLines) {
                box.element.style.display = 'none';
            }
        } else if (isOn === true && !this.wireIsOn) {
            this.wireBackWall.style.display = 'block';

            for (const line of this.wireHorizontalLines) {
                line.style.display = 'block';
            }
            for (const line of this.wireVerticalLines) {
                line.style.display = 'block';
            }
            for (const line of this.wireRadialLines) {
                line.style.display = 'block';
            }
            for(const box of this.wireConcentricLines) {
                box.element.style.display = 'block';
            }
        }

        this.wireIsOn = isOn;
    }
    /**
     * whether or not the effect is currently displaying
     * 
     * type: true/false
     */
    set on(isOn) { this.isOn = isOn; }


    /**
     * 
     * **************************** MEMBER FUNCTIONS
     * 
     */



    /**
     * @returns another instance of this config, without creating an 
     * associated instance of the effect
     * 
     * the cloned config can be changed without changing this config's 
     * instance of the effect, and it can be used as an argument to the 
     * wireframeGridlines() function to create another instance
     * 
     * for example:
     * let grid1 = wireframeGridlines();
     * let grid2 = grid1.clone();
     * grid2.backWallPositionFromTop = -10; // doesn't change grid1
     */
    clone() {
        // only pass on its ID if there isn't an instance attached to this config
        let id = this.instance ? presetWireframeGridlinesEffectId : this.wireId;

        return new WireframeGridlinesConfig(
            this.wireParent, id, this.wirePositionType, this.wireViewWidth, 
            this.wireViewHeight, this.wireViewUnits, this.wireOverflow, 
            this.wireColor, this.wireLineThicknessPx, this.wireXDensity, 
            this.wireYDensity, this.wireZDensity, 
            this.wireBackWallPositionFromLeft, 
            this.wireBackWallPositionFromTop, 
            this.wireBackWallPositionUnits, this.wireBackWallWidth, 
            this.wireBackWallHeight, this.wireBackWallSizeUnits, 
            this.wireBackWallGridLinesOn, this.wireRadialGridLinesOn, 
            this.wireConcentricGridLinesOn, this.wireGlowColor, 
            this.wireGlowBlur, this.wireGlowSpread, 
            this.wireZFlowOn, this.wireZFlowSpeed, this.wireZFlowFramerate, 
            this.wireForcedPerspectiveOn, this.wireNaturalVanishingPointOn, 
            this.wireVanishingPointPositionFromLeft, 
            this.wireVanishingPointPositionFromTop, 
            this.wireVanishingPointPositionUnits, 
            this.wirePointerEventsProperty, this.wireZIndex
        );
    }

    /**
     * toggles display on & off
     */
    toggle() { this.isOn = !this.isOn; }

    /**
     * recreates the effect with the most current settings
     */
    refresh() {
        if(this.wireZFlowAnimationIntervalElements[0])
        for(const interval of this.wireZFlowAnimationIntervalElements) {
            clearInterval(interval);
        }
        this.wireHasFlowed = false;

        this.wireZFlowAnimationIntervalElements.length = 0;
        this.wireConcentricLines.length = 0;
        this.wireRadialLines.length = 0;
        this.wireHorizontalLines.length = 0;
        this.wireVerticalLines.length = 0;
        
        this.wireInstance.remove();

        // effect creation
        this.wireInstance = document.createElement('div');
            this.wireParent.appendChild(this.wireInstance);
            this.wireInstance.id = this.wireId;
            this.wireInstance.className = 'wireframe-gridlines';
            this.wireInstance.style.position = this.wirePositionType;
            this.wireInstance.style.bottom = 0;
            this.wireInstance.style.left = 0;
            this.wireInstance.style.background = 'transparent';
            this.wireInstance.style.width = this.wireViewWidth 
                + this.wireViewUnits
            ;
            this.wireInstance.style.height = this.wireViewHeight 
                + this.wireViewUnits
            ;
            this.wireInstance.style.overflow = this.wireOverflow;
            this.wireInstance.style.pointerEvents = 
                this.wirePointerEventsProperty
            ;
            this.wireInstance.style.zIndex = this.wireZIndex
        ;

        this.wireVerticalLines = new Array(this.wireXDensity);
        this.wireHorizontalLines = new Array(this.wireYDensity);
        this.wireRadialLines = new Array();
        this.wireConcentricLines = new Array();
        this.wireIsOn = true;
        this.wireNaturalVanishingPointLeftPx = 0;
        this.wireNaturalVanishingPointTopPx = 0;

        // static effect initialization

        // the back wall
        this.wireBackWall = document.createElement('div');
            this.wireInstance.appendChild(this.wireBackWall);
            this.wireBackWall.style.background = 'transparent';
            this.wireBackWall.style.position = 'absolute';
            this.wireBackWall.style.left = this.wireBackWallPositionFromLeft 
                + this.wireBackWallPositionUnits
            ;
            this.wireBackWall.style.top = this.wireBackWallPositionFromTop 
                + this.wireBackWallPositionUnits
            ;
            this.wireBackWall.style.width = this.wireBackWallWidth 
                + this.wireBackWallSizeUnits
            ;
            this.wireBackWall.style.height = this.wireBackWallHeight 
                + this.wireBackWallSizeUnits
            ;
            this.wireBackWall.style.overflow = 'visible';
            this.wireBackWall.style.border = this.wireLineThicknessPx 
                + 'px solid ' + this.wireColor
            ;
            this.wireBackWall.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                + 'px ' + this.wireGlowColor + ' inset';
            this.wireBackWall.className = 'wireframe-gridlines-back-wall';
        ;

        this.wireBackWallLeft = parseFloat(getComputedStyle(this.wireBackWall).left);
        this.wireBackWallTop = parseFloat(getComputedStyle(this.wireBackWall).top);
        this.wireBackWallWidthPx = parseFloat(getComputedStyle(this.wireBackWall).width);
        this.wireBackWallHeightPx = parseFloat(getComputedStyle(this.wireBackWall).height);

        this.wireInstanceWidth = parseFloat(getComputedStyle(this.wireInstance).width);
        this.wireInstanceHeight = parseFloat(getComputedStyle(this.wireInstance).height);

        // setting the back wall in pixels so it zooms with the rest of the effect
        this.wireBackWall.style.left = this.wireBackWallLeft + 'px';
        this.wireBackWall.style.top = this.wireBackWallTop + 'px';
        this.wireBackWall.style.width = this.wireBackWallWidthPx + 'px';
        this.wireBackWall.style.height = this.wireBackWallHeightPx + 'px';

        this.refreshVanishingPoint(true);

        this.refreshBackWallLines(true);

        this.refreshRadialLines(true);

        this.refreshConcentricLines(true);
    }

    refreshVanishingPoint(effectIsRefreshing) {
        // finding the natural vanishing point behind the back wall
        this.wireNaturalVanishingPointLeftPx = 
            (this.wireBackWallLeft * this.wireInstanceWidth)
            / (this.wireInstanceWidth - this.wireBackWallWidthPx)
        ;
        this.wireNaturalVanishingPointTopPx = 
            (this.wireBackWallTop * this.wireInstanceHeight) 
            / (this.wireInstanceHeight - this.wireBackWallHeightPx)
        ;

        // setting the vanishing point to be used in calculations
        if(this.wireNaturalVanishingPointOn) { // with a natural vanishing point
            this.vanishingPointLeftPx = this.wireNaturalVanishingPointLeftPx;
            this.vanishingPointTopPx = this.wireNaturalVanishingPointTopPx;
        } else { // with a user-selected vanishing point
            let measurer = document.createElement('div');
            this.wireInstance.appendChild(measurer);
            measurer.style.position = 'absolute';
            
            measurer.style.left = this.wireVanishingPointPositionFromLeft + this.wireVanishingPointPositionUnits;
            measurer.style.top = this.wireVanishingPointPositionFromTop + this.wireVanishingPointPositionUnits;
            this.vanishingPointLeftPx = parseFloat(getComputedStyle(measurer).left);
            this.vanishingPointTopPx = parseFloat(getComputedStyle(measurer).top);

            measurer.remove();
        }

        if(effectIsRefreshing !== true) {
            this.refreshRadialLines();
            this.refreshConcentricLines();
        }
    }

    /**
     * refreshes only concentric grid lines
     */
    refreshConcentricLines(effectIsRefreshing) {
        if(effectIsRefreshing !== true) { // will have already been done if whole effect is refreshing
            if(this.wireZFlowAnimationIntervalElements[0])
            for(const interval of this.wireZFlowAnimationIntervalElements) {
                clearInterval(interval);
            }
            this.wireZFlowAnimationIntervalElements.length = 0;
            this.wireHasFlowed = false;

            if(this.wireConcentricLines[0])
            for(const box of this.wireConcentricLines) {
                box.element.remove();
            }
            this.wireConcentricLines.length = 0;
        }

        // concentric grid lines
        if(this.wireConcentricGridLinesOn) {

            // forced-perspective concentric grid lines
            if(this.wireForcedPerspectiveOn) {
                [this.wireTerminalLeft, this.wireTerminalTop, this.wireTerminalWidth, this.wireTerminalHeight] = [0, 0, this.wireInstanceWidth, this.wireInstanceHeight];

                let leftDecrement = this.wireBackWallLeft / (this.wireZDensity + 1);
                let topDecrement = this.wireBackWallTop / (this.wireZDensity + 1);
                let widthIncrement = (this.wireInstanceWidth - this.wireBackWallWidthPx)
                    / (this.wireZDensity + 1)
                ;
                let heightIncrement = (this.wireInstanceHeight - this.wireBackWallHeightPx)
                    / (this.wireZDensity + 1)
                ;
                for(let i = 0; i < this.wireZDensity; i++) {
                    let concentricGridLine = document.createElement('div');
                    this.wireInstance.appendChild(concentricGridLine);

                    concentricGridLine.style.background = 'transparent';
                    concentricGridLine.style.position = 'absolute';
                    
                    concentricGridLine.style.left = (this.wireBackWallLeft - (i + 1) 
                        * leftDecrement) + 'px'
                    ;
                    concentricGridLine.style.top = (this.wireBackWallTop - (i + 1) 
                        * topDecrement) + 'px'
                    ;

                    concentricGridLine.style.width = (this.wireBackWallWidthPx + (i + 1) 
                        * widthIncrement) + 'px'
                    ;
                    concentricGridLine.style.height = (this.wireBackWallHeightPx 
                        + (i + 1) * heightIncrement) + 'px'
                    ;

                    concentricGridLine.style.overflow = 'visible';
                    concentricGridLine.style.border = this.wireLineThicknessPx 
                        + 'px solid ' + this.wireColor
                    ;
                    concentricGridLine.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                        + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                        + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                        + 'px ' + this.wireGlowColor + ' inset'
                    ;

                    concentricGridLine.className = 
                        'wireframe-gridlines-concentric-line'
                    ;

                    let gridlineStyle = getComputedStyle(concentricGridLine);

                    this.wireConcentricLines.push(
                        new WireframeConcentricGridline(concentricGridLine,
                            parseFloat(gridlineStyle.left), parseFloat(gridlineStyle.top), 
                            parseFloat(gridlineStyle.width), parseFloat(gridlineStyle.height), 
                            0, 0, this.wireInstanceWidth, this.wireInstanceHeight, 
                            this.wireBackWallLeft, this.wireBackWallTop, this.wireBackWallWidthPx, this.wireBackWallHeightPx, 
                            this.wireInstanceWidth, this.wireInstanceHeight, 
                            this.vanishingPointLeftPx, this.vanishingPointTopPx, 
                            true
                        )
                    );
                }
            } else { // natural-perspective concentric grid lines
                let [instanceWidth, vanishingPointTopPx, vanishingPointLeftPx] = 
                    [this.wireInstanceWidth, this.vanishingPointTopPx, 
                    this.vanishingPointLeftPx]
                ;

                // generalized formula for finding the next concentric lines
                // for any back-wall height, width, or position, along with 
                // any vanishing-point position

                // took several pages of math to find these,
                // yet they're so simple in their final forms here...
                // the most magical part of this entire effect
                let findNextCoords = function(left, top, width, height, zDensity) {
                    let densityAdjustedWidth = width / (zDensity + 1);

                    let dividend = instanceWidth - densityAdjustedWidth 
                        - vanishingPointLeftPx
                    ;
                    
                    let nextLeft = (instanceWidth * left 
                        - vanishingPointLeftPx * densityAdjustedWidth 
                        - vanishingPointLeftPx * left) / dividend
                    ;

                    let nextTop = (instanceWidth * top - vanishingPointTopPx
                        * densityAdjustedWidth - vanishingPointLeftPx * top) 
                        / dividend
                    ;

                    let nextWidth = (width * (instanceWidth 
                        - vanishingPointLeftPx)) / dividend
                    ;

                    let nextHeight = (height * (instanceWidth 
                        - vanishingPointLeftPx)) / dividend
                    ;

                    return [nextLeft, nextTop, nextWidth, nextHeight];
                }

                let concentricGridLine = document.createElement('div');

                concentricGridLine.style.background = 'transparent';
                concentricGridLine.style.position = 'absolute';

                let [lastLeft, lastTop, lastWidth, lastHeight] = 
                        [this.wireBackWallLeft, this.wireBackWallTop, 
                        this.wireBackWallWidthPx, this.wireBackWallHeightPx
                ];

                let [left, top, width, height] = findNextCoords(
                    lastLeft, lastTop, 
                    lastWidth, lastHeight, 
                    this.wireZDensity
                );

                concentricGridLine.style.left = left + 'px';
                concentricGridLine.style.top = top + 'px';
                concentricGridLine.style.width = width + 'px';
                concentricGridLine.style.height = height + 'px';

                concentricGridLine.style.overflow = 'visible';
                concentricGridLine.style.border = this.wireLineThicknessPx 
                    + 'px solid ' + this.wireColor
                ;
                concentricGridLine.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                    + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                    + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                    + 'px ' + this.wireGlowColor + ' inset'
                ;

                concentricGridLine.className = 
                    'wireframe-gridlines-concentric-line'
                ;

                if(left > -Infinity && left < Infinity 
                    && top > -Infinity && top < Infinity
                    && width > -Infinity && width < Infinity
                    && height > -Infinity && height < Infinity
                    && width > this.wireBackWallWidthPx
                    && height > this.wireBackWallHeightPx
                    && !(left < 0
                    && top < 0
                    && left + width > this.wireInstanceWidth
                    && top + height > this.wireInstanceHeight))
                {
                    this.wireInstance.appendChild(concentricGridLine);

                    let gridlineStyle = getComputedStyle(concentricGridLine);

                    this.wireConcentricLines.push(
                        new WireframeConcentricGridline(concentricGridLine,
                            parseFloat(gridlineStyle.left), parseFloat(gridlineStyle.top), 
                            parseFloat(gridlineStyle.width), parseFloat(gridlineStyle.height), 
                            0, 0, 0, 0, // won't know the terminal values until the end of the loop
                            this.wireBackWallLeft, this.wireBackWallTop, this.wireBackWallWidthPx, this.wireBackWallHeightPx, 
                            this.wireInstanceWidth, this.wireInstanceHeight, 
                            this.vanishingPointLeftPx, this.vanishingPointTopPx, 
                            false
                        )
                    );

                    [lastLeft, lastTop, lastWidth, lastHeight] = 
                        [left, top, width, height]
                    ;
                }

                // infinities can happen depending on selection of position, 
                // size, and vanishing point; for instance, when the vanishing 
                // point's distance from the left and the width of the back 
                // wall are both half the viewport for zDensity = 0
                while(left > -Infinity && left < Infinity 
                    && top > -Infinity && top < Infinity
                    && width > -Infinity && width < Infinity
                    && height > -Infinity && height < Infinity
                    && width > this.wireBackWallWidthPx
                    && height > this.wireBackWallHeightPx
                    && !(left < 0
                    && top < 0
                    && left + width > this.wireInstanceWidth
                    && top + height > this.wireInstanceHeight))
                {

                    [left, top, width, height] = findNextCoords(
                        left, top, width, height, this.wireZDensity
                    );

                    if(!(left > -Infinity && left < Infinity 
                        && top > -Infinity && top < Infinity
                        && width > -Infinity && width < Infinity
                        && height > -Infinity && height < Infinity)
                        || width < this.wireBackWallWidthPx
                        || height < this.wireBackWallHeightPx)
                    {
                        break;
                    }
                    [lastLeft, lastTop, lastWidth, lastHeight] = 
                        [left, top, width, height]
                    ;

                    concentricGridLine = document.createElement('div');
                    this.wireInstance.appendChild(concentricGridLine);

                    concentricGridLine.style.background = 'transparent';
                    concentricGridLine.style.position = 'absolute';

                    concentricGridLine.style.left = left + 'px';
                    concentricGridLine.style.top = top + 'px';
                    concentricGridLine.style.width = width + 'px';
                    concentricGridLine.style.height = height + 'px';

                    concentricGridLine.style.overflow = 'visible';
                    concentricGridLine.style.border = this.wireLineThicknessPx 
                        + 'px solid ' + this.wireColor
                    ;
                    concentricGridLine.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                        + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                        + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                        + 'px ' + this.wireGlowColor + ' inset'
                    ;

                    concentricGridLine.className = 
                        'wireframe-gridlines-concentric-line'
                    ;

                    let gridlineStyle = getComputedStyle(concentricGridLine);

                    this.wireConcentricLines.push(
                        new WireframeConcentricGridline(concentricGridLine,
                            parseFloat(gridlineStyle.left), parseFloat(gridlineStyle.top), 
                            parseFloat(gridlineStyle.width), parseFloat(gridlineStyle.height), 
                            0, 0, 0, 0, // won't know the terminal values until the end of the loop
                            this.wireBackWallLeft, this.wireBackWallTop, this.wireBackWallWidthPx, this.wireBackWallHeightPx, 
                            this.wireInstanceWidth, this.wireInstanceHeight, 
                            this.vanishingPointLeftPx, this.vanishingPointTopPx, 
                            false
                        )
                    );
                }

                [this.wireTerminalLeft, this.wireTerminalTop, this.wireTerminalWidth, this.wireTerminalHeight] = 
                    [lastLeft, lastTop, lastWidth, lastHeight]
                ;

                // now that I know where the concentric lines terminate,
                for (const concentricLineObject of this.wireConcentricLines) {
                    concentricLineObject.updateTerminal(lastLeft, lastTop, lastWidth, lastHeight);
                }

                /*
                // the old algorithm
                let findSizeIncrementFactor = function(lastBoxWidth) {
                    let viewDensityTerm = gridRoom.offsetWidth * (config.density + 1);
                    
                    // console.log('viewport width: ' + gridRoom.offsetWidth);
                    // console.log('density: ' + config.density);
                    // console.log('item width: ' + lastBoxWidth);
                    // console.log('view density term ' + viewDensityTerm);
                    // console.log('size increment factor: ' + (viewDensityTerm 
                    //     / (viewDensityTerm - 2 * lastBoxWidth)));

                    // finding this involved performing lots of math atop what 
                    // was meant to be an art tutorial on perspective, which 
                    // probably wasn't necessary, but it doesn't need to be :)
                    return viewDensityTerm 
                        / (viewDensityTerm - 2 * lastBoxWidth);
                }

                let lastConcentricGridLine = backWall;
                let width = backWall.offsetWidth;
                let height = backWall.offsetHeight;
                let centerFromTop = backWall.offsetTop + height / 2;
                let centerFromLeft = gridRoom.offsetWidth / 2;

                let sizeIncrementFactor = findSizeIncrementFactor(width);
                let maxSize = docBody.offsetHeight > docBody.offsetWidth 
                    ? docBody.offsetHeight : docBody.offsetWidth
                ;

                width *= sizeIncrementFactor;
                height *= sizeIncrementFactor;

                let left = centerFromLeft - width / 2;
                let top = centerFromTop - height / 2;

                let currentConcentricGridLine = null;
                let n = 0;
                while(maxSize > width && maxSize > height) {
                    currentConcentricGridLine = document.createElement('div');
                    currentConcentricGridLine.style = 'background: transparent; ' 
                        + 'position: absolute; width: ' + width + 'px; '
                        + 'height: ' + height + 'px; top: ' + top 
                        + 'px; left: ' + left + 'px; border: ' 
                        + config.lineThickness + 'px solid ' + config.color 
                        + '; box-shadow: 0 0 ' + config.glowBlur + 'px ' 
                        + config.glowSpread + 'px ' + config.color + ', 0 0 ' 
                        + config.glowBlur + 'px ' + config.glowSpread + 'px ' 
                        + config.color + ' inset;'
                    ;
                    gridRoom.appendChild(currentConcentricGridLine);

                    lastWidth = width;
                    lastHeight = height;

                    sizeIncrementFactor = findSizeIncrementFactor(width);

                    width *= sizeIncrementFactor;
                    height *= sizeIncrementFactor;
                    left = centerFromLeft - width / 2;
                    top = centerFromTop - height / 2;
                }
                */
            }
        }

        this.refreshZFlow(true);
    }

    /**
     * refreshes only z-flow animations
     */
    refreshZFlow(effectIsRefreshing) {
        if(effectIsRefreshing !== true) { // will have already been done if whole effect is refreshing
            if(this.wireZFlowAnimationIntervalElements[0])
            for(const interval of this.wireZFlowAnimationIntervalElements) {
                clearInterval(interval);
            }
            this.wireZFlowAnimationIntervalElements.length = 0;
        }

        // z-flow animation
        if(this.wireZFlowOn) {
            if(this.forcedPerspectiveOn && !this.wireHasFlowed) {
                let concentricGridLine = document.createElement('div');
                this.wireInstance.appendChild(concentricGridLine);

                concentricGridLine.style.background = 'transparent';
                concentricGridLine.style.position = 'absolute';

                concentricGridLine.style.left = this.wireBackWallLeft + 'px';
                concentricGridLine.style.top = this.wireBackWallTop + 'px';
                concentricGridLine.style.width = this.wireBackWallWidthPx + 'px';
                concentricGridLine.style.height = this.wireBackWallHeightPx + 'px';

                concentricGridLine.style.overflow = 'visible';
                concentricGridLine.style.border = this.wireLineThicknessPx 
                    + 'px solid ' + this.wireColor
                ;
                concentricGridLine.style.boxShadow = '0 0 ' + this.wireGlowBlur 
                    + 'px ' + this.wireGlowSpread + 'px ' + this.wireGlowColor 
                    + ', 0 0 ' + this.wireGlowBlur + 'px ' + this.wireGlowSpread 
                    + 'px ' + this.wireGlowColor + ' inset'
                ;

                concentricGridLine.className = 
                    'wireframe-gridlines-concentric-line'
                ;

                this.wireConcentricLines.push(
                    new WireframeConcentricGridline(concentricGridLine, 
                        this.wireBackWallLeft, this.wireBackWallTop, this.wireBackWallWidthPx, this.wireBackWallHeightPx, 
                        this.wireTerminalLeft, this.wireTerminalTop, this.wireTerminalWidth, this.wireTerminalHeight, 
                        this.wireBackWallLeft, this.wireBackWallTop, this.wireBackWallWidthPx, this.wireBackWallHeightPx, 
                        this.wireInstanceWidth, this.wireInstanceHeight, 
                        this.vanishingPointLeftPx, this.vanishingPointTopPx, 
                        this.wireForcedPerspectiveOn
                    )
                );
            }

            for (const concentricLineObject of this.wireConcentricLines) {
                this.wireZFlowAnimationIntervalElements.push(
                    setInterval(
                        () => {
                            concentricLineObject.zFlow(this.wireZFlowSpeed * this.wireZFlowMillisPerFrame);
                        }
                    , this.wireZFlowMillisPerFrame)
                );
            }

            this.wireHasFlowed = true;
        }
    }

    /**
     * refreshes only radial grid lines
     */
    refreshRadialLines(effectIsRefreshing) {
        if(effectIsRefreshing !== true) { // will have already been done if whole effect is refreshing
            if(this.wireRadialLines[0])
            for(const line of this.wireRadialLines) {
                line.remove();
            }
            this.wireRadialLines.length = 0;
        }

        // radial grid lines
        if(this.wireRadialGridLinesOn) {
            let maxLineDimension = this.wireInstanceWidth + this.wireInstanceHeight;

            // forced-perspective radial grid lines
            if(this.wireForcedPerspectiveOn) {
                let topRadialLines = new Array(this.wireXDensity + 1);

                for(let i = 0; i <= this.wireXDensity; i++) {
                    topRadialLines[i] = document.createElement('div');
                    this.wireBackWall.appendChild(topRadialLines[i]);
                    
                    topRadialLines[i].style.background = this.wireColor;
                    topRadialLines[i].style.position = 'absolute';
                    topRadialLines[i].style.width = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    topRadialLines[i].style.height = maxLineDimension + 'px';
                    topRadialLines[i].style.left = 'calc('
                        + (i * 100 / (this.wireXDensity + 1)) + '% - ' 
                        + (this.wireLineThicknessPx / 2) + 'px)'
                    ;
                    topRadialLines[i].style.top = -maxLineDimension + 'px';
                    topRadialLines[i].style.transformOrigin = 'bottom center';
                    topRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // we just do a very simple math calculation
                            (i * (this.wireInstanceWidth 
                            - this.wireBackWallWidthPx) 
                            - this.wireBackWallLeft 
                            * (this.wireXDensity + 1))
                            / ((this.wireXDensity + 1) 
                            * this.wireBackWallTop)) 
                            * 180 / Math.PI)
                        + 'deg)'
                    ;
                    topRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    topRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                let rightRadialLines = new Array(this.wireYDensity + 1);

                for(let i = 0; i <= this.wireYDensity; i++) {
                    rightRadialLines[i] = document.createElement('div');
                    this.wireBackWall.appendChild(rightRadialLines[i]);
                    
                    rightRadialLines[i].style.background = this.wireColor;
                    rightRadialLines[i].style.position = 'absolute';
                    rightRadialLines[i].style.width = maxLineDimension + 'px';
                    rightRadialLines[i].style.height = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    rightRadialLines[i].style.right = -maxLineDimension + 'px';
                    rightRadialLines[i].style.top = 'calc('
                        + (i * 100 / (this.wireYDensity + 1)) + '% - ' 
                        + (this.wireLineThicknessPx / 2) + 'px)'
                    ;
                    rightRadialLines[i].style.transformOrigin = 'center left';
                    rightRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // we do some more simple math
                            (this.wireBackWallTop * (this.wireYDensity + 1) 
                            - i * (this.wireInstanceHeight 
                            - this.wireBackWallHeightPx)) 
                            / ((this.wireYDensity + 1) 
                            * (this.wireInstanceWidth 
                            - this.wireBackWallLeft 
                            - this.wireBackWallWidthPx))) 
                            * -180 / Math.PI)
                        + 'deg)'
                    ;
                    rightRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    rightRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                let bottomRadialLines = new Array(this.wireXDensity + 1);

                for(let i = 0; i <= this.wireXDensity; i++) {
                    bottomRadialLines[i] = document.createElement('div');
                    this.wireBackWall.appendChild(bottomRadialLines[i]);
                    
                    bottomRadialLines[i].style.background = this.wireColor;
                    bottomRadialLines[i].style.position = 'absolute';
                    bottomRadialLines[i].style.width = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    bottomRadialLines[i].style.height = maxLineDimension + 'px';
                    bottomRadialLines[i].style.right = 'calc('
                        + (i * 100 / (this.wireXDensity + 1)) + '% - ' 
                        + (this.wireLineThicknessPx / 2) + 'px)'
                    ;
                    bottomRadialLines[i].style.bottom = -maxLineDimension + 'px';
                    bottomRadialLines[i].style.transformOrigin = 'top center';
                    bottomRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // we just do a little more extremely easy math
                            ((this.wireXDensity + 1 - i)
                            * (this.wireInstanceWidth 
                            - this.wireBackWallWidthPx)
                            - this.wireBackWallLeft
                            * (this.wireXDensity + 1))
                            / ((this.wireXDensity + 1) 
                            * (this.wireInstanceHeight
                            - this.wireBackWallTop 
                            - this.wireBackWallHeightPx)))
                            * -180 / Math.PI)
                        + 'deg)'
                    ;
                    bottomRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    bottomRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                let leftRadialLines = new Array(this.wireYDensity + 1);

                for(let i = 0; i <= this.wireYDensity; i++) {
                    leftRadialLines[i] = document.createElement('div');
                    this.wireBackWall.appendChild(leftRadialLines[i]);
                    
                    leftRadialLines[i].style.background = this.wireColor;
                    leftRadialLines[i].style.position = 'absolute';
                    leftRadialLines[i].style.width = maxLineDimension + 'px';
                    leftRadialLines[i].style.height = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    leftRadialLines[i].style.left = -maxLineDimension + 'px';
                    leftRadialLines[i].style.bottom = 'calc('
                        + (i * 100 / (this.wireYDensity + 1)) + '% - ' 
                        + (this.wireLineThicknessPx / 2) + 'px)'
                    ;
                    leftRadialLines[i].style.transformOrigin = 'center right';
                    leftRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // just a bit more counting on one's fingers
                            ((this.wireYDensity + 1 - i) 
                            * (this.wireInstanceHeight 
                            - this.wireBackWallHeightPx)
                            - this.wireBackWallTop 
                            * (this.wireYDensity + 1))
                            / ((this.wireYDensity + 1)
                            * this.wireBackWallLeft))
                            * -180 / Math.PI)
                        + 'deg)'
                    ;
                    leftRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    leftRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                this.wireRadialLines.push(...topRadialLines);
                this.wireRadialLines.push(...rightRadialLines);
                this.wireRadialLines.push(...bottomRadialLines);
                this.wireRadialLines.push(...leftRadialLines)
            } else { // natural-perspective radial grid lines

                // all the points to radiate from
                let backWallGridBoundaryPoints = new Array();

                // top-left corner point
                backWallGridBoundaryPoints[0] = [this.wireBackWallLeft, this.wireBackWallTop];

                let accumulatedPoints = backWallGridBoundaryPoints.length;
                // top wall & top-right corner
                for(let i = 0; i <= this.wireXDensity; i++) {
                    backWallGridBoundaryPoints[i + accumulatedPoints] = 
                        [
                            backWallGridBoundaryPoints[i][0] 
                            + this.wireBackWallWidthPx 
                            / (this.wireXDensity + 1), 
                            backWallGridBoundaryPoints[i][1]
                        ]
                    ;
                }

                // right wall & bottom-right corner
                accumulatedPoints = backWallGridBoundaryPoints.length;
                for(let i = 0; i <= this.wireYDensity; i++) {
                    backWallGridBoundaryPoints[i + accumulatedPoints] = 
                        [
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][0], 
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][1] 
                            + this.wireBackWallHeightPx 
                            / (this.wireYDensity + 1)
                        ]
                    ;
                }

                // bottom wall & bottom-left corner
                accumulatedPoints = backWallGridBoundaryPoints.length;
                for(let i = 0; i <= this.wireXDensity; i++) {
                    backWallGridBoundaryPoints[i + accumulatedPoints] = 
                        [
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][0] 
                            - this.wireBackWallWidthPx 
                            / (this.wireXDensity + 1), 
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][1]
                        ]
                    ;
                }

                // left wall
                accumulatedPoints = backWallGridBoundaryPoints.length;
                for(let i = 0; i < this.wireYDensity; i++) {
                    backWallGridBoundaryPoints[i + accumulatedPoints] = 
                        [
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][0], 
                            backWallGridBoundaryPoints[i + accumulatedPoints - 1][1] 
                            - this.wireBackWallHeightPx 
                            / (this.wireYDensity + 1)
                        ]
                    ;
                
                } // all backwallgridboundarypoints are now known
                
                // these are the points right & left of the vanishing point
                let rightPoints = new Array();
                let leftPoints = new Array();
                for(let i = 0; i < backWallGridBoundaryPoints.length; i++) {
                    if(backWallGridBoundaryPoints[i][0] > this.vanishingPointLeftPx 
                        || backWallGridBoundaryPoints[i][0] == this.vanishingPointLeftPx)
                    {
                        rightPoints.push(backWallGridBoundaryPoints[i]);
                    } else {
                        leftPoints.push(backWallGridBoundaryPoints[i]);
                    }
                }

                // all right-side lines initially point right
                let rightRadialLines = new Array();
                for(let i = 0; i < rightPoints.length; i++) {
                    rightRadialLines[i] = document.createElement('div');
                    this.wireInstance.appendChild(rightRadialLines[i]);
                    
                    rightRadialLines[i].style.background = this.wireColor;
                    rightRadialLines[i].style.position = 'absolute';
                    rightRadialLines[i].style.width = maxLineDimension + 'px';
                    rightRadialLines[i].style.height = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    rightRadialLines[i].style.left = rightPoints[i][0] + (this.wireLineThicknessPx) + 'px';
                    rightRadialLines[i].style.top = rightPoints[i][1] 
                        + (this.wireLineThicknessPx / 2) 
                        + 'px'
                    ;
                    rightRadialLines[i].style.transformOrigin = 'center left';
                    rightRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // a very complex and advanced formula
                            (this.vanishingPointTopPx - rightPoints[i][1])
                            / (rightPoints[i][0] - this.vanishingPointLeftPx)) 
                            * -180 / Math.PI)
                        + 'deg)'
                    ;
                    rightRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    rightRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                // all left-side lines initially point left
                let leftRadialLines = new Array();
                for(let i = 0; i < leftPoints.length; i++) {
                    leftRadialLines[i] = document.createElement('div');
                    this.wireInstance.appendChild(leftRadialLines[i]);
                    
                    leftRadialLines[i].style.background = this.wireColor;
                    leftRadialLines[i].style.position = 'absolute';
                    leftRadialLines[i].style.width = maxLineDimension + 'px';
                    leftRadialLines[i].style.height = this.wireLineThicknessPx 
                        + 'px'
                    ;
                    leftRadialLines[i].style.left = (leftPoints[i][0] - maxLineDimension) 
                        + (this.wireLineThicknessPx) + 'px';
                    leftRadialLines[i].style.top = leftPoints[i][1] 
                        + (this.wireLineThicknessPx / 2) + 'px'
                    ;
                    leftRadialLines[i].style.transformOrigin = 'center right';
                    leftRadialLines[i].style.transform = 'rotate('
                        + (Math.atan( // arcane mathematical symbols
                        (this.vanishingPointTopPx - leftPoints[i][1])
                        / (leftPoints[i][0] - this.vanishingPointLeftPx))
                            * -180 / Math.PI)
                        + 'deg)'
                    ;
                    leftRadialLines[i].style.boxShadow = '0 0 ' 
                        + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                        + this.wireGlowColor
                    ;

                    leftRadialLines[i].className = 
                        'wireframe-gridlines-radial-line'
                    ;
                }

                this.wireRadialLines.push(...rightRadialLines);
                this.wireRadialLines.push(...leftRadialLines)
            }
        }
    }

    /**
     * refreshes only the horizontal & vertical lines on the back wall
     */
    refreshBackWallLines(effectIsRefreshing) {
        if(effectIsRefreshing !== true) { // will have already been done if whole effect is refreshing
            if(this.wireHorizontalLines[0])
            for(const line of this.wireHorizontalLines) { 
                line.remove();
            }
            this.wireHorizontalLines.length = 0;

            if(this.wireVerticalLines[0])
            for(const line of this.wireVerticalLines) { 
                line.remove();
            }
            this.wireVerticalLines.length = 0;
        }

        this.refreshVerticalLines(true);
        this.refreshHorizontalLines(true);
    }

    /**
     * refreshes only the vertical lines on the back wall
     */
    refreshVerticalLines(effectIsRefreshing) {
        if(effectIsRefreshing !== true) { // will have already been done if whole effect is refreshing
            if(this.wireVerticalLines[0])
            for(const line of this.wireVerticalLines) { 
                line.remove();
            }
            this.wireVerticalLines.length = 0;
        }
        
        // vertical grid lines
        if(this.wireBackWallGridLinesOn) {

            for(let i = 0; i < this.wireXDensity; i++) {
                this.wireVerticalLines[i] = document.createElement('div');
                this.wireBackWall.appendChild(this.wireVerticalLines[i]);

                this.wireVerticalLines[i].style.background = this.wireColor;
                this.wireVerticalLines[i].style.position = 'absolute';
                this.wireVerticalLines[i].style.left = 'calc(' 
                    + ((i + 1) * 100 / (this.wireXDensity + 1)) + '% - ' 
                    + (this.wireLineThicknessPx / 2) + 'px)'
                ;
                this.wireVerticalLines[i].style.top = 0;
                this.wireVerticalLines[i].style.width = this.wireLineThicknessPx 
                    + 'px'
                ;
                this.wireVerticalLines[i].style.height = '100%';
                this.wireVerticalLines[i].style.boxShadow = '0 0 ' 
                    + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                    + this.wireGlowColor
                ;

                this.wireVerticalLines[i].className =
                    'wireframe-gridlines-vertical-line wireframe-gridlines-back-wall-gridline'
                ;
            }
        }
    }

    /**
     * refreshes only the horizontal lines on the back wall
     */
    refreshHorizontalLines(effectIsRefreshing) {
        if(effectIsRefreshing !== true) { // will have already been done if whole effect is refreshing
            if(this.wireHorizontalLines[0])
            for(const line of this.wireHorizontalLines) { 
                line.remove();
            }
            this.wireHorizontalLines.length = 0;
        }

        // horizontal & vertical grid lines
        if(this.wireBackWallGridLinesOn) {
            for(let i = 0; i < this.wireYDensity; i++) {
                this.wireHorizontalLines[i] = document.createElement('div');
                this.wireBackWall.appendChild(this.wireHorizontalLines[i]);

                this.wireHorizontalLines[i].style.background = this.wireColor;
                this.wireHorizontalLines[i].style.position = 'absolute';
                this.wireHorizontalLines[i].style.left = 0;
                this.wireHorizontalLines[i].style.top = 'calc(' 
                    + ((i + 1) * 100 / (this.wireYDensity + 1)) + '% - ' 
                    + (this.wireLineThicknessPx / 2) + 'px)'
                ;
                this.wireHorizontalLines[i].style.width = '100%';
                this.wireHorizontalLines[i].style.height = this.wireLineThicknessPx 
                    + 'px'
                ;
                this.wireHorizontalLines[i].style.boxShadow = '0 0 ' 
                    + this.wireGlowBlur + 'px ' + this.wireGlowSpread + 'px ' 
                    + this.wireGlowColor
                ;

                this.wireHorizontalLines[i].className = 
                    'wireframe-gridlines-horizontal-line wireframe-gridlines-back-wall-gridline'
                ;
            }
        }
    }

    /**
     * removes this instance of the effect from the page before clearing 
     * this config's reference to it 
     * 
     * this config may be reused to make another instance of the effect
     */
    shutdown() {
        this.kill();
    }

    /**
     * removes this instance of the effect from the page before clearing 
     * this config's reference to it 
     * 
     * this config may be reused to make another instance of the effect
     */
    kill() {
        if(this.wireInstance)
            this.wireInstance.remove();
        
        // an empty instance must still exist in order to set new config values
        this.wireInstance = document.createElement('div');
            // this.wireParent.appendChild(this.wireInstance);
            this.wireInstance.id = this.wireId;
            this.wireInstance.className = 'wireframe-gridlines';
            this.wireInstance.style.position = this.wirePositionType;
            this.wireInstance.style.bottom = 0;
            this.wireInstance.style.left = 0;
            this.wireInstance.style.background = 'transparent';
            this.wireInstance.style.width = this.wireViewWidth 
                + this.wireViewUnits
            ;
            this.wireInstance.style.height = this.wireViewHeight 
                + this.wireViewUnits
            ;
            this.wireInstance.style.overflow = this.wireOverflow;
            this.wireInstance.style.pointerEvents = 
                this.wirePointerEventsProperty
            ;
            this.wireInstance.style.zIndex = this.wireZIndex
        ;

        this.wireIsOn = true;
    }
}

class WireframeConcentricGridline {
    constructor(element, 
        gridlineLeftPx, gridlineTopPx, gridlineWidthPx, gridlineHeightPx, 
        terminalLeftPx, terminalTopPx, terminalWidthPx, terminalHeightPx, 
        backWallLeftPx, backWallTopPx, backWallWidthPx, backWallHeightPx, 
        instanceWidthPx, instanceHeightPx, 
        vanishingPointLeftPx, vanishingPointTopPx,
        forcedPerspective
    )
    {
        this.divElement = element;
        
        this.left = gridlineLeftPx;
        this.top = gridlineTopPx;
        this.width = gridlineWidthPx;
        this.height = gridlineHeightPx;

        this.lT = terminalLeftPx;
        this.tT = terminalTopPx;
        this.wT = terminalWidthPx;
        this.hT = terminalHeightPx;

        this.l0 = backWallLeftPx;
        this.t0 = backWallTopPx;
        this.w0 = backWallWidthPx;
        this.h0 = backWallHeightPx;

        this.W = instanceWidthPx;
        this.H = instanceHeightPx;

        this.VL = vanishingPointLeftPx;
        this.VT = vanishingPointTopPx;

        this.forcedPerspective = forcedPerspective;
    }

    get element() { return this.divElement; }

    updateTerminal(terminalLeftPx, terminalTopPx, terminalWidthPx, terminalHeightPx) {
        this.lT = terminalLeftPx;
        this.tT = terminalTopPx;
        this.wT = terminalWidthPx;
        this.hT = terminalHeightPx;
    }

    updateBackWall(backWallLeftPx, backWallTopPx, backWallWidthPx, backWallHeightPx) {
        this.l0 = backWallLeftPx;
        this.t0 = backWallTopPx;
        this.w0 = backWallWidthPx;
        this.h0 = backWallHeightPx;
    }

    updateInstance(instanceWidthPx, instanceHeightPx) {
        this.W = instanceWidthPx;
        this.H = instanceHeightPx;
    }

    updateVanishingPoint(vanishingPointLeftPx, vanishingPointTopPx) {
        this.VL = vanishingPointLeftPx;
        this.VT = vanishingPointTopPx;
    }

    updateForcedPerspective(forcedPerspective) {
        this.forcedPerspective = forcedPerspective;
    }

    // vanishing point dimensions only used for natural perspective
    zFlow(speed) {
        if(!(speed < Infinity && speed > -Infinity)) return; // can happen at framerate 0

        if(this.forcedPerspective) {
            speed /= 10;

            let dividend = this.t0 + this.l0;
            let speedSquared = speed;

            if(speed > 0) {
                this.left -= (this.l0 * speedSquared) / dividend;
                this.top -= (this.t0 * speedSquared) / dividend;
                this.width += speedSquared * (this.W - this.w0) / dividend;
                this.height += speedSquared * (this.H - this.h0) / dividend;

                if(this.left * this.l0 < 0) {
                    this.left = this.l0;
                    this.top = this.t0;
                    this.width = this.w0;
                    this.height = this.h0;
                }
            } else {
                this.left -= (this.l0 * speedSquared) / dividend;
                this.top -= (this.t0 * speedSquared) / dividend;
                this.width += speedSquared * (this.W - this.w0) / dividend;
                this.height += speedSquared * (this.H - this.h0) / dividend;

                if(Math.abs(this.left) > Math.abs(this.l0)) {
                    this.left = 0;
                    this.top = 0;
                    this.width = this.W;
                    this.height = this.H;
                }
            }
        } else {
            // the next frame will act as if it's the next concentric grid 
            // line for a density of 99, adjusted by the speed factor
            let densityAdjustedWidth = this.width / 10000 * speed; // sign-changing the speed sign-changes this, so do mind

            let dividend = this.W - densityAdjustedWidth - this.VL;

            if(speed < 0) {
                let [lastLeft, lastTop] = [this.left, this.top];
                
                this.left += densityAdjustedWidth * (this.left - this.VL) / dividend;
                this.top += densityAdjustedWidth * (this.top - this.VT) / dividend;
                this.width += densityAdjustedWidth * this.width / dividend;
                this.height += densityAdjustedWidth * this.height / dividend;

                if((Math.abs(this.left) > Math.abs(this.lT) && this.left * this.lT > 0
                    || this.lT == 0 && this.left * lastLeft < 0) 
                    && (Math.abs(this.top) > Math.abs(this.tT) && this.top * this.tT > 0
                    || this.tT == 0 && this.top * lastTop < 0) 
                    || Math.abs(this.width) > Math.abs(this.wT) 
                    || Math.abs(this.height) > Math.abs(this.hT) 
                    || this.width < this.w0
                    || this.height < this.h0) {
                    this.left = this.lT;
                    this.top = this.tT;
                    this.width = this.wT;
                    this.height = this.hT;
                }
            } else {
                let [lastLeft, lastTop] = [this.left, this.top];

                this.left += densityAdjustedWidth * (this.left - this.VL) / dividend;
                this.top += densityAdjustedWidth * (this.top - this.VT) / dividend;
                this.width += densityAdjustedWidth * this.width / dividend;
                this.height += densityAdjustedWidth * this.height / dividend;

                if((Math.abs(this.left) > Math.abs(this.lT) && this.left * this.lT > 0
                    || this.lT == 0 && this.left * lastLeft < 0) 
                    && (Math.abs(this.top) > Math.abs(this.tT) && this.top * this.tT > 0
                    || this.tT == 0 && this.top * lastTop < 0) 
                    || Math.abs(this.width) > Math.abs(this.wT) 
                    || Math.abs(this.height) > Math.abs(this.hT) 
                    || this.width < this.w0
                    || this.height < this.h0) {
                    this.left = this.l0;
                    this.top = this.t0;
                    this.width = this.w0;
                    this.height = this.h0;
                }
            }
        }

        this.element.style.left = this.left + 'px';
        this.element.style.top = this.top + 'px';
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
    }
}

let wireframeGridlines = function(
        parent, version, id, positionType, viewWidth, viewHeight, viewUnits, overflow, 
        color, lineThicknessPx, xDensity, yDensity, zDensity, 
        backWallPositionFromLeft, backWallPositionFromTop, 
        backWallPositionUnits, backWallWidth, backWallHeight, 
        backWallSizeUnits, backWallGridLinesOn, radialGridLinesOn, 
        concentricGridLinesOn, glowColor, glowBlur, glowSpread, 
        zFlowOn, zFlowSpeed, zFlowFramerate, 
        forcedPerspectiveOn, naturalVanishingPointOn, 
        vanishingPointPositionFromLeft, vanishingPointPositionFromTop, 
        vanishingPointPositionUnits, pointerEventsProperty, zIndex
    ) {

    if(!version)
        version = 'unspecified'
    ;

    if(typeof parent == 'string') parent = document.getElementById(parent);

    if(parent instanceof WireframeGridlinesConfig) {
        config = parent.clone();
    } else {
        config = new WireframeGridlinesConfig(
            parent, id, positionType, viewWidth, viewHeight, viewUnits, overflow, 
            color, lineThicknessPx, xDensity, yDensity, zDensity, 
            backWallPositionFromLeft, backWallPositionFromTop, 
            backWallPositionUnits, backWallWidth, backWallHeight, 
            backWallSizeUnits, backWallGridLinesOn, radialGridLinesOn, 
            concentricGridLinesOn, glowColor, glowBlur, glowSpread, 
            zFlowOn, zFlowSpeed, zFlowFramerate, 
            forcedPerspectiveOn, naturalVanishingPointOn, 
            vanishingPointPositionFromLeft, vanishingPointPositionFromTop, 
            vanishingPointPositionUnits, pointerEventsProperty, zIndex
        );
    }

    return config;
}