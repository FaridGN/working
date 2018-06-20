// let a = document.createElement("div");
// a.style.width = "150px";
// a.style.height = "120px";
// a.style.backgroundColor = "red";

// document.body.appendChild(a);

var items = {
     cars: {
         wd: "900px",
         ht: "455px",
         type: "flex",
         direct: "column",
         bcolor: "blue",
         "car01": {
            id: "car1", 
            width: "150px",
            height:"150px",
            src: "url('./images/lexus.png')",
            bsize: "100%",
            bpos: "center",
            brep: "no-repeat"
         },
         "car02": {
            id : "car2", 
            width: "150px",
            height:"150px",
            src: "url('./images/bmw.png')",
            bsize: "100%",
            bpos: "center",
            brep: "no-repeat"
        }, 
        "car03": {
            id: "car3",
            width: "150px",
            height:"150px",
            src:"url('./images/mercedes.png')",
            bsize: "100%",
            bpos: "center",
            brep: "no-repeat"
        }, 
        "car04": {
            id: "car4", 
            width: "150px",
            height:"150px",
            src: "url('./images/lexus.png')",
            bsize: "100%",
            bpos: "center",
            brep: "no-repeat"
         },
         "car05": {
            id : "car5", 
            width: "150px",
            height:"150px",
            src: "url('./images/bmw.png')",
            bsize: "100%",
            bpos: "center",
            brep: "no-repeat"
        }, 
        "car06": {
            id: "car6",
            width: "150px",
            height:"150px",
            src:"url('./images/mercedes.png')",
            bsize: "100%",
            bpos: "center",
            brep: "no-repeat"
        }, 
        "car07": {
            id: "car7", 
            width: "150px",
            height:"150px",
            src: "url('./images/lexus.png')",
            bsize: "100%",
            bpos: "center",
            brep: "no-repeat"
         },
         "car08": {
            id : "car8", 
            width: "150px",
            height:"150px",
            src: "url('./images/bmw.png')",
            bsize: "100%",
            bpos: "center",
            brep: "no-repeat"
        }, 
        "car09": {
            id: "car9",
            width: "150px",
            height:"150px",
            src:"url('./images/mercedes.png')",
            bsize: "100%",
            bpos: "center",
            brep: "no-repeat"
        }, 
     }
}

// function group(width, height, type, direct, bcolor){
//     let obj = document.createElement("div");
//     obj.style.width = width;
//     obj.style.height =  height;
//     obj.style.display = type;
//     obj.style.flexDirection = direct;
//     obj.style.backgroundColor = bcolor;
//     document.body.appendChild(obj);
// }

// group(
//     items.cars.width,
//     items.cars.height,
//     items.cars.type,
//     items.cars.direct,
//     items.cars.bcolor,
// );

// function appendBody(id,src, bsize, width, height, brep, bpos) {
//     let element = document.createElement("div");
//     element.id = id;
//     element.style.backgroundImage = src;
//     element.style.backgroundSize = bsize; 
//     element.style.backgroundPosition = bpos;
//     element.style.backgroundRepeat = brep;
//     element.style.width = width,
//     element.style.height = height,
//     parent.appendChild(element);
// }


// for(var a in items.cars){
//     appendBody(
//         items.cars[a].id,
//         items.cars[a].src,
//         items.cars[a].bsize,
//         items.cars[a].width,
//         items.cars[a].height,
//         items.cars[a].brep,
//         items.cars[a].bpos
//     )
// }

//alternative way

function appendLogos(id,src, bsize, width, height, brep, bpos, wd, ht, type, direct, bcolor) {
    let element = document.createElement("div");
    element.id = id;
    element.style.backgroundImage = src;
    element.style.backgroundSize = bsize; 
    element.style.backgroundPosition = bpos;
    element.style.backgroundRepeat = brep;
    element.style.width = width,
    element.style.height = height;
    let obj = document.createElement("div");
        obj.style.width = wd;
        obj.style.height =  ht;
        obj.style.display = type;
        obj.style.flexDirection = direct;
        obj.style.backgroundColor = bcolor;
        document.body.appendChild(obj);
        obj.appendChild(element);
    }
  
    for(var a in items.cars){
            appendLogos(
                items.cars[a].id,
                items.cars[a].src,
                items.cars[a].bsize,
                items.cars[a].width,
                items.cars[a].height,
                items.cars[a].brep,
                items.cars[a].bpos,
                    items.cars.wd,
                    items.cars.ht,
                    items.cars.type,
                    items.cars.direct,
                    items.cars.bcolor,
            )
        } 
        

