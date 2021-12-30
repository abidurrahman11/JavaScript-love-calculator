var yourName = prompt("Enter your name:");
        var yourNameWords = yourName.split(" ");
        for(var i = 0; i < yourNameWords.length; i++){
            yourNameWords[i] = yourNameWords[i][0].toUpperCase() + yourNameWords[i].substring(1).toLowerCase();
        }
        var name1 = yourNameWords.join(" ");

        var anotherName = prompt("Enter the name of the person you want:");
        var anotherNameWords = anotherName.split(" ");
        for(var i = 0; i < anotherNameWords.length; i++){
            anotherNameWords[i] = anotherNameWords[i][0].toUpperCase() + anotherNameWords[i].substring(1).toLowerCase();
        }
        var name2 = anotherNameWords.join(" ");

        var randomNumber = Math.random() * 100 + 1;
        var parcent = Math.ceil(randomNumber);

        document.write("<h2>Hey " + name1 + ", " + name2 + " loves you " + parcent + "%</h2>");