document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const resultField = document.getElementById("result");
  
    // استبدل هذا السعر بالسعر الفعلي للمنتج
    const itemPrice = 10; // مثال: 10 للعملة المحلية
  
    // حساب السعر الإجمالي
    function calculateTotal() {
      const quantity = parseInt(quantityInput.value) || 0;
      const total = quantity * itemPrice;
      resultField.value = total > 0 ? total : '';
    }
  
    // إضافة حدث عند تغيير الكمية
    quantityInput.addEventListener("input", calculateTotal);
  });
  




function burger(){
    let p1 =document.getElementById("p1");
    let p2 =document.getElementById("p2");
    let p3 =document.getElementById("p3");
    let p4 =document.getElementById("p4");
    let p5 =document.getElementById("p5");
    let p6 =document.getElementById("p6");
    let p7 =document.getElementById("p7");
    let p8 =document.getElementById("p8");
    let p9 =document.getElementById("p9");
    let p10 =document.getElementById("p10");
    let p11 =document.getElementById("p11");
    let p12 =document.getElementById("p12");
 
    p1.style.display='none';
    p2.style.display='block';
    p3.style.display='none';
    p4.style.display='none';
    p5.style.display='none';
    p6.style.display='none';
    p7.style.display='none';
    p8.style.display='block';
    p9.style.display='none';
    p10.style.display='none';
    p11.style.display='none';
    p12.style.display='block';
    
}

function pizza(){
    let p1 =document.getElementById("p1");
    let p2 =document.getElementById("p2");
    let p3 =document.getElementById("p3");
    let p4 =document.getElementById("p4");
    let p5 =document.getElementById("p5");
    let p6 =document.getElementById("p6");
    let p7 =document.getElementById("p7");
    let p8 =document.getElementById("p8");
    let p9 =document.getElementById("p9");
    let p10 =document.getElementById("p10");
    let p11 =document.getElementById("p11");
    let p12 =document.getElementById("p12");
    p1.style.display='block';
    p2.style.display='none';
    p3.style.display='block';
    p4.style.display='none';
    p5.style.display='none';
    p6.style.display='block';
    p7.style.display='none';
    p8.style.display='none';
    p9.style.display='block';
    p10.style.display='none';
    p11.style.display='none';
    p12.style.display='none';
}
function chicken(){
    let p1 =document.getElementById("p1");
    let p2 =document.getElementById("p2");
    let p3 =document.getElementById("p3");
    let p4 =document.getElementById("p4");
    let p5 =document.getElementById("p5");
    let p6 =document.getElementById("p6");
    let p7 =document.getElementById("p7");
    let p8 =document.getElementById("p8");
    let p9 =document.getElementById("p9");
    let p10 =document.getElementById("p10");
    let p11 =document.getElementById("p11");
    let p12 =document.getElementById("p12");
    p1.style.display='none';
    p2.style.display='none';
    p3.style.display='none';
    p4.style.display='none';
    p5.style.display='none';
    p6.style.display='none';
    p7.style.display='block';
    p8.style.display='none';
    p9.style.display='none';
   p10.style.display='block';
    p11.style.display='block'; 
    p12.style.display='none';
}
function fries(){
    let p1 =document.getElementById("p1");
    let p2 =document.getElementById("p2");
    let p3 =document.getElementById("p3");
    let p4 =document.getElementById("p4");
    let p5 =document.getElementById("p5");
    let p6 =document.getElementById("p6");
    let p7 =document.getElementById("p7");
    let p8 =document.getElementById("p8");
    let p9 =document.getElementById("p9");
    let p10 =document.getElementById("p10");
    let p11 =document.getElementById("p11");
    let p12 =document.getElementById("p12");
    p1.style.display='none';
    p2.style.display='none';
    p3.style.display='none';
    p4.style.display='none';
    p5.style.display='block';
    p6.style.display='none';
    p7.style.display='none';
    p8.style.display='none';
    p9.style.display='none';
    p10.style.display='none';
    p11.style.display='none';
    p12.style.display='none';
}
function pasta(){
    let p1 =document.getElementById("p1");
    let p2 =document.getElementById("p2");
    let p3 =document.getElementById("p3");
    let p4 =document.getElementById("p4");
    let p5 =document.getElementById("p5");
    let p6 =document.getElementById("p6");
    let p7 =document.getElementById("p7");
    let p8 =document.getElementById("p8");
    let p9 =document.getElementById("p9");
    let p10 =document.getElementById("p10");
    let p11 =document.getElementById("p11");
    let p12 =document.getElementById("p12");
    p1.style.display='none';
    p2.style.display='none';
    p3.style.display='none';
    p4.style.display='block';
    p5.style.display='none';
    p6.style.display='none';
    p7.style.display='none';
    p8.style.display='none';
    p9.style.display='none';
    p10.style.display='none';
    p11.style.display='none';
    p12.style.display='none';
}



