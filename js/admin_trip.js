var dTable = "";
var dataSet = "";
var dataSrc = [];
var count = 0;
var sCampRound = 0;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;
var _0x2223a8=_0x4a06;function _0x4a06(_0x58d05f,_0x37522b){var _0x51897b=_0x5189();return _0x4a06=function(_0x4a065c,_0x574a38){_0x4a065c=_0x4a065c-0xa6;var _0x5ad908=_0x51897b[_0x4a065c];return _0x5ad908;},_0x4a06(_0x58d05f,_0x37522b);}function _0x5189(){var _0x4c9d9a=['1193208OLbmRR','retailproject-6f4fc.firebaseapp.com','793537bcfEnc','1029280khHJRm','AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','3048VLbdVv','retailproject-6f4fc','653667385625','15090327YLbHCA','3241BeunWp','20392sIqUAD','retailproject-6f4fc.appspot.com','380qTLowL','1133772GbhIaw','G-9SKTRHHSW9'];_0x5189=function(){return _0x4c9d9a;};return _0x5189();}(function(_0xd95154,_0xe1abc4){var _0xb84bf7=_0x4a06,_0x110b75=_0xd95154();while(!![]){try{var _0x27bd57=-parseInt(_0xb84bf7(0xab))/0x1+-parseInt(_0xb84bf7(0xa9))/0x2+-parseInt(_0xb84bf7(0xa7))/0x3+-parseInt(_0xb84bf7(0xb3))/0x4*(-parseInt(_0xb84bf7(0xa6))/0x5)+parseInt(_0xb84bf7(0xae))/0x6*(parseInt(_0xb84bf7(0xb2))/0x7)+-parseInt(_0xb84bf7(0xac))/0x8+parseInt(_0xb84bf7(0xb1))/0x9;if(_0x27bd57===_0xe1abc4)break;else _0x110b75['push'](_0x110b75['shift']());}catch(_0x436a60){_0x110b75['push'](_0x110b75['shift']());}}}(_0x5189,0x624c6));var firebaseConfig={'apiKey':_0x2223a8(0xad),'authDomain':_0x2223a8(0xaa),'projectId':_0x2223a8(0xaf),'storageBucket':_0x2223a8(0xb4),'messagingSenderId':_0x2223a8(0xb0),'appId':'1:653667385625:web:a5aed08500de80839f0588','measurementId':_0x2223a8(0xa8)};
firebase.initializeApp(firebaseConfig);
var dbStockList = firebase.firestore().collection("TripPrudential");
var dateString="";

SelectMeunu();
//loadData();

function SelectMeunu() {
  //ResetTrip();
  loadData();
}


function loadData() {
  var i = 0;
  count = 0;
  dataSet = "";
  dataSrc = [];
  //dbStockList.where('CampRound','==',parseInt(sStatusOrder))
  dbStockList.orderBy('EmpID','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      i = (i+1);
      var ShowTrip = "";
      if(doc.data().ConfirmTrip==1) { ShowTrip = "<font color='#0056ff'><b>Confirm</b></font>"; } else 
      if(doc.data().ConfirmTrip==2) { ShowTrip = "<font color='#002d63'><b>Chenge</b></font>"; } else 
      if(doc.data().ConfirmTrip==3) { ShowTrip = "<font color='#ff0000'><b>Cancel</b></font>"; } else {
         ShowTrip = "-";
      }
      dataSet = [doc.data().RankID, doc.data().EmpID, doc.data().EmpName, doc.data().EmpBranch,doc.data().EmpZone ,doc.data().EmpRH , ShowTrip, doc.data().DateConfirm,  "<div class='btn-t1 btn-add' id="+i+">คลิก</div>", doc.id, i];
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
        { title: "RankID" , className: "txt-center" },
        { title: "EmpID" , className: "txt-center" },
        { title: "EmpName" },
        { title: "EmpBranch" },
        { title: "EmpZone" },
        { title: "EmpRH" },
        { title: "ConfirmTrip", className: "txt-center" },
        { title: "DateConfirm" },
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
            ClickID(dTable.row( this ).data()[9],dTable.row( this ).data()[10]);
        }
        //console.log(dTable.row( this ).data()[6]);
      });
  });
  $('#ex-table').DataTable().destroy();
  $("#ex-table tbody").remove();
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
      var ShowTrip = "";
      if(doc.data().ConfirmTrip==1) { ShowTrip = "<font color='#0056ff'><b>Confirm</b></font>"; } else
      if(doc.data().ConfirmTrip==2) { ShowTrip = "<font color='#002d63'><b>Chenge</b></font>"; } else 
      if(doc.data().ConfirmTrip==3) { ShowTrip = "<font color='#ff0000'><b>Cancel</b></font>"; } else {
         ShowTrip = "-";
      }
      str += '<div style="margin-top:10px;">';
      str += '<div class="redeem-header">'+ doc.data().EmpName +'</div>';
      str += '<div style="width:300px;margin:auto;text-align: left;">';
      str += '<div class="redeem-txt4">สถานะ</div>';
      str += '<div class="redeem-txt5">'+ ShowTrip +'</div>';
      str += '<div class="redeem-txt4">วันที่</div>';
      str += '<div class="redeem-txt5">'+ doc.data().DateConfirm+'</div>';
/*
      str += '<div class="redeem-txt4">วันที่</div>';
      str += '<div class="redeem-txt5"><input type="text" value="'+ doc.data().TrainingDays +'" id="idTrainingDays"></div>';
      str += '<div class="redeem-txt4">จำนวน</div>';
      str += '<div class="redeem-txt5"><input type="text" value="'+ doc.data().EmpTarget +'" id="idEmpTarget"></div>';
      str += '<div class="redeem-txt4">กลุ่ม</div>';
      str += '<div class="redeem-txt5"><input type="text" value="'+ doc.data().Participant +'" id="idParticipant"></div>';
      str += '<div class="redeem-txt4">สถานที่</div>';
      str += '<div class="redeem-txt5"><input type="text" value="'+ doc.data().Hotel +'" id="idHotel"></div>';
*/
      str += '</div><div class="clr"></div>';
      str += '<div class="btn-t1" onclick="SaveClass(\''+ doc.id +'\')" style="margin:30px auto 20px auto;">Reset Data</div>';
      str += '<div class="btn-t2" onclick="CloseAll()" style="margin:30px auto 20px 10px;">ปิดหน้าต่างนี้</div>';
      str += '<div class="clr"></div>';

      //str += '<div class="btn-t2" onclick="CloseAll()" style="margin-top:20px;">ยกเลิก</div></div>';
    });
    $("#DisplayByItem").html(str);
  });
  document.getElementById("id01").style.display = "block";
}


function ResetTrip() {
  dbStockList.orderBy('EmpID','asc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      dbStockList.doc(doc.id).update({
        ConfirmTrip : 0,
        DateConfirm : "",
        DateTimeStamp : 0,
        LineID : "",
        LineName : "",
        LinePicture : ""
      });
      //i = (i+1);
    }); 
  }); 
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
  dbStockList.doc(x).update({
    ConfirmTrip : 0,
    DateConfirm : "",
    DateTimeStamp : 0,
    LineID : "",
    LineName : "",
    LinePicture : ""
  });
  document.getElementById('id01').style.display='none';
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
}


function UpdateData() {
  loadData();
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

