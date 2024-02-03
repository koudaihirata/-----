"use client"

import "@/components/ElectoralD/ElectoralD.scss"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Profile from "./Profile/Profile";

type PrefecturesProps = {
    setRegion: (region: string) => void;
};

function Prefectures({setRegion}:PrefecturesProps) {
    return(
        <div>
            <button className="button">北海道・東北</button>
            <button className="button">関東</button>
            <button className="button">北陸・甲信越</button>
            <button className="button">東海</button>
            <button className="button" onClick={() => setRegion('Kansai')}>関西</button>
            <button className="button">四国・中国</button>
            <button className="button">九州・沖縄</button>
        </div>
    )
}


function Kansai({setRegion}:PrefecturesProps) {
    return(
        <div>
            <button onClick={() => setRegion('prefectures')} className="return" >戻る</button>
            <button className="button">京都</button>
            <button onClick={() => setRegion('Osaka')} className="button">大阪</button>
            <button className="button">滋賀</button>
            <button className="button">兵庫</button>
            <button className="button">奈良</button>
            <button className="button">和歌山</button>
            <button className="button">三重</button>
        </div>
    )
}

function Osaka({setRegion}:PrefecturesProps) {
    const profiles = [
        {
            Furigana: "タカギ カオリ",
            name: "高木 かおり",
            Work: "参議院議員",
            age: 49,
            gender: "女",
            job: "現職",
            vote: 862736,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "アサダ ヒトシ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
        },
        {
            Furigana: "マツカワ ルイ",
            name: "松川 るい",
            Work: "参議院議員",
            age: 51,
            gender: "女",
            job: "現職",
            vote: 725243,
        },

    ]

    return(
        <div className="electoralDistrictBox">
            <button onClick={() => setRegion('Kansai')} className="return" >戻る</button>
            {profiles.map((profile, index) => <Profile key={index} {...profile} />)}
        </div>
    )
}

export default function ElectoralD() {
    const [region, setRegion] = useState('prefectures');

    return(
        <>
            <section id="electoralDistrict">
                <h2>選挙区</h2>
                {region === 'prefectures' ? <Prefectures setRegion={setRegion}/> : region === 'Kansai' ? <Kansai setRegion={setRegion}/> : <Osaka setRegion={setRegion}/>}
            </section>
        </>
    )
}
