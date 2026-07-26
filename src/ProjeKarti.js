function ProjeKarti({ proje, onTikla}) {
    return (
        <li
        style={{ cursor: "pointer", marginBottom: "10px"}}
        onClick={onTikla}
        >
            {proje.isim}
        </li>
    );
}
export default ProjeKarti;