import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './home.scss';
import BillboardChart from 'react-billboardjs';
import 'billboard.js/dist/billboard.css';
function Home() {


    const CHART_DATA = {
        columns: [
            ["Dollar", 50],
            ["pound", 110],
        ],
        type: 'pie',
        colors: {
            Dollar: "blue",
            Pound: "red"
        }
    };
    return (
        <>
            <Navbar />
            <h1 className="wow flipInY text-center" data-wow-iteration="1" data-wow-offset="10" >Home</h1>
            <div className='container my-4'>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card" style={{height:'40vh'}}>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='d-flex justify-content-center'>
                            <div className='w-50'>
                                <BillboardChart data={CHART_DATA} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Home;
