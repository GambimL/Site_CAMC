import fotoavatar from '../../assets/fotoavatar.jpg'

export function Palest() {
    return (
        <>
                <div className="grid grid-cols-3 bg-white flex h-96 w-30">
                    <div className="col-start-1">
 
                            <img
                                src={fotoavatar}
                                className="
                                h-96 w-96 ">
                            </img>
                    </div>
                    <div className="col-start-2 col-span-3">
                        <p className="text-lx text-neutral-950 font-bold py-2 pl-4">
                            NOME
                        </p>
                        <p className="text-base text-neutral-950 text-justify pr-8 pl-4">No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per 
                            la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, 
                            yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e 
                            la excelsa princessa, les II là en taula posades, e sentí un 
                            fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit. 
                            En aquell cars, la mia ànima, de pietat sentí dolor inextimable.</p>
                    </div>

                    
                </div>
        </>
    )


}