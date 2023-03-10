import React from 'react'
import Hero from '../../Components/Hero'
import Card from '../../Components/Card'
import Container from '../../Components/Container'


export default function index() {
  return (
    <>
        <Hero title="MyFitCamp" description="Tools:" imageUrl="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

        <div className='container width-[85%] m-auto '>
            <section className='flex mt-5 mb-5 xs:flex-col md:flex-col sm:flex-col lg:flex-col xl:flex-row '>
                    <Card title="Calorie behoefte calculator ⏱️" description="Calculeer hoeveel calorieen jij moet eten per dag om aan te komen, of af te vallen" btnText="calorieen berekenen" ></Card>
                    <Card title="Voedingsschema Generator 🍲" description="Met de voedingsschema generator krijg jij een schema, en boodschappenlijstje afgesteld op jouw budget, en fitness doel. Jouw fitness doelen behalen is nog nooit zo makkelijk geweest" btnText="voedingsschema maken"></Card>
                    <Card title="Trainingsschema Generator 📝" description="hey" btnText="Trainingsschema maken"></Card>
            </section>
        </div>
    </>
  )
}
