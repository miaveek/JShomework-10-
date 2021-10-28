/*
Нарисовать на странице круг используя параметры, которые введет пользователь.
Технические требования:
- При загрузке страницы - показать на ней кнопку с текстом "Нарисовать круг". Данная кнопка должна являться единственным контентом в теле HTML документа,
 весь остальной контент должен быть создан и добавлен на страницу с помощью Javascript.
- При нажатии на кнопку "Нарисовать круг" показывать одно поле ввода - диаметр круга. 
При нажатии на кнопку "Нарисовать" создать на странице 100 кругов (10*10) случайного цвета.
 При клике на конкретный круг - этот круг должен исчезать, при этом пустое место заполняться, то есть все остальные круги сдвигаются влево.
- У вас может возникнуть желание поставить обработчик события на каждый круг для его исчезновения. Это неэффективно, так делать не нужно. 
На всю страницу должен быть только один обработчик событий, который будет это делать.
*/
window.onload = () =>{
   
    bildCircle.onclick = () =>{
        let btnRemoval = document.body.firstElementChild,
            createNewBtn = document.createElement("button");
            createInput = document.createElement("input");
        createInput.type ="text";
        createInput.id ="circleDim";
        createInput.setAttribute('value', ' ');
        createNewBtn.innerHTML =("Нарисовать");
        createNewBtn.id ="createCirclesBtn";
        btnRemoval.remove();
        document.body.appendChild(createInput);
        document.body.appendChild(createNewBtn);
        createCirclesBtn.onclick = () =>{assemblingСircles()}
        
    randomColor =() =>{
        let r =Math.floor(Math.random()*256),
            g =Math.floor(Math.random()*256),
            b =Math.floor(Math.random()*256);
            return "rgb("+r+","+g+","+b+")"
    }
    createDiv = () =>{
        let newDiv = document.createElement("div"),
            diameter = parseInt(createInput.value);
            newDiv.className = "circle";
            newDiv.style.background = randomColor();
            if ( isNaN(diameter) || diameter < 1){
                newDiv.style.width = 10 + "px";
                newDiv.style.height = 10 + "px";
            }
            else{
                newDiv.style.width = diameter + "px";
                newDiv.style.height = diameter + "px";
            }
            return newDiv
    }
    assemblingСircles=()=>{
        createNewBtn.remove();
        createInput.remove();
        for(let i = 0 ; i <100;i++){document.body.append(createDiv());}
    }
    document.addEventListener('click',e => {
         if(e.target.className == "circle"){e.target.remove();}
    });
         
    }
}

