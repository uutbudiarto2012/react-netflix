import { Add, PlayArrow, ThumbDown, ThumbUp, } from '@material-ui/icons'
import { useState } from 'react'
import { DummyMovie, DummyTrailer } from '../../assets'
import './listItem.scss'

export default function ListItem({ index }) {
    const trailer = 'https://www.youtube.com/watch?v=6tRoQ8Hdv5s';

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="listItem"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        >
            <img src={DummyMovie} alt="" />
            {isHovered && (
                <>
                    <video src={DummyTrailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow  className="icon" />
                            <Add className="icon"  />
                            <ThumbUp className="icon"  />
                            <ThumbDown className="icon"  />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel et omnis blanditiis temporibus earum
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}
