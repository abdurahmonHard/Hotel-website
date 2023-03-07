import React from 'react'
import Tdata from './Tdata'
import Card from './Card'
import "./Testimoial.css"

const AllItem = () => {
  return (
    <>
        <section className='Testimonial mtop'>
            <div className='container grid1'>
                {
                    Tdata.map((value, inde)=>{
                        return <Card key={value.id} {...value}/>
                    })
                }
            </div>
        </section>
    </>
  )
}

export default AllItem