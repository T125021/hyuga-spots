document.addEventListener("DOMContentLoaded", () => {
  const spotImages = [
    { id: "hyugasaki", img: "img/日向岬・馬ヶ背.jpg", alt: "日向岬・馬ケ背" },
    { id: "kurusu", img: "img/願いが叶うクルスの海.jpg", alt: "クルスの海" },
    { id: "ohmi", img: "img/大御神社.jpg", alt: "大御神社" },
    { id: "hososhima", img: "img/細島灯台.jpg", alt: "細島灯台" },
    { id: "station", img: "img/日向市駅.jpg", alt: "日向市駅" },
    { id: "bokusui", img: "img/若山牧水生家.jpg", alt: "若山牧水生家" },
    { id: "mimitsu", img: "img/美々津.jpg", alt: "美々津" },
    { id: "tateiwa", img: "img/立磐神社.jpg", alt: "立磐神社" },
    { id: "okuragahama", img: "img/お倉ヶ浜.jpg", alt: "お倉ヶ浜" },
  ];

  const container = document.getElementById("spotPhotoContainer");

  spotImages.forEach(spot => {
    const item = document.createElement("div");
    item.className = "item";

    const link = document.createElement("a");
    link.href = `spot.html#${spot.id}`;

    const img = document.createElement("img");
    img.src = spot.img;
    img.alt = spot.alt;

    link.appendChild(img);
    item.appendChild(link);
    container.appendChild(item);
  });
});