import React from 'react'
import './App.css'
import Pdf from 'react-to-pdf'

const ref = React.createRef()

const DetailPdf = () => {
    return (
        <div>
            <Pdf targetRef={ref} filename='code-example.pdf'>
                {({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
            </Pdf>
            <div style={{ marginBottom: 10 }}></div>
            <div ref={ref}>
                <div className='detailContainer'>
                    <div className='title'>
                        <div className='left'>Cognito Logo</div>
                        <div className='center'>租賃費用明細表</div>
                        <div className='right'>Cognito Info</div>
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
                                    <tr>
                                        <td>2022/01/02</td>
                                        <td>6</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>2022/01/02</td>
                                        <td>6</td>
                                        <td>30</td>
                                    </tr>
                                    <tr>
                                        <td>2022/01/02</td>
                                        <td>6</td>
                                        <td>30</td>
                                    </tr>
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
