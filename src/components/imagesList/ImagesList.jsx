import "./imagesList.scss"

export default function ImagesList({thumb, active, setSelected, id}) {
    return (
        <li className={active ? "imagesList active" : "imagesList"} onClick={() => setSelected(id)}>
            <img src={thumb} alt="" />
        </li> 
    )
}
