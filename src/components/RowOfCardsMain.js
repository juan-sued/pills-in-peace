export default function RowOfCardsMain() {
    return (
        <main>
            <div className="titleCardMain">
                <h2>
                    Resumo
                </h2>
            </div>
            <div className="rowOfCardsMain">

                <div className="cardMain resumoCard">
                    <div className="containerResumoCard">
                        <p> Bom dia, veio!</p>
                        <p> Hoje é 03/05, espero que a melhor terça-feira da sua vida!</p>
                        <p> Você possui 6 pílulas para hoje.</p>
                    </div>


                    <div className="containerResumoCardTime">


                        <ion-icon name="time"></ion-icon>

                        <div className="timerTextNextPill">
                            <p>
                                próxima pílula:
                            </p>
                            <p className="timming">
                                1H e 12 minutos
                            </p>
                        </div>
                        <div className="showNextPills">
                            <ion-icon name="chevron-forward"></ion-icon>
                        </div>

                    </div>
                </div>


                <div className="cardMain">
                </div>
                <div className="cardMain">
                </div>
                <div className="cardMain">
                </div>
                <div className="cardMain">
                </div>
                <div className="cardMain">
                </div>

            </div>
        </main>
    )
}