var dTable = "";
var dataSet = "";
var dataSrc = [];
var count = 0;
var sCampStatus = 0;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var _0x2223a8=_0x4a06;function _0x4a06(_0x58d05f,_0x37522b){var _0x51897b=_0x5189();return _0x4a06=function(_0x4a065c,_0x574a38){_0x4a065c=_0x4a065c-0xa6;var _0x5ad908=_0x51897b[_0x4a065c];return _0x5ad908;},_0x4a06(_0x58d05f,_0x37522b);}function _0x5189(){var _0x4c9d9a=['1193208OLbmRR','retailproject-6f4fc.firebaseapp.com','793537bcfEnc','1029280khHJRm','AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','3048VLbdVv','retailproject-6f4fc','653667385625','15090327YLbHCA','3241BeunWp','20392sIqUAD','retailproject-6f4fc.appspot.com','380qTLowL','1133772GbhIaw','G-9SKTRHHSW9'];_0x5189=function(){return _0x4c9d9a;};return _0x5189();}(function(_0xd95154,_0xe1abc4){var _0xb84bf7=_0x4a06,_0x110b75=_0xd95154();while(!![]){try{var _0x27bd57=-parseInt(_0xb84bf7(0xab))/0x1+-parseInt(_0xb84bf7(0xa9))/0x2+-parseInt(_0xb84bf7(0xa7))/0x3+-parseInt(_0xb84bf7(0xb3))/0x4*(-parseInt(_0xb84bf7(0xa6))/0x5)+parseInt(_0xb84bf7(0xae))/0x6*(parseInt(_0xb84bf7(0xb2))/0x7)+-parseInt(_0xb84bf7(0xac))/0x8+parseInt(_0xb84bf7(0xb1))/0x9;if(_0x27bd57===_0xe1abc4)break;else _0x110b75['push'](_0x110b75['shift']());}catch(_0x436a60){_0x110b75['push'](_0x110b75['shift']());}}}(_0x5189,0x624c6));var firebaseConfig={'apiKey':_0x2223a8(0xad),'authDomain':_0x2223a8(0xaa),'projectId':_0x2223a8(0xaf),'storageBucket':_0x2223a8(0xb4),'messagingSenderId':_0x2223a8(0xb0),'appId':'1:653667385625:web:a5aed08500de80839f0588','measurementId':_0x2223a8(0xa8)};
firebase.initializeApp(firebaseConfig);
var dbStockList = firebase.firestore().collection("BootCamp");
var dateString="";

SelectMeunu();
//loadData();

function SelectMeunu() {
  sCampStatus = document.getElementById("ClickMenu").value;
  loadData();
}


function loadData() {
  var i = 0;
  count = 0;
  //sStatusOrder = x;
  dataSet = "";
  dataSrc = [];
  dbStockList.where('CampStatus','==',parseInt(sCampStatus))
  //dbStockList.orderBy('CampRound','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      i = (i+1);
      dataSet = [doc.data().CampRound, doc.data().CampName, doc.data().EmpType,doc.data().EmpTarget , doc.data().Hotel,doc.data().TrainingDays, "<div class='btn-t1 btn-add' id="+i+">คลิก</div>", doc.id, i];
      dataSrc.push(dataSet);
      count++;
    }); 
    //alert(count);
    //console.log("Select : "+ sStatusOrder +" | จำนวน "+ count + " ข้อมูล");
    document.getElementById('loading').style.display = 'none';
    //document.getElementById('OpenData').style.display = 'block';

    dTable=$('#ex-table').DataTable({
      "bDestroy": true,    
      data: dataSrc,
      columns: [
        { title: "CampRound" , className: "txt-center" },
        { title: "CampName" },
        { title: "EmpType" , className: "txt-center" },
        { title: "เป้าหมาย" , className: "txt-center" },
        { title: "สถานที่" },
        { title: "วันที่" },
        { title: "รายการ", className: "txt-center" }
        ],
        dom: 'lfrtipB',
        buttons: [
            //'copy', 'excelFlash', 'excel', 'pdf', 'print',{
            'copy', 'excelFlash', 'excel', 'pdf', 'print'
        ],
          lengthMenu: [[30, 50, 100, -1], [30, 50, 100, "All"]],

        columnDefs: [ { type: 'text', 'targets': [1] } ],
        order: [[ 1, 'asc']]
        //dom: 'Bfrtip', buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ]
      });   
      $('#ex-table tbody').on( 'click', 'tr', function () {
        var data = dTable.row( $(this).parents('tr') ).data();
        if(count!=0) {
            ClickID(dTable.row( this ).data()[7],dTable.row( this ).data()[8]);
        }
        //console.log(dTable.row( this ).data()[6]);
      });
  });
  //document.getElementById("OpenData").style.display = "block";
  $('#ex-table').DataTable().destroy();
  $("#ex-table tbody").remove();
}


function UpdateData() {
  loadData();
}

var EidStockList = "";
function ClickID(x,id) {
  var sid = id;
  //alert(id);
  var str = "";
  dbStockList.where(firebase.firestore.FieldPath.documentId(), "==", x)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidStockList = doc.id;
      str += '<div style="margin-top:10px;">';
      str += '<div class="redeem-header">'+ doc.data().CampName +'</div>';
      str += '<div style="width:500px;margin:auto;text-align: left;">';
      str += '<div class="redeem-txt4">สถานะ</div>';
      str += '<div class="redeem-txt5"><input type="text" value="'+ doc.data().CampStatus +'" id="idCampStatus"> (0. ยังไม่เปิด | 1. อบรม | 2. BootCamp | 9. ปิดแล้ว)</div>';
      str += '<div class="redeem-txt4">รหัสรุ่น</div>';
      str += '<div class="redeem-txt5">'+ doc.data().CampRound +'</div>';
      str += '<div class="redeem-txt4">กิจกรรม</div>';
      str += '<div class="redeem-txt5"><input type="text" value="'+ doc.data().CampName +'" id="idCampName" style="width:100%;"></div>';
      str += '<div class="redeem-txt4">จำนวน</div>';
      str += '<div class="redeem-txt5"><input type="text" value="'+ doc.data().EmpTarget +'" id="idEmpTarget"></div>';
      str += '<div class="redeem-txt4">กลุ่ม</div>';
      str += '<div class="redeem-txt5"><input type="text" value="'+ doc.data().Participant +'" id="idParticipant" style="width:100%;"></div>';
      str += '<div class="redeem-txt4">สถานที่</div>';
      str += '<div class="redeem-txt5"><input type="text" value="'+ doc.data().Hotel +'" id="idHotel" style="width:100%;"></div>';
      str += '<div class="redeem-txt4">วันที่</div>';
      str += '<div class="redeem-txt5"><input type="text" value="'+ doc.data().TrainingDays +'" id="idTrainingDays"></div>';
      str += '</div><div class="clr"></div>';
      str += '<div class="btn-t1" onclick="SaveClass(\''+ doc.id +'\')" style="margin:30px auto 20px auto;">บันทึกรายการ</div>';
      str += '<div class="btn-t2" onclick="CloseAll()" style="margin:30px auto 20px 10px;">ปิดหน้าต่างนี้</div>';
      str += '<div class="clr"></div>';
    });
    $("#DisplayByItem").html(str);
  });
  document.getElementById("id01").style.display = "block";
}


function AddNewJob() {
  var str = "";
  str += '<div style="margin-top:10px;">';
  str += '<div class="redeem-header">เพิ่มข้อมูลลงทะเบียนใหม่</div>';
  str += '<div style="width:500px;margin:auto;text-align: left;">';
  str += '<div class="redeem-txt4">สถานะ</div>';
  str += '<div class="redeem-txt5"><input type="text" value="0" id="idCampStatus"> (0. ยังไม่เปิด | 1. อบรม | 2. BootCamp | 9. ปิดแล้ว)</div>';
  str += '<div class="redeem-txt4">รหัสรุ่น</div>';
  str += '<div class="redeem-txt5"><input type="text" value="" id="idCampRound" style="width:100%;"></div>';
  str += '<div class="redeem-txt4">กิจกรรม</div>';
  str += '<div class="redeem-txt5"><input type="text" value="" id="idCampName" style="width:100%;"></div>';
  str += '<div class="redeem-txt4">จำนวน</div>';
  str += '<div class="redeem-txt5"><input type="text" value="" id="idEmpTarget"></div>';
  str += '<div class="redeem-txt4">กลุ่ม</div>';
  str += '<div class="redeem-txt5"><input type="text" value="" id="idParticipant" style="width:100%;"></div>';
  str += '<div class="redeem-txt4">สถานที่</div>';
  str += '<div class="redeem-txt5"><input type="text" value="" id="idHotel" style="width:100%;"></div>';
  str += '<div class="redeem-txt4">วันที่</div>';
  str += '<div class="redeem-txt5"><input type="text" value="" id="idTrainingDays"></div>';
  str += '</div><div class="clr"></div>';
  str += '<div class="btn-t1" onclick="SaveNewJob()" style="margin:30px auto 20px auto;">บันทึกรายการ</div>';
  str += '<div class="btn-t2" onclick="CloseAll()" style="margin:30px auto 20px 10px;">ปิดหน้าต่างนี้</div>';
  str += '<div class="clr"></div>';
  $("#DisplayNewJob").html(str);
  document.getElementById("id02").style.display = "block";
  document.getElementById("idCampStatus").value=null;
  document.getElementById("idCampRound").value=null;
  document.getElementById("idCampName").value=null;
  document.getElementById("idTrainingDays").value=null;
  document.getElementById("idEmpTarget").value=null;
  document.getElementById("idParticipant").value=null;
  document.getElementById("idHotel").value=null;
}


function SaveNewJob() {
  var sidCampStatus = document.getElementById("idCampStatus").value;
  var sidCampRound = document.getElementById("idCampRound").value;
  var sidCampName = document.getElementById("idCampName").value;
  var sidTrainingDays = document.getElementById("idTrainingDays").value;
  var sidEmpTarget = document.getElementById("idEmpTarget").value;
  var sidParticipant = document.getElementById("idParticipant").value;
  var sidHotel = document.getElementById("idHotel").value;
  //alert(sidCampRound);
  dbStockList.add({
    CampStatus : parseFloat(sidCampStatus),
    CampRound : sidCampRound,
    EmpType : sidCampRound,
    CampName : sidCampName,
    TrainingDays : sidTrainingDays,
    EmpTarget : sidEmpTarget,
    Participant : sidParticipant,
    Hotel : sidHotel
  });
  document.getElementById('id02').style.display='none';
  UpdateData()
}


function SendGift(x,id) {
  NewDate();
  //alert(x+"==="+EidStockList);
  dbStockList.doc(EidStockList).update({
    StatusOrder : 1,
    DateSend : dateString
  });
  //alert("Confirm");
  document.getElementById(id).style.display = "none";
  CloseAll();
}


function SaveClass(x) {
  var sidCampStatus = document.getElementById("idCampStatus").value;
  var sidCampName = document.getElementById("idCampName").value;
  var sidTrainingDays = document.getElementById("idTrainingDays").value;
  var sidEmpTarget = document.getElementById("idEmpTarget").value;
  var sidParticipant = document.getElementById("idParticipant").value;
  var sidHotel = document.getElementById("idHotel").value;
  dbStockList.doc(x).update({
    CampStatus : parseFloat(sidCampStatus),
    CampName : sidCampName,
    TrainingDays : sidTrainingDays,
    EmpTarget : sidEmpTarget,
    Participant : sidParticipant,
    Hotel : sidHotel
  });
  document.getElementById('id01').style.display='none';
  UpdateData()
  //alert("บันทึกรายการแก้ไขเรียบร้อยแล้ว");
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
  document.getElementById('id02').style.display='none';
}


function NewDate() {
  var today = new Date();
  var day = today.getDate() + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';

  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);
  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;
  //alert(GetNewDate);
  //console.log(day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm);
}


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}

