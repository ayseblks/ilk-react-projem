import { useNavigate } from "react-router-dom";
import ProjeKarti from "./ProjeKarti";
const projeler = [
  { isim: "🌐 İlk web sayfam", aciklama: "HTML ve CSS ile yaptığım ilk kişisel sayfam." },
  { isim: "📝 Etkileşimli form", aciklama: "Kullanıcıdan veri alan bir form projesi." },
  { isim: "🎨 3 sayfalık kişisel site", aciklama: "Ana Sayfa, Hakkımda ve Projelerim sayfalarından oluşan, GitHub'da yayında olan ilk büyük projem." },
  { isim: "🎯 Sayı tamnin oyunu", aciklama: "JavaScript ile yaptığım interaktif bir oyun." }
];
function Projelerim() {
  const navigate= useNavigate();
  return (
    <div>
      <h1>Projelerim</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {projeler.map(function (proje, index) {
          return (
            <ProjeKarti
              key={index}
              proje={proje}
              onTikla={function () { navigate(`/projelerim/${index}`); }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Projelerim;