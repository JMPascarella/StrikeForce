//Function to change the current photo on click

function photoChange() {

    switch (document.getElementById("A").src) {
        case "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/001.JPG":
            document.getElementById("A").src="file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/002.JPG";
            document.getElementById("B").href="file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/002.JPG";
            break;
        
        case "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/002.JPG":
            document.getElementById("A").src = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/003.JPG";
            document.getElementById("B").href = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/003.JPG";
            break;

        case "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/003.JPG":
            document.getElementById("A").src = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/004.JPG";
            document.getElementById("B").href = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/004.JPG";
            break;

        case "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/004.JPG":
            document.getElementById("A").src = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/005.JPG";
            document.getElementById("B").href = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/005.JPG";
            break;    

        case "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/005.JPG":
            document.getElementById("A").src = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/006.JPG";
            document.getElementById("B").href = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/006.JPG";
            break;  

        case "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/006.JPG":
            document.getElementById("A").src = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/007.JPG";
            document.getElementById("B").href = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/007.JPG";
            break; 

        case "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/007.JPG":
            document.getElementById("A").src = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/008.JPG";
            document.getElementById("B").href = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/008.JPG";
            break; 

        case "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/008.JPG":
            document.getElementById("A").src = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/009.JPG";
            document.getElementById("B").href = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/009.JPG";
            break; 

        case "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/009.JPG":
            document.getElementById("A").src = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/010.JPG";
            document.getElementById("B").href = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/010.JPG";
            break; 

        default:
            document.getElementById("A").src = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/001.JPG";
            document.getElementById("B").href = "file:///C:/Users/JmPascarella/Documents/GitHub/StrikeForce/images/batRepSept01/001.JPG";
            break;
    }
}