import React, { FC } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Utils
import { commaNumber } from '../../../utils/numComma'

// Types
type Props = {
    name: string
    population: number
    region: string
    capital: string[]
    img: string
    cca3: string
}

// Styled Components
import { Card, CountryDetails, CountryInfo, Title, ImageHolder, Detail } from "./cardStyles";

export const CountryCard: FC<Props> = (props) => {

    const { name, population, region, capital, img } = props

    return (
        <Link passHref href={`/country/${name}`}>
            <Card>
                <ImageHolder>
                    <Image placeholder="blur" blurDataURL={img} height={150} width={250} alt={name} src={img} />
                </ImageHolder>
                <CountryInfo>
                    <CountryDetails>
                        <Title> {name.length < 15 ? name : `${name.substring(0,15)}...`} </Title>
                        <Detail> Population: {commaNumber(population)} </Detail>
                        <Detail> Region: {region} </Detail>
                        { capital ? 
                        <Detail> Capital: {capital[0]} </Detail>
                        : <Detail> Capital: N/A </Detail> }
                    </CountryDetails>
                </CountryInfo>
            </Card>
        </Link>
    )

}
