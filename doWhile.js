do
{
    var fullName = prompt("Enter your full name");
}
while(fullName.length<4);

do
{
    var number = prompt("Enter your mobile number");
}
while(number.length != 10 || isNaN(number) == true);

alert("Name = " +  fullName);

alert("Number = +91 " + number);
