import { InfoOutlined, PlayCircleFilled } from '@material-ui/icons'
import { DummyMatrix, DummyMovie2 } from '../../assets'
import './featured.scss'

export default function Featured({type}) {
    return (
        <div className="featured">

            {
                type && (
                    <div className="category">
                        <span>{type === "movie" ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option>Genre</option>
                            <option value="commedy">Commedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="romance">Romance</option>
                            <option value="horror">Horror</option>
                            <option value="documentay">Documentay</option>
                        </select>
                    </div>
                )
            }

            <img src={DummyMovie2} alt="" />
            <div className="info">
                <img src={DummyMatrix} alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quas deserunt aliquid ad, quos eum!
                </span>
                <div className="buttons">
                    <button className="play">
                         <PlayCircleFilled />
                         <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>More</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
