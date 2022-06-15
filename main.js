/* mô hình 3 khối 
input: a, b, c (3 số nguyên) từ người dùng nhập 
progress:
=> so sánh các số 
1. a>b và a>c và b>c: đúng 
xuất ra c,b,a
2. else: a>b và a>c, b<c: đúng
=> xuất ra b,c,a
3. else: a>b và a<c: đúng 
xuất ra b,a,c
4. else: a<b và a<c và b>c
xuất ra: a,c, b
5. else: a<b và a<c và b<c
xuất ra: a, b, c
6. else: a>c, a <b:
xuâts ra c,a,b


7. else: a = b, b>c: 
xuát: c, a, b/c, b, a 
8. else: a = c, b>c
xuất: a,c,b/c,a,b 
9. else: b=c, c<a: 
xuất: b,c,a/c,b,a
10. else: b=c, c>a:
xuất: a,b,c/a,c,b

11. else: a = b = c
xuất a, b, c 

output: thứ tự các số 
*/

document.getElementById('btn-xuatSo').onclick = function () {
    var soN1 = Number(document.getElementById('soN1').value);
    var soN2 = Number(document.getElementById('soN2').value);
    var soN3 = Number(document.getElementById('soN3').value);
    var ketQua1 = '';

    if (soN1 > soN2 && soN1 > soN3 && soN2 > soN3) {

        ketQua1 = SoN3 + "," + soN2 + "," + soN1;

    } else if (soN1 > soN2 && soN1 > soN3 && soN2 < soN3) {
        ketQua1 = soN2 + "," + soN3 + "," + soN1;

    }
    else if (soN1 > soN2 && soN1 < soN3) {
        ketQua1 = soN2 + "," + soN1 + "," + soN3;

    }
    else if (soN1 < soN2 && soN1 < soN3 && soN2 > soN3) {
        ketQua1 = soN1 + "," + soN3 + "," + soN2;

    }
    else if (soN1 < soN2 && soN1 < soN3 && soN2 < soN3) {
        ketQua1 = soN1 + "," + soN2 + "," + soN3;
    }
    else if (soN1 < soN2 && soN1 > soN3) {
        ketQua1 = soN3 + "," + soN1 + "," + soN2;
    }

    else if (soN1 === soN2 && soN2 > soN3) {
        ketQua1 = soN3 + "," + soN1 + "," + soN2;

    }
    else if (soN1 === soN3 && soN2 > soN1) {
        ketQua1 = soN1 + "," + soN3 + "," + soN2;
    }
    else if (soN2 === soN3 && soN2 < soN1) {
        ketQua1 = soN2 + "," + soN3 + "," + soN1;

    }
    else if (soN2 === soN3 && soN2 > soN1) {
        ketQua1 = soN1 + "," + soN2 + "," + soN3;

    }
    else //(soN2 === soN3 && soN2===soN1 ) 
    {
        ketQua1 = soN1 + "," + soN2 + "," + soN3;
    }

    document.getElementById('ketQua1').innerHTML = ketQua1;

}

// bài 2

/* input: người dùng chọn 1 trong 4 opt 
progess: dùng if else so sánh giá trị tới từng value
output xuất ra câu chào phù hợp
*/

document.getElementById('btn-Chao').onclick = function () {
    var memBer = document.getElementById('member').value;
    var ketQua2 = '';

    if (memBer = "B") {
        ketQua2 = "Xin chào Bố";

    } else if (memBer = "M") {
        ketQua2 = "Xin chào Mẹ";
    } else if (memBer = "A") {
        ketQua2 = "Xin chào Anh trai";
    }

    else if (memBer = "E") {
        ketQua2 = "Xin chào Em gái";
    }

    document.getElementById('ketQua2').innerHTML = ketQua2;

}

// Bài tập 3: 

/*
input: 3 số nguyên 
progess: so sánh chia hết cho 2 hay ko 
nếu chia hết cho 2: số chẵn
nếu ko chia hết cho 2: số lẻ 

1. a%2=0 và b%2=0 và c%2=0
xuất ra: 3 số chẵn, 0 số lẻ 
2. a%2=0 và b%2=0 và c%2#0
xuất ra: 2 số chẵn, 1 số lẻ 
3. a%2=0 và b%2#0 và c%2=0
xuất ra: 2 số chẵn, 1 số lẻ 
4. a%2=0 và b%2#0 và c%2#0
xuất ra: 1 số chẵn, 2 số lẻ 
5. a%2#0 và b%2=0 và c%2=0
xuất ra: 2 số chẵn, 1 số lẻ 
6. a%2#0 và b%2#0 và c%2=0
xuất ra: 1 số chẵn, 2 số lẻ 
7. a%2#0 và b%2=0 và c%2#0
xuất ra: 1 số chẵn, 2 số lẻ 
8. a%2#0 và b%2#0 và c%2#0
xuất ra: 0 số chẵn, 3 số lẻ 

output: số lượng số chẵn lẻ.
*/

document.getElementById('btn-So').onclick = function () {
    var soA = Number(document.getElementById('soA').value);
    var soB = Number(document.getElementById('soB').value);
    var soC = Number(document.getElementById('soC').value);
    var ketQua3 = '';

    if (soA % 2 === 0 && soB % 2===0 && soC % 2===0) {
        ketQua3 = "3 số chẵn, 0 số lẻ ";
    } else if (soA % 2 === 0 && soB % 2===0 && soC % 2 !== 0) {
        ketQua3 = " 2 số chẵn, 1 số lẻ ";
    } else if (soA % 2 === 0 && soB % 2 !== 0 && soC % 2===0) {
        ketQua3 = " 2 số chẵn, 1 số lẻ ";
    } else if (soA % 2 === 0 && soB % 2 !== 0 && soC % 2 !== 0) {
        ketQua3 = "1 số chẵn, 2 số lẻ ";
    } 
    else if (soA % 2 !== 0 && soB % 2=== 0 && soC % 2===0) {
        ketQua3 = "1 số chẵn, 2 số lẻ ";
    } 
    else if (soA % 2 !== 0 && soB % 2 !== 0 && soC % 2=== 0) {
        ketQua3 = "1 số chẵn, 2 số lẻ ";
    } 
    else if (soA % 2 !== 0 && soB % 2=== 0 && soC % 2 !== 0) {
        ketQua3 = "1 số chẵn, 2 số lẻ ";
    } else //if (soA%2 !== 0 && soB%2!==0 && soC%2!==0)
    { ketQua3 = "0 số chẵn, 3 số lẻ "; }

    document.getElementById('ketQua3').innerHTML= ketQua3;
}

// Bài tập 4
/*
input: 3 cạnh tam giác 

*/


