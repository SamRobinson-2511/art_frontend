

function DeleteVisit(){

    const handleDelete = (e) => {
        fetch(`/visits/${visit.id}`, {
            method: 'DELETE'
        })
        .then(r=>r.json())
        .then(console.log('deleted'))
    }
    
    return(
        <>
            <h2>Delete Visit</h2>
            <button type='submit' onClick={handleDelete}>Delete Visit</button>
        </>
    )
}

export default DeleteVisit