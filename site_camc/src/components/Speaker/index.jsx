import avatarExample from '../../assets/avatarExample.jpg'

export function Speaker() {
    return (
        <>
            <div className="grid grid-cols-3 bg-slate-800 h-96 w-30">
                <div className="col-start-1 bg-slate-800">

                    <img
                        src={avatarExample}
                        className="
                                h-96 w-96 rounded-l-lg rounded-tr-lg">
                    </img>
                </div>
                <div className="col-start-2 col-span-3 grid">
                    <div className='grid grid-rows-6'>
                        <div className='row-start-1 bg-gradient-to-r from-white-900 to-slate-800'>
                            <p className="text-lx text-white-950 font-bold pl-4 pt-4">
                                NOME
                            </p>
                        </div>
                        <div className='row-start-2 row-span-6 row-end-6 rounded-tr-lg bg-white'>
                            <p className="text-base text-neutral-950 text-justify pr-8 pl-4 pt-4">No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per
                                la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor,
                                yo vull obeir lo manament que·m fa la altesa vostra. Car yo viu a la sereníssima senyora emperadriu e
                                la excelsa princessa, les II là en taula posades, e sentí un
                                fort e profunde suspir que la senyora emperadriu lançà; pensí que suspirava per aquell que havia parit.
                                En aquell cars, la mia ànima, de pietat sentí dolor inextimable.

                            </p>
                        </div>
                        <div className='row-start-6 bg-sky-800 rounded-br-lg'>
                            <p className='text-lg text-white-950 pl-4 pt-4'>Lattes:
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )


}