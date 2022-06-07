import React, { createRef } from 'react'
import './App.css'
import Pdf from 'react-to-pdf'
import { useReactToPrint } from 'react-to-print'

const PrintAndDownload = () => {
    const ref = createRef()

    const handlePrint = useReactToPrint({
        content: () => ref.current,
    })

    return (
        <div className='app'>
            <Pdf targetRef={ref} filename='code-example.pdf'>
                {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
            </Pdf>
            <button onClick={handlePrint}> Print</button>

            <div ref={ref}>
                <div className='detailContainer'>
                    <div className='title'>
                        <div className='center'>
                            <img
                                src='https://picsum.photos/id/10/120/60'
                                alt=''
                            />
                            <p>HELLO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className='App'>
            <PrintAndDownload />
        </div>
    )
}

export default App
