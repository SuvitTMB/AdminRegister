var Modernizr = "";
var CheckRandom = 0;
var currentGuess = "";
var NewRandomNumber = 0;
var db = "";
var Eid = "";
var sGroup = "BPA-1";
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
  db = firebase.firestore().collection("BootCamp");
}




$(document).ready(function () {
  Connect_DB();
  //AddNewData();
});

//const myJSON = '[{"CampRound": "R1","CampStatus": 0,"EmpType": "BM/MF#1","CampName": "BA/MF (รุ่น 1)","TrainingDays": "10-11 มกราคม 2565","Participant": "R2 (123)","EmpTarget": 123,"PicCamp": "v-1.png","Hotel": "Bangkok Marriott Marquis Queen s Park สุขุมวิท 22","WelcomePack": "","ListRules": "","LinkView": ""},{"CampRound": "R2","CampStatus": 0,"EmpType": "BM/MF#2","CampName": "BA/MF (รุ่น 2)","TrainingDays": "20-21 มกราคม 2565","Participant": "R1 (58) + R6 (55)","EmpTarget": 108,"PicCamp": "v-1.png","Hotel": "Bangkok Marriott Marquis Queen s Park สุขุมวิท 22","WelcomePack": "","ListRules": "","LinkView": ""},{"CampRound": "R3","CampStatus": 0,"EmpType": "BM/MF#3","CampName": "BA/MF (รุ่น 3)","TrainingDays": "1-2 กุมภาพันธ์ 2565","Participant": "R5 (76) + R3 (40)","EmpTarget": 116,"PicCamp": "v-1.png","Hotel": "Bangkok Marriott Marquis Queen s Park สุขุมวิท 22","WelcomePack": "","ListRules": "","LinkView": ""},{"CampRound": "R4","CampStatus": 0,"EmpType": "BM/MF#4","CampName": "BA/MF (รุ่น 4)","TrainingDays": "3-4 กุมภาพันธ์ 2565","Participant": "R4 (89) + R6(27)","EmpTarget": 114,"PicCamp": "v-1.png","Hotel": "Bangkok Marriott Marquis Queen s Park สุขุมวิท 22","WelcomePack": "","ListRules": "","LinkView": ""},{"CampRound": "R5","CampStatus": 0,"EmpType": "HL/CYH#1","CampName": "Home Loan (รุ่น 1)","TrainingDays": "8-9 กุมภาพันธ์ 2565","Participant": "R2 (58)+R6 (18) +R4(28)","EmpTarget": 104,"PicCamp": "v-1.png","Hotel": "Bangkok Marriott Marquis Queen s Park สุขุมวิท 22","WelcomePack": "","ListRules": "","LinkView": ""},{"CampRound": "R6","CampStatus": 0,"EmpType": "CYC/CYB#1","CampName": "CYC (รุ่น 1)","TrainingDays": "8-9 กุมภาพันธ์ 2565","Participant": "R6 (104)","EmpTarget": 106,"PicCamp": "v-1.png","Hotel": "Bangkok Marriott Marquis Queen s Park สุขุมวิท 22","WelcomePack": "","ListRules": "","LinkView": ""},{"CampRound": "R7","CampStatus": 0,"EmpType": "HL/CYH#2","CampName": "Home Loan (รุ่น 2)","TrainingDays": "10-11 กุมภาพันธ์ 2565","Participant": "R3 (52) + R5 (28) +R1 (38)","EmpTarget": 118,"PicCamp": "v-1.png","Hotel": "Centara Lardprao","WelcomePack": "","ListRules": "","LinkView": ""},{"CampRound": "R8","CampStatus": 0,"EmpType": "CYC/CYB#2","CampName": "CYC (รุ่น 2)","TrainingDays": "10-11 กุมภาพันธ์ 2565","Participant": "R5 (95)","EmpTarget": 95,"PicCamp": "v-1.png","Hotel": "Centara Lardprao","WelcomePack": "","ListRules": "","LinkView": ""},{"CampRound": "R9","CampStatus": 0,"EmpType": "CYC/CYB#3","CampName": "CYC (รุ่น 3)","TrainingDays": "1-2 มีนาคม 2565","Participant": "R1(77) + R4(45)","EmpTarget": 122,"PicCamp": "v-1.png","Hotel": "Bangkok Marriott Marquis Queen s Park สุขุมวิท 22","WelcomePack": "","ListRules": "","LinkView": ""},{"CampRound": "R10","CampStatus": 0,"EmpType": "CYC/CYB#4","CampName": "CYC (รุ่น 4)","TrainingDays": "3-4 มีนาคม 2565","Participant": "R2 (82) + R4 (46)","EmpTarget": 129,"PicCamp": "v-1.png","Hotel": "Bangkok Marriott Marquis Queen s Park สุขุมวิท 22","WelcomePack": "","ListRules": "","LinkView": ""},{"CampRound": "R11","CampStatus": 0,"EmpType": "CYC/CYB#5","CampName": "CYC (รุ่น 5)","TrainingDays": "9-10 มีนาคม 2565","Participant": "R3 (101) + R4 (18)","EmpTarget": 119,"PicCamp": "v-1.png","Hotel": "Bangkok Marriott Marquis Queen s Park สุขุมวิท 22","WelcomePack": "","ListRules": "","LinkView": ""}]';

function AddNewData() {
  var sTimeRegister = "";
  //const myJSON = '[{"CampRound": "RASC","CampStatus": 0,"EmpType": "RASC","CampName": "RASE WorkShop","TrainingDays": "13-ม.ค.-65","Participant": "RASE WorkShop","EmpTarget": 60,"PicCamp": "v-1.png","Hotel": "Bangkok Marriott Marquis Queen s Park สุขุมวิท 22","WelcomePack": "","ListRules": "","LinkView": ""}]';
  const myJSON ='[{"CampRound": "BPA-1","CampStatus": 0,"EmpType": "BPA#1","CampName": "BPA (Day 1)","TrainingDays": "27 มกราคม 2565","Participant": "BPA Forum Day 1","EmpTarget": 0,"PicCamp": "v-1.png","Hotel": "Marriott Bangkok The Surawongse","WelcomePack": "","ListRules": "","LinkView": ""},{"CampRound": "BPA-2","CampStatus": 0,"EmpType": "BPA#2","CampName": "BPA (Day 2)","TrainingDays": "28 มกราคม 2565","Participant": "BPA Forum Day 2","EmpTarget": 0,"PicCamp": "v-1.png","Hotel": "Marriott Bangkok The Surawongse","WelcomePack": "","ListRules": "","LinkView": ""}]';
  //const myJSON = '[{"EmpID": 51147,"EmpName": "เนวิน บุญฤทธิ์","ShortName": "เนวิน","EmpType": "BM/MF#1","EmpTable": 0,"EmpPosition": "Branch Banking Advisor","EmpBranch": "","EmpZone": "สาขาสำนักพหลโยธิน","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "M"},{"EmpID": 31941,"EmpName": "ธนบูลย์ แก้วปลาด","ShortName": "ธนบูลย์","EmpType": "BM/MF#1","EmpTable": 0,"EmpPosition": "Senior Personal Banking Advisor","EmpBranch": "","EmpZone": "สาขาสำนักพหลโยธิน","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "M"},{"EmpID": 15112,"EmpName": "จันทร์เพ็ญ ตู้จินดา","ShortName": "จันทร์เพ็ญ","EmpType": "BM/MF#1","EmpTable": 0,"EmpPosition": "Senior Branch Banking Advisor","EmpBranch": "","EmpZone": "สาขาสำนักพหลโยธิน","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F"},{"EmpID": 85383,"EmpName": "สรัญญา เพ็ญสวัสดิ์","ShortName": "สรัญญา","EmpType": "BM/MF#1","EmpTable": 0,"EmpPosition": "Branch Banking Advisor","EmpBranch": "สาขาวงศ์สว่าง ทาวน์ เซ็นเตอร์","EmpZone": "สำนักงานเขตธุรกิจสาขา-จตุจักร","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F"},{"EmpID": 48097,"EmpName": "สุภาวรรณ แนงแหยม","ShortName": "สุภาวรรณ","EmpType": "BM/MF#1","EmpTable": 0,"EmpPosition": "Branch Banking Advisor","EmpBranch": "สาขาวงศ์สว่าง ทาวน์ เซ็นเตอร์","EmpZone": "สำนักงานเขตธุรกิจสาขา-จตุจักร","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F"},{"EmpID": 48143,"EmpName": "อรรณพ อรุณมาศ","ShortName": "อรรณพ","EmpType": "BM/MF#1","EmpTable": 0,"EmpPosition": "Branch Banking Advisor","EmpBranch": "สาขาวงศ์สว่าง ทาวน์ เซ็นเตอร์","EmpZone": "สำนักงานเขตธุรกิจสาขา-จตุจักร","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "M"},{"EmpID": 82842,"EmpName": "ประพจน์ รุจิรานุพงศ์","ShortName": "ประพจน์","EmpType": "BM/MF#1","EmpTable": 0,"EmpPosition": "Senior Branch Banking Advisor","EmpBranch": "สาขาโลตัส ประชาชื่น","EmpZone": "สำนักงานเขตธุรกิจสาขา-จตุจักร","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "M"},{"EmpID": 11541,"EmpName": "ภัสธารีย์ เลิศธนาสิทธิภัทร","ShortName": "ภัสธารีย์","EmpType": "BM/MF#1","EmpTable": 0,"EmpPosition": "Senior Branch Banking Advisor","EmpBranch": "สาขาประชานิเวศน์ 1","EmpZone": "สำนักงานเขตธุรกิจสาขา-จตุจักร","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F"},{"EmpID": 46716,"EmpName": "อรพรรณ องอาจ","ShortName": "อรพรรณ","EmpType": "BM/MF#1","EmpTable": 0,"EmpPosition": "Senior Branch Banking Advisor","EmpBranch": "สาขาลาดพร้าว","EmpZone": "สำนักงานเขตธุรกิจสาขา-จตุจักร","EmpRH": "สำนักงานภาคธุรกิจสาขา 3","EmpBU": "Branch Banking Distribution","EmpChief": "CRBO","EmpSex": "F"}]';
  const myArray = JSON.parse(myJSON);
  for (var i = 0; i < myJSON.length; i++) {
    console.log(myArray[i].EmpID+"====="+myArray[i].EmpName);
    db.add({
      CampRound : myArray[i].CampRound,
      CampStatus : myArray[i].CampStatus,
      EmpType : myArray[i].EmpType,
      CampName : myArray[i].CampName,
      TrainingDays : myArray[i].TrainingDays,
      Participant : myArray[i].Participant,
      EmpTarget : myArray[i].EmpTarget,
      PicCamp : myArray[i].PicCamp,
      Hotel : myArray[i].Hotel,
      WelcomePack : myArray[i].WelcomePack,
      ListRules : myArray[i].ListRules,
      LinkView : myArray[i].LinkView
    });
  }
  alert("Add Done");
}
