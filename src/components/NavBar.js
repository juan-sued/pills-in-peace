export default function NavBar() {
    return (
        <footer>
            <button className="chatButton">

                <ion-icon name="chatbubbles"></ion-icon>
                <h3>
                    Chat
                </h3>
            </button>
            <button className="listPillsButton">

                <ion-icon name="medkit"></ion-icon>
                <h3>
                    Meus remédios
                </h3>
            </button>
            <button className="searchMedkitButton">

                <ion-icon name="map"></ion-icon>
                <h3>
                    Localizar Remédios
                </h3>
            </button>
            <button>

                <ion-icon name="thunderstorm"></ion-icon>
                <h3>
                    Clima
                </h3>
            </button>
            <button className="gamesOfBoardButton">

                <ion-icon name="extension-puzzle"></ion-icon>
                <h3>
                    Jogos de Tabuleiro
                </h3>
            </button>
            <button className="videosButton">

                <ion-icon name="logo-whatsapp"></ion-icon>
                <h3>
                    Vídeos do ZapZap
                </h3>
            </button>
            <button className="importantNumbersButtpn">
                <ion-icon name="book"></ion-icon>
                <h3>
                    Números importantes
                </h3>
            </button>

        </footer>
    )
}