function listarDatos() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        type: 'GET',
        dataType: "html",
        success: function(e) {
            var data=JSON.parse(e);
            var lista="";
            for (let i = 0; i < data.length; i++) {
                lista+="<tr>"+
                "<td>"+
                    "<p>"+data[i].id+"</p>"+
                "</td>"+
                "<td>"+
                    "<p>"+data[i].name+"</p>"+
                "</td>" +
                "<td>"+
                    "<p>"+data[i].username+"</p>"+
                "</td>" +
                "<td>"+
                    "<p>"+data[i].email+"</p>"+
                "</td>" +
                "</tr>";
            }
            $("#lista-usuarios").html(lista);
            $('#table').DataTable();

            
        }
    });
    
}
