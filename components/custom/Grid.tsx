import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { gridItems } from '@/data'

type Props = {}

const Grid = (props: Props) => {
    return (
        <section id='about'>
            <BentoGrid>
                {gridItems.map(item => (
                    <BentoGridItem key={item.id} {...item} />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid