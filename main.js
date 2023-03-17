let add1 = document.getElementById('add1')
let subtract1 = document.getElementById('subtract1')
let quantity1 = document.getElementById('quantity1')
let quantity2 = document.getElementById('quantity2')
let add2 = document.getElementById('add2')
let subtract2 = document.getElementById('subtract2')
let x= 0
let y=0

add1.addEventListener('click', function (){
    x += 1
    quantity1.textContent = x
    })
subtract1.addEventListener('click', function (){
    if(x>=1){
    x -= 1}
    else{ }
    quantity1.textContent = x
})
 

add2.addEventListener('click', function (){
    y += 1
    quantity2.textContent = y
    })
subtract2.addEventListener('click', function (){
        if(y>=1){
        y-= 1}
        else{ }
        quantity2.textContent = y
        })

 add3.addEventListener('click', function (){
        x += 1
        quantity3.textContent = x
        })
subtract3.addEventListener('click', function (){
        if(x>=1){
        x -= 1}
        else{ }
        quantity3.textContent = x
            })
            
add4.addEventListener('click', function (){
                x += 1
                quantity4.textContent = x
                })
subtract4.addEventListener('click', function (){
                if(x>=1){
                x -= 1}
                else{ }
                quantity4.textContent = x
                    })
                             