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
  Connect_DB();
  //AddNewData();
});

function AddNewData() {
  var sTimeRegister = "";
  var MemberINClass = 0;
  //R4
  //const myJSON = '';
  const myJSON = '[{"EmpID": 8400,"EmpName": "จิรัฐติกาล ติตถะสิริ","ShortName": "จิรัฐติกาล","CampRound": "T01Day1","EmpType": "Train#01Day1","EmpTable": 0,"EmpPosition": "CYC/CYB Specialist","EmpBranch": "สาขาซีคอน บางแค","EmpZone": "สำนักงานเขตธุรกิจสาขา-จอมทอง","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F","ATKimg": "","EmpSize": ""},{"EmpID": 82491,"EmpName": "วรวลัญช์ หะรินเดช","ShortName": "วรวลัญช์","CampRound": "T01Day1","EmpType": "Train#01Day1","EmpTable": 0,"EmpPosition": "Senior CYC/CYB Specialist","EmpBranch": "สาขาซีคอน บางแค","EmpZone": "สำนักงานเขตธุรกิจสาขา-จอมทอง","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F","ATKimg": "","EmpSize": ""},{"EmpID": 82479,"EmpName": "ไพโรจน์ รัชชเจริญวาณิช","ShortName": "ไพโรจน์","CampRound": "T01Day1","EmpType": "Train#01Day1","EmpTable": 0,"EmpPosition": "CYC/CYB Specialist","EmpBranch": "สาขาเซ็นทรัลพลาซา พระราม 2","EmpZone": "สำนักงานเขตธุรกิจสาขา-จอมทอง","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "M","ATKimg": "","EmpSize": ""},{"EmpID": 82480,"EmpName": "อมรเทพ ไชยพรม","ShortName": "อมรเทพ","CampRound": "T01Day1","EmpType": "Train#01Day1","EmpTable": 0,"EmpPosition": "CYC/CYB Specialist","EmpBranch": "สาขาเซ็นทรัลพลาซา พระราม 2","EmpZone": "สำนักงานเขตธุรกิจสาขา-จอมทอง","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "M","ATKimg": "","EmpSize": ""},{"EmpID": 82531,"EmpName": "นิอร สถาพรสถิตย์สุข","ShortName": "นิอร","CampRound": "T01Day1","EmpType": "Train#01Day1","EmpTable": 0,"EmpPosition": "Senior CYC/CYB Specialist","EmpBranch": "สาขาถนนจอมทอง","EmpZone": "สำนักงานเขตธุรกิจสาขา-จอมทอง","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F","ATKimg": "","EmpSize": ""},{"EmpID": 82492,"EmpName": "ประไพ บุญกันหา","ShortName": "ประไพ","CampRound": "T01Day1","EmpType": "Train#01Day1","EmpTable": 0,"EmpPosition": "Senior CYC/CYB Specialist","EmpBranch": "สาขาถนนเพชรเกษม-หนองแขม","EmpZone": "สำนักงานเขตธุรกิจสาขา-จอมทอง","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F","ATKimg": "","EmpSize": ""},{"EmpID": 82538,"EmpName": "นันทนา มีซิน","ShortName": "นันทนา","CampRound": "T01Day1","EmpType": "Train#01Day1","EmpTable": 0,"EmpPosition": "CYC/CYB Specialist","EmpBranch": "สาขาถนนสุขสวัสดิ์-ราษฎร์บูรณะ","EmpZone": "สำนักงานเขตธุรกิจสาขา-จอมทอง","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F","ATKimg": "","EmpSize": ""},{"EmpID": 82501,"EmpName": "อมรรัตน์ สิมิวณิชย์","ShortName": "อมรรัตน์","CampRound": "T01Day1","EmpType": "Train#01Day1","EmpTable": 0,"EmpPosition": "Senior CYC/CYB Specialist","EmpBranch": "สาขาถนนเอกชัย (บางบอน 5)","EmpZone": "สำนักงานเขตธุรกิจสาขา-จอมทอง","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F","ATKimg": "","EmpSize": ""},{"EmpID": 82539,"EmpName": "ยาจิตร แซ่ฉั่ว","ShortName": "ยาจิตร","CampRound": "T01Day1","EmpType": "Train#01Day1","EmpTable": 0,"EmpPosition": "CYC/CYB Specialist","EmpBranch": "สาขาบางมด","EmpZone": "สำนักงานเขตธุรกิจสาขา-จอมทอง","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F","ATKimg": "","EmpSize": ""},{"EmpID": 82474,"EmpName": "ธนัชพร ไทยวิจิตร","ShortName": "ธนัชพร","CampRound": "T01Day1","EmpType": "Train#01Day1","EmpTable": 0,"EmpPosition": "CYC/CYB Specialist","EmpBranch": "สาขาบิ๊กซี บางบอน","EmpZone": "สำนักงานเขตธุรกิจสาขา-จอมทอง","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F","ATKimg": "","EmpSize": ""}]';
  const myArray = JSON.parse(myJSON);
  for (var i = 0; i < myJSON.length; i++) {
    MemberINClass = MemberINClass+1;
    console.log(myArray[i].EmpID+"====="+myArray[i].EmpName);
    db.add({
      EmpID : myArray[i].EmpID,
      CampRound : myArray[i].CampRound,
      EmpName : myArray[i].EmpName,
      ShortName : myArray[i].ShortName,
      CampRound : myArray[i].CampRound,
      EmpType : myArray[i].EmpType,
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
      StatusRegister : 0,
      TimeStampRec : 0
    });
  }
  alert("Add Done="+MemberINClass);
}
