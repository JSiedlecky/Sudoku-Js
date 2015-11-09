window.onload = main;

//SUPER NAJLEPSZE ZMIENNE GLOBALNE :V
var cell = document.getElementsByClassName("cell");
var content = new Array(81);
var rows = new Array(9);
var cols = new Array(9);
var sqrs = new Array(9);


function tworz_divy() {
    var current_stuff = "";
    var licznik = 1;
//WŁAŚCIWA PĘTLA TWORZĄCA DIVY Z KLASĄ 'CELL'
    for(i = 0; i<81; i++){
        current_stuff += "<div class='cell' id='nr"+licznik+"'></div>";
        if((i+1)%9 == 0) current_stuff += "<div class='clearAll'></div>"; 
        licznik++;
    }
//OSTATECZNE PRZYPISANIE DIVÓW DO HTML'A     
    document.getElementById("all").innerHTML += current_stuff;
}

function zapisuj_w_tabelach() {
    var rowcellcounter = 0;
    
// TWORZENIE DRUGIEGO WYMIARU W TABLICACH ZAWIERAJĄCYCH HANDLERY
    for(i = 0; i<9; i++){
        rows[i] = new Array(9);
        cols[i] = new Array(9);
        sqrs[i] = new Array(3);
    }
    
    for(i = 0; i<9; i++){
        for(j = 0; j<3; j++){
            sqrs[i][j] = new Array(3);
        }
    }
    
    
// PRZYPISYWANIE DO KAŻDEGO MIEJSCA W TABLICY RZĘDÓW WŁAŚCIWYCH KOMÓREK
    for(i = 0; i<9; i++){
        for(j = 0; j<9; j++){
            rows[i][j] = cell[rowcellcounter];
            rowcellcounter++;
        }
    }
    
// PRZYPISYWANIE DO KAŻDEGO MIEJSCA W TABLICY KOLUMN WŁAŚCIWYCH KOMÓREK 
    for(i = 0; i<9; i++){
        var colcellcounter = 0;
        for(j = 0; j<9; j++){
            cols[i][j] = cell[colcellcounter+i];
            colcellcounter += 9;
        }
    }
    
// PRZYPISYWANIE DO KAŻDEGO MIEJSCA W TABLICY KWADRATÓW WŁAŚCIWYCH KOMÓREK
    var sqrcounter = 0;
    
    for(i = 0; i<9; i++){
        for(j = 0; j<3; j++){
            for(u = 0; u<3; u++){
                sqrs[i][j][u] = cell[sqrcounter];
                sqrcounter++;
                if(sqrcounter == 27){
                    sqrcounter += 18;
                }
                if(sqrcounter == 54){
                    sqrcounter += 18;
                }
                
            }
            sqrcounter+=6;
        }
        sqrcounter = sqrcounter - 24;
    }

// SPRAWDZANIE PRZYPISANIA TABLIC  
//    for(j = 0; j<9; j++){
//        rows[0][j].innerHTML += "A ";
//        rows[1][j].innerHTML += "B ";
//        rows[2][j].innerHTML += "C ";
//        rows[3][j].innerHTML += "D ";
//        rows[4][j].innerHTML += "E ";
//        rows[5][j].innerHTML += "F ";
//        rows[6][j].innerHTML += "G ";
//        rows[7][j].innerHTML += "H ";
//        rows[8][j].innerHTML += "I ";
//        
//        cols[0][j].innerHTML += " 1 ";
//        cols[1][j].innerHTML += " 2 ";
//        cols[2][j].innerHTML += " 3 ";
//        cols[3][j].innerHTML += " 4 ";
//        cols[4][j].innerHTML += " 5 ";
//        cols[5][j].innerHTML += " 6 ";
//        cols[6][j].innerHTML += " 7 ";
//        cols[7][j].innerHTML += " 8 ";
//        cols[8][j].innerHTML += " 9 ";
//        
//    }
//    
//        for(i = 0; i<3; i++){
//            for(j = 0; j<3; j++) {
//                sqrs[0][i][j].innerHTML += " !";
//                sqrs[1][i][j].innerHTML += " @";
//                sqrs[2][i][j].innerHTML += " #";
//                sqrs[3][i][j].innerHTML += " $";
//                sqrs[4][i][j].innerHTML += " %";
//                sqrs[5][i][j].innerHTML += " ^";
//                sqrs[6][i][j].innerHTML += " &";
//                sqrs[7][i][j].innerHTML += " *";
//                sqrs[8][i][j].innerHTML += " +";
//            }
//        }
//    
}
    
function generuj_zawartosc(){
    var tab = new Array(9);
    
    for(i = 0; i<9; i++){
        var randomed = (Math.random() * 8 + 1);
        var rounded = Math.round(randomed);
        
        var current = tab.indexOf(rounded);
        if(current != -1){
            i--;
        }else{
            tab[i] = rounded;
        }
        console.log(tab[i]);
        cell[i] = tab[i];
        cell[i].innerHTML = tab[i];
    }
    
    console.log("KURWAAAA");
    
    for(i = 1; i<9; i++){
        var current = parseInt(cols[i-1][0].innerHTML);
        console.log(cols[i-1][0]);
        cols[0][i].innerHTML = current + 1;
        cols[1][i].innerHTML = current + 1;
        cols[2][i].innerHTML = current + 1;
        cols[3][i].innerHTML = current + 1;
        cols[4][i].innerHTML = current + 1;
        cols[5][i].innerHTML = current + 1;
        cols[6][i].innerHTML = current + 1;
        cols[7][i].innerHTML = current + 1;
        cols[8][i].innerHTML = current + 1;
        
//        console.log(rows[0][i]);
//        console.log(rows[1][i]);
//        console.log(rows[2][i]);
//        console.log(rows[3][i]);
//        console.log(rows[4][i]);
//        console.log(rows[5][i]);
//        console.log(rows[6][i]);
//        console.log(rows[7][i]);
//        console.log(rows[8][i]);
    }
    
}

function main() {
 

    tworz_divy();
    
    zapisuj_w_tabelach();

    generuj_zawartosc();
}

//********************************







