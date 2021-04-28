let calculate = document.querySelector(".chis");
    let count = document.querySelector(".buttonCountNumber");
    calculation = document.querySelector(".chis").innerHTML;
    
    document.querySelector(".plus").onclick = function() {
      let countPlus = count.innerHTML;
      if(+countPlus){
        count.innerHTML++;
        let countPlus = count.innerHTML;
        calculate.innerHTML = calculations(countPlus) ;
      }
    }
    
    document.querySelector(".minus").onclick = function() {
      let countMinus = count.innerHTML;
      if(+countMinus >= 2){
        count.innerHTML--;
        let countMinus = count.innerHTML;
        calculate.innerHTML = calculations(countMinus) ;
      }
    }
    
    calculations = (count) => {
      return (+count)*(+calculation);
    }