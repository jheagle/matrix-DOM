# matrix-DOM

Use JSON-DOM to generate grids that can be rendered in the DOM.

## Modules

<dl>
<dt><a href="#module_matrixDom">matrixDom</a></dt>
<dd><p>All of the Matrix DOM functions and objects necessary to create DOM Matrices</p>
</dd>
<dt><a href="#module_matrixObjects">matrixObjects</a></dt>
<dd><p>Core Matrix objects for representing DOM grid in JSON.</p>
</dd>
<dt><a href="#module_matrixFunctions">matrixFunctions</a></dt>
<dd><p>All of the siFunciona matrix functions for working with a grid of points.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#tile">tile()</a> ⇒ <code><a href="#module_matrixObjects..MatrixTile">MatrixTile</a></code></dt>
<dd><p>A default tile in the <a href="#module_matrixObjects..Matrix">Matrix</a></p>
</dd>
<dt><a href="#square">square([x], [y], [z], [matrixProps], size)</a> ⇒ <code><a href="#module_matrixObjects..Matrix">Matrix</a></code></dt>
<dd><p>Return a single layer matrix where x and y are equal</p>
</dd>
<dt><a href="#point">point(x, y, [z])</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Store the point data for an x, y, z <a href="#module_matrixObjects..Matrix">Matrix</a>.</p>
</dd>
<dt><a href="#matrix">matrix(x, y, z, matrixProps)</a> ⇒ <code><a href="#module_matrixObjects..Matrix">Matrix</a></code></dt>
<dd><p>Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well</p>
</dd>
<dt><a href="#cube">cube([x], [y], [z], [matrixProps], size)</a> ⇒ <code><a href="#module_matrixObjects..Matrix">Matrix</a></code></dt>
<dd><p>Return a matrix where x, y, and z are equal</p>
</dd>
<dt><a href="#testPointsBetween">testPointsBetween(start, end, matrix, func, [inclusive])</a> ⇒ <code>Object.&lt;string, Array.&lt;module:matrixObjects~Point&gt;&gt;</code></dt>
<dd><p>Given a start and end point, test the points between with the provided function. Return the points as part of true
and / or false properties based on the test.</p>
</dd>
<dt><a href="#randomStart">randomStart(length, dir, [lengthLimits])</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Generate a random starting point for a line with the provided length and direction.</p>
</dd>
<dt><a href="#randDirection">randDirection([useCoordinates])</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Get random direction point</p>
</dd>
<dt><a href="#pointsToDirection">pointsToDirection(start, end)</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Retrieve a directional coordinate value based on two provided points
(directions consist of two zero coordinates and a single coordinate of 1 / -1)</p>
</dd>
<dt><a href="#pointToDirection">pointToDirection(pnt)</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.</p>
</dd>
<dt><a href="#pointDifference">pointDifference(start, end)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Based on provided point and another point, get a point with the difference between each axis</p>
</dd>
<dt><a href="#pointAndCoordinateToDirection">pointAndCoordinateToDirection(pnt, highestCoordinate)</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Given a point and the value of the highest coordinate select the corresponding axis which will be the direction
(-1 or 1) to and set the other axis to 0.</p>
</dd>
<dt><a href="#nextCell">nextCell(pnt, dir)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Based on provided point and point direction generate next point.</p>
</dd>
<dt><a href="#lineEndPoint">lineEndPoint(start, length, dir)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Given a start point, line length, and a direction, generate the end point of the line.</p>
</dd>
<dt><a href="#getPointsLines">getPointsLines(lines)</a> ⇒ <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code></dt>
<dd><p>Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
array of all points captured for each line segment</p>
</dd>
<dt><a href="#getPointsLine">getPointsLine(start, end, [line])</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Having provided two points, return an array of transition points connecting &#39;start&#39; and &#39;end&#39;. Return array
includes &#39;start&#39; (line[0]) and &#39;end&#39; (line[line.length-1])</p>
</dd>
<dt><a href="#getPointFromElement">getPointFromElement(elem)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Retrieve the point associated with the provided element.</p>
</dd>
<dt><a href="#getHighestAbsoluteCoordinate">getHighestAbsoluteCoordinate(pnt)</a> ⇒ <code><a href="#module_matrixObjects..coordinate">coordinate</a></code></dt>
<dd><p>Return the first coordinate number with the highest absolute value.</p>
</dd>
<dt><a href="#getFirstAxisOfCoordinate">getFirstAxisOfCoordinate(pnt, coordinate)</a> ⇒ <code>false</code> | <code><a href="#module_matrixObjects..axis">axis</a></code></dt>
<dd><p>Having provided a coordinate number, find all corresponding axis, return the first match.</p>
</dd>
<dt><a href="#getDomItemFromPoint">getDomItemFromPoint(pnt, matrix)</a> ⇒ <code>false</code> | <code>module:domObjects~DomItem</code></dt>
<dd><p>Retrieve the DomItem associated with the provided point</p>
</dd>
<dt><a href="#getDomItemFromElement">getDomItemFromElement(elem, matrix)</a> ⇒ <code>false</code> | <code>module:domObjects~DomItem</code></dt>
<dd><p>Retrieve the DomItem associated with the provided element in the matrix</p>
</dd>
<dt><a href="#getAxisLengths">getAxisLengths(matrix)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Return point-like object with all of the axis lengths.</p>
</dd>
<dt><a href="#getAllPoints">getAllPoints(matrix, [allPoints])</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return an array of all the points in the matrix</p>
</dd>
<dt><a href="#checkValidPoint">checkValidPoint(pnt, matrix)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if the provided point exists in the matrix.</p>
</dd>
<dt><a href="#checkInBetween">checkInBetween(...args)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given two points, check the cells between using specified function.
When inclusive is set to true the provided start and end points will also be tested</p>
</dd>
<dt><a href="#bindPointData">bindPointData(item, pnt)</a> ⇒ <code><a href="#module_matrixObjects..MatrixColumn">MatrixColumn</a></code> | <code><a href="#module_matrixObjects..MatrixRow">MatrixRow</a></code></dt>
<dd><p>Generate point data for each item in the matrix
WARNING: This is a recursive function.</p>
</dd>
<dt><a href="#areEqualPoints">areEqualPoints(p1, p2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given two points, compare the x, y, and z of each to see if they are the same</p>
</dd>
<dt><a href="#adjacentPoints">adjacentPoints(pnt, matrix)</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return all valid points surrounding a provided point</p>
</dd>
<dt><a href="#adjacentEdgePoints">adjacentEdgePoints(pnt, matrix)</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return all points which touch on edges (not diagonal)</p>
</dd>
</dl>

<a name="module_matrixDom"></a>

## matrixDom
All of the Matrix DOM functions and objects necessary to create DOM Matrices

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [matrixDom](#module_matrixDom)
    * [~root](#module_matrixDom..root)
    * [~previousMatrixDom](#module_matrixDom..previousMatrixDom) : <code>module</code> \| <code>\*</code>
    * [~noConflict()](#module_matrixDom..noConflict) ⇒ [<code>matrixDom</code>](#module_matrixDom..matrixDom) \| [<code>matrixFunctions</code>](#module_matrixFunctions) \| [<code>matrixObjects</code>](#module_matrixObjects)
    * [~matrixDom](#module_matrixDom..matrixDom) : [<code>matrixDom</code>](#module_matrixDom)

<a name="module_matrixDom..root"></a>

### matrixDom~root
Store a reference to this scope which will be Window if rendered via browser

**Kind**: inner constant of [<code>matrixDom</code>](#module_matrixDom)  
<a name="module_matrixDom..previousMatrixDom"></a>

### matrixDom~previousMatrixDom : <code>module</code> \| <code>\*</code>
Store reference to any pre-existing module of the same name

**Kind**: inner constant of [<code>matrixDom</code>](#module_matrixDom)  
<a name="module_matrixDom..noConflict"></a>

### matrixDom~noConflict() ⇒ [<code>matrixDom</code>](#module_matrixDom..matrixDom) \| [<code>matrixFunctions</code>](#module_matrixFunctions) \| [<code>matrixObjects</code>](#module_matrixObjects)
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>matrixDom</code>](#module_matrixDom)  
<a name="module_matrixDom..matrixDom"></a>

### matrixDom~matrixDom : [<code>matrixDom</code>](#module_matrixDom)
All methods exported from this module are encapsulated within jsonDom.

**Kind**: inner typedef of [<code>matrixDom</code>](#module_matrixDom)  
<a name="module_matrixObjects"></a>

## matrixObjects
Core Matrix objects for representing DOM grid in JSON.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [matrixObjects](#module_matrixObjects)
    * [~MatrixTile](#module_matrixObjects..MatrixTile) : <code>Object.&lt;string, module:matrixObjects~Point&gt;</code>
    * [~axis](#module_matrixObjects..axis) : <code>string</code>
    * [~coordinate](#module_matrixObjects..coordinate) : <code>number</code>
    * [~Point](#module_matrixObjects..Point) : <code>Object.&lt;module:matrixObjects~axis, module:matrixObjects~coordinate&gt;</code>
    * [~Direction](#module_matrixObjects..Direction) : [<code>Point</code>](#module_matrixObjects..Point)
    * [~MatrixColumn](#module_matrixObjects..MatrixColumn) : <code>module:domObjects~DomItem</code> \| [<code>MatrixTile</code>](#module_matrixObjects..MatrixTile)
    * [~MatrixRow](#module_matrixObjects..MatrixRow) : <code>module:domObjects~DomItem</code>
    * [~MatrixLayer](#module_matrixObjects..MatrixLayer) : <code>module:domObjects~DomItem</code>
    * [~Matrix](#module_matrixObjects..Matrix) : <code>module:domObjects~DomItem</code>

<a name="module_matrixObjects..MatrixTile"></a>

### matrixObjects~MatrixTile : <code>Object.&lt;string, module:matrixObjects~Point&gt;</code>
MatrixTile is an Object which stores a reference a [Point](Point) and can be populated with additionally associatedfields.

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#module_matrixObjects..Point) | a reference to its location in a [Matrix](#module_matrixObjects..Matrix) |
| axis | [<code>axis</code>](#module_matrixObjects..axis) | The axis will be 'x' |

<a name="module_matrixObjects..axis"></a>

### matrixObjects~axis : <code>string</code>
A string representing an axis: x, y, z

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
<a name="module_matrixObjects..coordinate"></a>

### matrixObjects~coordinate : <code>number</code>
A number representing a coordinate in a [Matrix](#module_matrixObjects..Matrix)

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
<a name="module_matrixObjects..Point"></a>

### matrixObjects~Point : <code>Object.&lt;module:matrixObjects~axis, module:matrixObjects~coordinate&gt;</code>
Point stores a location in a [Matrix](#module_matrixObjects..Matrix) defined by three key-value pairs([axis](#module_matrixObjects..axis)=>[coordinate](#module_matrixObjects..coordinate))

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The X-coordinate of a Point |
| y | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The Y-coordinate of a Point |
| z | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The Z-coordinate of a Point |

<a name="module_matrixObjects..Direction"></a>

### matrixObjects~Direction : [<code>Point</code>](#module_matrixObjects..Point)
Point stores a location in a [Matrix](#module_matrixObjects..Matrix) defined by three key-value pairs

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The X-coordinate must be either -1, 0, or 1 |
| y | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The Y-coordinate must be either -1, 0, or 1 |
| z | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The Z-coordinate must be either -1, 0, or 1 |

<a name="module_matrixObjects..MatrixColumn"></a>

### matrixObjects~MatrixColumn : <code>module:domObjects~DomItem</code> \| [<code>MatrixTile</code>](#module_matrixObjects..MatrixTile)
MatrixColumn is a DomItem which represents the x axis and also stores [MatrixTile](#module_matrixObjects..MatrixTile)

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
<a name="module_matrixObjects..MatrixRow"></a>

### matrixObjects~MatrixRow : <code>module:domObjects~DomItem</code>
MatrixRow is the parent of a group of [MatrixTile](#module_matrixObjects..MatrixTile)

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| axis | [<code>axis</code>](#module_matrixObjects..axis) | The axis will be 'y' |
| children | [<code>Array.&lt;MatrixColumn&gt;</code>](#module_matrixObjects..MatrixColumn) | all of the MatrixTile items as part of this MatrixRow |

<a name="module_matrixObjects..MatrixLayer"></a>

### matrixObjects~MatrixLayer : <code>module:domObjects~DomItem</code>
MatrixLayer is the parent of a group of [MatrixTile](#module_matrixObjects..MatrixTile)

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| axis | [<code>axis</code>](#module_matrixObjects..axis) | The axis will be 'y' |
| children | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrixObjects..MatrixRow) | all of the MatrixRow items as part of this MatrixLayer |

<a name="module_matrixObjects..Matrix"></a>

### matrixObjects~Matrix : <code>module:domObjects~DomItem</code>
Matrix is a multi-level [module:domObjects~DomItem](module:domObjects~DomItem) which is used to visually represent amathematical grid / matrix.The matrix consists of four DomItem levels, at the top tier is the Matrix container with class matrix.The second tier represents the z axis (with property axis='z') and has the class layer.The third tier represents the y axis (with property axis='y') and has the class row.The fourth (final) tier represents the x axis (with property axis='x') and has the class column.The [MatrixTile](#module_matrixObjects..MatrixTile) is attached on the x axis tier.The number of children at each level is defined by the size of the matrix, the end result is a multidimensionalarray.

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Extends**: <code>module:domObjects~DomItem</code>  
<a name="module_matrixFunctions"></a>

## matrixFunctions
All of the siFunciona matrix functions for working with a grid of points.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  
<a name="module_matrixFunctions..testPointStatus"></a>

### matrixFunctions~testPointStatus ⇒ <code>boolean</code>
Function that produces a property of the new Object, taking three arguments

**Kind**: inner typedef of [<code>matrixFunctions</code>](#module_matrixFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>MatrixColumn</code>](#module_matrixObjects..MatrixColumn) \| <code>Object</code> | A point which may have some status. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) \| <code>Object</code> | A matrix of points to find the point within. |

<a name="tile"></a>

## tile() ⇒ [<code>MatrixTile</code>](#module_matrixObjects..MatrixTile)
A default tile in the [Matrix](#module_matrixObjects..Matrix)

**Kind**: global function  
<a name="square"></a>

## square([x], [y], [z], [matrixProps], size) ⇒ [<code>Matrix</code>](#module_matrixObjects..Matrix)
Return a single layer matrix where x and y are equal

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrixObjects..MatrixTile) | <code>[]</code> | All the data to be presented as part of the specified point, requires MatrixTile base |
| [y] | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrixObjects..MatrixRow) | <code>[]</code> | Additional data to append to the MatrixRow |
| [z] | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrixObjects..MatrixLayer) | <code>[]</code> | Additional data to append to the MatrixLayer |
| [matrixProps] | [<code>Array.&lt;Matrix&gt;</code>](#module_matrixObjects..Matrix) | <code>[]</code> | Additional data to append to the Matrix |
| size | <code>number</code> |  | Used to define height and width as equal values (depth is set to 1) |

<a name="point"></a>

## point(x, y, [z]) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Store the point data for an x, y, z [Matrix](#module_matrixObjects..Matrix).

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrixObjects..coordinate) |  | The numeric value for X-coordinate |
| y | [<code>coordinate</code>](#module_matrixObjects..coordinate) |  | The numeric value for Y-coordinate |
| [z] | [<code>coordinate</code>](#module_matrixObjects..coordinate) | <code>0</code> | The numeric value for Z-coordinate (default to 0 for 2D [Matrix](#module_matrixObjects..Matrix)) |

<a name="matrix"></a>

## matrix(x, y, z, matrixProps) ⇒ [<code>Matrix</code>](#module_matrixObjects..Matrix)
Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Object</code> | Properties and a coordinate defining the width of the matrix. |
| y | <code>Object</code> | Properties and a coordinate defining the height of the matrix. |
| z | <code>Object</code> | Properties and a coordinate defining the depth of the matrix. |
| matrixProps | [<code>Array.&lt;Matrix&gt;</code>](#module_matrixObjects..Matrix) | Properties to be added to the matrix |

<a name="cube"></a>

## cube([x], [y], [z], [matrixProps], size) ⇒ [<code>Matrix</code>](#module_matrixObjects..Matrix)
Return a matrix where x, y, and z are equal

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrixObjects..MatrixTile) | <code>[]</code> | All the data to be presented as part of the specified point, requires MatrixTile base |
| [y] | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrixObjects..MatrixRow) | <code>[]</code> | Additional data to append to the MatrixRow |
| [z] | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrixObjects..MatrixLayer) | <code>[]</code> | Additional data to append to the MatrixLayer |
| [matrixProps] | [<code>Array.&lt;Matrix&gt;</code>](#module_matrixObjects..Matrix) | <code>[]</code> | Additional data to append to the Matrix |
| size | <code>number</code> |  | Used to define height, width, and depth as equal values |

<a name="testPointsBetween"></a>

## testPointsBetween(start, end, matrix, func, [inclusive]) ⇒ <code>Object.&lt;string, Array.&lt;module:matrixObjects~Point&gt;&gt;</code>
Given a start and end point, test the points between with the provided function. Return the points as part of trueand / or false properties based on the test.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) |  | The beginning point to check. |
| end | [<code>Point</code>](#module_matrixObjects..Point) |  | The terminating point to check between. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) |  | The grid of points all the points can exist on. |
| func | [<code>testPointStatus</code>](#module_matrixFunctions..testPointStatus) |  | The test function which will return true or false. |
| [inclusive] | <code>boolean</code> | <code>true</code> | Choose whether to include or exclude the start and end points in the results. |

<a name="randomStart"></a>

## randomStart(length, dir, [lengthLimits]) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Generate a random starting point for a line with the provided length and direction.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| length | <code>number</code> |  | The intended length the resulting line. |
| dir | [<code>Direction</code>](#module_matrixObjects..Direction) |  | The direction the line will extend towards. |
| [lengthLimits] | [<code>Point</code>](#module_matrixObjects..Point) | <code>{x: 10, y: 10, z: 10}</code> | The maximum grid size. |

<a name="randDirection"></a>

## randDirection([useCoordinates]) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Get random direction point

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [useCoordinates] | [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point) | <code>[]</code> | An array of possible directions. |

<a name="pointsToDirection"></a>

## pointsToDirection(start, end) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Retrieve a directional coordinate value based on two provided points(directions consist of two zero coordinates and a single coordinate of 1 / -1)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) | The first point to assess. |
| end | [<code>Point</code>](#module_matrixObjects..Point) | The other point to assess. |

<a name="pointToDirection"></a>

## pointToDirection(pnt) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The point to be converted to a direction. |

<a name="pointDifference"></a>

## pointDifference(start, end) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Based on provided point and another point, get a point with the difference between each axis

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) | The first point to compare |
| end | [<code>Point</code>](#module_matrixObjects..Point) | The other point to be compared |

<a name="pointAndCoordinateToDirection"></a>

## pointAndCoordinateToDirection(pnt, highestCoordinate) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Given a point and the value of the highest coordinate select the corresponding axis which will be the direction(-1 or 1) to and set the other axis to 0.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The which will be converted to a direction. |
| highestCoordinate | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The highest coordinate provided by the point. |

<a name="nextCell"></a>

## nextCell(pnt, dir) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Based on provided point and point direction generate next point.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | Provide the current / initial point |
| dir | [<code>Direction</code>](#module_matrixObjects..Direction) | Provide the direction to be applied to find the next point |

<a name="lineEndPoint"></a>

## lineEndPoint(start, length, dir) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Given a start point, line length, and a direction, generate the end point of the line.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) | The selected starting point. |
| length | <code>number</code> | The total length of the line. |
| dir | [<code>Direction</code>](#module_matrixObjects..Direction) | The direction of the line. |

<a name="getPointsLines"></a>

## getPointsLines(lines) ⇒ <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code>
Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns anarray of all points captured for each line segment

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| lines | <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code> | An array of lines only containing start and end. |

<a name="getPointsLine"></a>

## getPointsLine(start, end, [line]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Having provided two points, return an array of transition points connecting 'start' and 'end'. Return arrayincludes 'start' (line[0]) and 'end' (line[line.length-1])

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) |  | The starting location of the line. |
| end | [<code>Point</code>](#module_matrixObjects..Point) |  | The final line destination. |
| [line] | [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point) | <code>[]</code> | The resulting line to connect start and end. |

<a name="getPointFromElement"></a>

## getPointFromElement(elem) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Retrieve the point associated with the provided element.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Node</code> \| <code>HTMLElement</code> | Provide an element associated with a point. |

<a name="getHighestAbsoluteCoordinate"></a>

## getHighestAbsoluteCoordinate(pnt) ⇒ [<code>coordinate</code>](#module_matrixObjects..coordinate)
Return the first coordinate number with the highest absolute value.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | A Point to be assessed. |

<a name="getFirstAxisOfCoordinate"></a>

## getFirstAxisOfCoordinate(pnt, coordinate) ⇒ <code>false</code> \| [<code>axis</code>](#module_matrixObjects..axis)
Having provided a coordinate number, find all corresponding axis, return the first match.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The Point containing a matching coordinate. |
| coordinate | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The coordinate to search for. |

<a name="getDomItemFromPoint"></a>

## getDomItemFromPoint(pnt, matrix) ⇒ <code>false</code> \| <code>module:domObjects~DomItem</code>
Retrieve the DomItem associated with the provided point

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | A point corresponding to a DomItem. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix containing the point. |

<a name="getDomItemFromElement"></a>

## getDomItemFromElement(elem, matrix) ⇒ <code>false</code> \| <code>module:domObjects~DomItem</code>
Retrieve the DomItem associated with the provided element in the matrix

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Node</code> \| <code>HTMLElement</code> | Provide an element having an associated DomItem. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix potentially containing the DomItem with Point. |

<a name="getAxisLengths"></a>

## getAxisLengths(matrix) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Return point-like object with all of the axis lengths.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix to get the dimensions of. |

<a name="getAllPoints"></a>

## getAllPoints(matrix, [allPoints]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Return an array of all the points in the matrix

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) \| [<code>MatrixColumn</code>](#module_matrixObjects..MatrixColumn) |  | The matrix to retrieve points from. |
| [allPoints] | [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point) | <code>[]</code> | The array of points to be returned |

<a name="checkValidPoint"></a>

## checkValidPoint(pnt, matrix) ⇒ <code>boolean</code>
Test if the provided point exists in the matrix.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | Provide a point to validate. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix that contains valid points. |

<a name="checkInBetween"></a>

## checkInBetween(...args) ⇒ <code>boolean</code>
Given two points, check the cells between using specified function.When inclusive is set to true the provided start and end points will also be tested

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>\*</code> | These args match the parameter list for [module:matrixFunctions~testPointsBetween](module:matrixFunctions~testPointsBetween) |

<a name="bindPointData"></a>

## bindPointData(item, pnt) ⇒ [<code>MatrixColumn</code>](#module_matrixObjects..MatrixColumn) \| [<code>MatrixRow</code>](#module_matrixObjects..MatrixRow)
Generate point data for each item in the matrixWARNING: This is a recursive function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>MatrixColumn</code>](#module_matrixObjects..MatrixColumn) \| [<code>MatrixRow</code>](#module_matrixObjects..MatrixRow) | A special DomItem which is either a layer, row, or column in a matrix. |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | A point to be added to a specific Matrix Column |

<a name="areEqualPoints"></a>

## areEqualPoints(p1, p2) ⇒ <code>boolean</code>
Given two points, compare the x, y, and z of each to see if they are the same

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Point</code>](#module_matrixObjects..Point) | The first point to compare |
| p2 | [<code>Point</code>](#module_matrixObjects..Point) | The other point to be compared |

<a name="adjacentPoints"></a>

## adjacentPoints(pnt, matrix) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Return all valid points surrounding a provided point

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The point we want to find adjacent points for. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix having the point. |

<a name="adjacentEdgePoints"></a>

## adjacentEdgePoints(pnt, matrix) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Return all points which touch on edges (not diagonal)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The point we want to find adjacent points for. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix having the point. |

