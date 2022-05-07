var Modernizr = "";
var CheckRandom = 0;
var currentGuess = "";
var NewRandomNumber = 0;
var db = "";
var Eid = "";
//var sGroup = "RSOC";
var EidQuestion = "";
var ArrQuestion = [];
var NewQuestion = "";
var EidRandom = 0;
var ok = 0;
var MemberINClass = 0;
var SumAllMember = 0;
var sCampRound = "BM#3D1";


function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore().collection("BootMember");
}


$(document).ready(function () {
  document.getElementById("txtCampRound").value = sCampRound;
  Connect_DB();
  CountMember();
});



function AddNewData() {
  const myJSON = document.getElementById("txtDataJson").value;
  //alert(sCampRound);
  //alert(myJSON.length);
  //alert(myJSON);sCampRound
  var sTimeRegister = "";
  var MemberINClass = 0;
  const myArray = JSON.parse(myJSON);
  for (var i = 0; i < myJSON.length; i++) {
    MemberINClass = MemberINClass+1;
    console.log(MemberINClass+". "+myArray[i].EmpID+"====="+myArray[i].EmpName);
    db.add({
      EmpID : myArray[i].EmpID,
      //CampRound : myArray[i].CampRound,
      CampRound : sCampRound,
      EmpName : myArray[i].EmpName,
      ShortName : myArray[i].ShortName,
      //CampRound : myArray[i].CampRound,
      //EmpType : myArray[i].EmpType,
      EmpType : sCampRound,
      EmpTable : myArray[i].EmpTable,
      EmpPosition : myArray[i].EmpPosition,
      EmpBranch : myArray[i].EmpBranch,
      EmpZone : myArray[i].EmpZone,
      EmpRH : myArray[i].EmpRH,
      EmpBU : myArray[i].EmpBU,
      EmpChief : myArray[i].EmpChief,
      EmpSex : myArray[i].EmpSex,
      EmpSize : myArray[i].EmpSize,
      LineID : sTimeRegister,
      LinePicture : sTimeRegister,
      LineName : sTimeRegister,
      TimeRegister : sTimeRegister,
      TimeIN : sTimeRegister,
      StatusRegister : 0,
      TimeStampRec : 0
    });
  }
  alert("Add Done="+MemberINClass);
}


function DeleteMember() {
  //alert("Delete");
  MemberINClass = 0;
  db.where('CampRound','==', sCampRound)
  //.limit(1)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      db.doc(doc.id).delete();
      MemberINClass = MemberINClass+1;
      console.log(MemberINClass+". ");
    });
    alert("Delete = "+MemberINClass);
  });

}


function CountMember() {
  SumAllMember = 0;
  db.where('CampRound','==', sCampRound)
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
      SumAllMember = SumAllMember+1;
      //console.log(MemberINClass+". ");
    });
    $("#DisplayAllMember").html("จำนวน "+ SumAllMember+ " ข้อมูล");  
  });

}


function UpdateCode() {
  //alert(document.getElementById("txtCampRound").value);
  sCampRound = document.getElementById("txtCampRound").value;
  CountMember();
}