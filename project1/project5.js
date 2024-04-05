// document.getElementById('images').addEventListener('click',(e)=>{
//    console.log('clicked inside the ul')
// })
// document.getElementById('owl').addEventListener('click',(e)=>{
//    console.log('owl the ul')
//    e.stopPropagation()
// },false)
// document.getElementById('google').addEventListener('click',(e)=>{
//     e.stopPropagation() // this is used for just this node not including its parent
//     e.preventDefault(); // this is used for prevent navigate to link
//     console.log("google clicked");
// },false)

document.querySelector('#images').addEventListener('click',(e)=>{
    console.log(e.target.tagName)
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id)
        let removeImg = e.target.parentNode
        removeImg.remove()
    }
},false)