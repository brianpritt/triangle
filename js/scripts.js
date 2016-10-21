
// Business
var triangleTest = function(s1, s2, s3) {

  if ((s1 + s2 <= s3)||(s2+s3 <= s1)||(s1 +s3<= s2)){
    return("#nota");
  }
  if (s1 >= 0 && s2>= 0 && s3 >= 0) {
      if (s1 === s2 && s2 === s3) {
      return("#equi");// $("#equi").show();
      } else if (((s1 === s2 && s2 != s3) && (s1&&s2&&s3)> 0)
            || ((s1 != s2 && s2 === s3 ) &&(s1&&s2&&s3)> 0)
            ||((s1 === s3 && s2 != s3) && (s1&&s2&&s3)> 0))
             {
        return("#isos");
      } else if ((s1 != s2 && s2 != s3)&&(s1&&s2&&s3) != 0){
        return("#scal");
      } else {
        return("#nota");
      }

  } else {
  alert("Please enter 3 values!");
}
};

//Front end
$(document).ready(function(){
    $("#main form").submit(function(event){
      var side1Input = parseInt($("#side1").val());
      var side2Input = parseInt($("#side2").val());
      var side3Input = parseInt($("#side3").val());

      var triangleType = triangleTest(side1Input, side2Input, side3Input);

      $("#equi, #isos, #scal, #nota").hide();
      $(triangleType).show();

    event.preventDefault();
  });
});
