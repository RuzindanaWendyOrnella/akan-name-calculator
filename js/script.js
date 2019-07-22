function userInformation(DD, month, YY, gender) {
  var DD = parseInt(document.getElementById('Day').value);
  var month = parseInt(document.getElementById('Month').value);
  var YY = parseInt(document.getElementById('year').value);
  var gender = document.getElementById('gender').value;

  var fullDate = [];
  fullDate.push(DD, month, YY, gender);

  console.log(fullDate);




  var cc = parseInt(YY.toString().slice(0, 2));
  console.log(cc);
  if (cc == 20) {
    var myFormula = 6 + (parseInt(DD) + parseInt(parseInt(YY.toString().substr(-2)) / 4));
    console.log(myFormula);

    var MM;
    if (month == 1) {
      MM = 0;
    } else if (month == 2 && DD <= 29) {
      MM = 3;
    } else if (month == 3) {
      MM = 4;
    } else if (month == 4) {
      MM = 0;
    } else if (month == 5) {
      MM = 2;
    } else if (month == 6) {
      MM = 5;
    } else if (month == 7) {
      MM = 0;
    } else if (month == 8) {
      MM = 3;
    } else if (month == 9) {
      MM = 6;
    } else if (month == 10) {
      MM = 1;
    } else if (month == 11) {
      MM = 4;
    } else if (month == 12) {
      MM = 6;
    } else {
      alert('invalid month');
    }

    if (DD > 0 && DD <= 31) {

      var dayOfWeek;
      var dayOfWeek = (6 + (parseInt(DD) + parseInt(parseInt(YY.toString().substr(-2)) / 4)) + parseInt(MM) + parseInt(YY.toString().substr(-2))) % 7;
      console.log(dayOfWeek);

      for (j = 0; j <= 6; j++) {
        if (dayOfWeek == 0) {
          console.log('you were born on a saturday');
        } else if (dayOfWeek == 1) {
          console.log('you were born on sunday');
        } else if (dayOfWeek == 2) {
          console.log('you were born on monday');
        } else if (dayOfWeek == 3) {
          console.log('you were born on tuesday');
        } else if (dayOfWeek == 4) {
          console.log('you were born on wednesday');
        } else if (dayOfWeek == 5) {
          console.log('you were born on thursday');
        } else if (dayOfWeek == 6) {
          console.log('you were born on friday');
        } else {
          console.log('wrong entry');
        }
      }
      /*Document.getElementById('yaw').innerHTML = 'your date is' + DD + '/' + month + '/' + YY*/
      if (dayOfWeek == 0 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwame,you were born on saturday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 1 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is Kwasi,you were born on sunday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 2 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwadwo,you were born on monday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 3 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwabena,you were born on tuesday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 4 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwaku ,you were born on wednesday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 5 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is yaw ,you were born on thursday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 6 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is Kofi ,you were born on friday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else {


        if (dayOfWeek == 0 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Ama,you were born on a saturday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 1 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Akosua,you were born on a sunday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 2 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Adwoa,you were born on a monday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 3 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Abenaa,you were born on a tuesday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 4 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Akua,you were born on a wednesday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 5 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Yaa ,you were born on a thursday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 6 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Afua ,you were born on a friday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else {
          alert('please enter your gender');
        }
      }
    } else {
      alert('invalid day');
    }


  } else if (cc == 19) {
    var myFormula = 0 + (parseInt(DD) + parseInt(parseInt(YY.toString().substr(-2)) / 4));
    console.log(myFormula);

    var MM;
    if (month == 1) {
      MM = 1;
    } else if (month == 2 && DD <= 29) {
      MM = 4;
    } else if (month == 3) {
      MM = 4;
    } else if (month == 4) {
      MM = 0;
    } else if (month == 5) {
      MM = 2;
    } else if (month == 6) {
      MM = 5;
    } else if (month == 7) {
      MM = 0;
    } else if (month == 8) {
      MM = 3;
    } else if (month == 9) {
      MM = 6;
    } else if (month == 10) {
      MM = 1;
    } else if (month == 11) {
      MM = 4;
    } else if (month == 12) {
      MM = 6;
    } else {
      alert('invalid month');
    }

    if (DD > 0 && DD <= 31) {
      var dayOfWeek;
      var dayOfWeek = (0 + (parseInt(DD) + parseInt(parseInt(YY.toString().substr(-2)) / 4)) + parseInt(MM) + parseInt(YY.toString().substr(-2))) % 7;
      console.log(dayOfWeek);
      for (j = 0; j <= 6; j++) {
        if (dayOfWeek == 0) {
          console.log('you were born on a saturday');
        } else if (dayOfWeek == 1) {
          console.log('you were born on sunday');
        } else if (dayOfWeek == 2) {
          console.log('you were born on monday');
        } else if (dayOfWeek == 3) {
          console.log('you were born on tuesday');
        } else if (dayOfWeek == 4) {
          console.log('you were born on wednesday');
        } else if (dayOfWeek == 5) {
          console.log('you were born on thursday');
        } else if (dayOfWeek == 6) {
          console.log('you were born on friday');
        } else {
          console.log('wrong entry');
        }
      }
      if (dayOfWeek == 0 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwame ,you were born on a saturday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 1 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is Kwasi,you were born on a sunday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 2 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwadwo,you were born on a monday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 3 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwabena ,you were born on a tuesday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 4 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwaku,you were born on a wednesday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 5 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is yaw,you were born on a thursday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 6 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is Kofi,you were born on a friday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else {


        if (dayOfWeek == 0 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Ama ,you were born on a saturday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 1 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Akosua,you were born on a sunday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 2 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Adwoa,you were born on a monday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 3 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Abenaa,you were born on a tuesday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 4 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Akua,you were born on a wednesday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 5 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Yaa,you were born on a thursday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 6 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Afua,you were born on a friday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else {
          document.getElementById('paragraph').innerHTML = 'error';
        }
      }
    } else {
      alert('invalid day');
    }

  } else if (cc == 18) {
    var myFormula = 2 + (parseInt(DD) + parseInt(parseInt(YY.toString().substr(-2)) / 4));
    console.log(myFormula);

    var MM;
    if (month == 1) {
      MM = 1;
    } else if (month == 2 && DD <= 29) {
      MM = 4;
    } else if (month == 3) {
      MM = 4;
    } else if (month == 4) {
      MM = 0;
    } else if (month == 5) {
      MM = 2;
    } else if (month == 6) {
      MM = 5;
    } else if (month == 7) {
      MM = 0;
    } else if (month == 8) {
      MM = 3;
    } else if (month == 9) {
      MM = 6;
    } else if (month == 10) {
      MM = 1;
    } else if (month == 11) {
      MM = 4;
    } else if (month == 12) {
      MM = 6;
    } else {
      alert('invalid month');
    }
    if (DD > 0 && DD <= 31) {

      var dayOfWeek;
      var dayOfWeek = (2 + (parseInt(DD) + parseInt(parseInt(YY.toString().substr(-2)) / 4)) + parseInt(MM) + parseInt(YY.toString().substr(-2))) % 7;
      console.log(dayOfWeek);
      for (j = 0; j <= 6; j++) {
        if (dayOfWeek == 0) {
          console.log('you were born on a saturday ');
        } else if (dayOfWeek == 1) {
          console.log('you were born on sunday ');
        } else if (dayOfWeek == 2) {
          console.log('you were born on monday ');
        } else if (dayOfWeek == 3) {
          console.log('you were born on tuesday ');
        } else if (dayOfWeek == 4) {
          console.log('you were born on wednesday ');
        } else if (dayOfWeek == 5) {
          console.log('you were born on thursday ');
        } else if (dayOfWeek == 6) {
          console.log('you were born on friday ');
        } else {
          console.log('wrong entry');
        }
      }
      if (dayOfWeek == 0 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwame,you were born on a saturday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 1 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is Kwasi,you were born on a sunday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 2 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwadwo,you were born on a monday and your birthdate is  ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 3 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwabena,you were born on a tuesday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 4 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is kwaku,you were born on a wednesday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 5 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is yaw,you were born on a thursday and your birthdate is  ' + DD + '/' + month + '/' + YY;
      } else if (dayOfWeek == 6 && gender == 'male') {
        document.getElementById('paragraph').innerHTML = 'your akan name is Kofi,you were born on a friday and your birthdate is ' + DD + '/' + month + '/' + YY;
      } else {


        if (dayOfWeek == 0 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Ama,you were born on a saturday and your birthdate is  ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 1 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Akosua,you were born on a sunday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 2 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Adwoa,you were born on a monday and your birthdate is  ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 3 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Abenaa,you were born on a tuesday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 4 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Akua,you were born on a wednesday and your birthdate is  ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 5 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Yaa,you were born on a thursday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else if (dayOfWeek == 6 && gender == 'female') {
          document.getElementById('paragraph').innerHTML = 'your akan name is Afua,you were born on a friday and your birthdate is ' + DD + '/' + month + '/' + YY;
        } else {
          document.getElementById('paragraph').innerHTML = 'error';
        }
      }
    } else {
      alert('invalid day');
    }


  } else {
    alert('please enter a valid date');
  }

}