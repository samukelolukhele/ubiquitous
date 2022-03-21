import React from 'react'
import Card from './Card'
import card1 from '../../images/bar-img.jpeg';
import card2 from '../../images/car-img.jpeg';
import card3 from '../../images/hotel-img.jpeg';

export default function CardsSection({ className }) {
  return (
    <div className='w-screen h-max lg:h-[500px] bg-bg relative ${className}'>
        <div className='wrapper h-full flex flex-col lg:flex-row justify-between'>
            <Card title='Ubiquitous Bar' img={card1}>
            Every party needs an after party, right. Introducing the exclusive <span>Ubiquitous Bar</span> where the party keeps going.
            </Card>
            <Card title='Transport' img={card2}>
            <span>Move around in style</span> with our chauffeuring service included in the VIP ticket bundle. We’ve cooked up a little something extra special for the Royalty bundle
            </Card>
            <Card title='Accomadation' img={card3}>
            <span>Come back to a gorgeous room</span> after a night of partying. For the Royalty bundle you gain a luxury suite room in the critically acclaimed hotel <span>The Four Seasons</span>.
            </Card>
        </div>
    </div>
  )
}
