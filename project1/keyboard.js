const insert = document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
    insert.innerHTML = 
    `<div class='color'>
    <table>
        <tr>
        <th>key</th>
        <th>keycode</th>
        <th>code</th>
        </tr>
        <td>
        <th>${e.key === ' ' ? 'space' : e.key}</th>
        <th>${e.keyCode}</th>
        <th>${e.code}</th>
        </td>
    </table>
    </div>
    `
})