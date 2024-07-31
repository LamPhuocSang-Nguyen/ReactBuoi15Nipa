import React from 'react'
import ButtonBtn from '../../components/button/Button'
import { Container } from "reactstrap"
import "./Button.css"
export default function ButtonPage() {
    return (
        <div>
            <Container>
                <div className='btnpage'>
                    <ButtonBtn />
                </div>
            </Container>
        </div>
    )
}
