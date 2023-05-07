'use client';

import Container from "../Container";
import { IoDiamond } from "react-icons/io5";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import { GiBoatFishing, GiCastle, GiCaveEntrance, GiForestCamp, GiForestEntrance, GiIsland } from "react-icons/gi";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { Imprima } from "next/font/google";

export const categories = [
    {
        label: 'Пляж',
        icon: TbBeach,
        description: 'Рядом с пляжем'
    },
    {
        label: 'Дизайн',
        icon: MdOutlineVilla,
        description: 'Дизайнерский объект'
    },
    {
        label: 'Горы',
        icon: TbMountain,
        description: 'Дом в горной местности'
    },
    {
        label: 'Бассейн',
        icon: TbPool,
        description: 'Жилье с бассейном'
    },
    {
        label: 'Остров',
        icon: GiIsland,
        description: 'Жилье на острове'
    },
    {
        label: 'Озеро',
        icon: GiBoatFishing,
        description: 'Рядом с озером'
    },
    {
        label: 'Лыжи',
        icon: FaSkiing,
        description: 'Для катания на лыжах'
    },
    {
        label: 'Кемпинг',
        icon: GiForestCamp,
        description: 'Загородные кемпинги'
    },
    {
        label: 'Снег',
        icon: BsSnow,
        description: 'Жилье там, где снег'
    },
    {
        label: 'Пещера',
        icon: GiCaveEntrance,
        description: 'Жилье в пещере'
    },
    {
        label: 'Люкс',
        icon: IoDiamond,
        description: 'Жилье люкс'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item) => (
                    <CategoryBox key={item.label} label={item.label} selected={category === item.label} icon={item.icon} />
                ))}
            </div>
        </Container>
    );
}

export default Categories;