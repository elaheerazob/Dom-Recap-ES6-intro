document.getElementById('Add-Border').addEventListener('click',function(){
    const friends =document.getElementById('friends-container');
    friends.style.border ='4px solid green';
    friends.style.padding ='20px';
})
function AddBackground(){
    const friend =document.getElementsByClassName('friend');
    for(const friends of friend){
        friends.style.background ='yellow';
        friends.style.padding ='5px';
        friends.style.margin ='20px';
    }
}

document.getElementById('Add-Friend').addEventListener('click',function(){
    const friendscontainer =document.getElementById('friends-container');
    const friends =document.createElement('div');
    friends.classList.add('friend');
    friends.innerHTML = `<h3 class="frind-name">New Friend </h3>
                        <p>Lorem, ipsum.</p>` ;
    friendscontainer.appendChild(friends);                     

})


