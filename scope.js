let bonus=30;
function add(frist,second){
    let result=frist+second+bonus;
    //console.log(result);
    //console.log(output);
    
    if(result>9){
        let mood="cool";     
        console.log(mood);
        return result;       /*when declare let or const type we are not access out of loop;
                                    when we are declare var we ar access out of loop....we are reading article about scope to visit link www.thatdude.js*/
    }
    

}
const output=add(20,33);
//console.log(output);