import './promo.scss';

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__text">
                    <h1 className="promo__title">Panther</h1>
                    <h3 className="promo__subtitle">Action, Drama • 2018 • 2h 35m</h3>
                    <div className="promo__descr">
                        The trailer of "Panther" a Bangla movie starring Jeet and Shraddha Das in the lead role. The movie is directed by Anshuman Pratyush.
                    </div>
                </div>
                <div className="promo__btns">
                    <button className="promo__btn promo__btn-play btn-reset">
                        <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5003 42C33.0704 42 42.4498 32.598 42.4498 21C42.4498 9.40202 33.0704 0 21.5003 0C9.93019 0 0.550781 9.40202 0.550781 21C0.550781 32.598 9.93019 42 21.5003 42Z" fill="#F41B3B"/>
                            <path d="M29.8023 19.5125L18.4546 12.95C17.9309 12.6 17.2326 12.6 16.7088 12.95C16.1851 13.3 15.8359 13.825 15.8359 14.4375V27.475C15.8359 28.0875 16.1851 28.7 16.7088 28.9625C16.9707 29.1375 17.3199 29.225 17.5817 29.225C17.8436 29.225 18.1928 29.1375 18.4546 28.9625L29.715 22.4C30.2388 22.05 30.5879 21.525 30.5879 20.9125C30.5879 20.3 30.326 19.775 29.8023 19.5125Z" fill="white" fillOpacity="0.87"/>
                        </svg>
                        Play Now
                    </button>
                    <button className="promo__btn promo__btn-watch btn-reset">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="3.02734" width="14.4715" height="1.67378" rx="0.836888" fill="white"/>
                            <rect x="0.5" y="7.85156" width="14.4715" height="1.67378" rx="0.836888" fill="white"/>
                            <rect x="0.5" y="12.6758" width="9.64765" height="1.67378" rx="0.836888" fill="white"/>
                            <rect x="12.3164" y="13.4336" width="8.68296" height="1.67378" rx="0.836888" fill="white"/>
                            <rect x="17.5234" y="9.96094" width="8.68296" height="1.67378" rx="0.836888" transform="rotate(90 17.5234 9.96094)" fill="white"/>
                        </svg>
                        watchlist
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Promo;

