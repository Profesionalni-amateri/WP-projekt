import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import {useStateValue} from "../context/StateProvider";


export default function Zmajska() {

    const [{beers},] = useStateValue();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const searchWord = "zmajska"
        if (beers != null) {
            const newFilter = beers.filter((item) => {
                return item.naziv.toLowerCase().includes(searchWord.toLowerCase()) || item.pivovara.toLowerCase().includes(searchWord.toLowerCase());
            });

            setFilteredData(newFilter);
        } else {
            setFilteredData([])
        }
    }, [beers])

    return (<>
        <div className='zmajska'>
            <h1 className='nameOfBrewery'>Zmajska pivovara</h1>
            <p className='slogan'>
                "Želimo kuhati pivo kakvo i sami volimo piti!"
            </p>
            <div className='imageAndText'>
                <div className='aboutBrewery'>
                    <h2 className='about'>MALA POVIJEST PIVOVARE</h2>
                    <p className='textBrewery'>
                        Još u davno doba monarhije industrijskih lagera, Andrej je počeo kuhati pivo u vlastitom
                        domu.
                        Tada se teško dolazilo do informacija o kućnom pivarstvu pa je osnovao forum pivarstvo.info
                        gdje su se
                        počeli sakupljati pivski entuzijasti i kućni pivari iz Hrvatske i regije.
                        Nakon više godina isprobavanja raznih receptura u kuhinji, na veselje svojih prijatelja
                        redovitih kušača,
                        svoju strast je odlučio pretvoriti u posao te obogatiti domaću ponudu piva ale stilovima i
                        drugim craft specijalima.
                        Ideju je, svojim financijskim znanjima, a kasnije i suvlasništvom, podržao i prijatelj
                        Hrvoje Čirjak. Kreditom HBOR-a
                        i vlastitim sredstvima financiran je pogon pivovare izrađen od poznatog čakovečkog
                        proizvođača vinarija Letine. Prva piva,
                        Pale ale i Porter, predstavljena su u jesen 2014. i vrlo brzo su prikupila velik broj
                        poklonika.
                    </p>
                    <p className='textBrewery2'>
                        "Naša misija je kuhati pivo sa stavom, i raznolikom ponudom ale stilova izazvati noseve i
                        nepca starih i novih pivoljubaca.
                        Želimo pružiti kvalitetu, prepoznatljivost i, prije svega, užitak u svakom gutljaju. Aktivno
                        promoviramo craft scenu od
                        samih početaka te, u suradnji s kolegama pivarima, gradimo novu kulturu pivskih entuzijasta
                        i istraživača. Radimo ono što
                        volimo i zmajski se u tome trudimo!"
                    </p>
                </div>

                <div className="test">
                    {filteredData.length !== 0 ? (<div className="dataResult">
                        {filteredData.slice(0, 15).map((item, key) => {
                            return (

                                <div
                                    key={key}
                                    className="item-beer2"
                                >
                                    <div>
                                        <motion.div
                                            whileHover={{scale: 1.01}}
                                        >
                                            <img
                                                src={item?.imageUrl}
                                                alt=""
                                                className="beer-image"
                                            />
                                        </motion.div>

                                    </div>

                                    <div className="beers-text">
                                        <p className="beers-name">
                                            {item?.naziv}
                                        </p>
                                        <p className="beers-pivovara">
                                                    <span
                                                    >Pivovara: </span>{item?.pivovara}
                                        </p>
                                        <div>
                                            <p className="beers-price">
                                                {item?.cijena} <span>Kn</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            );
                        })}
                    </div>) : (

                        beers && beers.length > 0 ? (beers.map((item) => (
                            <div
                                key={item?.id}
                                className="item-beer2"
                            >
                                <div>
                                    <motion.div
                                        whileHover={{scale: 1.1}}
                                    >
                                        <img
                                            src={item?.imageUrl}
                                            alt=""
                                            className="beer-image"
                                        />
                                    </motion.div>

                                </div>

                                <div className="beers-text">
                                    <p className="beers-name">
                                        {item?.naziv}
                                    </p>
                                    <p className="beers-pivovara">
                                        <span>Pivovara: </span>{item?.pivovara}
                                    </p>
                                    <div>
                                        <p className="beers-price">
                                            {item?.cijena} <span>Kn</span>
                                        </p>
                                    </div>
                                </div>
                            </div>))) : (<div className='all-items'>
                            <div
                                key={10}
                                className="item-beer2"
                            >
                                <div>
                                    <motion.div
                                        whileHover={{scale: 1.1}}
                                    >
                                        <img
                                            src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                                            alt=""
                                            className="beer-image"
                                        />
                                    </motion.div>

                                </div>

                                <div className="beers-text">
                                    <p className="beers-name">
                                        {'test 1'}
                                    </p>
                                    <p className="beers-pivovara">
                                        <span>Pivovara: </span>{'pivovara'}
                                    </p>
                                    <div>
                                        <p className="beers-price">
                                            {'2'} <span>Kn</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                key={2}
                                className="item-beer2"
                            >
                                <div>
                                    <motion.div
                                        whileHover={{scale: 1.1}}
                                    >
                                        <img
                                            src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                                            alt=""
                                            className="beer-image"
                                        />
                                    </motion.div>

                                </div>

                                <div className="beers-text">
                                    <p className="beers-name">
                                        {'test 2'}
                                    </p>
                                    <p className="beers-pivovara">
                                        <span>Pivovara: </span>{'pivovara'}
                                    </p>
                                    <div>
                                        <p className="beers-price">
                                            {'2'} <span>Kn</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                key={3}
                                className="item-beer2"
                            >
                                <div>
                                    <motion.div
                                        whileHover={{scale: 1.1}}
                                    >
                                        <img
                                            src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                                            alt=""
                                            className="beer-image"
                                        />
                                    </motion.div>

                                </div>

                                <div className="beers-text">
                                    <p className="beers-name">
                                        {'test 3'}
                                    </p>
                                    <p className="beers-pivovara">
                                        <span>Pivovara: </span>{'pivovara'}
                                    </p>
                                    <div>
                                        <p className="beers-price">
                                            {'2'} <span>Kn</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                key={4}
                                className="item-beer2"
                            >
                                <div>
                                    <motion.div
                                        whileHover={{scale: 1.1}}
                                    >
                                        <img
                                            src={'https://shop.stridon.hr/wp-content/uploads/2020/04/Sarajevsko-premium-pivo-05L-02.jpg'}
                                            alt=""
                                            className="beer-image"
                                        />
                                    </motion.div>

                                </div>

                                <div className="beers-text">
                                    <p className="beers-name">
                                        {'test 4'}
                                    </p>
                                    <p className="beers-pivovara">
                                        <span>Pivovara: </span>{'pivovara'}
                                    </p>
                                    <div>
                                        <p className="beers-price">
                                            {'2'} <span>Kn</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    </>);
}