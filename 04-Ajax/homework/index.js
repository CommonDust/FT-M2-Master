
let showFriends = () =>{
    if($('#lista') !== $('#lista').empty()){
    $.get(`http://localhost:5000/amigos` , (data) => {
data.forEach(e => {
//     let li = document.createElement('li');
// li.id = e.id
// li.innerHTML = e.name;
// let list = document.getElementById('lista')
// list.appendChild(li)
$(`#lista`).append(`<li id="${e.id}">${e.name} X </li>`)
        
 
});
})
};       
 }

$('#boton').click(showFriends)



$('#search').click(() => {
    let id = $('#input').val();

//    let input = document.querySelector('#input')

        $.get(`http://localhost:5000/amigos/${id}`,  data => {
        // if($('#input') !== "" && $('#input').value.toLowerCase() === friends.name.toLowerCase()){

        $('#amigo').text(`${data.name}`)
        $('#input').val("")
    }
)}

)

$("#delete").click(() =>{
    let inputDelete =  $('#inputDelete').val()



$.ajax({
  url: `http://localhost:5000/amigos/${inputDelete}`,
  type: 'DELETE',
  success:  (result) => {
    $('#success').text("Te desconosi")
    console.log(result)
    $("#inputDelete").val("")
  }
 
  
})

showFriends()
})