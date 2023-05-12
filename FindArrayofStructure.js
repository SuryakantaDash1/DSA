function Alert() {
          
    var guardians = ["Quill", "Gamora",
            "Groot", "Rocket", "Drax", 21];
      
    // Prints the array elements with a comma
    // separated but not the structure
    document.getElementById("d1").innerHTML
            = "Guardians = " + guardians;
      
    // Alerts the window with the array
    console.log(JSON.stringify(guardians))
      
    // Alerts the window with a customized array
    console.log(JSON.stringify(guardians, 9, 1))
}