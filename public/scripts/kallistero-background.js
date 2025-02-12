
                        KALLISTERO_SCRIPT.run('gridlines', () => {
                            const parentElement = document.getElementsByTagName('body')[0];
                            
                            const config = wireframeGridlines(
                                    parentElement, // parent element 
                                    'effect-maker-version-000', // effect version (for dev to keep later versions of the effect backwards compatible) 
                                    '', // id for this instance of this effect 
                                    'absolute', // CSS position type for this effect
                                    98.4, // width of the effect within its parent 
                                    100, // height of the effect within its parent 
                                    '%', // units of measurement for the above 2 
                                    'hidden', // CSS overflow type for this effect
                                    '#00dfdf', // wire color 
                                    2.178, // line thickness in px
                                    2, // number of vertical lines on the back wall
                                    6, // number of horizontal lines on the back wall
                                    4, // amount of concentric lines; behaves differently depending on whether forced perspective is on
                                    37, // CSS left property of the back wall
                                    0, // CSS top property of the back wall
                                    '%', // units of measurement for the above 2
                                    25.6, // width of the back wall
                                    100.9664, // height of the back wall
                                    '%', // units of measurement for the above 2
                                    false, // whether to display grid lines on the back wall
                                    true, // whether to display the grid lines radiating from the back wall
                                    true, // whether to display the grid lines that are parallel to the back wall
                                    '#80ffff', // the glow color for the lines
                                    1, // the blur amount for the lines' glow
                                    2, // the spread amount for the lines' glow
                                    true, // z-flow - whether concentric lines experience a flowing animation, to or away from the back wall
                                    -0.3999, // the z-flow animation speed 
                                    24, // the framerate for the z-flow animation (in frames per second)
                                    false, // whether forced perspective is on; forces the corners of the back wall to connect to the corners of the whole effect
                                    false, // whether there's a natural vanishing point behind the back wall, for when forced perspective is off
                                    50, // vanishing point's position from the left
                                    50, // vanishing point's position from the top
                                    '%', // units of measurement for the above 2
                                    'none', // CSS pointer-events property 
                                    -1 // Z-index 
                                );
                        });