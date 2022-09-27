//crea la función startClassification() esta funcion la usamos para acceder al micrófono
function startClassification()
//inicio de la funcion
{
    // usa la funcion navigator.mediaDevices.getUserMedia() para solicitar acceso a sus micrófonos y cámaras 
navigator.mediaDevices.getUserMedia({audio:true});
    // usa la variable classifier para llamar la la función predefinida ml5.soundClassifier la usamos para activar      la función de clasificación de sonido y para guardar el enlace de tu modelo debe quedar así  classifier =           ml5.soundClassifier(' direccion de enlace de tu modelo/model.json', modelReady);
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/model.json ', modelReady);
    // fin de la función
}

//crea la función modelReady
function modelReady()
//inicio de la funcion
{
    //pon la variable classiefier con punto classify
    classifier.classify(gotResults);
//fin de la función
}

//crea la función  gotResults con los parámetros error y results
function gotResults(error, results)
//inicio de la funcion
{
//usa la condicional if con el paramtro error
if (error) 
//inicio del if
{
//usa el comando console.error(error); para imprimir el error en la consola
console.error(error);
//fin del if
}
//usa la condicional else
else
//inicio de else
{
//usa el comando console.log(results); para iprimir en la consola el resultado
console.log(results);
//usa la variable random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_r = Math.floor(Math.random() * 255) + 1;
//usa la variable random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
//usa la variable random_number_b = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;
// usa el comando document.getElementById("result_label").innerHTML para imprimir en html la cadena de texto        Escucho: mas el resultado results[0].label
document.getElementById("result_label").innerHTML = 'escucho: '+ results[0].label;
//// usa el comando document.getElementById("result_confidence").innerHTML para imprimir en html la cadena de texto        Presición: mas el resultado (results[0].confidence*100).toFixed(2)
document.getElementById("result_confidence").innerHTML = 'Precicion: '+ (results[0].confidence*100).toFixed(2)+'%';
// usa el comando document.getElementById(  ).style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"; para agregarle estilo a la etiqueta result_label
document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
// usa el comandodocument.getElementById(  ).style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; para agregarle estilo a la etiqueta result_confidence
document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      //img = document.getElementById('alien1') almacenaremos en una variable las imagenes
      img = document.getElementById('alien1');
      img1 = document.getElementById('alien2');
      img2 = document.getElementById('alien3');
      img3 = document.getElementById('alien4');

      if (results[0].label == "perro") {
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (results[0].label == "pajaro") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.gif';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (results[0].label == "gato") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.gif';
        img3.src = 'aliens-04.png';
      }else {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.gif';
      }
  
  //fin del else
    } 
  //fin de la funcionx
    }