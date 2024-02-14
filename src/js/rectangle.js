function calculateRectangleArea(){
    const width = getInput('rect-width');
    const length = getInput('rect-length');
    const area = width*length;
    makeVisible('rect-result');
    document.getElementById('rect-replace').innerText = area;
}