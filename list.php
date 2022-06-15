<html>
<head>

<style>
    table {
        border :1px solid; border-collapse: collapse;
    }
    th,td { border : 1px solid;}

    body {
        
    }
</style>
</head>
<body>
<?php

$conn = mysqli_connect('localhost','root',"",'site');

if(mysqli_connect_errno()){
    mysqli_connect_errno();
    
}

$query ="select no,title,evolorb,dread,exalorb,annulorb from board";

$result = mysqli_query($conn,$query);

print "<center><table><tr>".
    "<th>No</th>".
    "<th> title</th>".
    "<th> evolOrb</th>".
    "<th> dread</th>".
    "<th> exalOrb</th>".
    "<th> anuulOrb</th></tr>";

while($row = mysqli_fetch_row($result)){
    print"<tr><td>". $row[0]."</td>".
    "<td>". $row[1]."</td>".
    "<td>". $row[2]."</td>".
    "<td>". $row[3]."</td>".
    "<td>". $row[4]."</td>".
    "<td>". $row[5]."</td></tr></center>";
}
print"</table>";
mysqli_free_result($result);
mysqli_close($conn);
?>

</body>
</html>