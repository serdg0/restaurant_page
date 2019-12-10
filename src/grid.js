const grid = () => {
    const content = document.getElementById("content");
    content.classList.add('container');
    content.innerHTML = '';
    const row = document.createElement('div');
    row.classList.add('row', 'mt-5');
    const col1 = document.createElement('div');
    const col2 = document.createElement('div');
    col2.setAttribute('id', 'main-content');
    const col3 = document.createElement('div');
    let colArr = [col1, col2, col3];
    colArr.forEach(col => {
        col.classList.add('col');
        row.appendChild(col);
    })
    content.appendChild(row);
    return content;
}
export default grid;