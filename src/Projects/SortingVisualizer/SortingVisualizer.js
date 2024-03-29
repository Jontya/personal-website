import React from "react";
import {mergeSortAnimations} from "./SortingAlgorithms/MergeSort.js";
import {quickSortAnimations} from "./SortingAlgorithms/QuickSort.js";
import {heapSortAnimations} from "./SortingAlgorithms/HeapSort.js";
import {bubbleSortAnimations} from "./SortingAlgorithms/BubbleSort.js";
import "./SortingVisualizer.css";

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 225;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#C0C0C0";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

let sorted = false;

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
            array.push(randomIntFromInterval(5, 600));
        }
        sorted = false;
        this.setState({array});
    }


    render(){
        const {array} = this.state;
        return(
            <div className="sorting-visualizer-container">
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div 
                            className="array-bar" 
                            key ={idx} 
                            style={{height: `${value/9.5}vh`, marginTop: `${600-Math.max(...array)}px`}}>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button className='sorting-button' onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className='sorting-button' onClick={() => mergeAnimate(mergeSortAnimations(this.state.array), 2)}>Merge Sort</button>
                    <button className='sorting-button' onClick={() => animate(quickSortAnimations(this.state.array), 5)}>Quick Sort</button>
                    <button className='sorting-button' onClick={() => animate(heapSortAnimations(this.state.array), 2)}>Heap Sort</button>
                    <button className='sorting-button' onClick={() => animate(bubbleSortAnimations(this.state.array), 1)}>Bubble Sort</button>
                </div>
            </div>
            
        );
    }
}

function animate(animations, animationTime){
    if(sorted === false){
        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight, colorChange] = animations[i];
            const arrayBars = document.getElementsByClassName('array-bar');
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            
            setTimeout(() => {
                if(colorChange){
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }
                else{
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }

                barOneStyle.height = `${barTwoHeight/9.5}vh`;
                barTwoStyle.height = `${barOneHeight/9.5}vh`;
            }, i * animationTime);
        }
        sorted = true;
    }
}

function mergeAnimate(animations, animationTime){
    if(sorted === false){
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationTime);
            } 
            else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight/9.5}vh`;
                }, i * animationTime);
            }
        }
        sorted = true;
    }
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


