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
//DWIE ZMIENNE REPREZENTUJĄCE RANDOMOWE WARTOSCI
        var random = (Math.random()*8 + 1);
        var round = Math.round(random);
//ZMIENNA INDEX SPRAWDZA CZY W TABLICY TAB JEST JUZ DANY ELEMENT, JEZELI JEST ZWRACA WARTOSC KOMÓRKI W KTÓREJ SIĘ ZNAJDUJE, CZYLI JEZELI INDEX ZWRACA WARTOSC INNA OD -1 (-1 JEST ZWRACANE JEZELI TABLICA NIE ZAWIERA ELEMENTU) TO ZMNIEJSZAMY PETLE PRZEZ CO MAMY PEWNOSC ZE NASZE LICZBY SIE NIGDY NIE POWTORZA W DANYM RZEDZIE/KOLUMNIE/KWADRACIE;        
        var index = tab.indexOf(round);
        if(index != -1){
            i--;
        }else{
            tab[i] = round;
            cell[i].innerHTML = tab[i];
        }
    }
//ZMIENNE DO PIERWSZEGO KROKU LOSOWANIA LICZB
    var licznik = new Array(9);
    for(i = 0; i<9; i++){
        licznik[i] = 0;    
    }
    
    var liczby = new Array(9);
    for(i = 0; i<9; i++){
        liczby = tab[i] + licznik[i];
        licznik[i]++;
    }
 //PĘTLA WPISUJĄCA WARTOSCI WEDŁUG WZORU <PIERWSZE MIEJSCE W KOLUMNIE +1, POTEM KAZDE NASTEPNE +1>   
    for(i = 1; i<9; i++) {
        
        cols[0][i].innerHTML = tab[0] + licznik[0];
        cols[1][i].innerHTML = tab[1] + licznik[1];
        cols[2][i].innerHTML = tab[2] + licznik[2];
        cols[3][i].innerHTML = tab[3] + licznik[3];
        cols[4][i].innerHTML = tab[4] + licznik[4];
        cols[5][i].innerHTML = tab[5] + licznik[5];
        cols[6][i].innerHTML = tab[6] + licznik[6];
        cols[7][i].innerHTML = tab[7] + licznik[7];
        cols[8][i].innerHTML = tab[8] + licznik[8];
       // console.log(tab[i]+licznik[i]);
        
        if((tab[0]+licznik[0]) >= 9){
            tab[0] = 0;
            licznik[0] = 0;
            console.log(tab[0]+licznik[0]);
        }
        
        if((tab[1]+licznik[1]) >= 9){
            console.log(tab[1]+licznik[1]);
            tab[1] = 0;
            licznik[1] = 0;
        }
        
        if((tab[2]+licznik[2]) >= 9){
            console.log(tab[2]+licznik[2]);
            tab[2] = 0;
            licznik[2] = 0;
        }
        
        if((tab[3]+licznik[3]) >= 9){
            console.log(tab[3]+licznik[3]);
            tab[3] = 0;
            licznik[3] = 0;
        }
        
        if((tab[4]+licznik[4]) >= 9){
            console.log(tab[4]+licznik[4]);
            tab[4] = 0;
            licznik[4] = 0;
        }
        
        if((tab[5]+licznik[5]) >= 9){
            console.log(tab[5]+licznik[5]);
            tab[5] = 0;
            licznik[5] = 0;
        }
        
        if((tab[6]+licznik[6]) >= 9){
            console.log(tab[6]+licznik[6]);
            tab[6] = 0;
            licznik[6] = 0;
        }
        
        if((tab[7]+licznik[7]) >= 9){
            console.log(tab[7]+licznik[7]);
            tab[7] = 0;
            licznik[7] = 0;
        }
        
        if((tab[8]+licznik[8]) >= 9){
            console.log(tab[8]+licznik[8]);
            tab[8] = 0;
            licznik[8] = 0;
        }
        
        for(j = 0; j<9; j++){
            licznik[j]++;
        }
    }   
}

function main() {

    tworz_divy();
    
    zapisuj_w_tabelach();

    generuj_zawartosc();
}

//********************************







