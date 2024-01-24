function Find() {
    const Input = document.getElementById('InputNum').value;
    const Num = Input.split(',').map(Number);

    const Min = Math.min(...Num);
    const Max = Math.max(...Num);
    const Average = Num.reduce((sum, num) => sum + num,0) / Num.length;

    const result = document.getElementById('result');
    result.innerHTML = `
    <tr>
        <td>Min</td>
    </tr>
    <tr>
        <td>${Min}</td>
    </tr>
    <tr>
        <td>Max</td>
    </tr>
    <tr>
        <td>${Max}</td>
    </tr>
    <tr>
        <td>Average</td>
    </tr>
    <tr>
        <td>${Average.toFixed(2)}</td>
    </tr>
    `;
}