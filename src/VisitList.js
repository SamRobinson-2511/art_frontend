import { useState, useEffect } from 'react'
import VisitCard from './VisitCard'

function VisitList(){
    const [visits, setVisits] = useState([])

    useEffect(() => {
        fetch('/visits')
        .then(r=>r.json())
        .then(visits => setVisits(visits))
      }, [] )

      const visit = visits.map((v)=>{
        return (
            <VisitCard
            id={v.id}
            date={v.date}
            created_at={v.created_at}
        />)
    })
    return(
        <div className='cards'>{visit}</div>
    )
}

export default VisitList