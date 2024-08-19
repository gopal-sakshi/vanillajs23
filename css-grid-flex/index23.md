# CSS GRID
- 2D layout with rows & columns
- no need to use floats, positioning
- define a container element with
    <display:grid>
    this HTML element becomes ===> `grid-container`
- place child-elements with <grid-column> <grid-row>
- All direct children of the `grid container` automatically become grid items.

<!-- ---------------------------------------------------------------------------- -->


# All CSS Grid Properties


column-gap	            Specifies the gap between the columns
gap	                    A shorthand property for the <row-gap> and the <column-gap> properties
row-gap	                Specifies the gap between the grid rows
grid-gap	            A shorthand property for the <grid-row-gap> and <grid-column-gap> properties
grid-column-gap	        Specifies the size of the gap between columns (or) column-gap
grid-row-gap	        Specifies the size of the gap between rows


grid	                grid-template-rows, gt-columns, gt-areas, grid-auto-rows, ga-columns, ga-flow properties
grid-area	            shorthand property for the <grid-row-start>, <grid-column-start>, <grid-row-end>, <grid-column-end>

grid-auto-columns	    Specifies a default column size
grid-auto-flow	        Specifies how auto-placed items are inserted in the grid
grid-auto-rows	        Specifies a default row size

grid-column	            A shorthand property for the <grid-column-start> and the <grid-column-end> properties
grid-column-start	    Specifies where to start the grid item
grid-column-end	        Specifies where to end the grid item


grid-row	            A shorthand property for the <grid-row-start> and the <grid-row-end> properties
grid-row-start	        Specifies where to start the grid item
grid-row-end	        Specifies where to end the grid item


grid-template	        A shorthand property for the <grid-template-rows>, <grid-template-columns> <grid-area> properties
grid-template-areas	    Specifies how to display columns and rows, using named grid items
grid-template-columns	Specifies the size of the columns, and how many columns in a grid layout
grid-template-rows	    Specifies the size of the rows in a grid layout
