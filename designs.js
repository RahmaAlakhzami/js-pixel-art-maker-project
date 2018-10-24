var height, width, color;

// When size is submitted by the user, call makeGrid()
    $('#sizePicker').submit(function (event){
        event.preventDefault();
        height = $('#inputHeight').val();
        width = $('#inputWidth').val();
        makeGrid(height, width);
    })


function makeGrid(w ,h) {
        $('tr').remove();

 // Your code goes here!
    for (var row =1; row <= w; row++){
        $("#pixelCanvas").append('<tr id= table' + row + '></tr>');
        for (var col = 1; col <= h; col++){
            $('#table' + row).append('<td></td>');
        }
    }

 // Add color
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
