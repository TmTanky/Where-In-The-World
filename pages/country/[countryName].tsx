import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";
import { apiURL } from "../../constants/url";
import { Country } from "../../types/interfaces";
import { commaNumber } from "../../utils/numComma";
import * as S from "../../components/country/countryDetails/countryDetails";

const CountryPage = ({
  country,
  bordersCountries,
}: {
  country: Country;
  bordersCountries: Country[];
}) => {
  const {
    borders,
    capital,
    flags,
    languages,
    name,
    population,
    region,
    subregion,
    tld,
    currencies,
  } = country;

  const router = useRouter();

  const goToCountry = (country: Country) => {
    router.push(`/country/${country.name.common}`, undefined, {
      shallow: false,
    });
  };

  return (
    <S.RootBase>
      <Head>
        <title> Country | {name.common} </title>
      </Head>

      <S.BackBase>
        <S.BackBtn onClick={() => router.back()}>
          <IoArrowBackOutline size={20} /> Back
        </S.BackBtn>
      </S.BackBase>

      <S.DetailsBase>
        <S.DetailsImgContainer>
          <Image
            layout="intrinsic"
            placeholder="blur"
            blurDataURL={flags.svg}
            width={450}
            height={350}
            src={flags.svg}
            alt={`${name.common} flag`}
          />
        </S.DetailsImgContainer>

        <S.DetailsBaseInfo>
          <S.TitleTag> {country.name.common} </S.TitleTag>
          <S.DetailsInfo>
            <S.LeftInfo>
              <S.InfoTag>
                <strong> Native Name: </strong> {country.name.official}
              </S.InfoTag>
              <S.InfoTag>
                <strong> Population: </strong> {commaNumber(population)}
              </S.InfoTag>
              <S.InfoTag>
                <strong> Region: </strong> {region}
              </S.InfoTag>
              <S.InfoTag>
                <strong> Sub Region: </strong> {subregion}
              </S.InfoTag>
              {capital ? (
                capital.map((item) => {
                  return (
                    <S.InfoTag key={item}>
                      <strong> Capital: </strong> {item}
                    </S.InfoTag>
                  );
                })
              ) : (
                <S.InfoTag> N/A </S.InfoTag>
              )}
            </S.LeftInfo>
            <S.RightInfo>
              <S.InfoTag>
                <strong> Top Level Domain: </strong>
                {tld ? tld : "N/A"}
              </S.InfoTag>
              <S.InfoTag>
                <strong> Currencies: </strong>
                {currencies ? Object.keys(currencies) : "N/A"}
              </S.InfoTag>
              <S.InfoTag>
                <strong> Languages: </strong>
                {languages ? Object.values(languages).join(", ") : "N/A"}
              </S.InfoTag>
            </S.RightInfo>
          </S.DetailsInfo>
          <S.BorderBase>
            <S.InfoTag>
              <strong> Border Countries: </strong>
            </S.InfoTag>
            <S.BorderCountriesBox>
              {borders && borders.length > 0 ? (
                bordersCountries.map((item) => {
                  return (
                    <S.BorderItem
                      onClick={() => goToCountry(item)}
                      key={item.name.common}
                    >
                      <S.InfoTag> {item.name.common} </S.InfoTag>
                    </S.BorderItem>
                  );
                })
              ) : (
                <S.BorderItem>
                  <S.InfoTag> N/A </S.InfoTag>
                </S.BorderItem>
              )}
            </S.BorderCountriesBox>
          </S.BorderBase>
        </S.DetailsBaseInfo>
      </S.DetailsBase>
    </S.RootBase>
  );
};

export default CountryPage;

export const getStaticPaths = async () => {
  const res = await fetch(`${apiURL}/all`);
  const data = (await res.json()) as Country[];
  const paths = data.map((item) => {
    return { params: { countryName: item.name.common } };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context: {
  params: { countryName: string };
}) => {
  const countryName = context.params.countryName;
  const res = await fetch(
    `${apiURL}/name/${encodeURI(countryName)}?fullText=true`
  );
  const data = await res.json();

  const borders = data[0].borders && [...data[0].borders];
  const borderCountriesRes = await fetch(`${apiURL}/alpha/?codes=${borders},`);
  const bordersCountries = await borderCountriesRes.json();
  return {
    props: {
      country: data[0],
      bordersCountries,
    },
    revalidate: 5,
  };
};
