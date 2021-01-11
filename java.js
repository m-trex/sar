const coan = ['B' , 'A' , 'B' , 'A'] ; 
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit' , e => {
    e.preventDefault();
    let score = 0 ;
    const useran = [form.q1.value , form.q2.value, form.q3.value, form.q4.value] ;
    useran.forEach((answer , index )=> {

       if (answer===coan[index]) {
           score +=25 ;
           
       }
    });
    scrollTo(0,0)
    
    result.classList.remove('d-none')
   let output = 0;
   const timer = setInterval(() => {
    result.querySelector('span').textContent= `${output}%` ;
    if (output === score) {
        clearInterval(timer);
       
    }
    else{
        output++;
    }
       
   }, 30);

});
setTimeout(() => {
    alert("يا مرحب بالاناركية و كوم النيتشاوية و سمعني احلى سلام لخطيئة الرب الثانية (المرأة)")
    
}, 5000);

