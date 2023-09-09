import { Container, Row, Col } from 'react-bootstrap'
import { BsShop } from 'react-icons/bs'
import React, { useEffect, useState } from "react"
import axios from 'axios'; // Import Axios

const Toko = () => {
    const [dataToko, setDataToko] = useState([]); // State untuk menyimpan data dari server

    useEffect(() => {
        // Lakukan permintaan HTTP GET ke URL eksternal
        axios.get('https://6414-114-5-104-69.ngrok-free.app/tes')
            .then((response) => {
                setDataToko(response.data); // Simpan data yang diterima ke dalam state
                console.log('ini data yang didapat', response.data);
            })
            .catch((error) => {
                console.error('Terjadi kesalahan:', error);
            });
    }, []);

    return (
        <div className="toko">
            <Container>
                <div className="header__toko__content">
                    <BsShop className='ikon__header__toko' size={100} />
                    <h1 className='text-center fw-bold ms-3'>Informasi Toko</h1>
                </div>

                <Row>
                    
                </Row>
            </Container>
        </div>
    )
}

export default Toko;
