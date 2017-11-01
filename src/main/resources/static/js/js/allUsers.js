
document.addEventListener("DOMContentLoaded", function () {

    // Function that sorts table by name in ascending order
    var sortAscName = document.getElementById("sortAscName");
    sortAscName.addEventListener("click", function (event) {

        //I take table by id myTable and create a sort function that
        // takes the first column name and compere a and b with each other

        $('#myTable tr').sort(function (a, b) {
            var aText = $(a).find('td:eq(0)').text();
            var bText = $(b).find('td:eq(0)').text();

            if (aText > bText)
                return 1;
            else if (aText < bText)
                return -1;
            return 0;
        }).appendTo('#myTable');
    });



    // Function that sorts table by name in descending order
    var sortDescName = document.getElementById("sortDscName");
    //I take table by id myTable and create a sort function that
    // takes the first column name and compere a and b with each other
    // to sort it in descending order , there is used tr:not(:first) to ommit
    // the first row where are the titles of columns

    sortDescName.addEventListener("click", function (event) {

        $('#myTable tr:not(:first)').sort(function (a, b) {
            var aText = $(a).find('td:eq(0)').text();
            var bText = $(b).find('td:eq(0)').text();

            if (aText < bText)
                return 1;
           else if (aText > bText)
        return -1;
    return 0;
}).appendTo('#myTable');
});

    //Function that sorts table by age in ascending order
    var sortAscAge = document.getElementById("sortAscAge");
    //I take table by id myTable and create a sort function that
    // takes the second column age and compere a and b with each other.
    // After taking the value a and b form html they are parsed to integers
    // so I can take a difference and sort them in ascending order.
    sortAscAge.addEventListener("click", function (event) {

        $('#myTable tr:not(:first)').sort(function (a, b) {
            var aSort = parseInt($(a).find('td:eq(1)').text());
            var bSort = parseInt($(b).find('td:eq(1)').text());
             return aSort - bSort;
        }).appendTo('#myTable');
    });

    //Function that sorts table by age in descending order
    var sortDscAge = document.getElementById("sortDscAge");

    //I take table by id myTable to create a sort function that
    // takes the second column age and compere a and b with each other.There is also used tr:not(:first) to ommit
    // the first row where are the titles of columns.
    // After taking the value a and b form html they are parsed to integers
    // so I can take a difference and sort them in descending order.
    sortDscAge.addEventListener("click", function (event) {

        $('#myTable tr:not(:first)').sort(function (a, b) {
            var aSort = parseInt($(a).find('td:eq(1)').text());
            var bSort = parseInt($(b).find('td:eq(1)').text());
            return bSort - aSort;
        }).appendTo('#myTable');
    });
})