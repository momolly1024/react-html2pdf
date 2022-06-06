import React, { useRef } from 'react'
import './App.css'
import Pdf from 'react-to-pdf'
import { useReactToPrint } from 'react-to-print'

const detailData = [
    { id: 1, date: '2022/01/01', bed: 5, cost: 30 },
    { id: 2, date: '2022/02/01', bed: 6, cost: 10 },
    { id: 3, date: '2022/02/15', bed: 3, cost: 50 },
    { id: 4, date: '2022/03/01', bed: 7, cost: 30 },
    { id: 5, date: '2022/04/01', bed: 7, cost: 30 },
    { id: 6, date: '2022/05/21', bed: 7, cost: 30 },
]
const DetailPdf = () => {
    const ref = React.createRef()

    const handlePrint = useReactToPrint({
        content: () => ref.current,
    })

    return (
        <div>
            <Pdf targetRef={ref} filename='code-example.pdf'>
                {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
            </Pdf>
            <div style={{ marginBottom: 10 }}></div>
            <div>
                <button onClick={handlePrint}>Print</button>
            </div>
            <div ref={ref}>
                <div className='detailContainer'>
                    <div className='title'>
                        <div className='left'>
                            <img
                                src='https://picsum.photos/id/10/120/60'
                                alt=''
                            />
                        </div>
                        <div className='center'>租賃費用明細表</div>
                        <div className='right'>
                            <img
                                src='https://picsum.photos/id/20/120/60'
                                alt=''
                            />
                        </div>
                    </div>
                    <div>
                        <p className='textNoMargin'>產品名稱OOXX</p>
                        <p className='textNoMargin'>客戶名稱XXOO</p>
                    </div>
                    <div className='date'>
                        <p className='textNoMargin'>出帳日期:2022/01/05</p>
                        <p className='textNoMargin'>
                            列帳日期:2022/01/05~2022/01/05
                        </p>
                    </div>
                    <div>
                        <div className='details'>
                            <p className='textNoMargin'>收費說明</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>日期</th>
                                        <th>床數</th>
                                        <th>小計(元)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {detailData.map((r) => (
                                        <tr key={r.id}>
                                            <td>{r.date}</td>
                                            <td>{r.bed}</td>
                                            <td>{r.cost}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan='3'>總金額(元) : 1234</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div>
                            <p>費用說明:</p>
                            <ol>
                                <li>ooooo</li>
                                <li>ooooo</li>
                            </ol>
                            <p>備註: [ooxx]</p>
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
            <DetailPdf />
        </div>
    )
}

export default App
