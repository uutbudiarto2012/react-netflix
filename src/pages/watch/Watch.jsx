import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { DummyTrailer } from '../../assets'
import './watch.scss'

export default function Watch() {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBack className="iconBack" />
                Back to home
            </div>
            <video src={DummyTrailer} controls autoPlay progress />
        </div>
    )
}
