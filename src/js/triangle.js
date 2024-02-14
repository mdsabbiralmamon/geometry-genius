function calculateTriangleArea(){
    const base = getInput('tri-base');
    const height = getInput('tri-height');
    const area = .5*base*height;
    makeVisible('tri-result');
    document.getElementById('tri-replace').innerText = area;
}