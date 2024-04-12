let notes =[];
const createNote=()=>{
    let title = document.getElementById("title");
    let description = document.getElementById("description")
    const note = {
        title:title.value,
        description:description.ariaValueMax,
        date: new Date()
    }
    notes.push(note);
    rendernotes();

}

const rendernotes= () => {
    const crnotes = document.getElementById("creatednotes");
    crnotes.innerHTML=''
    notes.forEach((note,index)=>{
        const li = document.createElement('li');
        li.textContent=note.title;
        // const li2 = document.createElement('li');
        // li2.textContent=note.description;

        const btn = document.createElement('button');
        btn.innerHTML = '<div>delete</div>';
        btn.classname = 'delete-button';
        btn.onclick=()=>deletenote(index);

        li.appendChild(btn);
        crnotes.appendChild(li);
    })
}




const deletenote=(index)=>{
    notes.splice(index,1)
    rendernotes()
}