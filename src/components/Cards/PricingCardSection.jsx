import React from 'react'
import PricingCard from './PricingCard'

export default function PricingCardSection() {
  return (
    <div className='h-max w-screen bg-bg pb-12'>
        <div className='wrapper flex flex-col lg:flex-row justify-between'>
            <PricingCard 
                name='Regular'
                price={87.99}
                benefits={['Festival Pass', 'Ubiquitous Bar Pass']}
                mostPopular={true}
                packageName='regular'
            />
            <PricingCard 
                name='VIP'
                price={239.99}
                benefits={['Festival Pass', 'VIP Ubiquitous Bar Pass', 'Accomadation Included', 'Transport']}
                packageName='vip'
            />
            <PricingCard 
                name='Royalty'
                price={4600.00}
                benefits={['VIP Festival Pass', 'VVIP Ubiquitous Bar Pass', 'Backstage Pass', 'Luxury Transport', 'Luxury Suite at The Four Seasons Hotel']}
                packageName='royalty'
            />
        </div>
    </div>
  )
}
