<?php

$pwd = $_POST['pwd'];
$title =$_POST['title'];
$content =$_POST['content'];
$evolCount = $_POST['evolcount'];
$dreadCount =$_POST['dreadcount'];
$exalCount =$_POST['exalcount'];
$annulCount =$_POST['annulcount'];

$connect = mysqli_connect("localhost","root","");
mysqli_select_db($connect,"site");
$inrec = "insert into board(title,content,pwd,hits,evolorb,dread,exalorb,annulorb)values('$title','$content','$pwd',0,$evolCount,$dreadCount,$exalCount,$annulCount)";

$info = mysqli_query($connect,$inrec);

if(!$info)
    die("작성 실패");

echo "작성하신 글이 등록되었습니다.<br>";
mysqli_close($connect);
?>
<a href="home.html">처음으로 돌아가기</a>