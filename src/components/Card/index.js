import React, { useState } from 'react';
import './card.css'


function Card() {

    const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
    const [cardOwner, setCardOwner] = useState('titular do cartão')
    const [cardMonth, setCardMonth] = useState('00');
    const [cardYear, setCardYear] = useState('00');
    const [cvc, setCvc] = useState('000');

    function submitInfo() {
        
    }

    return (
        <div className='container'>
            <div className='card-container'>
                <div className='card-front-container'>
                    <div className='simbol-card-container'>
                        <span className='simbol-card-yellow'></span>
                        <span className='simbol-card-white'></span>
                    </div>
                    <div className='card-number-container'>
                        <span>{cardNumber}</span>
                    </div>
                    <div className='card-owner'>
                        <span>{cardOwner}</span>
                    </div>
                    <div className='validade'>
                        <span>{cardMonth}/{cardYear}</span>
                    </div>
                </div>
                <div className='card-back-container-border'>
                    <div className='card-back-container'>
                        <div className='card-cvc'>
                            <span>{cvc}</span>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={submitInfo}>
                <label>Número do cartão</label>
                <input onChange={(e) => { setCardNumber(e.target.value) }}
                    className='input-name'
                    type='text' placeholder='e.g. 9999-8888-7777-0000'
                />
                <label>Nome do titular</label>
                <input onChange={(e) => { setCardOwner(e.target.value) }}
                    className='input-owner'
                    type='text' placeholder='e.g. Leonardo B. Silva'
                />
                <div className='second-column'>
                    <div className='validade-container'>
                        <label>Validade (MM/AA)</label>
                        <div className='validade-input-container'>
                            <input onChange={(e) => { setCardMonth(e.target.value) }}
                                className='input-validade input-month'
                                type='text' placeholder='MM'
                                maxLength={2}
                            />
                            <input onChange={(e) => { setCardYear(e.target.value) }}
                                className='input-validade input-year'
                                type='text' placeholder='YY'
                                maxLength={2}
                            />
                        </div>
                    </div>
                    <div className='cvc-container'>
                        <label>CVC</label>
                        <input onChange={(e) => { setCvc(e.target.value) }}
                            className='input-cvc'
                            type='text' placeholder='CVC'
                            maxLength={3}
                        />
                    </div>
                </div>
                <button className='btn-submit' type='submit'>Confirmar</button>
            </form>
        </div>
    )
}

export default Card;