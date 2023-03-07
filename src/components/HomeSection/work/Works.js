import React from 'react'
import Card from './Card'
import Wdata from './wdata'
import "./Works.css"

const Works = () => {
  return (
    <>
        <section className='popular works'>
            <div className='container'>
                <div className='heading'>
                    <hi>How it Works</hi>
                    <div className='line'></div>
                </div>

                <div className='content grid'>
                    {Wdata.map((value, index)=>{
                        return <Card key={value.index} cover={value.cover} title={value.title} desc={value.desc}/>
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Works