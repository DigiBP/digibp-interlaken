function main() 
{
    console.log("ajax request will require cors enabled");
    $.ajax
    ({
        dataType: "json",
        url: "https://interlaken.herokuapp.com/rest/version",
        success: function(data) 
        {
            console.log("log response on success");
            console.log(data);
        }
    });
}