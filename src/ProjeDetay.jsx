import { useParams, Link } from "react-router-dom";

const projeler = [
  { isim: "🌐 İlk web sayfam", aciklama: "HTML ve CSS ile yaptığım ilk kişisel sayfam." },
  { isim: "📝 Etkileşimli form", aciklama: "Kullanıcıdan veri alan bir form projesi." },
  { isim: "🎨 3 sayfalık kişisel site", aciklama: "Ana Sayfa, Hakkımda ve Projelerim sayfalarından oluşan, GitHub'da yayında olan ilk büyük projem." },
  { isim: "🎯 Sayı tamnin oyunu", aciklama: "JavaScript ile yaptığım interaktif bir oyun." }
];

function ProjeDetay() {
  const { id } = useParams();
  const proje = projeler[id];

  if (!proje) {
    return <p>Proje bulunamadı.</p>;
  }

  return (
    <div>
      <h1>{proje.isim}</h1>
      <p>{proje.aciklama}</p>
      <Link to="/projelerim">← Projelerime geri dön</Link>
    </div>
  );
}

export default ProjeDetay;