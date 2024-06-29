// Map number x from range [a, b] to [c, d]
const map = (x: number, a: number, b: number, c: number, d: number) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

const calcWinsize = () => {
    return {width: window.innerWidth, height: window.innerHeight};
};

// Gets the mouse position
const getMousePos = (e: { clientX: any; clientY: any; }) => {
    return { 
        x : e.clientX, 
        y : e.clientY 
    };
};

export { map, lerp, calcWinsize, getMousePos };