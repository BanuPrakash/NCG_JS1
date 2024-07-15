// ATOM
export default function Search(props) {
    return <input type="text" 
    placeholder="search by name" 
    onChange={evt => props.filterEvt(evt.target.value)}
    />
}