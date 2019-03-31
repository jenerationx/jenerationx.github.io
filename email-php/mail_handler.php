<?php

/* Replace with your email address here */
$mailto  = "jenny@sewmuchrun.com";


$name     	= strip_tags($_POST['name']);
$sub     	= strip_tags($_POST['subject']);
$email      = strip_tags($_POST['email']);
$message    = strip_tags($_POST['message']);

$subject = "Github Portfolio Message | Resume";

// HTML for email to send submission details
$body = "
<p><b>Name</b>: $name <br>
<b>Email</b>: $email<br>
<p><b>Subject</b>: $sub <br>
<p><b>Message</b>: $message</p>
";

// Success Message
$success = "Sent";
$error = "Failed";

$headers = "From: $name <$email> \r\n";
$headers .= "Reply-To: $email \r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
$headers2 = "From:" . $mailto;
$message = "<html><body>$body</body></html>";

if (mail($mailto, $subject, $message, $headers)) {
    echo "$success"; // success
} else {
    echo "$error"; // failure
}
