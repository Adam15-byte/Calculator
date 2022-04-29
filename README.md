# iOS Calculator
Recreation of iOS Calculator with React Native.

## Table of contents
* [General info](#general-info)
* [Technologies](#Technologies)
* [Videos](#Videos)
* [Further improvments](#Further-improvments)

## General info
Simple calculator allowing for the equations of: addition, subtraction, multiplication, division, calculation of percentage and quickly getting the negative value.

The logic of all functions is handled by Context hook in a separate file.

To allow ease of adding additional number to displayed value, the values are interchangeably turned to strings or floats.

## Technologies
* Hooks: useState, useCallback, useContext, createContext

## Videos
https://user-images.githubusercontent.com/64642323/165903973-765446f8-e043-4693-9917-ea61f6478dce.MP4

## Further improvments
* The current value displayed is determined by function that performs multiple state checks to determine what to display. Possible better solution is the use of useEffect hook to determine value being currently updated and displaying it.